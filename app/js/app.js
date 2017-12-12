Vue.component('demo-chapter', {
    props: ['chapter'],
    template: '<h2>{{ chapter }}</h2>'
  })

  Vue.component('demo-row', {
    props: ['directive'],
    template: '<tr><td class="code"><code>{{ directive.code }}</code></td><td>{{ directive.effect }} {{ directive.placement }}</td></tr>'
  })

  Vue.component('demo-table', {
    props: ['directives'],
    template: '<table class="bordered responsive-table"><thead><thead><tr><th>Directive</th><th>Effect/Placement</th></tr></thead><tbody><demo-row v-for="directive in directives" v-bind:directive="directive" v-bind:key="directive.id"></demo-row></tbody></table>'
  })

var demoIntro = new Vue({
    el: '#demo-intro',
    data: {
        chapter: "Introduction",
        directives: [
            { id:'0', code: '{{ property }}', effect: "Binds document content to app 'data' state.", placement: "Place as content." },
            { id:'1', code: 'v-bind:attribute="property"', effect: "Binds element attribute value to app 'data' state.",  placement: "Place as prefix for attribute." },
            { id:'2', code: 'v-model="property"', effect: "Binds input element value to app 'data' state, two way.", placement: "Place as custom attribute for input element." },
            { id:'3', code: 'v-if="property"', effect: "Binds DOM structure to app 'data' state.", placement: "Place as custom attribute for element." },
            { id:'5', code: 'v-for="var in property"', effect: "Binds DOM structure to app 'data' state.", placement: "Place as custom attribute for element." },
            { id:'5', code: 'v-on:event="method"', effect: "Binds events to app methods.", placement: "Place as custom attribute for element." },
            { id:'6', code: 'Vue.component', effect: "Binds templates to app.", placement: "Place as Vue instance for app, with pre-defined options." },
            { id:'7', code: '<custom-component>', effect: "Binds custom components to app 'data' state, through 'Vue.component' instances.", placement: "Place as custom element for document, along 'v-bind's for app 'data' state." }
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


