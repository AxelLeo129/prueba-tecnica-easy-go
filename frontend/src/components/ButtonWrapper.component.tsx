import { useFormikContext } from "formik";
import { CustomButtonProps } from "../models/interfaces/general-component";
import { Button } from "@mui/material";

/**
 * Componente envoltorio para un botón que se integra con Formik.
 * Al hacer clic en este botón, se dispara la función `submitForm` de Formik para enviar el formulario.
 * 
 * @component
 * @param {CustomButtonProps} props - Las propiedades personalizadas del botón, que incluyen `children` y otros atributos que se propagan al componente Button de MUI.
 * @returns {JSX.Element} Un componente JSX que representa un botón integrado con Formik.
 */
const ButtonWrapper: React.FC<CustomButtonProps> = ({children, ...otherProps}) => {
    const { submitForm } = useFormikContext();

    /**
     * Maneja el evento de clic para enviar el formulario usando la función submitForm de Formik.
     */
    const handleSubmit = () => {
        submitForm();
    }

    return (
        <Button variant="text" onClick={handleSubmit} color="primary" fullWidth={false} {...otherProps}>{children}</Button>
    )
};

export default ButtonWrapper;