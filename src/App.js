import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <AppRoutes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
