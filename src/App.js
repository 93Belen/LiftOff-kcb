import { ThemeProvider, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BusinessOwner } from "./components/BusinessOwner/BusinessOwner";
import { HomePage } from "./components/HomePage/HomePage";
import { Searcher } from "./components/Searcher/Searcher";
import { PrivateRouteUser } from "./components/PrivateRoutes/PrivateRouteUser";
import { PrivateRouteOwner } from "./components/PrivateRoutes/PrivateRouteOwner";
import {
  getAllBusinesses,
  getBusinessFromBackEnd,
} from "./call-backend/getAllBusinesses";

import { useDispatch } from "react-redux";

function App() {
  // =================================
  const dispatch = useDispatch();
  // fetch all businesses data and store them in redux
  getAllBusinesses().then((response) => {
    dispatch({ type: "businessesUnmodified/changeState", payload: response });
  });
  // fetch all businesses here and store them in redux
  getBusinessFromBackEnd().then((response) =>
    dispatch({ type: "businesses/changeState", payload: response })
  );

  return (
    <div className="App">
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route element={<PrivateRouteUser />}>
            <Route path="/user/*" element={<Searcher />}></Route>
          </Route>
          <Route element={<PrivateRouteOwner />}>
            <Route path="/businessowner/*" element={<BusinessOwner />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
