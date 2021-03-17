// class SimpleMap {
//     constructor() { this._items = []; }
  
//     set(k, v) { this._items.push([k, v]); }
  
//     get(k) {
//       let kv = this._items.find(kv => k === kv[0]);
//       return kv ? kv[1] : undefined;
//     }
  
//     has(k) {
//       return this._items.find(kv => k === kv[0]) !== undefined;
//     }
  
//     delete(k) {
//       let i = this._items.findIndex(kv => k === kv[0]);
//       if (i !== -1)  this._items.splice(i, 1);
//     }
  
//     keys()    { return this._items.map(kv => kv[0]); }
//     values()  { return this._items.map(kv => kv[1]); }
//     entries() { return this._items; }
//   }

function hash(key) {
    return Array.from(key).reduce(
      (accum, char) => accum + char.charCodeAt(),
      0
    );
  }

class HashMap {
    constructor(){
        this._items = [];
    }
    set(k,v){
        const hashedK = hash(k);
        this._items[hashedK] = v;
    }
}