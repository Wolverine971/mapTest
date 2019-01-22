<template>
  <v-combobox
    v-model="model"
    :items="typeaheadSuggestions"
    :search-input.sync="typedText"
    hide-selected
    @keydown.enter.native.prevent="search"
    placeholder="Address Lookup"
    append-icon="accessibility"
    attach
    solo 
    flex 
    no-filter
    flat
    height="-webkit-fill-available"
    class="combo"

  >
    <template slot="no-data">
      <v-list-tile>
        <span class="subheading">No Suggestion</span>
      </v-list-tile>
    </template>
    <template slot="item" slot-scope="typeaheadSuggestions">
      <template v-if="typeaheadSuggestions && typeaheadSuggestions.item" class="combo">
        <div class="combo" @click="search(typeaheadSuggestions.item.address.formattedAddress)" @keydown.enter.native="search(typeaheadSuggestions.item.address.formattedAddress)" >{{typeaheadSuggestions.item.address.formattedAddress}}</div>
      </template>
    </template>

    <!-- <template  .address.formattedAddress
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
import _ from 'underscore' 
import api from '@/api/generic'
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
      search(text){
        let data;
        if(this.model && this.model.address){
          data = this.model.address.formattedAddress 
          //data = text
        }
        else{
          //this.$store.dispatch('setTime')
          data = this.model
        }
        if(this.model.address && this.model.adminDistrict2 || this.model.locality){
          api.getTigerCounty(this.model.adminDistrict2).then(response => {
            // console.log(response)
            //let parsed = JSON.parse(response)
            if(response.features.length > 1){
              let parsedGeos = response.features[0].geometry.rings
              //let parsedGeo = response.features[0].geometry.coordinates
              this.$store.commit("setMultipleGeoForMap", parsedGeos)
            }
            else{
              let parsedGeo = response.features[0].geometry.rings
              //let parsedGeo = response.features[0].geometry.coordinates
              this.$store.commit("setGeoForMap", parsedGeo)
            }
          })
          .catch(e => {throw new Error(e)})
          .finally(() => {
            this.suggestions = null
            this.model = this.model.adminDistrict2
          })

        }
            //getVectorTile
        
        else{
          api.getTigerState(this.model.address.formattedAddress).then(response => {
          // console.log(response)
          //let parsed = JSON.parse(response)
          //let parsedGeo = response.features[0].geometry.rings
          let parsedGeo = response.features[0].geometry.coordinates
          this.$store.commit("setGeoForMap", parsedGeo)
        })
        .catch(e => {throw new Error(e)})
        .finally(() => {
          this.suggestions = null
          this.model = this.model.address.formattedAddress
        })
        }
        
      }
    },
    computed:{
        typeaheadSuggestions(){
          console.log(this.suggestions)
            return this.suggestions
        }
    },
    watch: {
      typedText: _.debounce(function (text, prev) {
        // search must not be the same as the previous text
        // return
        if(text == prev){
          return
        }
        if ((text && prev && text.length === prev.length) || (text === null || text.length === 0)){
          return
        }

        if (text.length >= 3 
          //& & text !== this.$store.state.searchText
          ) {
          // http://dev.virtualearth.net/REST/v1/Locations?query=locationQuery&key=BingMapsKey

          // "https://data.census.gov/api/typeahead"

          // Lazily load input items

          //The bounds parameter defines the latitude/longitude coordinates of the southwest and northeast corners of this bounding box using a pipe (|) character to separate the coordinates.
          //need a bounds param which is |
          api.bingLocation(text)
          .then(response=>{
            this.suggestions = response.resourceSets[0].resources[0].value
            console.log(this.suggestions)

          })
          .catch(e => {throw new Error(e)})
          
          .finally(() => (this.isLoading = false))
        }
      }, 500),
      // model:function (text, prev){
      //   if(text == prev){
      //     return
      //   }
      //   if(text == Object(text)){
      //     return text.address.formattedAddress 
      //   }
      //   else{
      //     return text
      //   }
      // }
    }
  }
</script>
<style lang="css">

.combo{
      z-index: 800
}
</style>
