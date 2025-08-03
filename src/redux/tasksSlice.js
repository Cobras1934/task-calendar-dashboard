import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,

    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (task) => ({
        payload: { id: nanoid(), ...task },
      }),
    },

    editTask: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },

    deleteTask: (state, action) => {
      const idToDelete = String(action.payload);
      return state.filter((t) => String(t.id) !== idToDelete);
    },
  },
});

export const { setTasks, addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;





