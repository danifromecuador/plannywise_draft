// src/tasks/tasks_logic.js



export const addCompletedTask = (set, input) => {
  set((state) => ({ completedTasks: [...state.completedTasks, { interval: 222, text: input }] }))
}