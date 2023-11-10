import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import { useSelector } from "react-redux";
import SingleCard from "./SingleCard";

const SearchPage = () => {
  const datas = useSelector((state) => {
    return state.searchFetch;
  });

  return (
    <div>
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Best of:{" "}
          {datas !== undefined && (
            <span className="mainColor">
              {datas.searchFetch[0].artist.name}
            </span>
          )}
        </h1>
        {console.log(datas)}
        {datas !== undefined &&
          datas.searchFetch.map((song) => {
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
    </div>
  );
};
export default SearchPage;
