import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <App /> */}
    <ToastContainer />
    <RouterProvider router={router} />
  </ThemeProvider>
)
