import {MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const center = [38.54898771138727, -121.49309267572536]
const markerIcon = new L.Icon({
    iconUrl: require('../Assets/img/iconMarker.png'),
    iconSize: [60,60],
})

export default function MapComponent(){

    return(
        <MapContainer
            center={center}
            zoom={8}
            style={{width: '100%', height: '520px', border: '3px solid black'}}
        >
            <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
            <Marker position={center} icon={markerIcon}>

            </Marker>

        </MapContainer>
    )
}