import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import {useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  }
}));

export default function SideBarMenu(props) {
  const history = useHistory();
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const listData = [
    {
      label: "Navigation1",
      pathame: "/dashboard",
      muiIcon: <InboxIcon />,
    },
    {
      label: "Navigation2",
      pathame: "/dashboard/navigation1",
      muiIcon: <DraftsIcon />,
    },
    {
      label: "Navigation3",
      pathame: "/dashboard/navigation2",
      muiIcon: <DraftsIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {listData.map((item, index) => {
          return (
            <div>
              <ListItem
                button
                selected={history.location.pathname == item.pathame}
                onClick={(event) => {
                  props.handleDrawerToggle && props.handleDrawerToggle();
                  history.push(item.pathame);
                }}
              >
                <ListItemIcon>
                  {item.muiIcon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
              <Divider style={{ backgroundColor: "white" }} />
            </div>
          );
        })}
      </List>
    </div>
  );
}
