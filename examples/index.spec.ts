const api = createApi();
api.get('/health', (event: any, context: any, params: any) => {
  console.log('/health');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'OK' }),
  };
});
api.get('/health1/:id', (event: any, context: any, params: any) => {
  console.log('/health1/:id');
  console.log(params);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'OK' }),
  };
});

const handler = api.createHandler();

const method = process.argv[2] || 'GET';
const path = process.argv[3] || '/health1';
handler({ httpMethod: method, path }, {});
