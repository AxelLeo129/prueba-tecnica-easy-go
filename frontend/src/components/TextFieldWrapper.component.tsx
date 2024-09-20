import React from "react";
import { ConfigTextField, CustomTextFieldProps } from "../models/interfaces/general-component";
import { useField } from "formik";
import { TextField } from "@mui/material";

const TextFieldWrapper: React.FC<CustomTextFieldProps> = ({name, ...otherProps}) => {

    const [field, meta] = useField(name);

    const configTextField: ConfigTextField = {
        ...field,
        fullWidth: true,
        variant: 'outlined',
        ...otherProps
    }

    if(meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
        configTextField.helperText = meta.error.startsWith('E') || meta.error.startsWith('l') ? "" : meta.error;
    }

    return (
        <TextField {...configTextField} inputProps={{ maxLength: 150 }} />
    )

}

export default TextFieldWrapper;