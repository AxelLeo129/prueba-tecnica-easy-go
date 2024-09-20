import React from "react";
import { Task } from "../models/interfaces/task";
import { ListProps } from "../models/interfaces/list";
import { Card, CardActionArea, CardActions, CardContent, Checkbox, IconButton, Typography } from "@mui/material";
import { Reorder } from "framer-motion";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import './styles.css';

/**
 * @component List
 * Componente de lista que muestra tareas utilizando tarjetas (`Card`) con funcionalidades de reordenamiento y acciones de edición, eliminación y cambio de estado.
 * 
 * @param {ListProps} props - Las propiedades necesarias para el componente List.
 * @param {Task[]} props.data - Un arreglo de tareas (`Task`) que se muestran en la lista.
 * @param {(tasks: Task[]) => void} props.setData - Función para actualizar la lista de tareas al reordenar.
 * @param {(id: string) => void} props.getData - Función para obtener una tarea específica por su ID, generalmente usada para edición.
 * @param {(id: string) => void} props.deleteAction - Función para eliminar una tarea específica por su ID.
 * @param {(id: string) => Promise<void>} props.changeStatus - Función para cambiar el estado de una tarea (completada o no).
 * 
 * @returns {JSX.Element} Un componente JSX que representa una lista de tarjetas de tareas, cada una con acciones de edición, eliminación y un checkbox para marcar como completada.
 * 
 * @example
 * <List 
 *   data={tasks} 
 *   setData={updateTasks} 
 *   getData={editTask} 
 *   deleteAction={removeTask} 
 *   changeStatus={toggleTaskStatus} 
 * />
 */
const List: React.FC<ListProps> = ({ data, setData, getData, deleteAction, changeStatus }) => {

    return (
        <>
            <Reorder.Group axis="y" values={data} onReorder={setData}>
                {data.map((task: Task, index: number) => (
                    <Reorder.Item value={task} key={index} >
                        <Card sx={{ maxWidth: 345 }} style={{ margin: '10px' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {task.title}
                                    </Typography>
                                    <small>{task.limit_date}</small>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {task.description}
                                    </Typography>
                                </CardContent>
                                <CardActions className="form--actions-buttons">
                                    <Checkbox {...{label: "Tarea finalizada"}} checked={task.done} onClick={() => changeStatus(task.id.toString())} />
                                    <IconButton color="error" aria-label="add to favorites" onClick={() => deleteAction(task.id.toString())}>
                                        <DeleteOutline />
                                    </IconButton>
                                    <IconButton color="primary" aria-label="add to favorites" onClick={() => getData(task.id.toString())}>
                                        <EditOutlined />
                                    </IconButton>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </>
    )

}

export default List;