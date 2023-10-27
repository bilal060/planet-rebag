import "./App.css";
import "../src/assets/css/modal.css";

import { BrowserRouter as Router } from "react-router-dom";
import NavigationRoutes from "./routes/NavigationRoutes";
import ErrorBoundary from "./shared/ErrorBoundary";
import ErrorBoundaryAlert from "./shared/ErrorBoundaryAlert";
import Loading from "./shared/Loading";
import { Suspense } from "react";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state?.app.isLoading);
  return (
    <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
      <Suspense fallback={<Loading />}>
        <Router>
          {isLoading && <Loading />}
          <NavigationRoutes />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
