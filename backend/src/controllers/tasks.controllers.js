import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { active: true } });
        res.json(tasks);
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

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