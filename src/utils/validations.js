import * as yup from "yup";

export const NewAssetSchema = yup.object({
  symbol: yup.required("Symbol is required"),
  symbolName: yup.required("Symbol Name is required"),
  amount: yup.required("Amount is required"),
  openRate: yup.required("Open Rate is required"),
  platform: yup.required("Platform is required"),
});
