import React from "react";
import { useFormik } from "formik";

import { createNewAsset } from "@/api/apiTrade";
import { NewAssetSchema } from "@/utils/validations";

const NewAsset = () => {
  const formik = useFormik({
    initialValues: {
      ticker: "",
      symbolName: "",
      amount: 0,
      openRate: 0,
      currentRate: 0,
      totalPrice: 0,
      platform: "",
    },
    validate: NewAssetSchema,
    onSubmit: async (values) => {
      const assetData = {
        ticker: values.ticker,
        symbolName: values.symbolName,
        amount: values.amount,
        openRate: values.openRate,
        currentRate: values.currentRate,
        totalPrice: values.amount,
        platform: values.platform,
      };
      const res = await createNewAsset(assetData);
      console.log("res :>> ", res);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="px-8 pt-6 pb-8 mb-4">
      -<label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" />
      onChange={formik.handleChange}
      value={formik.values.lastName}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewAsset;
