import React from "react";
import { ConfigDatePicker, CustomTextFieldProps } from "../models/interfaces/general-component";
import { useField, useFormikContext } from "formik";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";

/**
 * Componente personalizado de envoltura para el DatePicker de Material UI que se integra con Formik.
 * Permite seleccionar fechas y formatea el valor seleccionado a "YYYY-MM-DD".
 * 
 * @component
 * @param {CustomTextFieldProps} props - Propiedades personalizadas para el campo de fecha, incluyendo el nombre del campo y otras propiedades de configuración.
 * @returns {JSX.Element} Un componente JSX que representa un DatePicker integrado con Formik.
 * 
 * @example
 * <Formik initialValues={{ date: '' }} onSubmit={handleSubmit}>
 *   <Form>
 *     <DatePickerWrapper name="date" label="Selecciona una fecha" />
 *   </Form>
 * </Formik>
 */
const DatePickerWrapper: React.FC<CustomTextFieldProps> = ({name, ...otherProps}) => {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const configDatePicker: ConfigDatePicker = {
        ...field,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink: true
        },
        ...otherProps
    }

    if(meta && meta.touched && meta.error) {
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }

    return (
        <DatePicker 
            value={field.value ? moment(field.value, "YYYY-MM-DD") : null} // Convertimos la cadena a un objeto Moment
            onChange={(val) => {
                const formattedDate = val ? moment(val).format("YYYY-MM-DD") : ""; // Formateamos la fecha al formato "YYYY-MM-DD"
                setFieldValue(name, formattedDate); // Actualizamos el valor formateado en Formik
            }}
            name={name}
            slotProps={{ textField: { fullWidth: true } }}
        />
    )
};

export default DatePickerWrapper;   