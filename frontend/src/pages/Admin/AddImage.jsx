import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { postImg } from "../../api//image";
import { useFormik } from "formik";
import { ImageSchema } from "../../validation/image";

const AddImage = () => {
  const[selectedImage,setSelectedImage] = useState(null);
  const buttonRef = useRef();
  function handleSubmit(values,actions){
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("profileImg", selectedImage);

    postImg(formData);
    buttonRef.current.style.background = '#1976D2';
    buttonRef.current.textContent = 'Upload File';
    setSelectedImage(null);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      profileImg: ''
    },
    validationSchema: ImageSchema,
    onSubmit: handleSubmit
  })


  return (
    <div
      style={{
        display: "flex",
        height: "60vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data" method="POST">
        <div style={{display:'flex',width:"100%"}}>

        <Button ref={buttonRef} style={{margin:'25px 0px',width:"400px",height:"60px",backgroundColor:"black"}} variant="contained" component="label">
          Upload File
          <input value={formik.values.profileImg}
          onChange={(e)=>{
            buttonRef.current.style.background = 'red';
            buttonRef.current.textContent = e.target.files[0].name;
            formik.handleChange(e);
            setSelectedImage(e.target.files[0])
          }}
          onBlur={formik.handleBlur} name="profileImg" type="file" accept="image/*" hidden />
        </Button>
        {formik.errors.profileImg && formik.touched.profileImg && <div style={{color:'red'}}>{formik.errors.profileImg}</div>}

        </div>
        <Button style={{display:'block',margin:'25px 0px',width:"400px",height:"60px"}} type="submit" variant="outlined" color="success">Add image</Button>
      </form>
     
    </div>
  );
};

export default AddImage;