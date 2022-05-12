// App
import React from "react";
import { Formik, Form, Field } from "formik";

// Utils
import { createNewAsset } from "@/api/apiTrade";
import { NewAssetSchema } from "@/utils/validations";
import { newAssetInputs } from "@/fixture/newAssetInputs";

const NewAsset = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <h1 className=" text-4xl">Add New Asset</h1>
      <Formik
        initialValues={{
          ticker: "",
          symbolName: "",
          amount: "",
          openRate: "",
          currentRate: "",
          totalPrice: "",
          platform: "",
        }}
        // validationSchema={NewAssetSchema}
        onSubmit={async (values) => {
          const req = { ...values };
          if (req.ticker && req.symbolName && req.amount && req.openRate) {
            const res = await createNewAsset(req);
            console.log("res :>> ", res);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="p-5 flex flex-col ">
            {newAssetInputs.map((input) => (
              <Field
                key={input.id}
                className="form-control
                block
                w-full
                m-1.5
                px-3
                py-1.5
                text-md
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
              />
            ))}
            <button
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewAsset;
