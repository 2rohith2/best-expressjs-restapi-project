import server from 'Bin/www';
import supertest from 'supertest';

global.server = supertest(server);