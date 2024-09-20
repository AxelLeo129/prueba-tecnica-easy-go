import { Backdrop, CircularProgress } from "@mui/material";
import { LoadingCustomProps } from "../models/interfaces/general-component";

const LoadingWrapper: React.FC<LoadingCustomProps> = ({ isLoading }) => {
    return (
        <>
            <Backdrop sx={{ color: 'balck', zIndex: '50' }} open={isLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default LoadingWrapper;