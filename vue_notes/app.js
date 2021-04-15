const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            appTitle: 'Список заметок',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
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
    },
    computed: {

    },
    watch: {
        inputValue(value) {
            if (value.length > 50)
                this.inputValue = ''
        }
    }
}


Vue.createApp(App).mount('#app')