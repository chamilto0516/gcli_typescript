const request = require('supertest');
const { app, pool } = require('./index');

describe('Message Board API Lifecycle', () => {
  let createdMessageId;

  afterAll(async () => {
    await pool.end(); // Close DB connection
  });

  // 1. POST a new message
  test('POST /messages should create a new message', async () => {
    const newMessage = {
      subject: 'Test Subject',
      message: 'This message was created by an automated test.'
    };

    const response = await request(app)
      .post('/messages')
      .send(newMessage);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.subject).toBe(newMessage.subject);
    
    createdMessageId = response.body.id; // Store ID for next steps
  });

  // 2. GET all messages and find ours
  test('GET /messages should include the newly created message', async () => {
    const response = await request(app).get('/messages');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    
    const found = response.body.find(m => m.id === createdMessageId);
    expect(found).toBeDefined();
    expect(found.subject).toBe('Test Subject');
  });

  // 3. GET specific message by ID
  test('GET /messages/:id should return the specific message', async () => {
    const response = await request(app).get(`/messages/${createdMessageId}`);
    
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(createdMessageId);
    expect(response.body.message).toContain('automated test');
  });

  // 4. DELETE the message
  test('DELETE /messages/:id should remove the message', async () => {
    const response = await request(app).delete(`/messages/${createdMessageId}`);
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Message deleted successfully');

    // Double check it's really gone
    const verifyResponse = await request(app).get(`/messages/${createdMessageId}`);
    expect(verifyResponse.status).toBe(404);
  });
});
