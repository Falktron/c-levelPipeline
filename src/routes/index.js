// Authentication related pages
import Login from "../pages/Authentication/Login.svelte";
import Register from "../pages/Authentication/Register.svelte";

// Dashboard
import Dashboard from "../pages/Dashboard/index.svelte";


// Pipelines
import targetAudience from "../pages/Pipelines/targetAudience.svelte";
import businessModel from "../pages/Pipelines/businessModel.svelte";
import marketingResearch from "../pages/Pipelines/marketingResearch.svelte";
import brandIdentity from "../pages/Pipelines/brandIdentity.svelte";



const authProtectedRoutes = [
  { path: "/", component: Dashboard },
  { path: "/index", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
 

  // Pipeline
  { path: "/targetAudience", component: targetAudience },
  { path: "/businessModel", component: businessModel },
  { path: "/marketingResearch", component: marketingResearch},
  { path: "/brandIdentity", component: brandIdentity}


];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },

];

const MOCK_DATA = {
  authProtectedRoutes,
  publicRoutes,
};

export default MOCK_DATA;