import React from "react";
import { createNewAsset } from "../../api/apiTrade";

import { NewAssetSchema } from "../../utils/validations";

const NewAsset = () => {
  
  const handleoOnSubmit = (e) => {
    e.preventDefault();
    const assetData =  {
      ticker: 'BTC',
      symbolName: 'Bitcoin',
      amount: 0.001,
      openRate: 30000,
      currentRate: 31000,
      totalPrice: 0.001 * 30000,
      platform: 'BTC',
    }
    const res = createNewAsset(assetData);
    console.log('res :>> ', res);
  };

  return (
    <form
      onSubmit={handleoOnSubmit}
      class="px-8 pt-6 pb-8 mb-4"
    >
      
      <button>Submit</button>
    </form>
  );
};

export default NewAsset;
