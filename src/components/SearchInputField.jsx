import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchInputField = () => {
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit} className="my-2">
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
        <InputGroup.Text id="basic-addon2" className="bg-black text-white">
          Go
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchInputField;
