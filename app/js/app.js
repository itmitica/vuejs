var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        message: 'Hello Vue!',
        seen: true,
        seenColor: "",
        directives: [
            { code: '{{ property }}', effect: "Binds document content to app 'data' state", placement: "Place as content" },
            { code: 'v-bind:attribute="property"', effect: "Binds element attribute value to app 'data' state",  placement: "Place as prefix for attribute" },
            { code: 'v-model="property"', effect: "Binds input element value to app 'data' state, two way", placement: "Place as custom attribute for input element" },
            { code: 'v-if="property"', effect: "Binds DOM structure to app 'data' state", placement: "Place as custom attribute for element" },
            { code: 'v-for="var in property"', effect: "Binds DOM structure to app 'data' state", placement: "Place as custom attribute for element" },
            { code: 'v-on:event="method"', effect: "Binds events to app methods", placement: "Place as custom event for element" }
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


