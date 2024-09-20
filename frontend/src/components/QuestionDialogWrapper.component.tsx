import React from "react";
import { QuestionDialogCustomProps } from "../models/interfaces/general-component";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";


/**
 * @component QuestionDialogWrapper
 * Un componente de diálogo personalizado que permite al usuario confirmar o cancelar una acción. 
 * También soporta una acción secundaria opcional.
 * 
 * @param {QuestionDialogCustomProps} props - Las propiedades necesarias para el componente QuestionDialogWrapper.
 * @param {boolean} props.open - Controla si el diálogo está abierto.
 * @param {Function} props.setOpen - Función para establecer si el diálogo está abierto o cerrado.
 * @param {React.ReactNode} props.title - El título o contenido del diálogo, generalmente una pregunta o mensaje.
 * @param {Function} [props.handleCancel] - Función opcional que se ejecuta cuando el usuario presiona el botón de cancelar.
 * @param {Function} props.handleSubmit - Función que se ejecuta cuando el usuario confirma la acción.
 * @param {string} [props.colorCancel] - Color opcional del botón de cancelar.
 * @param {string} props.colorSubmit - Color del botón de confirmar.
 * @param {string} [props.cancelTitle] - Texto opcional para el botón de cancelar.
 * @param {string} props.submitTitle - Texto para el botón de confirmar.
 * @param {Function} [props.handleSecondary] - Función opcional para manejar una acción secundaria.
 * @param {string} [props.secondaryTitle] - Texto opcional para el botón de la acción secundaria.
 * @param {string} [props.colorSecondary] - Color opcional del botón de la acción secundaria.
 * 
 * @returns {JSX.Element} Un componente JSX que representa un diálogo de confirmación con opciones de cancelar, confirmar y una acción secundaria opcional.
 * 
 * @example
 * <QuestionDialogWrapper 
 *   open={true} 
 *   setOpen={setDialogOpen} 
 *   title="¿Estás seguro de eliminar este elemento?" 
 *   handleCancel={handleCancelAction} 
 *   handleSubmit={handleConfirmAction} 
 *   colorCancel="error" 
 *   colorSubmit="primary" 
 *   cancelTitle="Cancelar" 
 *   submitTitle="Eliminar" 
 * />
 */
const QuestionDialogWrapper: React.FC<QuestionDialogCustomProps> = ({
    open, 
    setOpen,
    title, 
    handleCancel, 
    handleSubmit,
    colorCancel,
    colorSubmit,
    cancelTitle,
    submitTitle,
    handleSecondary,
    secondaryTitle,
    colorSecondary
}) => {
    return (
        <Dialog
            open={open}
            onClose={(_event, reason) => {
                if(reason !== 'backdropClick') {
                    setOpen(false);
                }
            }}
            fullWidth
            maxWidth={'xs'}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                {cancelTitle ? <Button variant='text' color={colorCancel} onClick={() => handleCancel ? handleCancel() : null}>
                    {cancelTitle}
                </Button> : null}
                {secondaryTitle ? <Button variant="text" color={colorSecondary} onClick={() => handleSecondary ? handleSecondary() : null}>
                    {secondaryTitle}
                </Button> : null}
                <Button variant="text" color={colorSubmit} onClick={() => handleSubmit()}>
                    {submitTitle}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default QuestionDialogWrapper;