import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider'
// import App from './App.jsx'
import './index.css'
import router from './router.jsx'
import { Provider } from 'react-redux'
import store from './redux/redux-store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider>
      
        <RouterProvider router={router} />
      
    </ContextProvider>
    </Provider>
  </React.StrictMode>
)