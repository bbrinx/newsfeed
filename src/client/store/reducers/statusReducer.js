
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULLFILLED: 'fullfilled',
  REJECTED: 'rejected'
};

const initialState = {
  status: Status.IDLE
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${INITIALIZE_APPLICATION}_PENDING`:   return { ...state, status: Status.PENDING };
    case `${INITIALIZE_APPLICATION}_FULFILLED`: return { ...state, status: Status.FULFILLED };
    case `${INITIALIZE_APPLICATION}_REJECTED`:  return { ...state, status: Status.REJECTED };
    default: return state;
  }
}

export { reducer as statusReducer };