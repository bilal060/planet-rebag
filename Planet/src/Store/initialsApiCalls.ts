import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {post, get} from './services/api';
import {rootUrl} from '../utils/constants';
import {showMessage} from 'react-native-flash-message';

import {
  IDashBoard,
  IJobClassification,
  IAbsentCode,
  ITimeTracked,
  IEmployee,
} from './interface';
import { Alert } from 'react-native';

export const getDashBoard = createAsyncThunk(
  'cmdsched/getDashBoard',
  async (data: object) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/getDashBoard`,
        data: data,
      };
      const response: any = await post(payload);
      return (response.data as IDashBoard) ?? {};
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getJobClassificationsById = createAsyncThunk(
  'api/lookup/jobClassifications',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/jobClassifications/${businessId}`,
      };
      const response: any = await get(payload);
      return (response.data as IJobClassification) ?? [];
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);
export const getJobsites = createAsyncThunk(
  'api/lookup/jobSites',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/jobSites/${businessId}`,
      };
      const response: any = await get(payload);
      return (response.data as IJobClassification) ?? [];
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);
export const getAbsentCodes = createAsyncThunk(
  'api/lookup/absentcodes',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/absentcodes/${businessId}`,
      };
      const response: any = await get(payload);
      return (response.data as IAbsentCode) ?? [];
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getWhosOnTheClock = createAsyncThunk(
  'api/timeTracked/getWhoseOnTheClock',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/timeTracked/getWhoseOnTheClock/${businessId}`,
      };
      const response: any = await get(payload);
      return (response.data as ITimeTracked) ?? [];
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getEmployeesById = createAsyncThunk(
  'api/lookup/employees',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/employees/${businessId}`,
      };
    
      const response: any = await get(payload);
     console.log("2")
      console.log(JSON.stringify(response))
      console.log("33332222")
      
      return (response.data as IEmployee) ?? [];
    } catch (err: any) {
      //console.log({err})
      throw err.response?.data.error_description;
    }
  },
);
export const getTeams = createAsyncThunk(
  'api/lookup/teams',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/teams/${businessId}`,
      };
      //console.log({payload})
      const response: any = await get(payload);
      // //console.log({response})
      return (response.data as IEmployee) ?? [];
    } catch (err: any) {
      console.log({err});
      throw err.response?.data.error_description;
    }
  },
);
export const getBusiness = createAsyncThunk(
  'api/lookup/getbusiness',
  async (CompanyId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/getbusiness`,
      };
      //console.log({payload})
      const response: any = await get(payload);
      // //console.log({response})
      let business = (response.data ? response.data : []).filter(
        (x: any) => x.Id === CompanyId,
      )[0];

      return business;
    } catch (err: any) {
      console.log({err});
      throw err.response?.data.error_description;
    }
  },
);

export const getTeamTimeTracks = createAsyncThunk(
  'api/timeTracked/getTeamTimeTracks',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/timeTracked/getTeamTimeTracks`,
        data: data,
      };
      //console.log({payload})
    
      const response: any = await post(payload);
      // //console.log({response})
      return (response.data as IEmployee) ?? [];
    } catch (err: any) {
      console.log({err});
      throw err.response?.data.error_description;
    }
  },
);

export const saveTimeTracked = createAsyncThunk(
  'api/timeTracked/saveTimeTracked',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/timeTracked/saveTimeTracked`,
        data: data,
      };
      //console.log({payload})
      const response: any = await post(payload);
   //initialState.saveTimeTrackedLoading= false;
 //initialState.teamTimeTracksLoadingfalse
      // //console.log({response})
      if (response.data.Valid) {
      

        showMessage({
          message: 'Notification',
          description: data.message? data.message:response.data.Message,
          type: 'success',
        });
        return response.data ?? [];
      } else {
        showMessage({
          message: 'Fail',
          description: "Cannot Clock In/Out Employee because this would overlapped with an existing Clock In/Out record.",
          type: 'danger',
        });
        throw response.data;
      }
    } catch (err: any) {
     console.log(err?.response?.data);
      Object.keys(err?.response?.data?.ModelState).forEach((state: string) => {
        let message: string = err?.response?.data?.ModelState[state][0];
        showMessage({
          message:  'Error',
          description: message,
          type: 'danger',
          duration:6000
        });
      });
      throw err;
    }
  },
);

