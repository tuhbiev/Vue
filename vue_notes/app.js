const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            appTitle: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1'],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    }
}


Vue.createApp(App).mount('#app')