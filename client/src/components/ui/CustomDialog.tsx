import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDialog from "@/components/ui/MuiDialog.tsx";
import React from "react";

interface DialogProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    auxiliaryButton?: React.ReactNode;
}

export default function CustomDialog({ isOpen, children, onClose, auxiliaryButton }: DialogProps) {
    return (
        <MuiDialog open={isOpen} onClose={onClose}>
            <div className="space-y-5">
                {children}
                <hr />
                <div className="w-full flex justify-between">
                    {auxiliaryButton}
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
