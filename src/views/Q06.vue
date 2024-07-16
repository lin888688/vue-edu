<script setup>
import { ref, onMounted } from 'vue';

const btn = ref(null);

onMounted(() => {
  btn.value.textContent = '1.';
  btn.value.onclick = () => {
    btn.value.textContent = '2.';
    alert('按鈕觸發');
  };
});
</script>

<template>
  <button style="width: 80px; height: 80px" ref="btn">按鈕</button>
</template>
