import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectsSlice from './slice/ProjectsSlice';

const rootReducer = combineReducers({
  projects: projectsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
