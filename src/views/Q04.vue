<template>
  <div>
    <span v-if="!isDisabled">請按按鈕</span>
    <span v-else>請按</span><button @click="reset" v-show="isDisabled">重置</button> <br /><br />
    <button @click="plus">按 {{ count }} 下</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const isDisabled = computed(() => count.value);

function plus() {
  count.value++;
}
function reset() {
  count.value = 0;
}
</script>

<style scoped></style>
