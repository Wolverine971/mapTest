<template>
    <v-app style="">
        <!-- <map-Nav class="nav"></map-Nav> -->
        <m-Nav app :myMap="myMap" class="nav"></m-Nav>
        <v-content >
            <v-card class="pa-5" flat id="mapid">
            </v-card>
        </v-content>
        
        <!-- <div id="map2"></div> -->
    </v-app>
</template>
<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import mNav from './mNav'
import L from 'leaflet'
import _ from 'lodash'
export default {
    name: "Map",
    components: {
      mNav
    },
    data (){
        return{
            myMap: null
        }
    },
    methods:{
        // renderMap: function(){
        //     this.myMap = L.map('mapid',{ center: [38.911552736237624, -500.1084892846185], zoom: 10})
        //     //.setView([51.505, -0.09], 13);
        //     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //         maxZoom: 18,
        //         // tileSize: 50,
        //         id: 'mapbox.streets',
        //         accessToken: 'pk.eyJ1IjoiZGp3YXluZTMiLCJhIjoiY2pxc2ppeXQyMGttOTQzcXZvdjBuZHZweSJ9.kWjE2XSfLBrUAHDaeliJ-Q'
                
        //     }).addTo(this.myMap);
        // },
        getLatLong(e){
            //e.preventDefault()
            // preventDefault()
            console.log(e.latlng)
        },
        goToPlace(req){
            var line = L.polygon( req, {color: 'red'}).addTo(this.myMap);
            //var circle = this.myMap.circle( center, { renderer: myRenderer } );
            this.myMap.fitBounds(line.getBounds())
        },
        recurseArr(newArr){
            newArr.forEach(item => {
                if(item.length == 2){ 
                    return item.reverse()
                }
                else{
                    this.recurseArr(item)
                }
            })
        },
        

    },
    mounted(){
        // 38.97649255070067, lng: -76.84675534064796
         this.myMap = L.map('mapid',{ center: [38.97649255070067, -76.84675534064796], zoom: 9, renderer: L.svg()})
        //.setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: process.env.MAP_KEY
            
        }).addTo(this.myMap);
        this.myMap.on("click", this.getLatLong )

    },
    watch:{

    }

}
</script>
<style>
#mapid{
    height: 600px;
}
.leaflet-pane{
    position: relative !important;
}

</style>
