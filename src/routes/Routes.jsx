import { Routes as AppRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <AppRouter>
        <Route path="/" element={<Home />} />
      </AppRouter>
    </>
  );
};

export default Routes;
