/* eslint-disable @typescript-eslint/no-explicit-any */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import { Button, Grid2, Typography } from '@mui/material';
import List from './components/List';
import { Task } from './models/interfaces/task';
import { delete0, get, list } from './services/general';
import { useEffect, useState } from 'react';
import FormDialogWrapper from './components/FormDialogWrapper.component';
import TaskForm from './components/TaskForm';
import { AlertOptions } from './models/interfaces/general-component';
import NotificationWrapper from './components/NotificationWrapper.component';
import QuestionDialogWrapper from './components/QuestionDialogWrapper.component';
import LoadingWrapper from './components/LoadingWrapper.component';

function App() {

  const [id, setId] = useState<number | string>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [task, setTask] = useState<any>('task');
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    open: false,
    autoHideDuration: 3000,
    severity: 'success',
    message: ''
  });

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setLoading(true);
    const data: Task[] | null = await list<Task[]>('http://localhost:3000/tasks');
    if (data) setTasks(data);
    setLoading(false);
  }

  const getData = async (id: string) => {
    setLoading(true);
    const data: Task | null = await get<Task>('http://localhost:3000/tasks/' + id);
    if (data) {
      setTask(data);
      setOpenForm(true);
    }
    setLoading(false);
  }

  const openDialog = (id: string): void => {
    setOpen(true);
    setId(id);
  }

  const handleClose = (): void => {
    setOpenForm(false);
  }

  const handleDelete = (): void => {
    setLoading(true);
    setOpen(false);
    delete0('http://localhost:3000/tasks/' + id).then(() => {
      setAlertOptions({
        open: true,
        autoHideDuration: 3000,
        severity: 'success',
        message: 'Eliminado exitósamente'
      })
      fetchData();
    }).catch((err) => {
      console.log(err);
      setAlertOptions({
        open: true,
        autoHideDuration: 3000,
        severity: 'success',
        message: 'Eliminado exitósamente'
      })
    }).finally(() => setLoading(false));
  }

  const handleCancel = (): void => {
    setOpen(false);
  }

  return (
    <>
      <LoadingWrapper isLoading={loading} />
      <NotificationWrapper {...alertOptions} />
      <QuestionDialogWrapper
        open={open}
        setOpen={setOpen}
        title={"¿Desea eliminar esta tarea?"}
        handleSubmit={handleDelete}
        handleCancel={handleCancel}
        colorCancel="primary"
        colorSubmit="error"
        cancelTitle='Cancelar'
        submitTitle='Eliminar'
      />
      <FormDialogWrapper
        open={openForm}
        handleClose={handleClose}
        form={
          <TaskForm
            data={task}
            onAlertChange={setAlertOptions}
            setEditData={setTask}
            onClose={handleClose}
            onReload={fetchData}
          />
        }
      />
      <Grid2 container spacing={2} columns={2}>
        <Grid2 className="list-title">
          <Typography variant='h4'>
            Prueba Técnica Easy Go
          </Typography>
        </Grid2>
        <Grid2 className="display-buttons">
          <Button variant='contained' onClick={() => setOpenForm(true)} >Nueva tarea</Button>
        </Grid2>
        <Grid2 size={6}>
          <List data={tasks} setData={setTasks} getData={getData} deleteAction={openDialog} />
        </Grid2>
      </Grid2>
    </>
  )
}

export default App
