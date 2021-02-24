import react from "react";
import styles from "./Map.module.css";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

export default function VenueMarker() {
  return (
    //   need marker
    <div className={styles.marker}>
      <LocationOnRoundedIcon />
    </div>
  );
}
