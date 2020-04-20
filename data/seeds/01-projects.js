
exports.seed = function(knex) {
  return knex('projects').insert([
// Inserts seed entries
        {
          projects_name: 'Project1', 
          projects_description: 'Description1', 
          projects_completed: false
         },
         
        {
          projects_name: 'Project2', 
          projects_description: 'Description2', 
          projects_completed: false
         },

        {
          projects_name: 'Project3', 
          projects_description: 'Description3', 
          projects_completed: true
         }
      ]);
      

};
