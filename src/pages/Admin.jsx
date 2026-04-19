import React, { Suspense } from "react";

// Lazy load the heavy components
const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Application = React.lazy(() => import("../components/Appplication"));

export default function Admin() {
  return (
    <div>
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>

      {/* Uncomment if you want Application to load lazily too */}
      {/* 
      <Suspense fallback={<div>Loading Application...</div>}>
        <Application />
      </Suspense> 
      */}
    </div>
  );
}
