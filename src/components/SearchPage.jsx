import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GET_SEARCH_FETCH, searchFetchAction } from "../redux/actions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const keyForFetch = useParams("search");
  console.log(keyForFetch);
  const datas = useSelector((state) => {
    return state.searchFetch;
  });

  useEffect(() => {
    dispatch(searchFetchAction(keyForFetch));
  }, []);

  return (
    <div>
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Best of: {keyForFetch}
          <span className="mainColor"></span>
        </h1>

        {datas !== undefined &&
          datas.searchFetch.searchFetch.map((song) => {
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
