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

function readTextFile(file, callback) {
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
readTextFile("/get-data.json", function(data){
    //var data = JSON.parse(text);
    console.log(data);
});
