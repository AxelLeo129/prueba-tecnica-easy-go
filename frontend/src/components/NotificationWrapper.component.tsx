import { Alert, Snackbar } from "@mui/material";
import { AlertOptions } from "../models/interfaces/general-component";

/**
 * @component NotificationWrapper
 * Componente que envuelve un `Snackbar` con un `Alert` para mostrar notificaciones breves al usuario.
 * 
 * @param {AlertOptions} props - Las propiedades necesarias para el componente NotificationWrapper.
 * @param {boolean} props.open - Controla si la notificación está visible.
 * @param {AlertColor} props.severity - Define el nivel de severidad de la alerta (error, warning, info, success).
 * @param {string} props.message - El mensaje que se mostrará en la notificación.
 * @param {number} props.autoHideDuration - Tiempo en milisegundos antes de que la notificación se cierre automáticamente.
 * @param {(event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void} [props.onClose] - Función opcional que se ejecuta cuando la notificación se cierra.
 * 
 * @returns {JSX.Element} Un componente JSX que representa una notificación con un mensaje de alerta.
 * 
 * @example
 * <NotificationWrapper 
 *   open={true} 
 *   severity="success" 
 *   message="Operación exitosa" 
 *   autoHideDuration={3000} 
 *   onClose={handleClose}
 * />
 */
const NotificationWrapper: React.FC<AlertOptions> = ({ open, severity, message, autoHideDuration, onClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
            <Alert severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
};

export default NotificationWrapper;