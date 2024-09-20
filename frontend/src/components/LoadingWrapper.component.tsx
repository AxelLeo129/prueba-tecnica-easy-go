import { Backdrop, CircularProgress } from "@mui/material";
import { LoadingCustomProps } from "../models/interfaces/general-component";

/**
 * @component LoadingWrapper
 * Componente que envuelve un indicador de carga (spinner) dentro de un backdrop, el cual se muestra cuando la aplicación está en un estado de carga.
 * 
 * @param {LoadingCustomProps} props - Las propiedades para el componente LoadingWrapper.
 * @param {boolean} props.isLoading - Controla si el backdrop con el spinner debe estar visible o no.
 * 
 * @returns {JSX.Element} Un componente JSX que representa un indicador de carga con un fondo oscuro.
 * 
 * @example
 * <LoadingWrapper isLoading={true} />
 */
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