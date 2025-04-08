import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standardTheme ';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
