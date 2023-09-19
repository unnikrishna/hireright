import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  selectedCountry: {}
};

export const counterSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries:(state, action)=>{
        state.countries = action.payload
    },
    setSelectedCountries:(state, action)=>{
        state.selectedCountry = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCountries, setSelectedCountries } = counterSlice.actions;

export default counterSlice.reducer;
