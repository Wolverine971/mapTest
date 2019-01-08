<template>
    <v-flex>
        <div class="row">
            <span class="display-2">TO DOS</span>
            <v-divider vertical></v-divider>
            <v-btn small class="text-md-center" color="blue-grey" @click="removeAll" v-if="Object.keys(todoCategories).length !== 0">
            <v-icon>
                clear
                </v-icon>
            Clear Todos
            </v-btn>
        </div>
        <v-layout my-1 align-center style="max-width: 500px">
            <strong class="mx-3 info--text text--darken-3">
            Remaining: {{ remainingTasks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-3 black--text">
            Completed: {{ completedTasks }}
            </strong>

            <v-spacer></v-spacer>
            <strong class="mx-3 black--text">
            {{ Math.round(progress) || 0 }} %
            </strong>
            <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
            
        </v-layout>
        
        <v-card row wrap v-for="(cats, key, index) in todoCategories" :key="index" v-if="Object.keys(todoCategories).length !== 0">
            <v-slide-y-transition class="py-0" group tag="v-list">
            <v-card v-if="Object.keys(todoCategories).length !== 0" :key="index">
                <v-slide-y-transition class="py-0" group tag="div" name="tag-list">
                        <v-chip :key="key" label>{{key}}</v-chip>
                        <v-chip text-color="blue" v-for="(item, index) in cats" :key="index" close @input="remove(item)">
                        <v-checkbox v-model="item.done" @append-icon-cb="checkTodo(item)" ></v-checkbox>
                        <span :class="{'done' : item.done}">{{item.name}}</span>
                        </v-chip>
                </v-slide-y-transition>
            </v-card>
            </v-slide-y-transition>
        </v-card>
    </v-flex>
</template>
<script>
import _ from 'lodash'; 
export default {
    name: "listOfToDos",
    data() {
        return{
            myTodos:[]
        }
        },
    mounted() {
        //this.$store.dispatch(FETCH_TAGS);
    },
    methods:{
        remove(item){
        this.$store.commit("removeToDo", item)
        },
        checkTodo(item){
        this.$store.commit("checkTodos", item)
        },
        removeAll(){
        this.$store.commit("removeAllTodos")
        },
        

    },
    computed: {
        todoCategories(){
            //let stasd = this.$store.state.toDos
            //$log(stasd);
            let categories = _.groupBy(this.$store.getters.toDos, 'category')
            return categories;
        },
        progress () {
        return this.completedTasks / this.$store.getters.toDos.length * 100
        },
        completedTasks(){
        return this.$store.getters.toDos.filter(item => item.done).length
        },
        remainingTasks(){
        return this.$store.getters.toDos.filter(item => !item.done).length
        }
    },
    watch:{
        availableTodos:function(todos){
            this.myTodos = todos;
        }
    }
}
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
