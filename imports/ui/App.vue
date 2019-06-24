<template>
<div class="app">
  <h1>Exemple avec Vue 2.x</h1>
  <p>
    Vous avez pressé le bouton {{count}} fois.
  </p>
  <button @click="addOne">{{ buttonLabel }}</button>

  <data-table :items="testData"></data-table>
</div>
</template>

<script>
import DataTable from './DataTable.vue'

export default {
  data() {
    return {
      count: 0,
      buttonLabel: 'Cliquez-moi !',
      testData: [
        {name: "Lancelot", quest: "To seek the Holy Grail", favoriteColor: "blue"},
        {name: "Arthur", quest: "To seek the Holy Grail", favoriteColor: "green"},
        {name: "Galahad", quest: "To seek the Holy Grail", unladenSwallowVelocity: 0}
      ]
    }
  },
  methods: {
    addOne() { this.count++ }
  },
  components: { DataTable }
};
</script>

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
