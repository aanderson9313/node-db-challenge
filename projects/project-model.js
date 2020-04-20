const db = require('../data/db-config');

module.exports = {
    findAllProjects,
    findById,
    findAllTasks,
    findAllResources,
    addProject,
    addTask,
    addResources,
    updateProject,
    updateTask,
    updateResources,
    removeProject,
    removeTask,
    removeResources
};

async function findAllProjects() {
    let rows = await db('projects');

    return rows;
}

function findById(id) {
    return db   
        .select('*')
        .from('projects')
        .where({ id })
        .first();
}

function findAllTasks(projectId) {
    return db('projects')
        .select('projects.name', 'resources.description')
        .join('resources', 'resources.project-id', 'project.id')
        .where('projects.id', projectId);
}

function findAllResources(projectId) {
    return db('projects')
        .select('projects.name', 'resources.description')
        .join('resources', 'resources.project-id', 'project.id')
        .where('projects.id', projectId);
}

function addProject(project) {
    return db('projects').insert(project);
}

function addTask(task) {
    return db('tasks').insert(task);
}

function addResources(resource) {
    return db('resources').insert(resource);
}

function removeProject(id) {
    return db('projects')
        .where({ id })
        .delete();
}