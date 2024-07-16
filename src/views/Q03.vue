<template>
  <div>
    <button @click="plus">按 {{ count }} 下</button>
    <br />
    <br />
    <button @click="reset" :disabled="isDisabled">重置</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const count = ref(0);

const isDisabled = computed(() => !count.value);

function plus() {
  count.value++;
}
function reset() {
  count.value = 0;
}
</script>

<style scoped></style>
