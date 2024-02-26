import React from 'react'
// import {Route, Routes} from "react-router-dom"
// import { QueryClient, QueryClientProvider } from 'react-query'
// import {ReactQueryDevtools} from "react-query/devtools"
import Navbar from './Navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
function App1() {
   
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <ToastContainer />
    </div>

  )
}

export default App1