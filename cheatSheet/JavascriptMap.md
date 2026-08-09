# JS Data Structures

## Map
### Create Map
```
var map = new Map();
```
### Check if key exists
```
map.has(key);
```
### Get
#### Get specific entry 
```
map.get(key)
```
#### Get iterator over all keys 
```
map.keys()
```
#### Get iterator over all values 
```
map.values()
```
### Set
```
map.set(key, value);
```
### Delete
```
map.delete(key);
```
### Map Length
```
const size = map.size
```
### Loop
Note: In the args list of forEach, value is 1st param and key is 2nd param.
```
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach((value, key) => {
  console.log(`Key ${key}, value ${value}`);
});
```
### Get Map Entries
Returns ```[[key1, value1], [key2, value2], ...]```
```
map.entries();
```
### Sort by values
```
const mapEntries = map.entries();
const mapEntriesArr = [...mapEntries];
const sortedMapEntriesArr = mapEntriesArr.sort((a, b) => {
    return b[1] < a[1] ? 1 : (b[1] > a[1] ? -1 : 0); // Ascending Sort
    // return b[1] > a[1] ? 1 : (b[1] < a[1] ? -1 : 0); // Descending Sort
});
```
