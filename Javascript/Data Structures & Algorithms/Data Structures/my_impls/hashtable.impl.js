/**
 *  1. Length of the table (size)
 *  2. Fn to set key-value pairs
 *  3. Fn to get items by key (retrieve)
 *  4. Fn to get all keys
 */

class HashTable {
  constructor(size) {
    this.size = size;
    this.data = new Array(this.size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    if (this.data[hash][key]) {
      console.log("DUPICATE KEY::: ", key);
      return;
    }
    this.data[hash][key] = value;
    console.log(this.data);
    return this.data;
  }

  get(key) {
    const hash = this._hash(key);
    const bucket = this.data[hash];
    if (!bucket || !bucket[key]) {
      console.log("NOT FOUND");
      return undefined;
    }
    let val = bucket[key];
    console.log("FOUND:: ", val);
    return val;
  }
}

const myHashSet = new HashTable(5);

myHashSet.set("grapes", 50);
myHashSet.set("grapes", 10);
myHashSet.set("apples", 10);
myHashSet.set("Oranges", 7);
myHashSet.set("Mango", 5);

myHashSet.get("apples");
myHashSet.get("grapes");
myHashSet.get("Oranges");
myHashSet.get("Mango");
