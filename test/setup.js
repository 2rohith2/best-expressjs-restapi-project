import server from '../src/bin/www';
import supertest from 'supertest';

global.server = supertest(server);