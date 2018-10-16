import {
} from './actions';

const initialNavState = {

};

function NavReducer(state = initialNavState, { type, title, description }) {
  switch (type) {
    default:
      return state;
  }
}

export default NavReducer;
