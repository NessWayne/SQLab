import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


export const dbConnection: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  ssl: { enable: true, rejectUnauthorized: !(process.env.APP_ENV === 'LOCAL') },
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  logger: 'advanced-console',
  logging: ['error'],
  legacySpatialSupport: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
