const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.current = this.queue;
  }

  get size() {
    return this.current.length;
  }

  enqueue(element) {
    this.current.value = element;
    this.current.next = new ListNode();
    this.current = this.current.next;
  }

  dequeue() {
    const result = this.queue.value;
    this.queue = this.queue.next;
    return result;
  }
}

module.exports = Queue;
