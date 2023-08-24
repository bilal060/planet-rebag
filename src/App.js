import "./App.css";
import "../src/assets/css/modal.css";

import { BrowserRouter as Router } from "react-router-dom";
import NavigationRoutes from "./routes/NavigationRoutes";
import ErrorBoundary from "./shared/ErrorBoundary";
import ErrorBoundaryAlert from "./shared/ErrorBoundaryAlert";
import { Suspense } from "react";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
      <Suspense fallback="Loading...">
        <Router>
          <NavigationRoutes />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
