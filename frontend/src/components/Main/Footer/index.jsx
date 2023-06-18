import React from 'react'
import "./_index.scss";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { Link } from "react-router-dom";
const index = () => {
  return (
    <footer>
      <div className="containerFooter">
        <div className="colFooter">
          <h3>Bridge</h3>
          <p>Lorem ipsum dolor sit amet, consect<br></br>  etur dip isicing elit, sed do eiusm</p>
          <div className='footerIcons'>
            <div><WatchLaterIcon/></div>
            <div>Mon-Sun: 09am - 09pm</div>
          </div>
          <div className='footerIcons'>
            <div><LocationOnIcon/></div>
            <div>1611 Linden Avenue, London</div>
          </div>
          <div className='footerIcons'>
            <div><CalendarViewMonthIcon/></div>
            <div>301-382-4311, 301-461-9671</div>
          </div>
        </div>
        <div className="colFooter">
        <h3>Pages</h3>
        <p><Link className="link" to={"/"}>Home</Link></p>
        <p><Link className="link" to={"/reserv"}>Reservation</Link></p>
        <p><Link className="link" to={"/menu"}>Menu</Link></p>
        <p><Link className="link" to={"/contact"}>Contact</Link></p>
        </div>
        <div className="colFooter">
          <h3>Opening hours</h3>
          <p>Monday – Friday:<br></br>10:00am – 01:00am</p>
          <p>Saturday – Sunday:<br></br>10:00am – 03:00 am</p>
        </div>
        <div className="colFooter">
          <h3>Instagram</h3>
          <div className='footerImage'>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-2.cdninstagram.com/v/t51.29350-15/241487191_382766116590617_2757571258270692998_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ECt4SvbSMKwAX9xyUYr&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDtqNucwAlYb7TSkVLtYXhKK8pIfpqLvd9f5dIoW-GMsw&oe=649175F8" alt="" />
              </div>
            </div>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/241214507_2343144122482414_2297024015976169367_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cUGgP6GZsoUAX9PCK7f&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCDL9nCp6H6QJYJS9ibZs7Nd3uBdk8OcKuA95OgFGVBew&oe=6490A50D" alt="" />
              </div>
            </div>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/241461419_594480331962618_5011166060174656062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MnJAVMDDxS4AX_QBb6S&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAQLpoqvzsJK5Y2PW6yocFq6IsPnJoGDpJnRVcsGCox_w&oe=6490ECED" alt="" />
              </div>
            </div>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/241416013_592530545239159_3934193634753234672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=BBNGJ0sewQUAX-JKTon&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAySAbI1qLfXk_FEK5FBlbBZT8Obb2el5EcAZWMyxgrjg&oe=6490AA79" alt="" />
              </div>
            </div>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-2.cdninstagram.com/v/t51.29350-15/241452218_580930076416347_2714107567553693860_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=akbc_F1JihwAX-PuWUP&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBOrlUkx2q81ZlcdLA4bAV8beVsktbMlq4fhGpQ0Piq-w&oe=64916C8C" alt="" />
              </div>
            </div>
            <div className='imageCol'>
              <div>
                <img src="https://scontent-atl3-2.cdninstagram.com/v/t51.29350-15/241487191_382766116590617_2757571258270692998_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ECt4SvbSMKwAX9xyUYr&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDtqNucwAlYb7TSkVLtYXhKK8pIfpqLvd9f5dIoW-GMsw&oe=649175F8" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index