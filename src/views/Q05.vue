<template>
  <div>
    <div style="display: flex">
      <form @submit.prevent="addTodo">
        <select v-model="newDay" required>
          <option v-for="day in days">{{ day }}</option>
        </select>
        <input v-model="newTodo" placeholder="輸入待辦事項" required />
        <button>新增待辦</button>
      </form>
      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? '全部' : '整理' }}
      </button>
    </div>
    <div>
      <span>待辦事項:</span>
      <li v-for="item in items" :key="item.id">
        {{ item.day }}
        <div v-for="todo in filteredTodos(item.todos)" :key="todo.no" id="le">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.mission }}</span>
        </div>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let id = 0,
  no = 0;

const newDay = ref('');
const newTodo = ref('');
const days = ref(['Mon', 'Tue', 'Wed']);
const hideCompleted = ref(false);
const items = ref([
  {
    id: id++,
    day: 'Mon',
    todos: [
      { order: no++, mission: '寄信', done: false },
      { order: no++, mission: '工作', done: false }
    ]
  },
  {
    id: id++,
    day: 'Tue',
    todos: [
      { order: no++, mission: '打掃', done: false },
      { order: no++, mission: '整理', done: false }
    ]
  },
  {
    id: id++,
    day: 'Wed',
    todos: [
      { order: no++, mission: '出差', done: false },
      { order: no++, mission: '紀錄', done: false }
    ]
  }
]);
function filteredTodos(todos) {
  return hideCompleted.value ? todos.filter((todo) => !todo.done) : todos;
}

function addTodo() {
  const item = items.value.find((item) => item.day == newDay.value);
  item.todos.push({ order: no++, mission: newTodo.value, done: false });
  newTodo.value = '';
}
</script>

<style scoped>
#le {
  margin-left: 20px;
}
.done {
  text-decoration: line-through;
}
</style>
