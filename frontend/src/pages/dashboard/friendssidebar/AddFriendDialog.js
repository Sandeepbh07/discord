import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import {
  DialogContent,
  DialogTitle,
  Typography,
  DialogContentText,
} from "@mui/material";
import { validateMail } from "../../../utils/validators";
import InputWithLabel from "../../../components/InputWithLabel";
import CustomPrimaryButton from "../../../components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    //send friend request to server
    sendFriendInvitation({ targetMailAddress: mail });
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter a email address of friend which you would like to invite
          </Typography>
        </DialogContentText>
        <InputWithLabel
          label="Mail"
          type="Text"
          value={mail}
          setValue={setMail}
          placeholder="Enter mail address"
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
