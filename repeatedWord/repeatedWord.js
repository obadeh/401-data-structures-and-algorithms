

let HashTable = require('../hashtable/hashtable');

let repeatedWord = (str) => {
  if(typeof str !== 'string'){return 'not string';}
  let words = str.toLowerCase().split(' ');

  let hashTable = new HashTable.HashTable(5);

  for (let i = 0; i < words.length; i++) {
    let isUsed = hashTable.add(words[i].replace(/\W+/g, ''), words[i]);

    if (isUsed === 'Key already being used') {
      return words[i];
    }
  }

  return 'No duplicates';
};




module.exports = repeatedWord;