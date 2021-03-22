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

// this hashes the key for us so that we get a specific index everytime this exact key is entered
// function hash(key) {
//     // fancy syntax but all we are doing is turning the key into a number that indicates the index that the value will be stored at 
//     return Array.from(key).reduce(
//       (accum, char) => accum + char.charCodeAt(),
//       0
//     );
//   }
// function hash(key, arrayLen) {
//   // fancy syntax but all we are doing is turning the key into a number that indicates the index that the value will be stored at 
//   hashed =  Array.from(key).reduce(
//     (accum, char) => accum + char.charCodeAt(),
//     0
//   );
//   return hashed % arrayLen;
// }

// using Horners Method now 

function hash(key,array_len){
  const H_prime = 37;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_prime + char.charCodeAt(),
    0
  );
  return numKey % array_len;
};
// create a class for the hashmap which is going to be our array where we are storing values
class HashMap {
    constructor(){
        this._items = [];
    }
    // this set method uses our hash function to hash the key and set the value in our empty array for an instance of this hash map 
    set(k,v){
        const hashedKey = hash(k, 10);
        this._items[hashedKey] = v;
    }
    // allows us to get the valye back also using the hashed key so we can access the value with the index when we ask for a key all we have to do is hash that key and access the array at that index
    get(k){
      const hashedKey = hash(k);
      return this._items[hashedKey];
    }
}