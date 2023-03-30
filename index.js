//Collection function implementations
//iterateOutput is a pure function that helps return a new array from an object from either an array or an object
//It essentially provides a shorthand for converting a collection's values into an array

function iterateCollection(collection) {
  const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
  return values;
  };


//writing collection functions
function myEach(collection, alert) {
  const newCollection = iterateCollection(collection)
  for (let i=0; i < newCollection.length;i++) {
    alert(newCollection[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const mapNewCollection = iterateCollection(collection)
  const newArray = []
  for(let i = 0; i < mapNewCollection.length;i++) {
    newArray.push(callback(mapNewCollection[i]))
  }
  return newArray;
}


function myReduce(collection, callback, acc) {
  let reduceNewCollection = iterateCollection(collection);
  let start = acc === undefined ? reduceNewCollection.shift() : acc
  reduceNewCollection.forEach((value, index) => {
    start = callback(start, value, collection);
  });
  return start
}

function myFind(collection, predicate) {
  const findNewCollection = iterateCollection(collection);
  for (let i = 0; i < findNewCollection.length; i++) {
    if (predicate(findNewCollection[i])) {
      return findNewCollection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const filterNewCollection = iterateCollection(collection);
  const filterArr = [];
  for(let i = 0; i < filterNewCollection.length; i++) {
    if(predicate(filterNewCollection[i])) filterArr.push(filterNewCollection[i])
  }
  return filterArr;
}

function mySize(collection) {
  const sizeNewCollection = iterateCollection(collection)
  return sizeNewCollection.length; 
}

//Array Functions

function myFirst(array, n) {
 return array[n] ? array.slice(0,n): array[0]
}

function myLast(array, n) {
  return (n === undefined) ? array[array.length - 1] : array.slice(-n)
}


//Object functions
function myKeys(object) {
  // Create an empty array to store the keys
  const keys = [];

  // Loop through the object's enumerable properties and push their names into the array
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  // Return the array of keys
  return keys;
}


function myValues(object) {
  const values = [];
  for(let value  in object) {
    values.push(object[value])
  }
  return values
}