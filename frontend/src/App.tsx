/* eslint-disable @typescript-eslint/no-explicit-any */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import { Button, Card, FormControl, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import List from './components/List';
import { Task } from './models/interfaces/task';
import { delete0, get, list, put } from './services/general';
import { useEffect, useState } from 'react';
import FormDialogWrapper from './components/FormDialogWrapper.component';
import TaskForm from './components/TaskForm';
import { AlertOptions } from './models/interfaces/general-component';
import NotificationWrapper from './components/NotificationWrapper.component';
import QuestionDialogWrapper from './components/QuestionDialogWrapper.component';
import LoadingWrapper from './components/LoadingWrapper.component';


/**
 * Componente principal de la aplicación.
 * 
 * @returns {JSX.Element} Componente JSX para la aplicación principal.
 */
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
  const [sortOrder, setsortOrder] = useState<string>('');
  const [sortField, setsortField] = useState<string>('');

  /**
   * Manejador para cambiar el campo por el cual se ordenan las tareas.
   * 
   * @param {SelectChangeEvent} event El evento de selección.
   */
  const handleChange = (event: SelectChangeEvent) => {
    setsortField(event.target.value as string);
  };

  /**
   * Manejador para cambiar el orden (ascendente o descendente).
   * 
   * @param {SelectChangeEvent} event El evento de selección.
   */
  const handleChange1 = (event: SelectChangeEvent) => {
    setsortOrder(event.target.value as string);
  };

  /**
   * Hook que se ejecuta cuando cambian `sortField` o `sortOrder`, para actualizar los datos.
   */
  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder])

  /**
   * Hook que se ejecuta al cargar el componente por primera vez para obtener los datos iniciales.
   */
  useEffect(() => {
    fetchData();
  }, [])

  /**
   * Cambia el estado de "completado" de una tarea.
   * 
   * @async
   * @param {string} id El ID de la tarea.
   * @returns {Promise<void>}
   */
  const changeDoneStatus = async (id: string): Promise<void> => {
    setLoading(true);
    const response = await put<{ statusChange: boolean }, unknown>('tasks/change-status/' + id, null);
    if (response && response.statusChange) fetchData();
  }

  /**
   * Obtiene la lista de tareas y las actualiza en el estado.
   * 
   * @async
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    setLoading(true);
    const params = {
      sortField,
      sortOrder
    };  
    const data: Task[] | null = await list<Task[]>('tasks', params);
    if (data) setTasks(data);
    setLoading(false);
  }

  /**
   * Obtiene una tarea específica por su ID.
   * 
   * @async
   * @param {string} id El ID de la tarea.
   * @returns {Promise<void>}
   */
  const getData = async (id: string) => {
    setLoading(true);
    const data: Task | null = await get<Task>('tasks/' + id);
    if (data) {
      setTask(data);
      setOpenForm(true);
    }
    setLoading(false);
  }

  /**
   * Abre el diálogo de confirmación para eliminar una tarea.
   * 
   * @param {string} id El ID de la tarea.
   */
  const openDialog = (id: string): void => {
    setOpen(true);
    setId(id);
  }

  /**
   * Cierra el formulario de edición de tareas.
   */
  const handleClose = (): void => {
    setOpenForm(false);
  }

  /**
   * Elimina una tarea y actualiza la lista de tareas.
   */
  const handleDelete = (): void => {
    setLoading(true);
    setOpen(false);
    delete0('tasks/' + id).then(() => {
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

  /**
   * Cancela la operación de eliminación.
   */
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
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
              <FormControl fullWidth style={{marginRight: '2px'}}>
                <InputLabel id="demo-simple-select-label">Campo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortField}
                  label="Campo"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>Ninguno</MenuItem>
                  <MenuItem value={"title"}>Título</MenuItem>
                  <MenuItem value={"limit_date"}>Fecha límite</MenuItem>
                  <MenuItem value={"done"}>Finalizados</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{marginLeft: '2px'}}>
                <InputLabel id="demo-simple-select-label">Orden</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortOrder}
                  label="Age"
                  onChange={handleChange1}
                >
                  <MenuItem value={""}>Ninguno</MenuItem>
                  <MenuItem value={"ASC"}>Ascendente</MenuItem>
                  <MenuItem value={"DESC"}>Descendente</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Card>
          <List data={tasks} setData={setTasks} getData={getData} deleteAction={openDialog} changeStatus={changeDoneStatus} />
        </Grid2>
      </Grid2>
    </>
  )
}

export default App
