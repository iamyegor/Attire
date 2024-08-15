import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";

const MuiDialog: any = styled(Dialog)(() => ({
    "& .MuiDialog-paper": {
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
        margin: "10px",
    },
}));

export default MuiDialog;
