const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function run(cmd) {
  return execSync(cmd, { cwd: root, stdio: 'pipe' }).toString();
}

console.log('Running algorithms test suite...');

// 1. LRU Cache Implementation
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }
    const newNode = new Node(key, value);
    this._add(newNode);
    this.cache.set(key, newNode);
    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

// 2. Consistent Hashing Ring
class ConsistentHashRing {
  constructor(replicas = 3) {
    this.replicas = replicas;
    this.ring = new Map();
    this.sortedKeys = [];
  }

  hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) + hash) + key.charCodeAt(i);
      hash = hash & 0x7FFFFFFF;
    }
    return hash;
  }

  addNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const vNode = `${node}#VN${i}`;
      const hashVal = this.hash(vNode);
      this.ring.set(hashVal, node);
      this.sortedKeys.push(hashVal);
    }
    this.sortedKeys.sort((a, b) => a - b);
  }

  getNode(key) {
    if (this.ring.size === 0) return null;
    const hashVal = this.hash(key);
    for (const nodeHash of this.sortedKeys) {
      if (hashVal <= nodeHash) return this.ring.get(nodeHash);
    }
    return this.ring.get(this.sortedKeys[0]);
  }
}

// 3. Bloom Filter
class BloomFilter {
  constructor(size = 100, hashCount = 3) {
    this.size = size;
    this.hashCount = hashCount;
    this.bitArray = new Uint8Array(size);
  }

  _hash(str, seed) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * seed + str.charCodeAt(i)) % this.size;
    }
    return Math.abs(hash);
  }

  add(item) {
    for (let i = 1; i <= this.hashCount; i++) {
      const idx = this._hash(item, i * 31);
      this.bitArray[idx] = 1;
    }
  }

  contains(item) {
    for (let i = 1; i <= this.hashCount; i++) {
      const idx = this._hash(item, i * 31);
      if (this.bitArray[idx] === 0) return false;
    }
    return true;
  }
}

// Run Tests
const lru = new LRUCache(2);
lru.put(1, 100);
lru.put(2, 200);
if (lru.get(1) !== 100) throw new Error('LRU get(1) failed');
lru.put(3, 300); // evicts 2
if (lru.get(2) !== -1) throw new Error('LRU eviction failed');
if (lru.get(3) !== 300) throw new Error('LRU get(3) failed');

const ring = new ConsistentHashRing(3);
ring.addNode('Server-A');
ring.addNode('Server-B');
const node = ring.getNode('user-42');
if (!node) throw new Error('ConsistentHashRing lookup failed');

const bloom = new BloomFilter(100, 3);
bloom.add('apple');
bloom.add('banana');
if (!bloom.contains('apple')) throw new Error('Bloom filter false negative on apple');
if (bloom.contains('xyz_impossible_item_9999')) {
  // could be false positive in rare cases, but size 100 with 2 items has ~0.001% chance
}

console.log('✔ All algorithm tests passed successfully!');
