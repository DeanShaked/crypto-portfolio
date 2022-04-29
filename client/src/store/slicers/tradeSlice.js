import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "store/asyncThunk";

// Trade initial state
const initialState = {
  positionsList: {}, // All rates as a dict (Instrument symbolName as object key)
};

export const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {
    addWithdrawDetails: (state, action) => {
      state.withdrawDetails = action.payload;
    },
    addNewSavedCreditCard: (state, action) => {
      const { savedCards } = state.cashierData.apms[0];
      // Check if card is already in savedCards array
      const isCardAlreadyInSavedCards = savedCards.some(
        (card) => card.id === action.payload.id
      );
      // If not in array, push it
      if (!isCardAlreadyInSavedCards) savedCards.push(action.payload);
    },
  },
  // Reducers for async actions
  extraReducers: {
    // Regulation Form
    [fetchReglationForm.fulfilled]: (state, action) => {
      state.regulationFormData = action.payload;
    },

    // Deposit
    [fetchCashierData.fulfilled]: (state, action) => {
      const updatedCashierData = { ...action.payload };
      // If failed - abort
      if (updatedCashierData.failedResponse) return;
      // If user has bonuses -
      if (updatedCashierData?.prePopulatedBonusPrograms) {
        if (
          updatedCashierData?.prePopulatedBonusPrograms.length !== undefined
        ) {
          updatedCashierData?.prePopulatedBonusPrograms.splice(0, 1); // Remove the "select bonus" item
        }
      }
      updatedCashierData.apms[0].name = i18n.t("title.credit.card"); // Credit card object doesnt have name so we add it
      state.cashierData = updatedCashierData;
    },
    [fetchCashierBonuses.fulfilled]: (state, action) => {
      const updatedBonusesData = { ...action.payload };
      // If failed - abort
      if (updatedBonusesData.failedResponse) return;
      // If user has bonuses -
      if (updatedBonusesData?.prePopulatedBonusPrograms) {
        if (
          updatedBonusesData?.prePopulatedBonusPrograms.length !== undefined
        ) {
          updatedBonusesData?.prePopulatedBonusPrograms.splice(0, 1); // Remove the "select bonus" item
        }
      }
      const updatedCashierData = {
        ...state.cashierData,
        prePopulatedBonusPrograms:
          updatedBonusesData?.prePopulatedBonusPrograms,
      };
      state.cashierData = updatedCashierData;
    },
    [removeSavedCardById.fulfilled]: (state, action) => {
      const { savedCards } = state.cashierData.apms[0];
      const cardToRemoveId = action.payload;
      const cardToRemoveIndex = savedCards.findIndex(
        (card) => card.id === cardToRemoveId
      );
      savedCards.splice(cardToRemoveIndex, 1);
    },
  },
});
