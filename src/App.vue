<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DateTimePicker></DateTimePicker>
  </div>
</template>

<script>
import DateTimePicker from '@/components/DateTimePicker.vue'

export default {
  name: "app",
  components: {
    DateTimePicker
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
