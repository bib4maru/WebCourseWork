import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Theme";
import "./styles/App.css"
import UserLayout from "./Components/UI/Layout/UserLayout";
import Main from "./Pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserLayout>
        <Main/>
      </UserLayout>
    </ThemeProvider>
  );
}

export default App;
