import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { getAllProfil } from "../../../api/profil";





export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    getAllProfil().then((res) => {
      setProfil(res);
    });
  }, []);


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
    style={{width:"300px"}}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/"}>Home Page</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin"}>Admin Page</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/reservations"}>Reservations</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/imagees"}>Multer</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/categories"}>Categories</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/products"}>Products</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/footer"}>Footer</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link style={{color:"black",textDecoration:"none"}} to={"/admin/about"}>About</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
      {profil &&
              profil.map((data) => {
                return (
        <IconButton
        key={data._id}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={data.imageURL} alt="" />
        </IconButton>
          )
        })}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"black"}} position="static">
        <Toolbar>
          <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {user ? (
            <>
              
              <Button onClick={async()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                await setUser(null);
                navigate('/admin');
              }} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link to="/admin">Login</Link>
              </Button>
              
            </>
          )}
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {profil &&
              profil.map((data) => {
                return (
            <IconButton
            key={data._id}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={data.imageURL} alt="" />
            </IconButton>
                )
              })}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
