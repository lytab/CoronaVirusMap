import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
const mapBox_token="pk.eyJ1IjoibHl0YWIiLCJhIjoiY2s4NmFjbWdkMDBxYTNtczljZmdqZnpubSJ9.ybce4lP4tiNXqW-7tHRFag";

mapboxgl.accessToken =mapBox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
zoom:1.5,
center:[0,20]
});
const  getColorFromCount=count=>{
if(count>=100){
return "red";
}
if(count>=10){
    return "blue";
    }
    return "gray";
}
fetch("/get-data.json").then(response => response.json()).then(data => {
console.log(data);


    data.data
        .forEach(place => {
// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Infected :'+place.infected +" - "+'Dead :'+place.dead +" - "+'Sick :'+place.sick
       );
            var marker = new mapboxgl.Marker({
                color:getColorFromCount(place.infected)
            })
                .setLngLat([place.longitude, place.latitude])
                .setPopup(popup) // sets a popup on this marker

                .addTo(map);



        });
})

/*function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/get-places.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});
*/