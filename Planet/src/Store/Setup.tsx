import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postWithJson, deleteApi, get} from './services/api';
import {showMessage} from 'react-native-flash-message';
import {rootUrl} from '../utils/constants';
import { Alert } from 'react-native';
import { logout } from './auth';

import {store} from './index'


export const saveStatus = createAsyncThunk(
  'setupApiCallsSlice/saveStatus',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveStatus`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);
export const deleteStatus = createAsyncThunk(
  'setupApiCallsSlice/deleteStatus',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteStatus/${data.Absentcode}`,
      };
      let response: any = await deleteApi(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        // description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);
export const getExpenseType = createAsyncThunk(
  'api/lookup/expenseTypes',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/expenseTypes/${businessId}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);
export const saveExpenseTypes = createAsyncThunk(
  'setupApiCallsSlice/saveExpenseType',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveExpenseType`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const deleteExpenseType = createAsyncThunk(
  'setupApiCallsSlice/deleteExpenseType',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteExpenseType/${data.Id}`,
      };
      let response: any = await deleteApi(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        // description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const getExpenseUnit = createAsyncThunk(
  'api/lookup/GetExpenseUnits',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/GetExpenseUnits/${businessId}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);
export const saveExpenseUnit = createAsyncThunk(
  'setupApiCallsSlice/saveExpenseUnit',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveExpenseUnit`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const deleteExpenseUnit = createAsyncThunk(
  'setupApiCallsSlice/deleteExpenseUnit',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteExpenseUnit/${data.Id}`,
      };
      let response: any = await deleteApi(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        // description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);
export const saveJobClassification = createAsyncThunk(
  'setupApiCallsSlice/saveJobClassification',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveJobClassification`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err?.response?.data.Message ?? 'Server Error',
        type: 'danger',
      });
      throw err.response;
    }
  },
);
export const deleteJobClassification = createAsyncThunk(
  'setupApiCallsSlice/deleteJobClassification',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteJobClassification/${data.Id}`,
      };
      let response: any = await deleteApi(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        // description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const getMaterials = createAsyncThunk(
  'api/lookup/getMaterials',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/getMaterials/${businessId}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const saveMaterial = createAsyncThunk(
  'setupApiCallsSlice/saveMaterial',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveMaterial`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const deleteMaterial = createAsyncThunk(
  'setupApiCallsSlice/deleteMaterial',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteMaterial/${data.Id}`,
      };
      let response: any = await deleteApi(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        // description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const saveEmployee = createAsyncThunk(
  'setupApiCallsSlice/saveEmployee',
  async (data: any) => {
 //   console.log(data);
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveEmployee`,
      };
      
      let response: any = await postWithJson(payload);
    //  console.log(response);
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      //console.log("error occurred");
      //console.log(err?.response);
    //  Alert.alert("222")
      console.log(err?.response?.data.ModelState);

      // showMessage({
      //   message: "Simple message",
      //   type: "info",
      // });
      //return await err.response.data;
    
      throw err.response.data?.ModelState;
      
    // return err?.response?.data.ModelState;



      if (err?.response.status == 400)
      {Object.keys(err?.response?.data.ModelState).forEach((state: string) => {
        console.log(state);
       // let message: string = err?.response?.data.ModelState[state][0];
      //  console.log(message);     
        showMessage({
          message:  'Error',
          description:err?.response?.data.ModelState[state][0],
          type: 'danger',
          duration:6000
        }); 
        
        //throw err;             
      });
     // throw err;
     throw err.response;
      }
      else
      {
        showMessage({
        message: 'Error',
        description: err.response.data.Message,
        type: 'danger',
      });
      throw err.response;

      }
      
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  'api/cmdsched/deleteEmployee',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteEmployee/`,
        data: data,
      };
      const response: any = await postWithJson(payload);
      console.log(JSON.stringify( response));
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return response.data;
    } catch (err: any) {
      //console.log(JSON.stringify( err.response?.data?.Message));
      showMessage({
        message: 'Error',
        description: err.response?.data?.Message,
        type: 'danger',
      });
      throw err.response?.data;
    }
  },
);
export const getVendors = createAsyncThunk(
  'api/lookup/vendors',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/vendors/${businessId}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const deleteEmployeeCaseApi = createAsyncThunk(
  'api/getEmployeeDeleteRights',
  async (employeeId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/getEmployeeDeleteRights/${employeeId}`,
      };
      const response: any = await get(payload);
   //   console.log(JSON.stringify(response));
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const deleteEmployeeCaseApiDrawer = createAsyncThunk(
  'api/getEmployeeDeleteRightsDrawer',
  async (employeeId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/getEmployeeDeleteRights/${employeeId}`,
      };
      const response: any = await get(payload);
   //   console.log(JSON.stringify(response));
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const deleteCompanyAdminApi = createAsyncThunk(
  'api/cmdsched/deleteDataAdmin',
  async (employeeId: number) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteData/${employeeId}`,
      };
      const response: any = await deleteApi(payload);
     // console.log(JSON.stringify(response));
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return response.data;
    
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const EmployeeDeleteRequest = createAsyncThunk(
  'api/getEmployeeDeleteRequest',
  async (employeeId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/sendEmployeeDeleteRequest/${employeeId}`,
      };
      const response: any = await get(payload);
   //   console.log(JSON.stringify(response));
 //  console.log(JSON.stringify( response));
 //Alert.alert(response?.data?.Valid.toString())
 if(response?.data?.Valid)
 {
   showMessage({
     message: 'Notification',
     description: response?.data?.Message,
     type: 'success',
   });
   store.dispatch(logout());
  }
  else{
    showMessage({
      message: 'The request is invalid.',
      description: response?.data?.Message,
      type: 'danger',
    });
  }
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const deleteVendors = createAsyncThunk(
  'api/cmdsched/deleteVendors',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteVendor/${data.Id}`,
      };
      const response: any = await deleteApi(payload);
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);
export const saveVendor = createAsyncThunk(
  'setupApiCallsSlice/saveVendor',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveVendor`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const saveJobsite = createAsyncThunk(
  'setupApiCallsSlice/saveJobsite',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/saveJobsite`,
      };
      let response: any = await postWithJson(payload);

      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const jobsiteDailyNoteAndPhotos = createAsyncThunk(
  'setupApiCallsSlice/jobsiteDailyNoteAndPhotos',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/jobsiteDailyNoteAndPhotos/${data.JobsiteId}`,
      };
      let response: any = await get(payload);

      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const deleteJobsite = createAsyncThunk(
  'api/cmdsched/deleteJobsite',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteJobsite/${data.Id}`,
      };
      const response: any = await deleteApi(payload);
      showMessage({
        message: 'Notification',
        description: response.data,
        type: 'success',
      });
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getReportClockedInClockedOutTimeTracking = createAsyncThunk(
  'setupApiCallsSlice/getReportClockedInClockedOutTimeTracking',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/timeTracked/getReportClockedInClockedOutTimeTracking`,
      };
      let response: any = await postWithJson(payload);
      console.log(response.data);
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const getHideReportClockedInClockedOutTimeTracking = createAsyncThunk(
  'setupApiCallsSlice/getHideReportClockedInClockedOutTimeTracking',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/timeTracked/getEmployeeTimeTracks`,
      };
      let response: any = await postWithJson(payload);
      console.log(response.data);
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);
export const getExpenseEntryList = createAsyncThunk(
  'api/lookup/expenses',
  async (businessId: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/expenses/${businessId}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getVendorsApprovedMaterial = createAsyncThunk(
  'api/lookup/vendorsApprovedMaterial',
  async (Id: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/vendorsApprovedMaterial/${Id}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const getUnits = createAsyncThunk(
  'api/lookup/GetUnits',
  async (Id: string) => {
    try {
      let payload = {
        url: `${rootUrl}/api/lookup/GetUnits/${Id}`,
      };
      const response: any = await get(payload);
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

export const SaveExpenses = createAsyncThunk(
  'api/cmdsched/SaveExpenses',
  async (data: any) => {
    try {
      let payload = {
        data: data,
        url: `${rootUrl}/api/cmdsched/SaveExpenses`,
      };
      let response: any = await postWithJson(payload);
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return await response.data;
    } catch (err: any) {
      showMessage({
        message: 'Error',
        description: err.response.data,
        type: 'danger',
      });
      throw err.response;
    }
  },
);

export const deleteExpense = createAsyncThunk(
  'api/cmdsched/deleteExpense',
  async (data: any) => {
    try {
      let payload = {
        url: `${rootUrl}/api/cmdsched/deleteExpense/${data.Id}`,
      };
      const response: any = await deleteApi(payload);
      showMessage({
        message: 'Notification',
        description: response.data.Message,
        type: 'success',
      });
      return response.data;
    } catch (err: any) {
      throw err.response?.data.error_description;
    }
  },
);

interface initialState {
  saveStatusLoading: boolean | null;
  deleteStatusLoading: boolean | null;
  getExpenseTypeLoading: boolean | null;
  ExpenseTypeList: Array<any>;
  saveExpenseTypesLoading: boolean | null;
  deleteExpenseTypeLoading: boolean | null;
  ExpenseUnitList: Array<any>;
  saveExpenseUnitLoading: boolean | null;
  deleteExpenseUnitLoading: boolean | null;
  getExpenseUnitLoading: boolean | null;
  saveJobClassificationLoading: boolean | null;
  deleteJobClassificationLoading: boolean | null;
  getMaterialsLoading: boolean | null;
  MaterialsList: Array<any>;
  saveMaterialLoading: boolean | null;
  deleteMaterialLoading: boolean | null;
  saveEmployeeLoading: boolean | null;
  deleteEmployeeLoading: boolean | null;
  adminEmployeeDeleted: boolean | null;
  getVendorsListLoading: boolean | null;
  VendordList: Array<any>;
  deleteVendordLoading: boolean | null;
  saveVendorLoading: boolean | null;
  saveJobsiteLoading: boolean | null;
  DailyNoteAndPhotos: null;
  DailyNoteAndPhotosLoading: boolean;
  deleteJobsiteLoading: boolean | null;
  getReportClockedInClockedOutTimeTrackingLoading: boolean | null;
  getReportClockedInClockedOutTimeTrackingRes: any;
  getReportHideClockedInClockedOutTimeTrackingRes: any;
  deleteEmployeeCaseData : any;
  deleteEmployeeCaseDataDrawer : any;
  getExpenseEntryListLoading: boolean | null;
  ExpenseEntryList: Array<any>;
  vendorsApprovedMaterialList: Array<any>;
  getUnitsList: Array<any>;
  SaveExpensesLoading: boolean | null;
  deleteExpenseLoading: boolean | null;
}
const initialState: initialState = {
  saveStatusLoading: false,
  deleteStatusLoading: false,
  getExpenseTypeLoading: false,
  ExpenseTypeList: [],
  saveExpenseTypesLoading: false,
  deleteExpenseTypeLoading: false,
  ExpenseUnitList: [],
  saveExpenseUnitLoading: false,
  deleteExpenseUnitLoading: false,
  getExpenseUnitLoading: false,
  saveJobClassificationLoading: false,
  deleteJobClassificationLoading: false,
  getMaterialsLoading: false,
  MaterialsList: [],
  saveMaterialLoading: false,
  deleteMaterialLoading: false,
  saveEmployeeLoading: false,
  deleteEmployeeLoading: false,
  adminEmployeeDeleted : false,
  getVendorsListLoading: false,
  VendordList: [],
  deleteEmployeeCaseData : null,
  deleteEmployeeCaseDataDrawer : null,
  deleteVendordLoading: false,
  saveVendorLoading: false,
  saveJobsiteLoading: false,
  DailyNoteAndPhotos: null,
  DailyNoteAndPhotosLoading: false,
  deleteJobsiteLoading: false,
  getReportClockedInClockedOutTimeTrackingLoading: false,
  getReportClockedInClockedOutTimeTrackingRes: null,
  getReportHideClockedInClockedOutTimeTrackingRes: null,
  getExpenseEntryListLoading: null,
  ExpenseEntryList: [],
  vendorsApprovedMaterialList: [],
  getUnitsList: [],
  SaveExpensesLoading: false,
  deleteExpenseLoading: false,
};

const setupApiCallsSlice = createSlice({
  name: 'setupApiCalls',
  initialState: initialState,
  reducers: {
    resetState(state) {
      state.saveStatusLoading = false;
      state.deleteStatusLoading = false;
      state.saveExpenseTypesLoading = false;
      state.deleteExpenseTypeLoading = false;
      state.saveExpenseUnitLoading = false;
      state.saveJobClassificationLoading = false;
      state.deleteJobClassificationLoading = false;
      state.saveMaterialLoading = false;
      state.deleteMaterialLoading = false;
      state.saveEmployeeLoading = false;
      state.deleteEmployeeLoading = false;
      state.adminEmployeeDeleted = false;
      state.deleteVendordLoading = false;
      state.saveVendorLoading = false;
      state.saveJobsiteLoading = false;
      state.DailyNoteAndPhotos = null;
      state.DailyNoteAndPhotosLoading = false;
      state.getUnitsList = [];
      state.vendorsApprovedMaterialList = [];
      state.SaveExpensesLoading = false;
      state.deleteExpenseLoading = false;
    },
    stopLoader(state) {
      state.getExpenseEntryListLoading = false;
      state.deleteExpenseLoading = false;
 },
 cleardeleteEmployeeCaseApi(state) {
   state.deleteEmployeeCaseData = null;
 // state.deleteExpenseLoading = false;
},

  },
  extraReducers: builder => {
    builder.addCase(deleteExpense.pending, state => {
      state.deleteExpenseLoading = true;
    });
    builder.addCase(deleteExpense.fulfilled, (state, action: any) => {
      state.deleteExpenseLoading = null;
    });
    builder.addCase(deleteExpense.rejected, (state, error: any) => {
      state.deleteExpenseLoading = false;
    });

    builder.addCase(SaveExpenses.pending, state => {
      state.SaveExpensesLoading = true;
    });
    builder.addCase(SaveExpenses.fulfilled, (state, action: any) => {
      state.SaveExpensesLoading = null;
    });
    builder.addCase(SaveExpenses.rejected, (state, error: any) => {
      state.SaveExpensesLoading = false;
    });

    builder.addCase(getUnits.fulfilled, (state, action: any) => {
      state.getUnitsList = action.payload;
    });

    builder.addCase(
      getVendorsApprovedMaterial.fulfilled,
      (state, action: any) => {
        state.vendorsApprovedMaterialList = action.payload;
      },
    );

    builder.addCase(getExpenseEntryList.pending, state => {
      state.getExpenseEntryListLoading = true;
    });
    builder.addCase(getExpenseEntryList.fulfilled, (state, action: any) => {
      state.getExpenseEntryListLoading = null;
      state.ExpenseEntryList = action.payload;
    });
    builder.addCase(getExpenseEntryList.rejected, (state, error: any) => {
      state.deleteJobsiteLoading = false;
    });

    builder.addCase(getReportClockedInClockedOutTimeTracking.pending, state => {
      state.getReportClockedInClockedOutTimeTrackingLoading = true;
    });
    builder.addCase(
      getReportClockedInClockedOutTimeTracking.fulfilled,
      (state, action: any) => {
        state.getReportClockedInClockedOutTimeTrackingLoading = null;
        state.getReportClockedInClockedOutTimeTrackingRes = action.payload;
      },
    );
    builder.addCase(
      getReportClockedInClockedOutTimeTracking.rejected,
      (state, error: any) => {
        state.deleteJobsiteLoading = false;
      },
    );


    builder.addCase(getHideReportClockedInClockedOutTimeTracking.pending, state => {
      //state.getReportClockedInClockedOutTimeTrackingLoading = true;
    });
    builder.addCase(
      getHideReportClockedInClockedOutTimeTracking.fulfilled,
      (state, action: any) => {
      //  state.getReportClockedInClockedOutTimeTrackingLoading = null;
        state.getReportHideClockedInClockedOutTimeTrackingRes = action.payload;
      },
    );
    builder.addCase(
      getHideReportClockedInClockedOutTimeTracking.rejected,
      (state, error: any) => {
        Alert.alert("error")
       // state.deleteJobsiteLoading = false;
      },
    );

    builder.addCase(deleteJobsite.pending, state => {
      state.deleteJobsiteLoading = true;
    });
    builder.addCase(deleteJobsite.fulfilled, (state, action: any) => {
      state.deleteJobsiteLoading = null;
    });
    builder.addCase(deleteJobsite.rejected, (state, error: any) => {
      state.deleteJobsiteLoading = false;
    });

    builder.addCase(jobsiteDailyNoteAndPhotos.pending, state => {
      state.DailyNoteAndPhotosLoading = true;
    });
    builder.addCase(
      jobsiteDailyNoteAndPhotos.fulfilled,
      (state, action: any) => {
        state.DailyNoteAndPhotosLoading = false;

        state.DailyNoteAndPhotos = action.payload;
      },
    );
    builder.addCase(jobsiteDailyNoteAndPhotos.rejected, (state, error: any) => {
      state.DailyNoteAndPhotos = null;
      state.DailyNoteAndPhotosLoading = false;
    });

    builder.addCase(saveJobsite.pending, state => {
      state.saveJobsiteLoading = true;
    });
    builder.addCase(saveJobsite.fulfilled, (state, action: any) => {
      state.saveJobsiteLoading = null;
    });
    builder.addCase(saveJobsite.rejected, (state, error: any) => {
      state.saveJobsiteLoading = false;
    });

    builder.addCase(saveVendor.pending, state => {
      state.saveVendorLoading = true;
    });
    builder.addCase(saveVendor.fulfilled, (state, action: any) => {
      state.saveVendorLoading = null;
    });
    builder.addCase(saveVendor.rejected, (state, error: any) => {
      state.saveVendorLoading = false;
    });

    builder.addCase(deleteVendors.pending, state => {
      state.deleteVendordLoading = true;
    });
    builder.addCase(deleteVendors.fulfilled, (state, action: any) => {
      state.deleteVendordLoading = null;
    });
    builder.addCase(deleteVendors.rejected, (state, error: any) => {
      state.deleteVendordLoading = false;
    });

    builder.addCase(getVendors.pending, state => {
      state.getVendorsListLoading = true;
    });
    builder.addCase(getVendors.fulfilled, (state, action: any) => {
      state.getVendorsListLoading = null;
      state.VendordList = action.payload;
    });
    builder.addCase(getVendors.rejected, (state, error: any) => {
      state.getVendorsListLoading = false;
    });


    builder.addCase(deleteEmployeeCaseApi.pending, state => {
   
    });
    builder.addCase(deleteEmployeeCaseApi.fulfilled, (state, action: any) => {
 
      state.deleteEmployeeCaseData = action.payload;
    });
    builder.addCase(deleteEmployeeCaseApi.rejected, (state, error: any) => {
    
    });

    
    builder.addCase(deleteEmployeeCaseApiDrawer.pending, state => {
    //  Alert.alert("1333")
    });
    builder.addCase(deleteEmployeeCaseApiDrawer.fulfilled, (state, action: any) => {
      //Alert.alert("333")
      state.deleteEmployeeCaseDataDrawer = action.payload;
    });
    builder.addCase(deleteEmployeeCaseApiDrawer.rejected, (state, error: any) => {
    //  Alert.alert("22333")
    });

    builder.addCase(deleteEmployee.pending, state => {
     // state.deleteEmployeeCaseData = null;
      state.deleteEmployeeLoading = true;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action: any) => {
      state.deleteEmployeeCaseData = null;
      state.deleteEmployeeLoading = null;
    });
    builder.addCase(deleteEmployee.rejected, (state, error: any) => {
      state.deleteEmployeeCaseData = null;
      state.deleteEmployeeLoading = false;
    });


    builder.addCase(deleteCompanyAdminApi.pending, state => {
      state.deleteEmployeeLoading = true;
    });
    builder.addCase(deleteCompanyAdminApi.fulfilled, (state, action: any) => {
      state.deleteEmployeeCaseData = null;
      state.deleteEmployeeLoading = null;
      state.adminEmployeeDeleted = null;
    });
    builder.addCase(deleteCompanyAdminApi.rejected, (state, error: any) => {
      state.deleteEmployeeCaseData = null;
      state.deleteEmployeeLoading = false;
      state.adminEmployeeDeleted = false;
    });




    builder.addCase(saveEmployee.pending, state => {
      state.saveEmployeeLoading = true;
    });
    builder.addCase(saveEmployee.fulfilled, (state, action: any) => {
    //  console.log("2222")
    //  console.log(JSON.stringify(action.payload))
    //  console.log("2222")

    // Alert.alert('233')
    if(action.payload?.Valid == false)
    {
      state.saveEmployeeLoading = false;
    }
    else{
      state.saveEmployeeLoading = null;
    }
    });
    builder.addCase(saveEmployee.rejected, (state, action: any) => {
//console.log(JSON.stringify(action.payload))
      state.saveEmployeeLoading = false;
    });

    builder.addCase(deleteMaterial.pending, state => {
      state.deleteMaterialLoading = true;
    });
    builder.addCase(deleteMaterial.fulfilled, (state, action: any) => {
      state.deleteMaterialLoading = null;
    });
    builder.addCase(deleteMaterial.rejected, (state, error: any) => {
      state.deleteMaterialLoading = false;
    });

    builder.addCase(saveMaterial.pending, state => {
      state.saveMaterialLoading = true;
    });
    builder.addCase(saveMaterial.fulfilled, (state, action: any) => {
      state.saveMaterialLoading = null;
    });
    builder.addCase(saveMaterial.rejected, (state, error: any) => {
      state.saveMaterialLoading = false;
    });

    builder.addCase(getMaterials.pending, state => {
      state.getMaterialsLoading = true;
    });
    builder.addCase(getMaterials.fulfilled, (state, action: any) => {
      state.getMaterialsLoading = false;
      state.MaterialsList = action.payload;
    });
    builder.addCase(getMaterials.rejected, (state, error: any) => {
      state.getMaterialsLoading = false;
    });

    builder.addCase(deleteJobClassification.pending, state => {
      state.deleteJobClassificationLoading = true;
    });
    builder.addCase(deleteJobClassification.fulfilled, (state, action: any) => {
      state.deleteJobClassificationLoading = null;
    });
    builder.addCase(deleteJobClassification.rejected, (state, error: any) => {
      state.deleteJobClassificationLoading = false;
    });

    builder.addCase(saveJobClassification.pending, state => {
      state.saveJobClassificationLoading = true;
    });
    builder.addCase(saveJobClassification.fulfilled, (state, action: any) => {
      state.saveJobClassificationLoading = null;
    });
    builder.addCase(saveJobClassification.rejected, (state, error: any) => {
      state.saveJobClassificationLoading = false;
    });

    builder.addCase(deleteExpenseUnit.pending, state => {
      state.deleteExpenseUnitLoading = true;
    });
    builder.addCase(deleteExpenseUnit.fulfilled, (state, action: any) => {
      state.deleteExpenseUnitLoading = null;
    });
    builder.addCase(deleteExpenseUnit.rejected, (state, error: any) => {
      state.deleteExpenseUnitLoading = false;
    });

    builder.addCase(saveExpenseUnit.pending, state => {
      state.saveExpenseUnitLoading = true;
    });
    builder.addCase(saveExpenseUnit.fulfilled, (state, action: any) => {
      state.saveExpenseUnitLoading = null;
    });
    builder.addCase(saveExpenseUnit.rejected, (state, error: any) => {
      state.saveExpenseUnitLoading = false;
    });

    builder.addCase(getExpenseUnit.pending, state => {
      state.getExpenseUnitLoading = true;
    });
    builder.addCase(getExpenseUnit.fulfilled, (state, action: any) => {
      state.getExpenseUnitLoading = false;
      state.ExpenseUnitList = action.payload;
    });
    builder.addCase(getExpenseUnit.rejected, (state, error: any) => {
      state.getExpenseUnitLoading = false;
    });

    builder.addCase(deleteExpenseType.pending, state => {
      state.deleteExpenseTypeLoading = true;
    });
    builder.addCase(deleteExpenseType.fulfilled, (state, action: any) => {
      state.deleteExpenseTypeLoading = null;
    });
    builder.addCase(deleteExpenseType.rejected, (state, error: any) => {
      state.deleteExpenseTypeLoading = false;
    });

    builder.addCase(saveExpenseTypes.pending, state => {
      state.saveExpenseTypesLoading = true;
    });
    builder.addCase(saveExpenseTypes.fulfilled, (state, action: any) => {
      state.saveExpenseTypesLoading = null;
    });
    builder.addCase(saveExpenseTypes.rejected, (state, error: any) => {
      state.saveExpenseTypesLoading = false;
    });

    builder.addCase(getExpenseType.pending, state => {
      state.getExpenseTypeLoading = true;
    });
    builder.addCase(getExpenseType.fulfilled, (state, action: any) => {
      state.getExpenseTypeLoading = false;
      state.ExpenseTypeList = action.payload;
    });
    builder.addCase(getExpenseType.rejected, (state, error: any) => {
      state.getExpenseTypeLoading = false;
    });

    builder.addCase(saveStatus.pending, state => {
      state.saveStatusLoading = true;
    });
    builder.addCase(saveStatus.fulfilled, (state, action: any) => {
      state.saveStatusLoading = null;
    });
    builder.addCase(saveStatus.rejected, (state, error: any) => {
      state.saveStatusLoading = false;
    });

    builder.addCase(deleteStatus.pending, state => {
      state.deleteStatusLoading = true;
    });
    builder.addCase(deleteStatus.fulfilled, (state, action: any) => {
      state.deleteStatusLoading = null;
    });
    builder.addCase(deleteStatus.rejected, (state, error: any) => {
      state.deleteStatusLoading = false;
    });
  },
});
export const {resetState,stopLoader , cleardeleteEmployeeCaseApi} = setupApiCallsSlice.actions;

export default setupApiCallsSlice.reducer;
