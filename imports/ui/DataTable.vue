<template>
<table>
<tr>
  <th scope="col">Name</th>
  <th scope="col">Quest</th>
  <th scope="col">Favorite color</th>
  <th scope="col">Unladen swallow velocity</th>
</tr>

<tr v-for="item in items">
  <th scope="row">{{item.name}}</th>
  <td>{{item.quest}}</td>
  <td>{{item.favoriteColor}}</td>
  <td>{{item.unladenSwallowVelocity}}</td>
</tr>
</table>
</template>

<script>
export default {
  props: { 'items': Array }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
