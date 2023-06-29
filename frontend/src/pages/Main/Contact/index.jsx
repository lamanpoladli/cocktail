import React from 'react'
import { useRef } from 'react'
import { TextField } from '@mui/material';
import './_index.scss'
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as yup from 'yup';
import { useFormik } from 'formik'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Suggestions() {
  // mailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m4x1rim",
        "template_uaamueb",
        form.current,
        "Wr35Ng-zSYlCOhZyn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);


  const Validation = yup.object().shape({
    user_name: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    user_username: yup.string().min(3, 'Minimum 3 hərfdən ibarət ola bilər').required('Zəhmət olmasa xananı doldurun'),
    user_email: yup.string().email('Email hesabınızı daxil edin').required('Zəhmət olmasa xananı doldurun'),
    message: yup.string().required('Zəhmət olmasa xananı doldurun'),
  })
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_username: '',
      user_email: '',
      message: '',
    },
    onSubmit: sendEmail,
    validationSchema: Validation,
  })

  return (
    <>
    <div className='contact'>
      <h1>Contact</h1>
    </div>
    <section className="contactSec">
      <div className='row'>
        <div className='contactCol'>
          <p>Contact us</p>
          <h1>Get in touch</h1>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br></br> enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea com.</h6>
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
        <div className='contactCol'>
        <main>
        <form
          ref={form}
          onSubmit={sendEmail} >
          
          <div className='input-div'>
            <TextField
              label="Adınız"
              type="text"
              name="user_name"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
            />
            {formik.errors.user_name && formik.touched.user_name ? (
              <span style={{ color: "white" }}>{formik.errors.user_name}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div' >
            <TextField
              label='Soyadınız'
              className="form-input"
              name="user_username"
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.user_username}
            />
            {formik.errors.user_username && formik.touched.user_username ? (
              <span style={{ color: "white" }}>{formik.errors.user_username}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="user_email"
              className="form-input"
              label="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
            />
            {formik.errors.user_email && formik.touched.user_email ? (
              <span style={{ color: "white" }}>{formik.errors.user_email}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="message"
              className="form-input"
              id="outlined-multiline-static"
              label="Düşüncələriniz"a
              multiline
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.errors.message && formik.touched.message ? (
              <span style={{  color: "white" }}>{formik.errors.message}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <button
              disabled={Object.keys(formik.errors).length !== 0 ? true : false}
              // onClick={sendEmail}
              type="submit"
              // value="Send"
              className='input-div-Button'
              variant="contained"
            >Göndər</button>

            {/* success message (toasted) */}
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Göndərildi !
              </Alert>
            </Snackbar>
          </div>
        </form>
      </main>
        </div>
      </div>
    </section>
    </>
  )
}