class Stack {

    push(value) {
        let temp = this.next;
        this.next = {
          value: this.value,
          next: temp
        };
        this.value = value;
    }
    pop() {
        let temp = this.next;
        this.value = temp.value;
        this.next = temp.next;
    }

}