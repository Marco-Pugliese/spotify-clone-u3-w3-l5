import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchFetchAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchInputField = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchFetchAction(`${search}`));
        navigate(`/searchPage/${search}`);
      }}
      className="my-2"
    >
      <InputGroup className="my-2">
        <Form.Control
          id="formcontrol"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <InputGroup.Text
          id="basic-addon2"
          className="bg-black text-white"
          onClick={() => {
            dispatch(searchFetchAction(`${search}`));
            navigate(`/searchPage/${search}`);
          }}
        >
          Go
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchInputField;
