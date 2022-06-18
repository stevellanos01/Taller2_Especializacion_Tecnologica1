<template>
  <div v-on:click="clicked">
    {{ valor }}
  </div>
</template>

<script>
export default {
  name: "celda",
  props: ["valor", "posicionX", "posicionY"],
  methods: {
    clicked() {
      this.$emit("hit", [this.posicionX, this.posicionY]);
    },
  },
};
</script>

<style scoped>
div {
  padding: 5px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  font-size: 80px;
  cursor: pointer;
  animation: border-color 0.5s ease-in-out;
}
div:active {
  border-color: red;
}
</style>
