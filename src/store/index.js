import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //[{name: "" id: ''}]
    toDos: []
};

const getters = {
    toDos: (state) => {
        return state.toDos
    }
  
};

const actions = {
    // createToDo({state, getters}, item){
    //     console.log(item)
    // }
  
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  addToDo(state, item){
      state.toDos.push(item);
  },
  removeToDo(state, itemToRemove){
    state.toDos = state.toDos.filter(item =>  {
        if(item.name == itemToRemove.name && item.category == itemToRemove.category){
            return
        }
        else{
            return item
        }
    })
  },
  removeAllTodos(state){
    state.toDos = []
  },
  checkTodos(state, item){
    state.toDos.forEach(todos=>{
        // if(todos == undefined){
        //     return
        // }
        // else 
        if(todos.name == item.name && todos.category == item.category){
          todos.done = !item.done
        }
      })
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});