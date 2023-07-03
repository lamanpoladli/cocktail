import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "../../../api/loginRegister";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context/userContext";
import "./_login.scss"


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

    <div class="login-box">
    <h2>Admin Login</h2>
    <form onSubmit={formik.handleSubmit}>
      <div class="user-box">
        <input
        onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="username"
                value={formik.values.username}
                type="text"
                id="outlined-basic"
                label="Username"
                variant="outlined"
              placeholder="UserName"
              required=""/>
        <label>UserName</label>
        {formik.errors.username && formik.touched.username && (
            <span>{formik.errors.username}</span>
          )}
      </div>
      <div class="user-box">
      <input
               onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
              placeholder="password"
              required=""/>
        <label>Password</label>
        {formik.errors.password && formik.touched.password && (
            <span>{formik.errors.password}</span>
          )}
      </div>
     
      <button type="submit" href="#">
          
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  </div>

  );
};

export default Login;