import React from "react";
import { ConfigTextField, CustomTextFieldProps } from "../models/interfaces/general-component";
import { useField } from "formik";
import { TextField } from "@mui/material";

/**
 * @component TextFieldWrapper
 * Componente personalizado de campo de texto (`TextField`) que se integra con Formik para manejar la validación y el estado.
 * 
 * @param {CustomTextFieldProps} props - Las propiedades necesarias para el componente TextFieldWrapper.
 * @param {string} props.name - El nombre del campo en el formulario, utilizado por Formik para manejar el estado.
 * @param {any} [props.otherProps] - Propiedades adicionales que se pasan al campo de texto.
 * 
 * @returns {JSX.Element} Un campo de texto personalizado integrado con Formik, que incluye validación y estilo de Material UI.
 * 
 * @example
 * <TextFieldWrapper name="email" label="Correo electrónico" />
 */
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