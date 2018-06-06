let queue = (() => {
    let weakMap = new WeakMap();
    let count = 0;
    let keys = [];

    class Queue {

        enqueue(value) {
            keys.push({value: count});
            weakMap.set(keys[count], value);
            count++;
        }

        dequeue() {
            weakMap.delete(keys[0]);
            keys.shift();
            count--;
        }

        count() {
            return count;
        }

        clear() {
            weakMap = new WeakMap();
            count = 0;
        }
        peek() {
            return weakMap.get(keys[0]);
        }

    }
    return new Queue();
})();


