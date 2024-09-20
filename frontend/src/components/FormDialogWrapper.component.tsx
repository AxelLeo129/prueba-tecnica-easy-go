import { Dialog, DialogContent } from "@mui/material";
import { FormDialogCustomProps } from "../models/interfaces/general-component";

/**
 * @component FormDialogWrapper
 * Componente de envoltorio para un diálogo que muestra un formulario. 
 * Este componente controla la apertura y el cierre del diálogo y contiene el formulario que se pasa como prop.
 * 
 * @param {FormDialogCustomProps} props - Las propiedades para el componente FormDialogWrapper.
 * @param {boolean} props.open - Indica si el diálogo está abierto.
 * @param {() => void} props.handleClose - Función que se ejecuta al cerrar el diálogo.
 * @param {JSX.Element} props.form - El formulario que se muestra dentro del diálogo.
 * 
 * @returns {JSX.Element} Un componente JSX que representa un diálogo que envuelve un formulario.
 * 
 * @example
 * <FormDialogWrapper
 *   open={true}
 *   handleClose={handleCloseFunction}
 *   form={<MyForm />}
 * />
 */
const FormDialogWrapper: React.FC<FormDialogCustomProps> = ({ open, handleClose, form }) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={(_event, reason) => {
                    if(reason !== 'backdropClick') {
                        handleClose();
                    }
                }}
            >
                <DialogContent>
                    {form}
                </DialogContent>
            </Dialog>
        </>
    )
};

export default FormDialogWrapper;