import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";
import Divider from "@material-ui/core/Divider";

export default function VenueItem(props) {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <RestaurantMenuRoundedIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.venueName}
          secondary={props.venueAddress1}
        />
      </ListItem>
      <Divider />
    </>
  );
}
