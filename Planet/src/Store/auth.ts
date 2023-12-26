/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {post, get, postWithJson, postWithPatch} from '../Store/services/api';
import {saveSecureInfo, deleteSecureInfo} from '../../utils';
import {showMessage} from 'react-native-flash-message';
import {rootUrl} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Otp from '../screen/OTP/screen/Otp';
import data from '../screen/History/components/data/data';

export const Authenticate = createAsyncThunk(
  'auth/token',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/user/register/`,
      };
      console.log(data);
      // return;
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // buttonFunc: '() => console.log("test")',

      return await response?.data;
    } catch (err: any) {
      //console.log({ errorz: err.response?.data?.error_description });
      console.log('1');
      console.log(err.response.data);
      //  console.log({errorz: err.response});
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        console.log('2');
        console.log(err.response.data);
        showMessage({
          message: 'Error',
          description: err?.response?.data?.message?.toString(),
          type: 'danger',
        });
        throw err;
      }
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifytoken',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/user/verify-otp`,
      };
      console.log(data);
      // return;
      const response: any = await postWithJson(payload);
      //  console.log({response});

      return await response?.data;
    } catch (err: any) {
      //console.log({ errorz: err.response?.data?.error_description });
      console.log('1');
      console.log(err.response.data);
      //  console.log({errorz: err.response});
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        console.log('2');
        console.log(err.response.data);
        showMessage({
          message: 'Error',
          description: 'Invalid OTP.Please try again',
          type: 'danger',
        });
        throw err;
      }
    }
  },
);

export const AuthenticateLogin = createAsyncThunk(
  'auth/login',
  async (data: object) => {
    try {
      console.log("cal")
      let payload = {
        data:  JSON.stringify( data),
        url: `${rootUrl}/user/login`,
      };
      console.log(data);
      // console.log('123');

      // return;
      const response: any = await postWithJson(payload);
      
      if (data?.isEnabled) {
        await saveSecureInfo(
          'userIsAuthenticated',
          JSON.stringify(response.data),
        );
      }

      return await response.data;
    } catch (err: any) {
      //console.log({ errorz: err.response?.data?.error_description });
      console.log('error');
      console.log(err);
      //  console.log({errorz: err.response});
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        console.log('2');
        console.log(err.response.data);
        showMessage({
          message: 'Error',
          description: 'Invalid email/phone or Password',
          type: 'danger',
        });
        throw err;
      }
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/user//forgotpassword`,
      };

      const response: any = await postWithJson(payload);

      return await response.data;
    } catch (err: any) {
      //console.log({ errorz: err.response?.data?.error_description });
      console.log('1');
      console.log(err.response.data);
      //  console.log({errorz: err.response});
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        console.log('2');
        console.log(err.response.data);
        showMessage({
          message: 'Error',
          description: 'Invalid email/number doesnot exist.',
          type: 'danger',
        });
        throw err;
      }
    }
  },
);

export const ResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/user/resetpassword`,
      };

      const response: any = await postWithPatch(payload);

      return await response.data;
    } catch (err: any) {
      //console.log({ errorz: err.response?.data?.error_description });
      console.log('1');
      console.log(err?.response?.data);
      //  console.log({errorz: err.response});
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        console.log('2');
        console.log(err);
        showMessage({
          message: 'Error',
          description: 'Password doesnot reset.Try again',
          type: 'danger',
        });
        throw err;
      }
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    let payload = {
      url: `${rootUrl}/api/account/logout`,
    };
    const response: any = await get(payload);
    await deleteSecureInfo('userIsAuthenticated');
    return response.data ?? {};
  } catch (err: any) {
    // showMessage({
    //     message: "Auth",
    //     description: err.response?.data.error_description,
    //     type: "danger",
    // });
    throw err.response?.data.error_description;
  }
});

export const registerGuestUser = createAsyncThunk(
  'home/registerguest',
  async (data: any) => {
    try {
      // console.log("call")
      let payload = {
        // data:  data,
        url: `${rootUrl}/user/registerGuestUser`,
      };
      console.log(payload);
      const response: any = await postWithJson( payload);
      // RootNavigation.navigate('Login', {});
       return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err);
      if (err?.error?.error?.message) {
        console.log('11 error');
        throw err;
      } else {
        console.log(err?.response?.data);
        //console.log(err);

        throw err;
      }
    }
  },
);

const initialState = {
  isRegsiter: false,
  isAuthenticated: false,
  userLoginData: null,
  isVerifyOtp: false,
  userData: null,
  access_token: '',
  loading: false,
  error: null,
  isForgot: false,
  isPasswordReset: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetError(state) {},
    setlogout(state, action) {
      state.isAuthenticated = false;
    },
    reserauth(state, action) {
      state.isRegsiter = false;
      state.isVerifyOtp = false;
      state.isForgot = false;
      state.isPasswordReset = false;
    },
  },

  extraReducers: builder => {
    builder.addCase(Authenticate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(Authenticate.fulfilled, (state, action: any) => {
      state.loading = false;

      state.isRegsiter = true;
      console.log(action.payload);
    });
    builder.addCase(Authenticate.rejected, (state, error: any) => {
      state.loading = false;
      state.isRegsiter = false;
      console.log({error});
    });

    builder.addCase(verifyOtp.pending, state => {
      state.loading = true;
      state.error = null;
      state.isVerifyOtp = false;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action: any) => {
      state.loading = false;

      state.isVerifyOtp = true;
    });
    builder.addCase(verifyOtp.rejected, (state, error: any) => {
      state.loading = false;
      state.isVerifyOtp = false;
      console.log('1');
      console.log({error});
    });

    builder.addCase(AuthenticateLogin.pending, state => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    });
    builder.addCase(AuthenticateLogin.fulfilled, (state, action: any) => {
      
      console.log(action.payload.data);
      state.loading = false;

      state.isAuthenticated = true;
      state.userLoginData = action.payload.data;
    });
    builder.addCase(AuthenticateLogin.rejected, (state, error: any) => {
      // console.log(error);
      state.loading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(registerGuestUser.pending, state => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    });
    builder.addCase(registerGuestUser.fulfilled, (state, action: any) => {
      state.loading = false;

      state.isAuthenticated = true;
      state.userLoginData = action.payload.data;
    });
    builder.addCase(registerGuestUser.rejected, (state, error: any) => {
      state.loading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(forgotPassword.pending, state => {
      state.loading = true;
      state.error = null;
      state.isForgot = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action: any) => {
      state.loading = false;
      state.isForgot = true;
    });
    builder.addCase(forgotPassword.rejected, (state, error: any) => {
      state.loading = false;
      state.isForgot = false;
    });

    builder.addCase(ResetPassword.pending, state => {
      state.loading = true;
      state.error = null;
      state.isPasswordReset = false;
    });
    builder.addCase(ResetPassword.fulfilled, (state, action: any) => {
      state.loading = false;
      state.isPasswordReset = true;
    });
    builder.addCase(ResetPassword.rejected, (state, error: any) => {
      state.loading = false;
      state.isPasswordReset = false;
    });
  },
});

export const {resetError, setlogout, reserauth} = authSlice.actions;

export default authSlice.reducer;
