// src/store/store.js

import { create } from 'zustand'

export const AlarmStore = create(()=>({
  interval: 15,
}))