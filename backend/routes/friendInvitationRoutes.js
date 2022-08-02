const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const { verifyToken } = require("../middlewares/auth");
const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email().required(),
});

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  "/invite",
  verifyToken,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

router.post(
  "/accept",
  verifyToken,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postAccept
);

router.post(
  "/reject",
  verifyToken,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postReject
);

module.exports = router;
