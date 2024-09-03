import { Alert, Snackbar } from "@mui/material";
import CopySvg from "@/assets/copy.svg?react";

import React from "react";

interface LinkCopiedNotificationProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LinkCopiedNotification({ isOpen, onClose }: LinkCopiedNotificationProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <Snackbar
            open={isOpen}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            onClose={(_, reason) => reason != "clickaway" && onClose()}
            autoHideDuration={4000}
        >
            <Alert
                onClose={onClose}
                severity="info"
                variant="filled"
                icon={false}
                sx={{
                    width: "100%",
                    backgroundColor: "#3b82f6",
                    color: "#ffffff",
                }}
            >
                <div className="flex items-center">
                    <CopySvg className="w-4 h-4 mr-3" />
                    Ссылка скопирована
                </div>
            </Alert>
        </Snackbar>
    );
}
