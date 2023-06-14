const tasksModel = require('../models/tasksModels')

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll()
    return res.status(200).json(tasks)
};

const createTask = async (req, res) => {
    const createTask = await tasksModel.createTask(req.body)
    console.log('aquii', createTask)
    return res.status(201).send({message: 'Task created successfully!'})
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.deleteTask(id)
    return res.status(200).send({message: 'Task deleted successfully!'})
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body)
    return res.status(200).send({message: 'Task edit successfully!'})
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};