// src/store/counterSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormData = {
  name: string;
  email: string;
  message: string;
};

interface CounterState {
  data: FormData;
  FormInfo: FormData[];
  test:number
}

const initialState: CounterState = {
  data: {
    name: "4",
    email: "",
    message: ""
  },
  FormInfo: [],

  test: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {


    setFormInfo(state, action: PayloadAction<FormData>) {
      state.FormInfo.push(action.payload);
    },

    setvalue (state){
          state.test++; 
    },

    setTestVlue(state,action) {
     state.test = action.payload
    }

    
  }
});

const counterSlice1 = createSlice({
    name: "counter",
    initialState,
    reducers: {
  
  
      setFormInfo1(state, action: PayloadAction<FormData>) {
        state.FormInfo.push(action.payload);
      },
  
      setvalue (state){
            state.test++; 
      },
  
      setTestVlue(state,action) {
       state.test = action.payload
      }
  
      
    }
  });
  
export const { setFormInfo } = counterSlice.actions;


export const { setFormInfo1 } = counterSlice1.actions;


export const counterReducer = counterSlice.reducer;
