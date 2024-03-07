import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Definimos las props que aceptará nuestro ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode; // La propiedad children es cualquier contenido JSX que pasemos al ThemeProvider
}


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const theme = {
    colors: {
      primary: '#F2F2F2', 
      secondary: '#B4D9CB', 
    },
  };
  

  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
