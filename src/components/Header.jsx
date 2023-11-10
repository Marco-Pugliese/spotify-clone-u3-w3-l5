import { ListGroup } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex">
      <ListGroup className="d-flex flex-row mx-auto">
        <ListGroup.Item className="bg-transparent border-0 text-secondary li">
          Trending
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0 text-secondary li">
          Podcasts
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0 text-secondary li">
          Moods And Genres
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0 text-secondary li">
          New Releases
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0 text-secondary li">
          Discover
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default Header;
