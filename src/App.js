import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import MainContent from "./components/MainContent";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="m-0 p-0">
      <Container fluid>
        <Row>
          <div className="d-none d-md-block p-0" id="sideBar">
            <SideBar />
          </div>
          <Col id="main" className="col p-0">
            <Routes>
              <Route element={<MainContent />} path="/" />
              <Route element={<SearchPage />} path="/searchPage/:search" />
              {/* <Route element={<MyFav />} path="/myFav" /> */}
              {/* <Route element={<MyPlayList />} path="/myPlayList" /> */}
            </Routes>
            <Player />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
