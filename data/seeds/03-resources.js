
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resources_name: 'Resource1',
      resources_description: 'Heres a description!',
      project_id: 1
    },

    {
      resources_name: 'Resource2',
      resources_description: 'Heres a description!',
      project_id: 2
    },

    {
      resources_name: 'Resource3',
      resources_description: 'Heres a description!',
      project_id: 3
    }

  ]);
};
