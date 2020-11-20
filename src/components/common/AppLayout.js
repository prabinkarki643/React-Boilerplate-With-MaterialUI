import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBarMenu from "./SideBarMenu";
import Footer from "./Footer";
import SecondaryMenu from "./SecondaryMenu";
import { Divider } from "@material-ui/core";

const drawerWidth = 300;

export const fixedLayoutStyle=(theme) => {
  return(
    {
      content:{
        [theme.breakpoints.up("md")]: {
          marginLeft:drawerWidth,
        },
        flexGrow: 1,
        padding: theme.spacing(2),
        marginTop: theme.mixins.toolbar.minHeight
      }
    
    }
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundSize:'100%',
    backgroundRepeat:'repeat-y',
    overflow:'auto',
  },
  nonLayoutRoot: {
    minHeight: "100vh",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems:'center'
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    display:'block',
    [theme.breakpoints.up("md")]: {
      marginLeft:drawerWidth,
    },
    padding: theme.spacing(3),
  },
}));

function AppLayout(props) {
  const { window, children, noLayout,noLayoutWrapperClassName } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return noLayout ? (
    <div className={classes.nonLayoutRoot}>{props.children}</div>
  ) : (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h6 variant="h6" noWrap className={classes.title}>
          <img src={require('../../assets/images/app_logo.png')} style={{width:50}} alt="App Logo"/>
          </h6>
          <SecondaryMenu/>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
             <div className={classes.toolbar}>
            <CancelIcon style={{fontSize:30,margin:5,float:'right'}} onClick={handleDrawerToggle}/>
            </div>
            <Divider/>
            <SideBarMenu handleDrawerToggle={handleDrawerToggle}/>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className={classes.toolbar} />
              <Divider/>
            <SideBarMenu/>
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{minHeight:'85%'}}>
        {children}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

AppLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AppLayout;
