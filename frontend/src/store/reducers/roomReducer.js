import { roomActions } from "../actions/roomActions";

const inititalState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        isUserRoomCreator: action.isUserRoomCreator,
        isUserInRoom: action.isUserInRoom,
      };
    case roomActions.SET_ROOM_DETAILS:
      return { ...state, roomDetails: action.roomDetails };
    case roomActions.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.activeRooms,
      };
    default:
      return state;
  }
};

export default reducer;
