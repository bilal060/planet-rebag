/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get} from '../Store/services/api';

import {showMessage} from 'react-native-flash-message';
import {rootUrl} from '../utils/constants';
import {store} from './index';
import {updateSchedule} from '../Store/initialsApiCalls';
interface initialState {
  deleteScheduleLoading: boolean;
}

export const deleteSchedule = createAsyncThunk(
  'deleteApiCalls/deleteSchedule',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/CmdSched/deleteSchedule/${data.id}`,
      };

      const response: any = await get(payload);
      let updatedSchedule = [
        {
          ...data.DateSchedules,
          Schedules: [...data.arr],
        },
      ];

      store.dispatch(updateSchedule(updatedSchedule));
      showMessage({
        message: 'Delete',
        description: 'Delete Successfully',
        type: 'success',
      });
      return await response;
    } catch (err: any) {
      console.log({errorz: err});
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

const initialState: initialState = {
  deleteScheduleLoading: false,
};

const deleteApiCallsSlice = createSlice({
  name: 'deleteApiCalls',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(deleteSchedule.pending, state => {
      state.deleteScheduleLoading = true;
    });
    builder.addCase(deleteSchedule.fulfilled, (state, action: any) => {
      state.deleteScheduleLoading = false;
    });
    builder.addCase(deleteSchedule.rejected, (state, error: any) => {
      state.deleteScheduleLoading = false;
      console.log({deleteScheduleLoading: error});
    });
  },
});

export default deleteApiCallsSlice.reducer;
