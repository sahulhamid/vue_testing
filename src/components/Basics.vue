<template>
  <h1>this is vuex basics</h1>
  <h1>{{name}}</h1>
  <div v-for="todo in getTodos" :key="todo.id">
      <p>{{todo.title}}</p>
  </div>
  <button v-on:click="changer">change name</button>
</template>

<script src="./basics.js">


</script>

<style>

</style>