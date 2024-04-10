import { store } from '../store/store.js'
import './App.css'

export const App = () => {
  return (
    <div className="app">
      Hello Dani
      {store.getState().bears}
    </div>
  )
}