export const UPDATE_TERMINAL_BODY = 'UPDATE_TERMINAL_BODY';
export const RECEIVE_TERMINAL = 'RECEIVE_TERMINAL';

export const updateBodyActionCreator = (body) => {
  return {
    type: UPDATE_TERMINAL_BODY,
    body,
  };
};

export const receiveTerminalActionCreator = (terminal) => {
  return {
    type: RECEIVE_TERMINAL,
    terminal,
  };
};

