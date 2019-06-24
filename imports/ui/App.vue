<template>
<div class="app">
  <h1>Exemple avec Vue 2.x</h1>
  <p>
    Vous avez pressé le bouton {{count}} fois.
  </p>
  <button @click="addOne">{{ buttonLabel }}</button>

  <data-table :items="knights"></data-table>
  <button @click="addSomeKnights">Moar knights!</button>
</div>
</template>

<script>
import DataTable from './DataTable.vue'
import { Knights } from '/imports/api/knights'

const testData = [
  {name: "Lancelot", quest: "To seek the Holy Grail", favoriteColor: "blue"},
  {name: "Arthur", quest: "To seek the Holy Grail", favoriteColor: "green"},
  {name: "Galahad", quest: "To seek the Holy Grail", unladenSwallowVelocity: 0}
]


export default {
  data() {
    return {
      count: 0,
      buttonLabel: 'Cliquez-moi !'
    }
  },
  methods: {
    addOne() { this.count++ },
    addSomeKnights() {
      for (let k of testData) {
        Knights.insert(k)
      }
    }
  },
  components: { DataTable },
  //  https://github.com/meteor-vue/vue-meteor-tracker#reactive-data
  meteor: {
    knights: () => Knights.find({}).fetch()
  }
};
</Script>

<style>
body {
  margin: 30px;
}

a {
  color: #40b883;
  text-decoration: none;
}

h1, h2 {
  font-weight: normal;
}
</style>
