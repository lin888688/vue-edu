<script setup>
import { ref } from 'vue';
const msg = ref('Hello!');
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
  </div>
</template>
