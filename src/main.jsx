import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './Routes/Routers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="open-sans-normal">
<Suspense>

 <RouterProvider router={router}></RouterProvider>
</Suspense>
    </div>
  </StrictMode>,
)
