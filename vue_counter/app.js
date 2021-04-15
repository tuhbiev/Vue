const App = {
    data() {
        return {
            counter: 0,
            appTitle: 'Счетчик'
        }
    }
}


Vue.createApp(App).mount('#app')