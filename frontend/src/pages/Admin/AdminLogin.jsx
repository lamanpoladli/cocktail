import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "../../api/requests";
import Swal from "sweetalert2";
import { useUserContext } from "../../context/userContext";


const Login = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const response = await signIn({
      username: values.username,
      password: values.password,
    });
    if (response.auth) {
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      navigate("/admin");
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="username"
            value={formik.values.username}
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          style={{ display: "block", margin: "30px auto" }}
          variant="contained"
          color="warning"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
// import { Button } from '@mui/material';
// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
// import { useUserContext } from '../../context/userContext';
// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useUserContext()
//   return (
//     <Container>
//         <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           {user === null ? <>
//             <Link to="/admin/login">Login Admin</Link>
//           </> : <>
//             <Navbar.Text>
//               Signed in as: <p>{user.username}</p>
//             </Navbar.Text>
//             {user && <>
//               <Button onClick={async () => {
//                 localStorage.removeItem('token');
//                 localStorage.removeItem('user');
//                 await setUser(null);
//                 // await setUser("");

//                 navigate('/admin/login')
//                 // navigate("http://localhost:3000/admin")
//               }} color="inherit">
//                 Logout
//               </Button>
//             </>}
//           </>}

//         </Navbar.Collapse>

//         {/* <Nav.Link href="#link"><Link>Add Slider</Link></Nav.Link> */}
//       </Container>
//   )
// }

// export default AdminLogin