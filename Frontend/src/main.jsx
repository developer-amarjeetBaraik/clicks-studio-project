import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePageLayout from './layouts/HomePageLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLayout />
  }
],
  {
    future: {
      v7_relativeSplatPath: true,          // Changes relative route resolution within splat routes
      v7_fetcherPersist: true,             // Changes persistence behavior of fetchers
      v7_normalizeFormMethod: true,        // Normalizes casing of `formMethod` fields to uppercase
      v7_partialHydration: true,           // Changes RouterProvider hydration behavior
      v7_skipActionErrorRevalidation: true // Changes revalidation behavior after 4xx/5xx action responses
    },
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider future={{ v7_startTransition: true, }} router={router} />
  </StrictMode>,
)
