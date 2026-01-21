import request from 'supertest';
import app from '../src/app.js';

describe('API Health Check', () => {
    it('GET / should return 200 and welcome message', async () => {
        const res = await request(app).get('/');
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ 
            status: "success", 
            message: "API running..." 
        });
    });
});
