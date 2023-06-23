import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Theme";
import "./styles/App.css"
import UserLayout from "./Components/UI/Layout/UserLayout";
import AppRouter from "./Components/AppRouter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
