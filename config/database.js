module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'reads-form-db.c6q8qhuqutft.ap-south-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'reads_form_db'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'Reads_Form'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
