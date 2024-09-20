/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AlertColor, SnackbarCloseReason, TextFieldVariants } from "@mui/material";
import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export interface LoadingCustomProps {
    isLoading: boolean;
}

export interface QuestionDialogCustomProps {
    open: boolean;
    setOpen: Function;
    title: any;
    handleCancel?: Function;
    colorCancel?: any;
    colorSubmit: any;
    handleSubmit: Function;
    cancelTitle?: string;
    submitTitle?: string;
    handleSecondary?: Function;
    colorSecondary?: any;
    secondaryTitle?: string;
}

export interface CustomTextFieldProps {
    name: string;
    onChange?: (value: any) => void;
};

export interface ConfigTextField {
    fullWidth?: boolean;
    variant?: TextFieldVariants;
    error?: boolean;
    helperText?: string;
};

export interface ConfigDatePicker {
    type: string;
    variant: TextFieldVariants;
    fullWidth: boolean;
    InputLabelProps: Object;
    error?: boolean;
    helperText?: string;
};

export interface CustomButtonProps {
    children: ReactNode;
};

export interface FormDialogCustomProps {
    open: boolean;
    handleClose: () => void;
    form: JSX.Element;
};

export interface AlertOptions {
    open: boolean;
    autoHideDuration: number;
    severity: AlertColor;
    message: string;
    onClose?: (event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void;
}