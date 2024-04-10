// src/store/store.js

import { create } from 'zustand'

export const store = create(() => ({
  bears: 2,
}))

export const AlarmStore = create(()=>({
  interval: 15,
}))