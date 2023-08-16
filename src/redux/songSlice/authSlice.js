import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const currentUser = (state, { payload }) => {
  state.currentUser = payload;
};
const isError = (state, { payload }) => {
  state.error = payload;
};
const errorLogin = (state, { payload }) => {
  state.errorLogin = payload;
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
	isAuth:false,
  error:null,
  currentUser:null,
  errorLogin:null
	},
	reducers: {
	setIsAuth:(state,{payload}) => {
    state.isAuth = payload
  },
  setSignUp:(state,{payload}) => {
    state.signUp = payload
  }
	},
  extraReducers:(builder) => {
    builder.addCase(createUser.fulfilled);
    builder.addCase(loginUser.fulfilled, currentUser);
    builder.addCase(createUser.rejected, isError);
    builder.addCase(loginUser.rejected, errorLogin);
  }
})

export const {setIsAuth, setSignUp} = authSlice.actions

export default authSlice.reducer
