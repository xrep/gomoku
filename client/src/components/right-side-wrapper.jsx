import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import FirstPlayerImg from "../img/first-player-img.png";
import SecondPlayerImg from "../img/second-player-img.png";
import StatusWrapper from "./status-wrapper";

const RightSideWrapperSC = styled.div`
  .information {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    display: flex;

    .first-player {
      margin-right: 40px;

      img {
        max-height: 125px;
        display: block;
      }
    }

    .second-player {
      margin-left: 40px;

      img {
        max-height: 150px;
        display: block;
      }
    }
  }

  h1 {
    text-align: center;
  }
`;

export default () => {
  const playerUsername = useSelector((state) => state.playerUsername);
  const opponentUsername = useSelector((state) => state.opponentUsername);

  const mySymbol = useSelector((state) => state.playerSymbol);
  const opSymbol = useSelector((state) => state.opponentSymbol);

  return (
    <RightSideWrapperSC>
      <div className="information">
        <div className="first-player">
          <h1>
            {playerUsername
              ? `${playerUsername}${mySymbol ? " - " + mySymbol : ""}`
              : ""}
          </h1>
          <img
            src={FirstPlayerImg}
            alt="First Player"
          />
        </div>
        {/*<StatusWrapper />*/}
        <h1>VS</h1>
        <div className="second-player">
          <h1>
            {opponentUsername
              ? `${opponentUsername} ${opSymbol ? " - " + opSymbol : ""}`
              : ""}
          </h1>
          <img
            src={SecondPlayerImg}
            alt="Second Player"
          />
        </div>
     
      </div>
    </RightSideWrapperSC>
  );
};