const initialState = {
  DateSchedules: [],
  Employees: [],
  // JobClassifications: [],
  JobClassifications: [],
  Jobsites: [],
  JobsitesLoading: false,
  AbsentCodes: [],
  WhosOnTheClock: [],
  IEmployee: [],
  IEmployeeLoading:false,
  getDashBoardLoading: true,
  ITeam: [],
  Business: [],
  TeamTimeTracks: null,
  saveTimeTrackedRes: null,
  saveTimeTrackedLoading: false,
  teamTimeTracksLoading:false,
  InTime : null,
  OutTime: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    updateSchedule(state, action) {
      state.DateSchedules = action.payload;
    },
    updateTimeTrackedRes(state) {
      state.saveTimeTrackedRes = null;
      state.TeamTimeTracks = null;
    },
 // },
  stopLoader(state) {
       state.saveTimeTrackedLoading = false;
       state.teamTimeTracksLoading = false;
  },
  saveInOutTime(state, action) {
  //  Alert.alert(action)
 // console.log(action.payload)
    state.InTime= action.payload.Intime == null? null: action.payload.Intime.toString();
   state.OutTime= action.payload.outTime == null  ? null : action.payload.outTime.toString()
},
 },

  extraReducers: builder => {
    builder.addCase(saveTimeTracked.pending, (state, action: any) => {
      state.saveTimeTrackedLoading = true;
    });

    builder.addCase(saveTimeTracked.fulfilled, (state, action: any) => {
      state.saveTimeTrackedRes = action.payload;
       state.saveTimeTrackedLoading = false;
       state.teamTimeTracksLoading = false;
    });
    builder.addCase(saveTimeTracked.rejected, (state, error: any) => {
      console.log({errorsaveTimeTrackedRes: error});
       state.saveTimeTrackedLoading = false;
       state.teamTimeTracksLoading = false;
       state.saveTimeTrackedRes = error;
    });

    builder.addCase(getTeamTimeTracks.pending, (state, action: any) => {
      
      state.teamTimeTracksLoading = true
    });

    builder.addCase(getTeamTimeTracks.fulfilled, (state, action: any) => {
      state.TeamTimeTracks = action.payload;
       state.teamTimeTracksLoading = false
       state.saveTimeTrackedLoading = false;
      
    });
    builder.addCase(getTeamTimeTracks.rejected, (state, error: any) => {
       state.teamTimeTracksLoading = false;
       state.saveTimeTrackedLoading = false;
      // Alert.alert("3")
      // state.TeamTimeTracks = error;
      console.log("2332222osama")
      console.log({errorgetTeamTimeTracks: error});
    });

    builder.addCase(getBusiness.pending, (state, action: any) => {});

    builder.addCase(getBusiness.fulfilled, (state, action: any) => {
      state.Business = action.payload;
      // state.Employees = action.payload.Employees;
      // state.JobClassifications = action.payload.JobClassifications;
    });
    builder.addCase(getBusiness.rejected, (state, error: any) => {
      console.log({errorBusiness: error});
    });
    builder.addCase(getDashBoard.pending, (state, action: any) => {
      state.getDashBoardLoading = true;
    });

    builder.addCase(getDashBoard.fulfilled, (state, action: any) => {
      state.getDashBoardLoading = false;
      state.DateSchedules = action.payload.DateSchedules;
      // state.Employees = action.payload.Employees;
      // state.JobClassifications = action.payload.JobClassifications;
    });
    builder.addCase(getDashBoard.rejected, (state, error: any) => {
      //console.log({ errorGetDashBoard: error })
      state.getDashBoardLoading = false;
    });

    builder.addCase(
      getJobClassificationsById.fulfilled,
      (state, action: any) => {
        state.JobClassifications = action.payload;
        // console.log({xx:action.payload})
      },
    );
    builder.addCase(getJobClassificationsById.rejected, (state, error: any) => {
      //console.log({ errorJobClassification: error })
    });
    builder.addCase(getJobsites.pending, (state, action: any) => {
     // Alert.alert("1")
      state.JobsitesLoading = true;
    });
    builder.addCase(getJobsites.fulfilled, (state, action: any) => {
    //  Alert.alert("2")
      state.Jobsites = action.payload;
      state.JobsitesLoading = false;
    });
    builder.addCase(getJobsites.rejected, (state, error: any) => {
      //console.log({ errorJobsites: error })
    //  Alert.alert("3")
      state.JobsitesLoading = false;
    });

    builder.addCase(getAbsentCodes.fulfilled, (state, action: any) => {
      state.AbsentCodes = action.payload;
    });
    builder.addCase(getAbsentCodes.rejected, (state, error: any) => {
      //console.log({ errorAbsentCodes: error })
    });
    builder.addCase(getWhosOnTheClock.fulfilled, (state, action: any) => {
      state.WhosOnTheClock = action.payload;
    });
    builder.addCase(getWhosOnTheClock.rejected, (state, error: any) => {
      //console.log({ errorWhosOnTheClock: error })
    });
    builder.addCase(getEmployeesById.pending, (state, action: any) => {
      state.IEmployeeLoading = true
    });
    builder.addCase(getEmployeesById.fulfilled, (state, action: any) => {
      state.IEmployee = action.payload;
      state.IEmployeeLoading = false
    });
    builder.addCase(getEmployeesById.rejected, (state, error: any) => {
      //console.log({ errorIEmployee: error })
      state.IEmployeeLoading = false
    });
    builder.addCase(getTeams.fulfilled, (state, action: any) => {
      state.ITeam = action.payload;
    });
    builder.addCase(getTeams.rejected, (state, error: any) => {
      console.log({errorITeam: error});
    });
  },
});

export const {updateSchedule, updateTimeTrackedRes,stopLoader,saveInOutTime} = dashboardSlice.actions;

export default dashboardSlice.reducer;
