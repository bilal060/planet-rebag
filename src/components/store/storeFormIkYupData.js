import * as Yup from "yup";

export const storeSignupValidationSchema = Yup.object().shape({
  storeName: Yup.string().required("Store Name is Required"),
  storeEmail: Yup.string().email().required("Email is Required"),
  password: Yup.string().required("Password is Required").min(8),
  ownBagsPrice: Yup.number().required("Own Bags Price is Required"),
  otherBagsPrice: Yup.number().required("Other Bags Price is Required"),
  otherBottlesPrice: Yup.number().required("Other Bottles Price is Required"),
  maiDubaiBottlesPrice: Yup.number().required(
    "Mai Dubai Bottles Price is Required",
  ),
  storeType: Yup.string().required("Store Type is Required"),
  hasBottles: Yup.boolean(),
  ownBottlesPrice: Yup.number().when("hasBottles", {
    is: true,
    then: () => Yup.number().required("Own Bottles Price is required"),
    otherwise: () => Yup.number(),
  }),
});

export const storeEditValidationSchema = Yup.object().shape({
  storeName: Yup.string().required("Store Name is Required"),
  ownBagsPrice: Yup.number().required("Own Bags Price is Required"),
  otherBagsPrice: Yup.number().required("Other Bags Price is Required"),
  otherBottlesPrice: Yup.number().required("Other Bottles Price is Required"),
  maiDubaiBottlesPrice: Yup.number().required(
    "Mai Dubai Bottles Price is Required",
  ),
  storeType: Yup.string().required("Store Type is Required"),
  hasBottles: Yup.boolean(),
  ownBottlesPrice: Yup.number().when("hasBottles", {
    is: true,
    then: () => Yup.number().required("Own Bottles Price is required"),
    otherwise: () => Yup.number(),
  }),
});
