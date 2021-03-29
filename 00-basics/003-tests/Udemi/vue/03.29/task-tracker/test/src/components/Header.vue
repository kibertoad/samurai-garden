<template>
<header>
  <h1>{{title}}</h1>
  <Button @btn-click= "$emit('toggle-add-task')"
          :text="showAddTask ? 'Close' : 'Add task'"
          :color="showAddTask ? 'red' : 'green'"/>
<!--  <Button  text="Update Task" color="blue"/>-->
<!--  <Button  text="Delete Task" color="red"/>-->
</header>
</template>

<script>
import Button from "@/components/Button";

export default {
name: "Header.vue",
  props: {
  title: String,
  showAddTask: Boolean
  },
  components: {
    Button,
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 200px;
}
</style>