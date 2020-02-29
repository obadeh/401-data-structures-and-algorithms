'use strict';

const { HashTable, LinkedList } = require('../hashtable/hashtable.js');

describe('Hash Table test', () => {
 
  describe('hash(key)', () => {
    test('Should successfully hash a key to an in range value', () => {
      // arrange
      let expectedHash = 3;
      let key = 'cat';
      let hashtable = new HashTable(5);

      // act
      let result = hashtable.hash(key);

      // assert
      expect(result).toBe(expectedHash);
    });


  });

  describe('add(key, value)', () => {
    test('Should add the key value pair to the hashtable', () => {
      // arrange
      let key = 'baz';
      let value = 'bar';
      let hashtable = new HashTable(5);

      //act
      hashtable.add(key, value);
      let result = hashtable.hash(key);

      //assert
      expect(hashtable.buckets[result].head.value[1]).toBe('bar');
    });

    test('Should be able to handle a collision', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('key', 'value');
      hashtable.add('yek', 'anotherValue');

      let result = hashtable.hash('key');

      // assert
      expect(hashtable.buckets[result].head.value[1]).toBe('value');
      expect(hashtable.buckets[result].head.next.value[1]).toBe('anotherValue');
    });
  });

  describe('get(key)', () => {
    test('Given a key, should return the value', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('foo', 'bar');
      hashtable.add('key', 'value');

      // assert
      expect(hashtable.get('foo')).toBe('bar');
    });

  
  });

  describe('contains(key)', () => {
    test('Should return true if the key exists', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('key', 'value');

      // assert
      expect(hashtable.contains('key')).toBeTruthy();
    });

  });
});

