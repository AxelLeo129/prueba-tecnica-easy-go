import React from "react";
import { Task } from "../models/interfaces/task";
import { ListProps } from "../models/interfaces/list";
import { Card, CardActionArea, CardActions, CardContent, Checkbox, IconButton, Typography } from "@mui/material";
import { Reorder } from "framer-motion";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import './styles.css';

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