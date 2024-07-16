<template>
  <div>
    <div>
      <p>{{ user }}</p>
      <h1>{{ msg }}</h1>
      <input type="text" v-model="msg" />
      <p :id="titleClass">This is blue.</p>
      <button @click="plus">按 {{ count }} 下</button>
      <button @click="reset" style="margin-left: 10px" v-show="count != 0">Reset</button>
    </div>
    <span v-if="count == 0">請按按鈕</span>
    <span v-else>請按Reset</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('Hello!');
const user = 'User';
const titleClass = ref('title');

const count = ref(0);

function plus() {
  count.value++;
}
function reset() {
  count.value = 0;
}
</script>

<style scoped>
p {
  font-size: 70px;
}
#title {
  color: rgb(94, 105, 201);
}
button {
  padding: 15px;
  font-size: 10px;
  border-color: rgb(74, 74, 253);
  border-radius: 5px;
  color: blue;
  background-color: white;
}
button:hover {
  background-color: rgb(106, 155, 245);
  border-color: white;
  color: white;
}
</style>
