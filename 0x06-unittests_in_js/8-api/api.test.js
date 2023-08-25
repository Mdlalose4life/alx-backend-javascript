const http = require('http');
const app = require('./api');

function runTests(tests) {
  let failures = 0;
  for (const [name, test] of tests) {
    console.log(`Running test: ${name}`);
    try {
      test();
      console.log(`\t✓ Passed`);
    } catch (error) {
      failures++;
      console.log(`\t✕ Failed: ${error.message}`);
    }
  }
  console.log(`\n${failures} test(s) failed`);
}

function expectStatus(response, statusCode) {
  if (response.statusCode !== statusCode) {
    throw new Error(`Expected status ${statusCode}, but got ${response.statusCode}`);
  }
}

function expectBody(response, expectedBody) {
  let body = '';
  response.on('data', chunk => {
    body += chunk;
  });
  response.on('end', () => {
    if (body !== expectedBody) {
      throw new Error(`Expected body "${expectedBody}", but got "${body}"`);
    }
  });
}


const indexTests = [
  ['Returns status code 200', () => {
    const request = http.get('http://localhost:7865', response => {
      expectStatus(response, 200);
    });
  }],
  ['Returns the welcome message', () => {
    const request = http.get('http://localhost:7865', response => {
      expectStatus(response, 200);
      expectBody(response, 'Welcome to the payment system');
    });
  }]
];

console.log('Running tests for the index page:');
runTests(indexTests);