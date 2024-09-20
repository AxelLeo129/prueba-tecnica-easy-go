import { Task } from "../models/Task.js";

export const changeDoneStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        task.done = !task.done;
        await task.save();
        res.json({ statusChange: true });
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTasks = async (req, res) => {
    try {
        // Obtenemos los query params (si no existen, no se aplicará orden)
        const { sortField, sortOrder } = req.query;

        const options = {
            where: { active: true },
        };

        // Si ambos query params están presentes, aplicamos el ordenamiento
        if (sortField && sortOrder) {
            // Validamos los campos permitidos para ordenar
            const allowedFields = ['limit_date', 'title', 'done'];
            if (!allowedFields.includes(sortField)) {
                return res.status(400).json({ message: `Campo no válido para ordenar: ${sortField}` });
            }

            // Validamos el orden (ASC o DESC)
            const allowedOrders = ['ASC', 'DESC'];
            if (!allowedOrders.includes(sortOrder.toUpperCase())) {
                return res.status(400).json({ message: `Orden no válido: ${sortOrder}` });
            }

            // Añadimos el orden al objeto `options`
            options.order = [[sortField, sortOrder.toUpperCase()]];
        }

        // Realizamos la consulta con las opciones construidas
        const tasks = await Task.findAll(options);

        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    const { title, description, limitDate } = req.body;
    try {
        await Task.create({
            title,
            description,
            limit_date: limitDate
        })

        res.json({ created: true });
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, limitDate } = req.body;
        const task = await Task.findByPk(id);
        task.title = title;
        task.description = description;
        task.limit_date = limitDate;
        await task.save();
        res.json({ updated: true });
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        task.active = false;
        await task.save();
        res.json({ deleted: true });
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if(!task) return res.status(401).json({ message: "Task not found" });
        res.json(task);
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}