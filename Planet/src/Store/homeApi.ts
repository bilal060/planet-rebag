/* eslint-disable no-trailing-spaces */
/* eslint-disable curly */
/* eslint-disable no-bitwise */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {post, get, postWithJson} from '../Store/services/api';
import {showMessage} from 'react-native-flash-message';
import * as RootNavigation from '../routes/RootNavigation';
import {store} from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import xtype from 'xtypejs';
import {saveSecureInfo, deleteSecureInfo} from '../../utils';
import {rootUrl} from '../../utils/constants';

//import {store} from './index';

const initialState = {
  loading: false,
  allStore: [],
  getAllstoreBottle: [],
  getAllstoreBag: [],
  createSessiondata: null,
  getAllSessions: [],
  gettreeCount: 0,
  sessionBottleStatus: null,
  getPriceo2waste: null,
  getcalculatedPrice: null,
  sessionBagStatus: null,
  Barcode: null,
  allDeals: [],
  allTranscationHistory: [],
  storeBySession: [],
  userRedeemStatus: [],
};

export const getAllStore = createAsyncThunk(
  'home/getallstore',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/store/`,
      };
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      if (err.response.status == 401) {
        showMessage({
          message: 'Session Expired',
          description: 'Your session has been expired',
          type: 'danger',
        });
      }
      if (err?.error?.error?.message) {
        throw err;
      } else {
        console.log(err);
        throw err;
      }
    }
  },
);

export const getAllstoreBycategory = createAsyncThunk(
  'home/allstore',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/store/getStoreByCat`,
      };
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      if (err.response.status == 401) {
        // RootNavigation.navigate('Login', {});
        showMessage({
          message: 'Session Expired',
          description: 'Your session has been expired',
          type: 'danger',
        });
      }
      if (err?.error?.error?.message) {
        throw err;
      } else {
        //  console.log('222');
        //console.log(err);

        throw err;
      }
    }
  },
);

