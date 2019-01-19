<template>
  <v-app class="home-page">
    <rheader app />
    <v-content >
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Todo List</h1>
        <p>A place where todo lists are valued.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <createToDo></createToDo>
          <listOfTodos></listOfTodos>
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </div>
    </v-content>
    <rfooter />
  </v-app>
</template>

<script>
// import RwvTag from "@/components/VTag";
// import { FETCH_TAGS } from "@/store/actions.type";
import createToDo from "./createToDo"
import listOfTodos from "./listOfToDos"
import rheader from "./header";
import rfooter from "./footer";
// import _ from 'lodash';   
//import toDoVue from './toDo.vue';
export default {
  name: "home",
  components: {
      createToDo,
      listOfTodos,
      rheader,
      rfooter
  },
  // data() {
  //     return{
  //       myTodos:[]
  //     }
  //   },
  // mounted() {
  //   //this.$store.dispatch(FETCH_TAGS);
  // },
  // methods:{
  //   remove(item){
  //     this.$store.commit("removeToDo", item)
  //   },
  //   checkTodo(item){
  //     this.$store.commit("checkTodos", item)
  //   },
  //   removeAll(){
  //     this.$store.commit("removeAllTodos")
  //   },
    

  // },
  // computed: {
  //   todoCategories(){
  //       //let stasd = this.$store.state.toDos
  //       //$log(stasd);
  //       let categories = _.groupBy(this.$store.getters.toDos, 'category')
  //       return categories;
  //   },
  //   progress () {
  //     return this.completedTasks / this.$store.getters.toDos.length * 100
  //   },
  //   completedTasks(){
  //     return this.$store.getters.toDos.filter(item => item.done).length
  //   },
  //   remainingTasks(){
  //     return this.$store.getters.toDos.filter(item => !item.done).length
  //   }
  // },
  // watch:{
  //     availableTodos:function(todos){
  //         this.myTodos = todos;
  //     }
  // }
};
</script>

<style>
.done {
  text-decoration: line-through;
  text-decoration-color: red;
}
.banner{
  background-color: #f1f1f1
}
</style>
