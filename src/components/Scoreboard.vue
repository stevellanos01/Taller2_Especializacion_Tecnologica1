<template>
  <div>
    <h3><u>Puntuación</u></h3>
    <table>
      <tr>
        <th>O</th>
        <th>X</th>
      </tr>
      <tr>
        <td>{{ scoreGame.userO }}</td>
        <td>{{ scoreGame.userX }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useScoreGame}  from '../stores/counter';
const scoreGame = useScoreGame();
/*
export default {
  name: "Scoreboard",
  //props: ["score"],
};
*/
</script>

<style scoped>

div {
  margin-top: 10px;
}
h3 {
  font-size: 1.7em;
  margin: 10px 0;
}
table {
  margin: auto;
}
tr {
  font-size: 1.7em;
}
td {
  border: 2px solid black;
  color: red;
}
th {
  padding: 0 20px;
}
</style>
