// src/tasks/tasks_logic.js

import { previousInterval } from "../alarm/alarm_logic";
import { TaskStore } from "../store/store"

export const addCompletedTask = (set, input) => {
  const tasks = TaskStore.getState().completedTasks
  if (tasks.length === 0) {
    set((state) => ({ completedTasks: [...state.completedTasks, { interval: previousInterval(), text: input }] }))
  }
  if (tasks.length > 0 && tasks[tasks.length - 1].interval !== previousInterval()) {
    set((state) => ({ completedTasks: [...state.completedTasks, { interval: previousInterval(), text: input }] }))
  }
}

