import axios from 'axios';

const form = document.querySelector('form')!;
const AddressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCCS0npIpwpLw-FdxtSwulhkDBvkeS8faY";
// declare var ol: any;

declare var google: any;
type GoogleGeoCoding = { 
results : { geometry : { location : {lat : number , lng : number}}}[];
status : "OK" | "ZERO_RESULTS" ;  
}

function getAddress(event : Event){
    event.preventDefault();
    const enteredAddress = AddressInput.value;
    // document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
    //Send Adress to Google Api
    axios.get<GoogleGeoCoding>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        if(response.data.status !== 'OK'){
            throw new Error('Location could not be fetched!');
        }
        const coordinates = response.data.results[0].geometry.location;
        console.log(coordinates);
        const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 8
        });

        // <!-- OpenLayers -->
        // new ol.Map({
        //     target: 'map',
        //     layers: [
        //       new ol.layer.Tile({
        //         source: new ol.source.OSM()
        //       })
        //     ],
        //     view: new ol.View({
        //       center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
        //       zoom: 16
        //     })
        //     });
        
        new google.maps.Marker({position: coordinates, map: map});
    })
    .catch(err => {
        alert(err.message);
        console.log(err);
    });

}
form.addEventListener('submit',getAddress);