import Vue from "vue"
import App from '/imports/ui/App.vue'
import "./main.html"

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#pourvue');
});
