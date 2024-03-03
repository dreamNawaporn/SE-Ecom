import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router'
import {RouterProvider} from "react-router-dom";
import "./App.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
