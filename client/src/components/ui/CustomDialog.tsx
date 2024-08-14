import { Dialog, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface DialogProps {
    isOpen: boolean;
    text: string;
    onClose: () => void;
}

const MuiDialog = styled(Dialog)(() => ({
    "& .MuiDialog-paper": {
        borderRadius: "20px",
        padding: "20px",
        width: "90%",
        maxWidth: "500px",
        margin: "0 auto",
    },
}));

export default function CustomDialog({ isOpen, text, onClose }: DialogProps) {
    return (
        <MuiDialog open={isOpen} onClose={onClose}>
            <div className="space-y-5">
                <span>{text}</span>
                <hr />
                <div className="w-full flex justify-end">
                    
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white rounded-xl px-6 py-2 font-medium hover:bg-blue-600 focus:outline-none transition"
                >
                    Закрыть
                </button>
                </div>
            </div>
        </MuiDialog>
    );
}
