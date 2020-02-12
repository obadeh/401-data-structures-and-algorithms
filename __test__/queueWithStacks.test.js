const PseudoQueue = require('../queueWithStacks/queue-with-stacks');

const queue = new PseudoQueue();

describe('Using stacks to imitate a queue', () => {
  test('enqueue(value) which inserts , using a first-in, first-out approach.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([3, 2, 1]);
  });
  test('dequeue extracts a value , using a first-in, first-out approach.', () => {
    queue.dequeue();
    expect(queue.stack1).toEqual([3, 2]);
  });
});