const { test, expect } = require('@playwright/test')

test('get', async ({request}) => {
const response = await request.get('https://reqres.in/api/users/1')
expect(response.status(200))
const body = JSON.stringify(response)
//expect(body.match('value':''))
console.log(body);
})