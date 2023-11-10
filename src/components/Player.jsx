import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBackward,
  SkipForward,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { isPlayingAction } from "../redux/actions";

const Player = () => {
  const isPlayingNow = useSelector((state) => state.isPlaying.isPlaying);
  const songPlayed = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();
  return (
    <div id="player" className="position-fixed bottom-0 pe-5">
      <Row className>
        <Col>
          <Row>
            <Col className="col-12 d-flex  justify-content-center py-2 text-white fw-bold pe-5">
              {songPlayed.songNow.title}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-4 border-bottom border-white"></Col>
          </Row>
          <Row>
            <Col className="col-12 d-flex justify-content-center py-2 text-white fw-bold pe-5">
              <div className="text-white d-flex fs-5">
                <span className="px-2 hovered">
                  <SkipBackward />
                </span>
                <span className="px-2 hovered">
                  {isPlayingNow && (
                    <div
                      onClick={() => {
                        dispatch(isPlayingAction(!isPlayingNow));
                      }}
                    >
                      <Pause />
                    </div>
                  )}
                  {!isPlayingNow && (
                    <div
                      onClick={() => {
                        dispatch(isPlayingAction(!isPlayingNow));
                      }}
                    >
                      <Play />
                    </div>
                  )}
                </span>
                <span className="px-2 hovered">
                  <SkipForward />
                </span>
                <span className="px-2 hovered">
                  <Shuffle />
                </span>
                <span className="px-2 hovered">
                  <Repeat />
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Player;
