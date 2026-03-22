import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routers'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="open-sans-normal">
<Suspense>

 <RouterProvider router={router}></RouterProvider>
    <ToastContainer autoClose={2000}></ToastContainer>
</Suspense>
    </div>
  </StrictMode>,
)
