import React, { Component } from "react";
import styles from "./Map.module.css";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";

export default function Map() {
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
              lat: 36.088617,
              lng: -115.0236456,
            }}
            defaultZoom={13}
            style={{ zIndex: "-2" }}
          >
            <div
              className={styles.marker}
              lat={36.088617}
              lng={-115.0236456}
              text="My Marker"
              style={{ fontSize: "3rem" }}
            />
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
