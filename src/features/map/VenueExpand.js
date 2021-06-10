import react from 'react'
import styles from './Map.module.css'

export default function VenueExpand(props) {
  return (
    <div className={styles.expandedVenue}>
      <li>{props.name}</li>
    </div>
  )
}
