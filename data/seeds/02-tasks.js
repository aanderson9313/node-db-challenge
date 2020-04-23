
exports.seed = function(knex) {
  return knex('tasks').insert([
      // Inserts seed entries
        { 
          tasks_description: 'Task1', 
          tasks_notes: 'Here are some notes!', 
          tasks_completed: false, 
          project_id: 1
         },

        { 
          tasks_description: 'Task2', 
          tasks_notes: 'Here are some notes!', 
          tasks_completed: false, 
          project_id: 2 
        },

        { 
          tasks_description: 'Task3', 
          tasks_notes: 'Here are some notes!', 
          tasks_completed: true, 
          project_id: 3
         }
  
  ]);

};
