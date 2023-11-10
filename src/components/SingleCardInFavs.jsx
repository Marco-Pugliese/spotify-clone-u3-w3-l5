import { Button, Card } from "react-bootstrap";
import {
  addToListAction,
  isPlayingAction,
  nowPlayingAction,
  removeToFavAction,
} from "../redux/actions";
import { HeartbreakFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const SingleCardInFavs = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="border-0 h-100 bg-transparent mb-4 pb-1 rounded cardhovered"
      onClick={() => {
        return (
          dispatch(nowPlayingAction(song)), dispatch(isPlayingAction(true))
        );
      }}
    >
      <Card.Img src={song.artist.picture_medium} className="w-100" />

      <Card.Body className="h-100 d-flex flex-column justify-content-between px-1  pt-2 bg-transparent text-light p-0 m-0">
        <Card.Title className="p-0 py-1 fw-bold m-0 text-center ">
          {song.title_short}
        </Card.Title>
        <Card.Text className="p-0 smaller fst-italic m-0 text-center">
          {song.artist.name}
        </Card.Text>
        <div className="d-flex justify-content-between pt-2">
          <Button
            onClick={() => {
              dispatch(removeToFavAction(song));
            }}
          >
            <HeartbreakFill />
          </Button>
          <Button
            onClick={() => {
              dispatch(addToListAction(song));
            }}
            className="bg-transparent border-warning"
          >
            Add To Playlist
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleCardInFavs;
