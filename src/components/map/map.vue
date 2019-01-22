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
    computed:{
        newGeo(){
            return this.$store.getters.newGeo
        },
        newGeoNum(){
            return this.$store.getters.newGeoNum
        },
        newMultiGeoNum(){
            return this.$store.getters.newMultiGeoNum
        },
        newMultiGeo(){
            return this.$store.getters.newMultiGeo
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
        setGeo(){
            this.recurseArr(this.newGeo)
            //this.floridaPoly
            var line = L.polygon( this.newGeo, {color: 'red'}).addTo(this.myMap);
            //var circle = this.myMap.circle( center, { renderer: myRenderer } );
            this.myMap.flyToBounds(line.getBounds())
        },
        setMultiGeo(){
            let polys = []
            newMultiGeo.forEach(item => {
                this.recurseArr(item.geometry.rings)
                let poly = L.polygon( item.geometry.rings, {color: 'blue'}).addTo(this.myMap);
                polys.push(poly)
                L.circle(poly.getCenter(), {radius: 200, color: green}).addTo(this.myMap);
            })

            this.myMap.fitBounds(polys.getBounds());
        }
        

    },
    mounted(){
        // 38.97649255070067, lng: -76.84675534064796
        console.log(process.env.MAP_KEY)
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
        newGeoNum(newVal, oldVal){
            if(newVal !== oldVal){
                this.setGeo()
            }
        },
        newMultiGeoNum(newVal, oldVal){
            if(newVal !== oldVal){
                this.setMultiGeo()
            }
        }

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
