/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postWithJson, get} from '../Store/services/api';
import * as RootNavigation from '../routes/RootNavigation';
// var qs = require('qs');
import {store} from './index';

import {showMessage} from 'react-native-flash-message';
import {rootUrl} from '../../utils/constants';
import {updateSchedule} from '../Store/initialsApiCalls';
interface initialState {
  createScheduleLoading: boolean;
  publishScheduleLoading: boolean | null;
}

export const createSchedule = createAsyncThunk(
  'createApiCallsSlice/saveSchedule',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveSchedule`,
      };
      let response: any = await postWithJson(payload);
      if (data.payload) {
        let payload = {
          data: data.payload,
          url: `${rootUrl}/api/cmdsched/saveSchedule`,
        };
        response = await postWithJson(payload);
      }
      showMessage({
        message: 'Notification',
        description: data.message
          ? data.message
          : response.data ?? 'Schedule Saved',
        type: 'success',
      });
      if (data.deleted && response) {
        let updatedSchedule = [
          {
            ...data.payload.DateSchedules,
            Schedules: [...data.payload.arr],
          },
        ];
        store.dispatch(updateSchedule(updatedSchedule));
      }
      return await response.data;
    } catch (err: any) {
      console.log({errorz: err});
      console.log({err: err?.response});
      if (err.response.status === 400) {
        showMessage({
          message: 'The request is invalid.',
          description:
            'Selected Jobsite is already scheduled on selected dates',
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'The request is invalid.',
          description: err.response?.data.error_description,
          type: 'danger',
        });
      }
      throw err.response?.data.error_description;
    }
  },
);

export const publishSchedule = createAsyncThunk(
  'createApiCallsSlice/PublishSchedule',
  async (data: any) => {
    // console.log({data: JSON.stringify(data)});
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/PublishSchedule`,
      };
      const response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: data.message
          ? data.message
          : response.data ?? 'Schedule Published',
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      console.log({errorz: err.response});
      showMessage({
        message: 'The request is invalid.',
        description: err.response?.data.error_description,
        type: 'danger',
      });
      throw err.response?.data.error_description;
    }
  },
);

export const saveBulkTimeTracked = createAsyncThunk(
  'createApiCallsSlice/saveBulkTimeTracked',
  async (data: any) => {
    try {
      let payload = {
        data: data.clockOutPayload,
        url: `${rootUrl}/api/timeTracked/saveBulkTimeTracked`,
      };
      let response: any = await postWithJson(payload);
      if (response) {
        let payload2 = {
          data: data.clockInPayload,
          url: `${rootUrl}/api/timeTracked/saveBulkTimeTracked`,
        };
        let response2 = await postWithJson(payload2);
        if (response2) {
          let payload = {
            data: data.Schedule,
            url: `${rootUrl}/api/cmdsched/saveSchedule`,
          };
          let response3: any = await postWithJson(payload);
          if (response3) {
            let payload = {
              data: data.Schedule.payload,
              url: `${rootUrl}/api/cmdsched/saveSchedule`,
            };
            let response4: any = await postWithJson(payload);
            showMessage({
              message: 'Success',
              description: response4?.data ?? 'Schedule Saved',
              type: 'success',
            });
            return await response4.data;
          }
        }
      }
      //
    } catch (err: any) {
      console.log({errorz: err});
      if (err.response.status === 400) {
        showMessage({
          message: 'The request is invalid.',
          description: 'Selected Jobsite is already scheduled on selected date',
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'The request is invalid.',
          description: err.response?.data.error_description,
          type: 'danger',
        });
      }
      throw err.response?.data.error_description;
    }
  },
);
const initialState: initialState = {
  createScheduleLoading: false,
  publishScheduleLoading: null,
};

const createApiCallsSlice = createSlice({
  name: 'CreateApiCalls',
  initialState: initialState,
  reducers: {
    resetState(state) {
      console.log('runnnnnnnnn');
      state.createScheduleLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveBulkTimeTracked.pending, state => {
      state.createScheduleLoading = true;
    });
    builder.addCase(saveBulkTimeTracked.fulfilled, (state, action: any) => {
      state.createScheduleLoading = false;
      setTimeout(() => {
        RootNavigation.navigate('Main', {});
      }, 1);
    });
    builder.addCase(saveBulkTimeTracked.rejected, (state, error: any) => {
      state.createScheduleLoading = false;
      console.log({publishScheduleLoadingErr: error});
    });

    builder.addCase(publishSchedule.pending, state => {
      state.publishScheduleLoading = true;
    });
    builder.addCase(publishSchedule.fulfilled, (state, action: any) => {
      state.publishScheduleLoading = false;
    });
    builder.addCase(publishSchedule.rejected, (state, error: any) => {
      state.publishScheduleLoading = false;
      console.log({publishScheduleLoadingErr: error});
    });

    builder.addCase(createSchedule.pending, state => {
      state.createScheduleLoading = true;
    });
    builder.addCase(createSchedule.fulfilled, (state, action: any) => {
      state.createScheduleLoading = false;
      setTimeout(() => {
        RootNavigation.navigate('Main', {});
      }, 1);
    });
    builder.addCase(createSchedule.rejected, (state, error: any) => {
      state.createScheduleLoading = false;
      console.log({createScheduleLoading: error});
    });
  },
});
export const {resetState} = createApiCallsSlice.actions;

export default createApiCallsSlice.reducer;
