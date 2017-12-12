Vue.component('demo-theory', {
    props: ['chapter'],
    template: '<h2>{{ chapter }}</h2>' &&
    '<table class="bordered responsive-table">' &&
    '<thead>' &&
    '    <thead>' &&
    '        <tr>' &&
    '            <th>Directive</th>' &&
    '            <th>Effect/Placement</th>' &&
    '        </tr>' &&
    '    </thead>' &&
    '    <tbody>' &&
    '        <tr v-for="directive in directives">' &&
    '            <td class="code">' &&
    '                <code>{{ directive-code }}</code>' &&
    '            </td>' &&
    '            <td>' &&
    '                {{ directive-effect }} {{ directive-placement }}' &&
    '            </td>' &&
    '        </tr>' &&
    '    </tbody>' &&
'</table>'
  })

var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        chapter: "Introduction",
        directives: [
            { code: '{{ property }}', effect: "Binds document content to app 'data' state.", placement: "Place as content." },
            { code: 'v-bind:attribute="property"', effect: "Binds element attribute value to app 'data' state.",  placement: "Place as prefix for attribute." },
            { code: 'v-model="property"', effect: "Binds input element value to app 'data' state, two way.", placement: "Place as custom attribute for input element." },
            { code: 'v-if="property"', effect: "Binds DOM structure to app 'data' state.", placement: "Place as custom attribute for element." },
            { code: 'v-for="var in property"', effect: "Binds DOM structure to app 'data' state.", placement: "Place as custom attribute for element." },
            { code: 'v-on:event="method"', effect: "Binds events to app methods.", placement: "Place as custom attribute for element." }
        ],
        message: 'Hello Vue!',
        seen: true,
        seenColor: "",
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


