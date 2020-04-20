const express = require('express');

const projectModel = require('./project-model');

const router = express.Router();


// GET
router.get('/', (req, res) => {
    projectModel.findAllProjects()
        .then(projects => {
            if(projects.length > 0) {
                res.status(201).json(projects);
            } else {
                res.status(404).json({
                    message: 'Unable to find any projects, please create one.'
                });
            }
        })
        .catch(err => {
            console.log('There was an error retrieving projects', err);
        });
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	projectModel.findById(id)
		.then(project => {
			if (project) {
				res.status(201).json(project);
			} else {
				res.status(404).json({ message: 'No project matching the specified ID was found' });
			}
		})
		.catch(err => {
			console.log('Error retrieving project by id', err);
		});
});

router.get('/:id/tasks', (req, res) => {
	const { id } = req.params;

	projectModel.findAllTasks(id)
		.then(tasks => {
			if (tasks.length > 0) {
				res.status(201).json(tasks);
			} else {
				res.status(404).json({ message: 'No tasks matching the specified ID was found' });
			}
		})
		.catch(err => {
			console.log('Error getting tasks', err);
		});
});

router.get('/:id/resources', (req, res) => {
	const { id } = req.params;

	projectModel.findAllProjectResources(id)
		.then(resource => {
			if (resource.length > 0) {
				res.status(201).json(resource);
			} else {
				res.status(404).json({ message: 'No resources matching the specified ID was found' });
			}
		})
		.catch(err => {
			console.log('Error getting resources', err);
		});
});

// POST
router.post('/', (req, res) => {
	const newProject = req.body;

	projectModel.addProject(newProject)
		.then(project => {
			if (newProject.projects_name && newProject.projects_description) {
				res.status(201).json(project);
			} else {
				res.status(404).json({
					message:
						'Error adding project. Please make sure the name and description fields are completed.'
				});
			}
		})
		.catch(err => {
			console.log('Error adding project', err);
		});
});

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    
	projectModel.addTask(newTask)
		.then(task => {
			if (newTask.tasks_description && newTask.project_id) {
                if (newTask.completed === null ) {

				    res.status(201).json(task);
                } else {
                    res.status(404).json({
                        message:
                            'Error adding task. Please make sure the Id and description fields are completed.'
                    });
                }
            }
		})
		.catch(err => {
			console.log('Error adding task', err);
		});
});

router.post('/:id/resources', (req, res) => {
    const newResource = req.body;
    
	projectModel.addResources(newResource)
		.then(resource => {
			if (newResource.resources_name && newResource.project_id) {
				res.status(201).json(resource);
			} else {
				res.status(404).json({
					message:
						'Error adding resource. Please make sure the Id and name fields are completed.'
				});
			}
		})
		.catch(err => {
			console.log('Error adding resource', err);
		});
});

module.exports = router;