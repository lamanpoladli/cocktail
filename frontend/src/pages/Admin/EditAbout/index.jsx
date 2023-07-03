import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editAbout, getAboutByID } from "../../../api/about";

const EditAbout = () => {
  const navigate = useNavigate();
  const [about, setAbout] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const datas = await getAboutByID(id);
    setAbout(datas.data);
    // console.log(datas.data);
    formik.setValues({
      imageURL: datas.data.imageURL,
      name: datas.data.name,
      title: datas.data.title,
      description: datas.data.description,
    });
  }
  useEffect(() => {
    fetchData();
    console.log(id);
  }, [id]);
 

  //   console.log(id);
  

  const handleSubmit = async (values, actions) => {
    await editAbout(id, values);
    console.log(values);
    setAbout(values);
    actions.resetForm();
    navigate("/admin/about");
  };
  const ServiceSchema = Yup.object().shape({
    imageURL: Yup.string().required(),
    name: Yup.string().required(),
    title: Yup.string().required(),
    description: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      imageURL: about.imageURL,
      name: about.name,
      title: about.title,
      description: about.description,
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
  });
  return (
    <>
      <div class="login-box">
        <h2>Edit About</h2>
        <form onSubmit={formik.handleSubmit}>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
              name="imageURL"
              type="text"
              placeholder="imageURL"
              required=""
            />
            <label>imageURL</label>
          </div>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              name="name"
              type="text"
              placeholder="Name"
              required=""
            />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              name="title"
              type="text"
              placeholder="title"
              required=""
            />
            <label>Title</label>
          </div>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              name="description"
              type="text"
              placeholder="description"
              required=""
            />
            <label>Description</label>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditAbout;
