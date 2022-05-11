// App
import React from "react";
import { Formik, Form, Field } from "formik";

// Utils
import { createNewAsset } from "@/api/apiTrade";
import { NewAssetSchema } from "@/utils/validations";
import { newAssetsInputs } from "@/fixture/newAssetInputs";

const NewAsset = () => {
  return (
    <div className="p-5">
      <h1 className=" text-4xl">Add New Asset</h1>
      <Formik
        initialValue={{
          ticker: "",
          symbolName: "",
          amount: 0,
          openRate: 0,
          currentRate: 0,
          totalPrice: 0,
          platform: "",
        }}
        validationSchema={NewAssetSchema}
        onSubmit={async (values) => {
          console.log("values", values);
          const assetData = {
            ticker: values.ticker,
            symbolName: values.symbolName,
            amount: values.amount,
            openRate: values.openRate,
            currentRate: values.openRate,
            totalPrice: values.amount * values.openRate,
            platform: values.platform,
          };
          const res = await createNewAsset(assetData);
          console.log("res :>> ", res);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {newAssetsInputs.map((input) => {
              <Field
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
              />;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewAsset;
