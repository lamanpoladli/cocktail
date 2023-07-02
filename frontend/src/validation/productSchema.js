import * as yup from "yup";

export const ProductValidation = yup.object().shape({
  name: yup.string().required("name is required"),
  title: yup.string().required("title is required"),
  price: yup.number().required("price is required")
});