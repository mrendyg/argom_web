import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeProvider from './ThemeProvider'; // Importa ThemeProvider desde el archivo correcto
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
