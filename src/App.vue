<template>
  <div class="container">
    <div class="todos">
      <md-field>
        <label class="black"><b>Jot it down...</b></label>
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
        <md-input
          v-model="todo.label"
          v-if="todo.editing"
          @keyup.enter="edittodo(todo)"
          type="text"
        >
          <span v-if="!todo.editing" @dblclick="todo.editing = true">
            {{ todo.description }}
          </span>
        </md-input>
        <input
          type="checkbox"
          id="checkbox"
          v-model="todo.completed"
          style="float:right;"
          @click="completetodo(todo)"
        />
                <button @click="removeTodo(todo)" class="delete-button">Delete</button>
        <button
          type="button"
          @click="todo.editing = true"
          class="btn btn-default edit-button"
        >
          Edit
        </button>





        <br />
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
    },
    completetodo: function(todo) {
      todo.completed = true;
      console.log(todo.completed)
      console.log(todo.completed.length + 'todos completed')
      
    },
  },
};
</script>

<style>
/* You can add global styles to this file, and also import other style files */
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

body {
  font-family: "Share Tech Mono", monospace;
}

.container {
  width: 70%;
  font-family: "Share Tech Mono", monospace;
  margin: auto;
  display: block;
}

input[type="text"] {
  font-family: "Share Tech Mono", monospace;
  border: 0px;
}

div,
span {
  display: inline;
  padding: 0px;
  border: 1px;
}

button {
  font-family: "Share Tech Mono", monospace;
  border: none;
  float: right;
}
</style>
