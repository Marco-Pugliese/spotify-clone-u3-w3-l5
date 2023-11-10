import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { useEffect } from "react";
import { searchFetchAction } from "../redux/actions";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { search } = useParams("search");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchFetchAction(search));
  }, [search]);

  const datas = useSelector((state) => {
    return state.searchFetch;
  });

  return (
    <div>
      <Header />
      <Row className="justify-content-center mt-2 mb-5 px-5">
        <h1 className="text-white ms-4 fs-3 fw-bold">
          Search Results for: {}
          {search !== undefined && <span className="mainColor">{search}</span>}
        </h1>
        {console.log(datas)}
        {search !== undefined &&
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
