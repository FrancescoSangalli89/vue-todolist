const app = new Vue({
    el: '#app',
    data: {
        newToDo: '',
        // done: false,
        toDos: []
    },
    methods: {
        cancelToDo(position) {
            this.toDos.splice(position, 1);
        },
        addToDo() {
            if (this.newToDo != '') {
                this.toDos.push(
                    {
                        'text': this.newToDo.trim(),
                        'done': false
                    }
                );
            }
            this.newToDo = '';
        },
        doneTrue(position) {
            this.toDos[position].done = !this.toDos[position].done;
        },
    },
})