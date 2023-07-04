import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useFormik} from 'formik'
import * as yup from 'yup'
import { editFooter,getFooterByID } from '../../../api/footer';


const EditFooter = () => {
  const navigate = useNavigate();
  const [footer, setFooter] = useState({});
  const { id } = useParams();
  const Validation = yup.object().shape({
    imageURL: yup.string().required("Required"),
  });

    async function fetchData(){
     const datas = await getFooterByID(id)
     setFooter(datas.data)
     formik.setValues({
        imageURL: datas.data.imageURL,
     })
    }
    useEffect(()=> {
      fetchData()
    },[id])


  const handleSubmit = async (values, actions) => {
    editFooter(id, values);
    setFooter(values);
    actions.resetForm();
    navigate("/admin/footer");
  };
  const formik = useFormik({
    initialValues: {
        imageURL: footer.imageURL,
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  });
  return (
    <>
{footer &&  <div class="login-box">
  <h2>{footer.name} edit</h2>
  <form onSubmit={formik.handleSubmit}>
    <div class="user-box">
      <input
      onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageURL}
            name="imageURL"
            type="text"
            placeholder="imageURL"
            required=""/>
            
      <label>imageURL</label>
    </div>
    <button type="submit" href="#">
        
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>}
</>
  )
};

export default EditFooter;
