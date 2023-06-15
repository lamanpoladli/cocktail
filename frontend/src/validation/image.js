import * as Yup from "yup";

export const ImageSchema = Yup.object().shape({
    profileImg: Yup.mixed().required()
})