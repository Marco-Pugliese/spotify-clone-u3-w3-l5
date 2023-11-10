import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getFetchAction,
  getFetchAction2,
  getFetchAction3,
} from "../redux/actions/index.js";
import Header from "./Header.jsx";
import { Col, Row } from "react-bootstrap";

import SingleCard from "./SingleCard.jsx";
const MainContent = () => {
  const datas = useSelector((state) => state.myFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchAction());
    dispatch(getFetchAction2());
    dispatch(getFetchAction3());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="main" className="h-100">
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Best of: <span className="mainColor"> Mina</span>
        </h1>
        {datas !== undefined &&
          datas.songsMina
            .filter((myArrayOfSongs, i) => i < 12)
            .map((song) => {
              return (
                <Col
                  className="col-6 offset-3 offset-md-0 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mt-2 mb-4 px-4"
                  key={song.id}
                >
                  <SingleCard song={song} />
                </Col>
              );
            })}
      </Row>

      <Row className="justify-content-center my-4 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Best of: <span className="mainColor"> Queen</span>
        </h1>
        {datas !== undefined &&
          datas.songsQueen
            .filter((myArrayOfSongs, i) => i < 12)
            .map((song) => {
              return (
                <Col
                  className="col-6 offset-3 offset-md-0 col-md-6 col-lg-4 col-xl-3 col-xxl-2 my-2 px-4"
                  key={song.id}
                ></Col>
              );
            })}
      </Row>

      <Row className="justify-content-center my-4 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Best of: <span className="mainColor"> Beatles</span>
        </h1>
        {datas !== undefined &&
          datas.songsBeatles
            .filter((myArrayOfSongs, i) => i < 12)
            .map((song) => {
              return (
                <Col
                  className="col-6 offset-3 offset-md-0 col-md-6 col-lg-4 col-xl-3 col-xxl-2 my-2 px-4"
                  key={song.id}
                >
                  <SingleCard song={song} />
                </Col>
              );
            })}
      </Row>
    </div>
  );
};
export default MainContent;
