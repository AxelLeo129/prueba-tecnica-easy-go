import { Alert, Snackbar } from "@mui/material";
import { AlertOptions } from "../models/interfaces/general-component";

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