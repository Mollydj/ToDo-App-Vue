<template>
  <div class="container">
    <div class="todos">
      <md-field>
        <label>Jot it down...</label>
        <md-input
          v-model="currentTodo"
          class="todo-item form-control input-height"
          type="text"
          @keydown.enter="addTodo()"
        >
        </md-input>
      </md-field>

      <div v-for="todo in todos" :key="todo.id">
        <span v-if="!todo.editing">
          {{ todo.label }}
        </span>

        <span v-if="!todo.editing" @dblclick="todo.editing = true">
          {{ todo.description }}
          <button
            type="button"
            @click="todo.editing = true"
            class="btn btn-default "
          >
            Edit
          </button>
          <button @click="removeTodo(todo)">Delete</button>
          <input type="checkbox" id="checkbox" v-model="boolean" />
        </span>

        <md-field>
          <md-input
            v-model="todo.label"
            v-if="todo.editing"
            @keyup.enter="edittodo(todo)"
            type="text"
            class="todo-item form-control input-height"
          >
          </md-input>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editTodo: "",
      boolean: false,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        editing: false,
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    edittodo: function(todo) {
      todo.editing = false;
      console.log(todo);
    },
    completetodo: function(todo) {
      todo.completed = true;
      console.log(todo.completed);
    },
  },
};
</script>

<style>
/* You can add global styles to this file, and also import other style files */
body {
  font-family: Roboto, Arial, sans-serif;
  background-color: lightblue;
}

.container {
  width: 70%;
  font-family: Roboto, Arial, sans-serif;
  margin: auto;
  display: block;
}
todo-item {
  justify-content: left;
  width: 100%;
  display: block;
  border: none;
}

.todo-row,
.md-field {
  display: block;
  color: red;
}
</style>
