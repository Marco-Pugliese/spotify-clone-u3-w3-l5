import { useSelector } from "react-redux";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";
import SingleCardInPlaylist from "./SingleCardInPlaylist";

const MyPlaylist = () => {
  const datas = useSelector((state) => {
    return state.myList;
  });

  return (
    <div>
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">PlayList di prova</h1>
        {console.log(datas)}
        {datas !== undefined &&
          datas.myList.map((song) => {
            return (
              <Col
                className="col-6 offset-3 offset-md-0 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mt-2 mb-4 px-4"
                key={song.id}
              >
                <SingleCardInPlaylist song={song} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default MyPlaylist;
