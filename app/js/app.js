var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        message: 'Hello Vue!',
        seen: true,
        seenColor: "",
        directives: [
            { code: '{{ }}', text: "binding content" },
            { code: 'v-bind', text: "binding attributes" },
            { code: 'v-model', text: "binding input (two way)" },
            { code: 'v-if', text: "binding DOM structure" },
            { code: 'v-for', text: "binding DOM structure" }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        toggleVisibility: function () {
            this.seen = $("#toggle-visibility").is(':checked');
            this.seenColor = this.seen ? "" : "grey-text text-lighten-1";
        }
    }
})


