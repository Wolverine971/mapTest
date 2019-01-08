<template>
  <v-form v-model="valid" ref="form" >
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="category" :counter="20" label="Category" :rules="categoryRules" required></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field v-model="name" :counter="100" label="Name" required :rules="nameRules"></v-text-field>
        </v-flex>
        <v-btn :disabled="!valid" color="blue" small @click.prevent="submitTodo" @keydown.enter="submitTodo">
          Submit
        </v-btn>
        <v-btn color="blue-grey" small @click="reset">
          Reset Form
        </v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
//import store from "../store"
export default {
    name:"createToDo",
    data: () => ({
      valid: false,
      category: '',
      name: '',
      categoryRules:[
        v => !!v || 'Category is required',
        v => (v && v.length <= 20) || 'Category must be less than 20 characters'
      ],
      nameRules:[
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters'
      ],
    }),
    methods:{
        submitTodo(){
            if (this.$refs.form.validate()) {
                //let item = {name: this.name, category: this.category}
                this.$store.commit("addToDo", {name: this.name, category: this.category, done:false})
            }
        },
        reset () {
            this.$refs.form.reset()
        },

    },
    components: {
    },
    mounted() {
        
    },
    computed: {

    }
}
</script>
