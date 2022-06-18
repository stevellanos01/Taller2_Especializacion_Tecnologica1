<template>
  <div>
    <div class="container">
      <h1>GATO GAME</h1>
      <h2 class="estado">
        <span v-if="resultado" class="resultado">
          Resultado:
          {{ resultado }}
        </span>
        <span v-else> Turno: {{ turno }}</span>
      </h2>
      <div v-for="(row, n) in tablero" :key="n" class="row">
        <div v-for="(box, m) in row" :key="m">
          <cell
            :valor="box"
            :posicionX="n"
            :posicionY="m"
            :turno="current"
            @hit="record"
          />
        </div>
      </div>
      <button @click="limpiar">
        <h3>Limpiar</h3>
      </button>
      <!--<scoreboard :score="score" /> -->
        <scoreboard/>
    </div>
  </div>
</template>

<script>
import cell from "./Cell.vue";
import scoreboard from "./Scoreboard.vue";

import { useScoreGame}  from '../stores/counter';
//const scoreGame = useScoreGame();

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
      //score: { O: 0, X: 0 },
    };
  },
  methods: {
    record(posicion) {
      if (!!this.resultado || this.tablero[posicion[0]][posicion[1]] !== "")
        return;
      this.tablero[posicion[0]][posicion[1]] = this.turno;
      this.evaluar();
      this.toggle();
    },
    toggle() {
      this.current = !this.current;
    },
    check() {
      // comprobar horizontal y vertical
      for (let i = 0; i < 3; i++)
        if (
          (this.tablero[i][1] !== "" &&
            this.tablero[i][0] === this.tablero[i][1] &&
            this.tablero[i][1] === this.tablero[i][2]) ||
          (this.tablero[1][i] !== "" &&
            this.tablero[0][i] === this.tablero[1][i] &&
            this.tablero[1][i] === this.tablero[2][i])
        )
          return true;
      return false;
    },
    checkDiagonal() {
      // comprobar celdas en diagonales
      if (
        (this.tablero[1][1] !== "" &&
          this.tablero[0][0] === this.tablero[1][1] &&
          this.tablero[1][1] === this.tablero[2][2]) ||
        (this.tablero[1][1] !== "" &&
          this.tablero[2][0] === this.tablero[1][1] &&
          this.tablero[1][1] === this.tablero[0][2])
      )
        return true;
      return false;
    },
    evaluar() {
      // Aquí viene la lógica principal del juego

      let empate = true; // inicialmente empate será cierto
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
          if (this.tablero[i][j] === "") {
            empate = false; // si alguna celda está en blanco, no hay empate
            break;
          }
        if (!empate) break;
      }
      if (this.check() || this.checkDiagonal()) {
        this.win = this.turno;
        useScoreGame().incrementScore(this.win);
        //this.score[this.turno]++;
        return;
      }
      if (empate) this.win = "E";
    },
    limpiar() {
      this.tablero = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.win = "";
    },
  },
  components: {
    cell,
    scoreboard,
  },
  computed: {
    turno() {
      return this.current ? "O" : "X";
    },
    resultado() {
      return this.win !== ""
        ? ["X", "O"].includes(this.win)
          ? `${this.win} Win`
          : "Empate"
        : false;
    },
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
button {
  margin-top: 15px;
  padding: 3px 25px 3px 25px;
  color: red;
  background-color: rgb(28, 31, 46);
  font-size: 1.5em;
  outline: none;
  border-radius: 5px;
  border: 0px solid white;
  cursor: pointer;
  animation: border 3s ease-in-out;
}
button:active {
  border: 1px solid white;
}
</style>