export const createSessions = createAsyncThunk(
  'home/createSessions',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/session/addSession`,
      };
      console.log(data);

      console.log("osa,a")
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const getAllSessionsasUser = createAsyncThunk(
  'home/userSessions',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/session/getSessionByUser`,
      };
      console.log(data);
      const response: any = await get(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const getUserTreeCount = createAsyncThunk(
  'home/userTreeCount',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/user/getUserTreeCount`,
      };
      console.log(data);
      const response: any = await get(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log("tree errro")
      console.log(err?.response?.data);
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

export const getSessionByStatus = createAsyncThunk(
  'home/SessionsStatus',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/session/getSessionByStatus`,
      };
      console.log(data);
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const getPrice = createAsyncThunk(
  'home/Price',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/price`,
      };
      console.log(data);
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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


export const getSessionPrice = createAsyncThunk(
  'home/sessionPrice',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/session/getSessionByPrice`,
      };
      // console.log(data);
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const generateBarcode = createAsyncThunk(
  'home/GenarteBarcode',
  async (data: object) => {
    try {
      let payload = {
        data: data,
        // http://localhost:4000/api/transaction/addTransaction
        url: `${rootUrl}/transaction/addTransaction`,
      };
      console.log(data);
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
      if (err?.error?.error?.message) {
        console.log('1 error');
        throw err;
      } else {
        console.log(err?.response?.data);
        //console.log(err);

        throw err;
      }
    }
  },
);

export const getstoreBySession = createAsyncThunk(
  'home/storeBySession',
  async (data: object) => {
    console.log(data);
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/session/getStoreBySessionId`,
      };
      console.log(data);
      const response: any = await postWithJson(payload);
      //  console.log({response});
      // RootNavigation.navigate('Login', {});
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
      if (err?.error?.error?.message) {
        console.log('1 error');
        throw err;
      } else {
        console.log(err?.response?.data);
        //console.log(err);

        throw err;
      }
    }
  },
);

export const getAllDeals = createAsyncThunk(
  'home/deals',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/deal/getRandomDeals`,
      };
      // console.log(data);
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const getRedeemTranscationHistory = createAsyncThunk(
  'home/TranscationHistory',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/session/getRedeemSession`,
      };
      console.log(data);
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

export const getUserProfileRedeemStatus = createAsyncThunk(
  'home/userRedeemStatus',
  async (data: object) => {
    try {
      let payload = {
        // data: data,
        url: `${rootUrl}/user/getUserByStatus`,
      };
      console.log(data);
      const response: any = await get(payload);
      return await {data: response.data, name: data};
    } catch (err: any) {
      //store.dispatch(logout());
      console.log(err?.response?.data);
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

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    resetError(state) {},
    resethomeData(state, action) {
      state.createSessiondata = null;
    },
  },

  extraReducers: builder => {
    builder.addCase(getAllstoreBycategory.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllstoreBycategory.fulfilled, (state, action: any) => {
      state.loading = false;

      if (action.payload.name.categoryName == 'Bottle') {
        state.getAllstoreBottle = action.payload.data?.data;
      } else {
        state.getAllstoreBag = action.payload.data?.data;
      }
    });
    builder.addCase(getAllstoreBycategory.rejected, (state, error: any) => {
      state.loading = false;
      console.log({error});
    });

    builder.addCase(getAllStore.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllStore.fulfilled, (state, action: any) => {
      state.loading = false;
      state.allStore = action.payload.data?.data;
    // /  console.log(action.payload.data?.data);
    });
    builder.addCase(getAllStore.rejected, (state, error: any) => {
      state.loading = false;
      console.log({error});
    });

    builder.addCase(createSessions.pending, state => {
      state.loading = true;
    });
    builder.addCase(createSessions.fulfilled, (state, action: any) => {
      state.loading = false;
      // console.log(action.payload);
      state.createSessiondata = true;
    });
    builder.addCase(createSessions.rejected, (state, error: any) => {
      state.loading = false;
      console.log({error});
    });

    builder.addCase(getAllSessionsasUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllSessionsasUser.fulfilled, (state, action: any) => {
      state.loading = false;
      // console.log("call");
      // console.log(action.payload.data);
      state.getAllSessions = action.payload.data?.data;
    });
    builder.addCase(getAllSessionsasUser.rejected, (state, error: any) => {
      state.loading = false;
    });

    builder.addCase(getUserTreeCount.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserTreeCount.fulfilled, (state, action: any) => {
      state.loading = false;
      // console.log("call trerere" );
      //  console.log(action.payload.data);
      state.gettreeCount = action?.payload.data?.treeCount;
    });
    builder.addCase(getUserTreeCount.rejected, (state, error: any) => {
      state.loading = false;
    });

    

    builder.addCase(getSessionByStatus.pending, state => {
      state.loading = true;
    });
    builder.addCase(getSessionByStatus.fulfilled, (state, action: any) => {
      state.loading = false;
      if (action.payload.name.categoryName == 'bottles') {
        state.sessionBottleStatus = action.payload.data;
      } else {
        state.sessionBagStatus = action.payload.data;
      }
    });
    builder.addCase(getSessionByStatus.rejected, (state, error: any) => {
      state.loading = false;
    });


    builder.addCase(getPrice.pending, state => {
      state.loading = true;
    });
    builder.addCase(getPrice.fulfilled, (state, action: any) => {
      //  console.log(JSON.stringify( action.payload))
      state.getPriceo2waste = action.payload.data.data?.[0]
    });
    builder.addCase(getPrice.rejected, (state, error: any) => {
      state.loading = false;
    });

    builder.addCase(getSessionPrice.pending, state => {
      state.loading = true;
    });
    builder.addCase(getSessionPrice.fulfilled, (state, action: any) => {
      //  console.log(JSON.stringify( action.payload))
       state.getcalculatedPrice = action.payload.data;
    });
    builder.addCase(getSessionPrice.rejected, (state, error: any) => {
      state.loading = false;
    });



    builder.addCase(generateBarcode.pending, state => {
      state.loading = true;
    });
    builder.addCase(generateBarcode.fulfilled, (state, action: any) => {
      // state.Barcode = action.payload?.data?.data;
      console.log(action.payload);
    });
    builder.addCase(generateBarcode.rejected, (state, error: any) => {
      state.loading = false;
      showMessage({
        message: 'Error something went wrong on server',
        description: 'Error Creating Barcode',
        type: 'danger',
      });
    });

    builder.addCase(getAllDeals.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllDeals.fulfilled, (state, action: any) => {
      // console.log(action.payload?.data?.data);
      state.allDeals = action.payload?.data?.data;
    });
    builder.addCase(getAllDeals.rejected, (state, error: any) => {
      state.loading = false;
    });

    builder.addCase(getstoreBySession.pending, state => {
      state.loading = true;
    });
    builder.addCase(getstoreBySession.fulfilled, (state, action: any) => {
      state.storeBySession = action.payload?.data?.data;
      console.log(action.payload?.data);
    });
    builder.addCase(getstoreBySession.rejected, (state, error: any) => {
      state.loading = false;
    });

    builder.addCase(getRedeemTranscationHistory.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getRedeemTranscationHistory.fulfilled,
      (state, action: any) => {
        //  console.log(action.payload?.data?.data);
        state.allTranscationHistory = action.payload?.data?.data;
      },
    );
    builder.addCase(
      getRedeemTranscationHistory.rejected,
      (state, error: any) => {
        state.loading = false;
      },
    );

    builder.addCase(getUserProfileRedeemStatus.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getUserProfileRedeemStatus.fulfilled,
      (state, action: any) => {
        // console.log(action.payload?.data?.data);
        state.userRedeemStatus = action.payload?.data?.data;
      },
    );
    builder.addCase(
      getUserProfileRedeemStatus.rejected,
      (state, error: any) => {
        state.loading = false;
      },
    );
  },
});

export const {resetError, resethomeData} = homeSlice.actions;

export default homeSlice.reducer;
