import { Suspense, lazy } from "react";
import { AuthProvider } from "./context/AuthContext";

const AppRoutes = lazy(() => import("./routes/AppRoutes"));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

export default App;
