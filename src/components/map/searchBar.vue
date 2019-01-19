<template>
  <v-combobox
    v-model="model"
    :items="typeaheadSuggestions"
    :search-input.sync="typedText"
    hide-selected
    @keydown.enter.native="search"
    placeholder="Address Lookup"
    append-icon="accessibility"
    attach
    auto-grow
    solo 
    flex 
    no-filter
    flat
    height="-webkit-fill-available"
    clearable
    return-object

  >
    <!-- <template slot="no-data">
      <v-list-tile>
        <span class="subheading">Create</span>
        <v-chip
          :color="`${colors[nonce - 1]} lighten-3`"
          label
          small
        >
          {{ search }}
        </v-chip>
      </v-list-tile>
    </template> -->
    <template slot="item" slot-scope="typeaheadSuggestions">
      <div >Suggest</div>
    </template>

    <!-- <template
      v-if="item === Object(item)"
      slot="selection"
      slot-scope="{ item, parent, selected }"
    > -->
    <!-- ---------------------------------------- if we have itemzzz -------------------------------- -->
    <!-- </template> -->
    <!-- <template
      slot="item"
      slot-scope="{ index, item, parent }"
    > 
    </template>-->
  </v-combobox>
</template>

<script>
import _ from 'lodash' 
import api from '../../api/generic.js'
  export default {
    name: "searchBar",

    data: () => ({
      activator: null,
      attach: null,
    //   colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
    //   editing: null,
      index: -1,
      items: [
        { header: 'Select an option or create one' },
        {
          text: 'Foo',
          color: 'blue'
        },
        {
          text: 'Bar',
          color: 'red'
        }
      ],
      nonce: 1,
      menu: false,
      model: null,
      x: 0,
      y: 0,
      typedText: "",
      suggestions: null
    }),
    methods: {
      edit (index, item) {
        if (!this.editing) {
          this.editing = item
          this.index = index
        } else {
          this.editing = null
          this.index = -1
        }
      },
      filter (item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
      goToPlace(req){

      },
      search(){
        //this.$store.dispatch('setTime')

        api.getVectorTile(this.model)
        
        //api.archGis(this.model)
        
        .then(response =>{
            if(response){
                console.log(response)
            }
            
        })
        .catch(e => {throw new Error(e)})
        


        // api.geoCodeSearch(address).then(response=>{
            
        // })
        // .catch(e => {throw new Error(e)})
        
        // .finally(() => (this.isLoading = false))
      }
    },
    computed:{
        typeaheadSuggestions(){
            return this.suggestions
        }
    },
    watch: {
    //   model (val, prev) {
    //     if (val.length === prev.length) return

    //     this.model = val.map(v => {
    //       if (typeof v === 'string') {
    //         v = {
    //           text: v,
    //           color: this.colors[this.nonce - 1]
    //         }

    //         this.items.push(v)

    //         this.nonce++
    //       }

    //       return v
    //     })
    //  },
      typedText: _.debounce(function (text, prev) {
        // search must not be the same as the previous text
        return
        if ((text && prev && text.length === prev.length) || (text === null || text.length === 0)){
          return
        }

        if (text.length >= 3 
          //& & text !== this.$store.state.searchText
          ) {
          // Items have already been requested
          // if (this.isLoading) return

          // this.isLoading = true

          // "https://data.census.gov/api/typeahead"

          // Lazily load input items

          //The bounds parameter defines the latitude/longitude coordinates of the southwest and northeast corners of this bounding box using a pipe (|) character to separate the coordinates.
          //need a bounds param which is |
          api.typeahead(text)
          .then(response=>{

          })
          .catch(e => {throw new Error(e)})
          
          .finally(() => (this.isLoading = false))
        }
      }, 300)
    }
  }
</script>