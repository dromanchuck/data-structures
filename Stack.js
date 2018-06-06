let stack = (()=> {

    let weakMap = new WeakMap();
    let count = 0;
    let keys = [];

    class Stack {
        push(value) {
            keys.push({value: count});
            weakMap.set(keys[count], value);
            count++;
        }

        pop() {
            weakMap.delete(keys[count-1]);
            keys.pop();
            count--
        }

        peek() {
            return weakMap.get(keys[count-1]);
        }

        count() {
            return count;
        }

        clear() {
            weakMap = new WeakMap();
            count = 0;
        }

    }
    return new Stack();
})();