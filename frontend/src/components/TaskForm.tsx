/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FormProps } from "../models/interfaces/form"
import * as Yup from 'yup';
import { post, put } from "../services/general";
import { PostResponse, PutResponse } from "../models/interfaces/service";
import { PostTask } from "../models/interfaces/task";
import LoadingWrapper from "./LoadingWrapper.component";
import QuestionDialogWrapper from "./QuestionDialogWrapper.component";
import { Button, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import TextFieldWrapper from "./TextFieldWrapper.component";
import DatePickerWrapper from "./DatePickerWrapper.component";
import ButtonWrapper from "./ButtonWrapper.component";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import './styles.css';

const INITIAL_VALUES = {
    "title": "",
    "description": "",
    "limitDate": ""
}

const TaskForm: React.FC<FormProps> = ({ data, onAlertChange, setEditData, onClose, onReload }) => {

    const TaskSchema = Yup.object().shape({
        title: Yup.string().required('Este campo es requerido'),
        description: Yup.string().required('Este campo es requerido'),
        limitDate: Yup.date().required('Este campo es requerido').nullable().default(undefined)
    });

    const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
    const [id, setId] = useState<string>('');
    const [openSubmit, setOpenSubmit] = useState<boolean>(false);
    const [openCancel, setOpenCancel] = useState<boolean>(false);
    const [values, setValues] = useState<any>('');
    const [resetAction, setResetAction] = useState<Function>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCancel = () => {
        setInitialValues(INITIAL_VALUES);
        setId('');
        setEditData('task');
    }

    const handleOpenSubmit = () => {
        setOpenSubmit(false);
    }

    const handleCancelSubmit = () => {
        handleCancel();
        onClose();
    }

    const handleOpenCancel = () => {
        setOpenCancel(false);
    }

    const handleSubmit = () => {
        setOpenSubmit(false);
        setIsLoading(true);
        const action = id ? put<PutResponse, PostTask>('tasks/' + id, { title: values.title, description: values.description, limitDate: values.limitDate }) : post<PostResponse, PostTask>('tasks/', { title: values.title, description: values.description, limitDate: values.limitDate });

        action.then(() => {
            handleCancel();
            if (resetAction) resetAction();
            setIsLoading(false);
            onAlertChange({
                open: true,
                autoHideDuration: 3000,
                severity: "success",
                message: id ? 'Actualizado exitósamente' : 'Guardado existósamente'
            });
            onClose();
            onReload();
        }).catch((err: any) => {
            console.log(err);
            setIsLoading(false);
            onAlertChange({
                open: true,
                autoHideDuration: 6000,
                severity: "error",
                message: id ? 'Error al actualizar' : 'Error al guardar'
            });
        });

    }

    useEffect(() => {
        if (data?.id && !isLoading) {
            setInitialValues({
                title: data?.title,
                description: data?.description,
                limitDate: data?.limit_date
            })
            setId(data?.id);
        }
    }, [data, isLoading]);

    return (
        <>
            <LoadingWrapper isLoading={isLoading} />
            <QuestionDialogWrapper
                open={openSubmit}
                setOpen={setOpenSubmit}
                title={<p>¿Deseas {id ? <strong>actualizar</strong> : <strong>crear</strong>} este registro?</p>}
                handleSubmit={handleSubmit}
                handleCancel={handleOpenSubmit}
                colorCancel="error"
                colorSubmit="primary"
                cancelTitle="Cancelar"
                submitTitle="Guardar"
            />
            <QuestionDialogWrapper
                open={openCancel}
                setOpen={setOpenCancel}
                title={
                    <p>
                        Si se cancela se perderá todo el avance <br /> ingresado para este nuevo registro. <br />
                        ¿Deseas <strong>descartar</strong> este registro?
                    </p>
                }
                handleSubmit={handleCancelSubmit}
                handleCancel={handleOpenCancel}
                colorCancel="primary"
                colorSubmit="error"
                cancelTitle="Cancelar"
                submitTitle="Descartar"
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography fontWeight="bold" variant="h6">
                        {id ? 'Actualización ' : 'Nueva tarea'}
                    </Typography>
                    {id ? (
                        <Typography variant="h6">
                            <strong>ID</strong> {id}
                        </Typography>
                    ) : null}
                </Grid>
            </Grid>
            <br />
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={TaskSchema}
                onSubmit={(values, actions) => {
                    setValues(values);
                    setOpenSubmit(true);
                    setResetAction(() => actions.resetForm);
                }}
            >
                <LocalizationProvider dateAdapter={AdapterMoment} >
                    <Form>
                        <Grid container spacing={2} >
                            <Grid item xs={12}>
                                <TextFieldWrapper name="title" {...{ label: 'Título' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldWrapper name="description" {...{ label: 'Descripción' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <DatePickerWrapper name="limitDate" {...{ label: 'Fecha límite' }} />
                            </Grid>
                            <Grid item xs={12} className="form--actions-buttons">
                                <Button variant="text" onClick={() => setOpenCancel(true)} color="error" fullWidth={false}>
                                    Cancelar
                                </Button>
                                <ButtonWrapper>{id ? 'Guardar' : 'Crear'}</ButtonWrapper>
                            </Grid>
                        </Grid>
                    </Form>
                </LocalizationProvider>
            </Formik>
        </>
    )
}

export default TaskForm;