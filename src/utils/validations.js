import * as yup from "yup";

export const NewAssetSchema = yup.object({
  symbol: yup.string().required("Symbol is required"),
  symbolName: yup.string().required("Symbol Name is required"),
  amount: yup.number().required("Amount is required"),
  openRate: yup.number().required("Open Rate is required"),
  platform: yup.string().required("Platform is required"),
});
