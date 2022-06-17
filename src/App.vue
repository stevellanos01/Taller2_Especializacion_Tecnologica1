<template>
  <div class="app">
    <dashboard />
  </div>
</template>

<script>
import dashboard from './components/Dashboard.vue';

export default {
  name: "App",
  components: {
    dashboard,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
* {
  
  margin: 0;
  padding: 0;
}
.app {
  font-family: 'Black Ops One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 10px;
}
::-webkit-scrollbar {
  width: 3px;
  background: black;
}
::-webkit-scrollbar-thumb {
  background-color: black;
}
</style>