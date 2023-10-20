import * as Yup from "yup";

export const dealSignupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Deal name is required"),
  vendor: Yup.string().required("Vendor name is required"),
  returnQty: Yup.number().required("return Qty is required"),
  link: Yup.string()
    .url("Invalid URL format")
    .required("Deal link is required"),
  percentage: Yup.number()
    .min(0, "Percentage must be greater than or equal to 0")
    .max(100, "Percentage must be less than or equal to 100")
    .required("Percentage is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});
