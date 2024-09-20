import React from "react";
import { QuestionDialogCustomProps } from "../models/interfaces/general-component";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const QuestionDialogWrapper: React.FC<QuestionDialogCustomProps> = ({
    open, 
    setOpen,
    title, 
    handleCancel, 
    handleSubmit,
    colorCancel,
    colorSubmit,
    cancelTitle,
    submitTitle,
    handleSecondary,
    secondaryTitle,
    colorSecondary
}) => {
    return (
        <Dialog
            open={open}
            onClose={(_event, reason) => {
                if(reason !== 'backdropClick') {
                    setOpen(false);
                }
            }}
            fullWidth
            maxWidth={'xs'}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                {cancelTitle ? <Button variant='text' color={colorCancel} onClick={() => handleCancel ? handleCancel() : null}>
                    {cancelTitle}
                </Button> : null}
                {secondaryTitle ? <Button variant="text" color={colorSecondary} onClick={() => handleSecondary ? handleSecondary() : null}>
                    {secondaryTitle}
                </Button> : null}
                <Button variant="text" color={colorSubmit} onClick={() => handleSubmit()}>
                    {submitTitle}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default QuestionDialogWrapper;