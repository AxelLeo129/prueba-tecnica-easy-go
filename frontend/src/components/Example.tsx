import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { animate, MotionValue, Reorder, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { Task } from "../models/interfaces/task";

const initialItems = [
    {
        "id": 2,
        "title": "TItulo prueba 2",
        "description": "descripcion prueba2",
        "limit_date": "2024-11-02",
        "active": true,
        "createdAt": "2024-09-19T21:48:56.000Z"
    },
    {
        "id": 3,
        "title": "TItulo prueba 3",
        "description": "descripcion prueba3",
        "limit_date": "2024-12-02",
        "active": true,
        "createdAt": "2024-09-19T22:33:46.000Z"
    },
    {
        "id": 4,
        "title": "TItulo prueba 4",
        "description": "descripcion prueba4",
        "limit_date": "2024-02-26",
        "active": true,
        "createdAt": "2024-09-19T22:34:08.000Z"
    }
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    return (
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Reorder.Group>
    );
}

interface Props {
    item: Task;
}

const Item = ({ item }: Props) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item.id.toString()} style={{ boxShadow, y }}>
            <Card style={{ margin: '10px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <small>Lorem ipsum</small>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam nihil nostrum, consequuntur minus natus magni ea rerum eum eius atque nesciunt veritatis at est. Ullam rem at velit modi.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Reorder.Item>
    );
};

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

function useRaisedShadow(value: MotionValue<number>) {
    const boxShadow = useMotionValue(inactiveShadow);

    useEffect(() => {
        let isActive = false;
        value.onChange((latest) => {
            const wasActive = isActive;
            if (latest !== 0) {
                isActive = true;
                if (isActive !== wasActive) {
                    animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
                }
            } else {
                isActive = false;
                if (isActive !== wasActive) {
                    animate(boxShadow, inactiveShadow);
                }
            }
        });
    }, [value, boxShadow]);

    return boxShadow;
}
