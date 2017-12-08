var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        message: 'Hello Vue.js!',
        seen: true,
        directives: [
            { code: '{{ }}', text: "binding content (text interpolation)" },
            { code: 'v-bind', text: "binding element attributes" },
            { code: 'v-model', text: "binding input elements (two way)" },
            { code: 'v-if', text: "binding DOM structure" },
            { code: 'v-for', text: "binding DOM structure (iterative)" }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        toggleVisibility: function () {
            this.seen = $("#toggle-visibility").is(':checked');
        }
    }
})


