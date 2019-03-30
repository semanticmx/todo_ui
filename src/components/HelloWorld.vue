<template>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task.description }}
    </li>
  </ul>
</template>

<script>
import {APIService} from '../APIService';

const apiService = new APIService();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getTasks(){
      apiService.getTasks().then((data) => {
        this.tasks = data;
      });
    },
  },
  mounted() {
    this.getTasks();
  },
  data() {
    return {
      tasks: [],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
}
</style>
