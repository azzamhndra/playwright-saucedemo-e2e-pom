const { test, expect } = require('@playwright/test');

test('API Health Check', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.completed).toBe(false);
});
