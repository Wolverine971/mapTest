<template>
    <div>
        <div id="mapid"></div>
        <div id="map2"></div>
    </div>

    
</template>
<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import L from 'leaflet'
export default {
    name: "Map",
    data (){
        return{

        }
    },
    mounted(){
        var myMap = L.map('mapid',{ center: [38.95, 77.35], zoom: 13})
        //.setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: process.env.MAP_KEY
            
        }).addTo(myMap);


        // mapboxgl.accessToken = 
        // var map = new mapboxgl.Map({
        // container: 'map2',
        // style: 'mapbox://styles/mapbox/streets-v11'
        // });

    }

}
</script>
<style>
#mapid{
    height: 180px;
    width: 180px
}
</style>
