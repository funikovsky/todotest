import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../interfaces/Project.interface';

export interface SubDescText {
  id: string;
  text: string;
}

export interface ISubDesc {
  [key: string]: Array<SubDescText>;
}

interface IProjectsState {
  data: Array<Project>;
  subDescData: ISubDesc;
}

const initialState: IProjectsState = {
  data: [],
  subDescData: {},
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<string>) => {
      state.data = [...state.data, { projectTitle: action.payload, tasks: [] }];
    },
    dellProject: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item, index) => index !== action.payload - 1);
    },
    addTask: (state, action) => {
      const { indexProject, item } = action.payload;

      state.data[indexProject].tasks = [...state.data[action.payload.indexProject].tasks, item];
    },
    addSubDescr: (state, action) => {
      state.subDescData = { ...state.subDescData, ...action.payload };
    },
    addSubDescrByID: (state, action) => {
      state.subDescData[action.payload.id].push(action.payload.text);
      console.log(state.subDescData);
    },
  },
});

export const { addProject, dellProject, addTask, addSubDescrByID, addSubDescr } =
  projectsSlice.actions;
export default projectsSlice.reducer;
