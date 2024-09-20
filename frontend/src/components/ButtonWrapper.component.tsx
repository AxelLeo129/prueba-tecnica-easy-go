import { useFormikContext } from "formik";
import { CustomButtonProps } from "../models/interfaces/general-component";
import { Button } from "@mui/material";

const ButtonWrapper: React.FC<CustomButtonProps> = ({children, ...otherProps}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    return (
        <Button variant="text" onClick={handleSubmit} color="primary" fullWidth={false} {...otherProps}>{children}</Button>
    )
};

export default ButtonWrapper;