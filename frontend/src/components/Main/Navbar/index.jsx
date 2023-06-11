import React from "react";
import "./_index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
const index = () => {
  return (
    <header>
      <nav>
      <Row className="row">
        <Col className="col1" xs={6} md={4}><h1 class="my-element">Bridge</h1></Col>
        <Col className="col2" xs={6} md={4}>
          <ul>
            <li class="my-element">Home</li>
            <li class="my-element">About</li>
            <li class="my-element">Menu</li>
            <li class="my-element">Reservations</li>
            <li class="my-element">Contact</li>
          </ul>
        </Col>
        <Col className="col3" xs={6} md={4}>
          <div>
          <ul>
            <li><FacebookOutlinedIcon style={{color:"white"}}/></li>
            <li><InstagramIcon/></li>
            <li><TwitterIcon/></li>
            <li><FavoriteIcon/></li>
          </ul>

<button class="button-86" role="button">Book a table</button>



          </div>
        </Col>
      </Row>
      </nav>
    </header>
  );
};

export default index;
