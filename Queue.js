class Queue {

    add(value) {
        if(!this.value) {
            this.value = value;
            this.next = {value: {}, next: {}};
        } else {
            if(!this.temp) {
                this.next = {
                    value: value,
                    next: {value: {}, next: {}}
                };
                this.temp = this.next.next;
            } else {
                this.temp.value = value;
                this.temp.next = {};
                this.temp = this.temp.next;
            }
        }
    }

    remove() {
        this.value = this.next.value;
        this.next = this.next.next;
    }

}