import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import styles from './Sidebar.module.css'
import MenuIcon from '@material-ui/icons/Menu'
import VenueItem from './VenueItem'
import venues from '../../db.json'

const useStyles = makeStyles({
  list: {
    width: '24rem',
  },
  fullList: {
    width: 'auto',
  },
})

export default function Sidebar() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })
  const currDate = new Date()
  const currTime = Number(
    currDate.getHours().toString() + currDate.getMinutes().toString()
  )
  const currDay = currDate.getDay()
  const filteredVenues = venues.filter((item) => {
    console.log(currTime)
    // console.dir(currDate);
    if (
      item.day == currDay &&
      item.happy_hr_start < currTime &&
      item.happy_hr_stop > currTime
    ) {
      return item
    }
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {filteredVenues.map((venue) => {
          return (
            <VenueItem
              key={venue.id}
              venueName={venue.title}
              venueAddress1={venue.street_1}
            />
          )
        })}
      </List>
    </div>
  )

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={styles.burger}
          >
            <MenuIcon fontSize='large' />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
