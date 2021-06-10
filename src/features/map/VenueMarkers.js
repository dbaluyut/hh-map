import react, { useState } from 'react'
import styles from './Map.module.css'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import VenueExpand from './VenueExpand'

export default function VenueMarker(props) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    //   need marker
    <div
      onClick={() => setIsFocused(!isFocused)}
      className={styles.marker}
      lat={props.lat}
      lng={props.lng}
    >
      <LocationOnRoundedIcon />
      {isFocused ? <VenueExpand lat={props.lat} lng={props.lng} /> : null}
    </div>
  )
}
