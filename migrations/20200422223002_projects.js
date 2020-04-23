exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.string('projects_name').notNullable();
          tbl.string('projects_description').notNullable();
          tbl.boolean('projects_completed').defaultTo(false);
      })
  
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.string('tasks_description').notNullable();
          tbl.string('tasks_notes');
          tbl.boolean('tasks_completed').defaultTo(false);
          tbl 
              .integer('project-id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
      })
  
      .createTable('resources', tbl => {
          tbl.increments();
          tbl 
              .string('resources_name')
              .notNullable()
              .unique();
          tbl.string('resources_description');
          tbl 
              .integer('project-id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    
  };