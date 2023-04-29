import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dark , setDark]= React.useState(false)

  const nav = {
    backgroundColor : "#333" 
    // color : dark? "black" : "white  "
  } 
  const list = {
    color : "#fff",
    listStyle:"none",
    display:"flex",
    textAlign : "center",
    margin: "0 13px",
    padding:"25px"
  
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        CORAL
      </Typography> */}
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} > 
      <CssBaseline />
      <AppBar component="nav" style={nav}>
      {/* <Button
            onClick={()=>setDark(pre => !pre)}
          >
            Dark
          </Button> */}
        <Toolbar>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="p"
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
          >
           <h3 style={list}><Link href="/">CORAL</Link></h3> 
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } ,p:3 }}>
          <ul style={list}>
            <li><Link href="/jewelryAccessories">Jewelry & Accessories</Link></li>

            <li><Link href="/clothingshoes">Clothing & Shoes</Link></li>

            <li><Link href="/homeLiving">Home & Living</Link></li>

            <li><Link href="/weddingParty">Wedding & Party</Link></li>

            <li><Link href="/toysEntertainment">Toys & Entertainment</Link></li>

            <li><Link href="/artCollectibles">Art & Collectibles</Link></li>

            <li><Link href="/craftSuppliesTools">Craft Supplies & Tools</Link></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:"skyblue"
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
          </Box>
  );
}

export default Navbar;
