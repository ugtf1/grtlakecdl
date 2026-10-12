// ================================================================
// COMING SOON MODE
// When ready to launch the full site, replace <ComingSoon />
// with the original content below (commented out).
// ================================================================
import ComingSoon from "./components/ComingSoon";

// --- Original imports (uncomment when launching) ---
// import { Suspense, lazy } from "react";
// import { AuthProvider } from "./context/AuthContext";
// const AppRoutes = lazy(() => import("./routes/AppRoutes"));

function App() {
  // --- COMING SOON MODE ---
  return <ComingSoon />;

  // --- FULL SITE MODE (uncomment below, comment out above) ---
  // return (
  //   <AuthProvider>
  //     <div className="App">
  //       <Suspense fallback={null}>
  //         <AppRoutes />
  //       </Suspense>
  //     </div>
  //   </AuthProvider>
  // );
}

export default App;
