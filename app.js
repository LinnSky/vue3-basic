const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            age: '23',
            showBooks: true
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },

        toggleShowBooks() {
            this.showBooks= !this.showBooks
        },

        handleEvent() {
            console.log('event')
        }
    }
})

app.mount('#app')