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
### Get Value
```
map.get(key)
```
### Set Value
```
map.set(key, value);
```
### Map Size (Length / no of entries)
```
const size = map.size
```
### Get Map Entries
```
map.entries()
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
