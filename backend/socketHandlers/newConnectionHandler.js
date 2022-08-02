const { addNewConnectedUser } = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");
const roomsUpdate = require("../socketHandlers/updates/rooms");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({ socketId: socket.id, userId: userDetails.userId });

  //update pending friends invitations list
  friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);

  //update friends list
  friendsUpdate.updateFriends(userDetails.userId);

  setTimeout(() => {
    roomsUpdate.updateRooms(socket.id);
  }, 500);
};

module.exports = newConnectionHandler;
