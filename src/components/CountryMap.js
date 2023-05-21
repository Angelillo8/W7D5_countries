import { MapContainer, TileLayer} from 'react-leaflet'

const CountryMap = ({ country }) => {

    const latlng = country[1].latlng

    return (

        <div className='map'>
            <MapContainer center={[latlng[0], latlng[1]]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>

    )
};

export default CountryMap;