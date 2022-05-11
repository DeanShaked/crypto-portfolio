import * as yup from "yup";

export const NewAssetSchema = yup.object({
  ticker: yup.string().required("Symbol is required"),
  symbolName: yup.string().required("Symbol Name is required"),
  amount: yup.number().required("Amount is required"),
  openRate: yup.number().required("Open Rate is required"),
  platform: yup.string().required("Platform is required"),
});

export const LoginSchema = yup.object({
  email: yup.string().required("Please enter your Email"),
  password: yup.string().required("Please enter your password"),
});

export const RegisterSchema = yup.object({
  email: yup.string().required("Please enter your Email"),
  password: yup.string().required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Please confirm your password"),
});
