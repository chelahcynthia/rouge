import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StoreSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Log in" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer("left", true)}>
          <MenuSharpIcon onClick={toggleDrawer("left", true)} />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
