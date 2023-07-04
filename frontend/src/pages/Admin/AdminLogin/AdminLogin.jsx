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
    <div
      style={{
        display: "flex",
        height: "80vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
        <div className="loginAdmin">
        <form onSubmit={formik.handleSubmit}>
          <TextField
          className="formAdmin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="username"
            value={formik.values.username}
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        
          <TextField
          className="formAdmin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        
        <Button
        className="submitAdmin"
          type="submit"
          style={{ display: "block", margin: "30px auto" }}
          variant="contained"
          color="warning"
        >
          Login
        </Button>
        </form>
        </div>
      
    </div>
  );
};

export default Login;