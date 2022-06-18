<template>
  <div>
    <h3><u>Puntuación</u></h3>
    <table>
      <tr>
        <th>O</th>
        <th>X</th>
      </tr>
      <tr>
        <td>{{ score.O }}</td>
        <td>{{ score.X }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Scoreboard",
  props: ["score"],
};
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
