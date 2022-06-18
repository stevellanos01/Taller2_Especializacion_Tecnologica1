<template>
  <div>
    <div class="container">
      <h1>GATO GAME</h1>
      <h2 class="estado">
        <span  class="resultado">
          Resultado:
        </span>
        <span > Turno:</span>
      </h2>
      <div v-for="(row, n) in tablero" :key="n" class="row">
        <div v-for="(box, m) in row" :key="m">
          <cell/>
        </div>
      </div>
      <button>
        <h3>Limpiar</h3>
      </button>
    </div>
  </div>
</template>

<script>
import cell from "./Cell.vue";

export default {
  name: "juego",
  data() {
    // datos iniciales
    return {
      tablero: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      current: true,
      win: "",
      score: { O: 0, X: 0 },
    };
  },
  methods: {

  },
  components: {
    cell
  },
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template:
    "a a a"
    "b b b"
    "c c c";
  gap: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 3em;
}
.container {
  max-width: 400px;
  margin: auto;
}
.estado {
  color: black;
  font-size: 1.7em;
}
.resultado {
  color: red;
}
</style>
