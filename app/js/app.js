var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        message: 'Hello Vue!',
        seen: true,
        seenColor: "",
        directives: [
            { code: '{{ }}', result: "binding content", placement: "as content" },
            { code: 'v-bind', result: "binding attributes",  placement: "as attribute prefix" },
            { code: 'v-model', result: "binding input, two way", placement: "as input element attribute" },
            { code: 'v-if', result: "binding DOM structure", placement: "as element attribute" },
            { code: 'v-for', result: "binding DOM structure", placement: "as element attribute" },
            { code: 'v-on', result: "binding events", placement: "as event prefix" }
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


