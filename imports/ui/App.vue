<template>
<div class="app">
  <h1>Exemple avec Vue 2.x</h1>
  <p>
    Vous avez pressé le bouton {{count}} fois.
  </p>
  <button @click="addOne">{{ buttonLabel }}</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      buttonLabel: 'Cliquez-moi !',
    }
  },
  methods: {
    addOne() { this.count++ }
  }
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
