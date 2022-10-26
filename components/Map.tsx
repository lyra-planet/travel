import {  Key, useMemo, useState } from 'react';
import Map,{  Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import Pin from './pin';
import 'mapbox-gl/dist/mapbox-gl.css'
const MapGl = ({searchResults}:any) => {
    const [popupInfo, setPopupInfo] = useState<any>(null);
    const coordinates = searchResults.map((result:any)=>({
        longitude:parseFloat(result.long),
        latitude:parseFloat(result.lat)
    }))
    const center:any = getCenter(coordinates)
    const [viewState, setViewState] = useState({
        width:"100%",
        height:"100%",
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
        bearing:0,
        pitch:0
      });
      const pins = useMemo(
        () =>
        searchResults.map((item:any) => (
                <Marker
                  key={`marker-${item.long}`}
                  longitude={parseFloat(item.long)}
                  latitude={parseFloat(item.lat)}
                  anchor="bottom"
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    console.log(item)
                    setPopupInfo(item);
                  }}
                >
                    <Pin />
                </Marker>
              )

        ),
        []
      );
  return (
    <>
    <Map 
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxAccessToken={process.env.mapbox_key}
    initialViewState={{...viewState}}
    >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={parseFloat(popupInfo.long)}
            latitude={parseFloat(popupInfo.lat)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
             <h1 className='text-lg'>
                {popupInfo.title}
             </h1>
             <p>{popupInfo.price}</p>
            </div>
            <img width="100%" src={popupInfo.img} />
          </Popup>
        )}
    </Map>
    </>

  )
}

export default MapGl
