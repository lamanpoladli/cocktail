import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./_index.scss";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
import { useState } from "react";
const Index = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <header >
      <nav className={colorChange ? 'navbar-fixed' : 'navbar-static'}>
        <Row className="row">
          <Col className="col1">
            <h1 class="my-element"><Link className="link" to={"/"}>Bridge</Link></h1>
          </Col>
          <Col className="col2">
            <ul>
              <li class="my-element"><Link className="link" to={"/"}>Home</Link></li>
              <li class="my-element"><Link className="link" to={"/about"}>About</Link></li>
              <li class="my-element"><Link className="link" to={"/menu"}>Menu</Link></li>
              <li class="my-element"><Link className="link" to={"/reserv"}>Reservation</Link></li>
              <li class="my-element">Contact</li>
            </ul>
          </Col>
          <Col className="col3" xs={6} md={4}>
            <div>
              <ul>
                <li>
                  <FacebookOutlinedIcon style={{ color: "white" }} />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FavoriteIcon />
                </li>
              </ul>
              <button class="button-86" role="button">
                Book a table
              </button>
            </div>
          </Col>
          <Col className="col4">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ListIcon className="hamburgerMenu" />
            </Button>
            <Menu
              id="basic-menu"
              style={{backgroundColor:"rgba(255, 255, 255, 0.533)"}}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="divs">
              <MenuItem  onClick={handleClose}>
                <Link style={{color:"black",textDecoration:"none"}} to={"/"}>Home</Link>
              </MenuItem>
              <MenuItem  onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem  onClick={handleClose}>
                Menu
              </MenuItem>
              <MenuItem  onClick={handleClose}>
                Reservations
              </MenuItem>
              <MenuItem  onClick={handleClose}>
                Contact
              </MenuItem>
              
              </div>
              
            </Menu>
          </Col>
        </Row>
      </nav>
    </header>
  );
};

export default Index;
