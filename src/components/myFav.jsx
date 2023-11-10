import { HeartFill } from "react-bootstrap-icons";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";
import SingleCardInFavs from "./SingleCardInFavs";
import { useSelector } from "react-redux";

const MyFav = () => {
  const datas = useSelector((state) => {
    return state.favourite;
  });

  return (
    <div>
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          My Favs: <HeartFill />
        </h1>
        {console.log(datas)}
        {datas !== undefined &&
          datas.content.map((song) => {
            return (
              <Col
                className="col-6 offset-3 offset-md-0 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mt-2 mb-4 px-4"
                key={song.id}
              >
                <SingleCardInFavs song={song} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default MyFav;
