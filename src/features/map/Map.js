import React, { Component } from "react";
import styles from "./Map.module.css";
import GoogleMapReact from "google-map-react";
import VenueMarker from "./VenueMarkers";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import venues from "../../db.json";

export default function Map() {
  const currDate = new Date();
  const currTime = Number(
    currDate.getHours().toString() + currDate.getMinutes().toString()
  );
  const currDay = currDate.getDay();
  const filteredVenues = venues.filter((item) => {
    if (
      item.day == currDay &&
      item.happy_hr_start < currTime &&
      item.happy_hr_stop > currTime
    ) {
      return item;
    }
  });
  function getLocation() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
      });
    else alert("geolocation not available");
  }

  return (
    <>
      <div className={styles.mapWrapper}>
        <div className="logo">
          <p style={{ marginBottom: "7px" }}>hh</p>
        </div>
        <div style={{ height: "99vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDuSYxMht_3bQ95VKJVdKQTgYl3r3XWXqQ",
            }}
            defaultCenter={{
              lat: 36.165024,
              lng: -115.14408,
            }}
            defaultZoom={14.5}
            style={{ zIndex: "-2" }}
          >
            {/* marker */}
            {filteredVenues.map((item) => {
              return (
                // <div
                //   className={styles.marker}
                //   lat={item.lat}
                //   lng={item.lng}
                //   text="My Marker"
                //   style={{ fontSize: "3rem" }}
                // >
                //   <LocationOnRoundedIcon />
                // </div>
                <VenueMarker lat={item.lat} lng={item.lng} />
              );
            })}
          </GoogleMapReact>
        </div>
        <button className={styles.test} onClick={() => getLocation()}>
          get location
        </button>
      </div>
    </>
  );
}

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 36.088617,
//       lng: -115.0236456
//     },
//     zoom: 13.5
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyDuSYxMht_3bQ95VKJVdKQTgYl3r3XWXqQ" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           style={{zIndex:"-2"}}
//         >
//           <AnyReactComponent
//             lat={36.088617}
//             lng={-115.0236456}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;
