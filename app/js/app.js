var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        message: 'Hello Vue!',
        seen: true,
        seenColor: "",
        directives: [
            { code: '{{ property }}', result: "binding content to app state", placement: "as content" },
            { code: 'v-bind:attribute="property"', result: "binding attributes to app state",  placement: "as prefix for attribute" },
            { code: 'v-model="property"', result: "binding input to app state, two way", placement: "as custom attribute for input element" },
            { code: 'v-if="property"', result: "binding DOM structure to app state", placement: "as custom attribute for element" },
            { code: 'v-for="property enumeration"', result: "binding DOM structure to app state", placement: "as custom attribute for element" },
            { code: 'v-on:event="method"', result: "binding events to app methods", placement: "as custom event for element" }
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


