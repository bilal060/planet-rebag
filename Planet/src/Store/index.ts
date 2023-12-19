/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../Store/rootReducer';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   timeout: 100000,
//   stateReconciler: autoMergeLevel2,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 9000,
      },
      //     immutableCheck: {warnAfter: 9000},

      // devTools: process.env.NODE_ENV !== 'production',
    }),
});
// export const persistor = persistStore(store);
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
