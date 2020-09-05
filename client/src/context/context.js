import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

export const GS_ENTER_NAME = 'gs_enter_name';
export const GS_WAITING_FOR_OPPONENT = 'gs_waiting_for_opponent';
export const GS_GAME_RUNNING = 'gs_game_running';
export const GS_YOU_WON = 'gs_you_won';
export const GS_YOU_LOST = 'gs_you_lost';

export const StateContext = React.createContext();

console.info('Creating socket for backend connection')
export const ioSocket = io.connect(process.env.REACT_APP_SERVER_URL);

const StateProvider = React.memo((props) => {
  const [username, setUsername] = useState(null);
  const [currentGameState, setCurrentGameState] = useState(GS_ENTER_NAME);
  const { children } = props;

  return (
    <StateContext.Provider
      value={{
        username,
        setUsername,
        currentGameState, 
        setCurrentGameState
      }}
  >
      {Children.only(children)}
    </StateContext.Provider>
  );
});

export default StateProvider;

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
