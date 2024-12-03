// const { Given, When, Then } = require('@cucumber/cucumber');
import { Given, When, Then }  from '@cucumber/cucumber';
import axios from 'axios';

// const axios = require('axios');
// const { expect } = require('chai');
import { expect } from 'chai';

let apiEndpoint; // Stores the API endpoint
let endpointResponse; // Stores the API response

// Step 1: Set the API endpoint
Given('I have the API endpoint {string}', async function (endpoint) {
  apiEndpoint = endpoint
  return endpoint
});

// Step 2: Send a GET request with the "name" parameter
When('I send a GET request with the parameter name {string}', async function (name) {
  try {
    const params = { name }; // Add query parameters
    endpointResponse = await axios.get(apiEndpoint, { params }); // Send the GET request
    return endpointResponse
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
});

// Step 3: Validate that the response contains specific fields
Then('I should get a response containing the fields count, name, and age', async function () {
  expect(endpointResponse).to.exist;
  expect(endpointResponse.data).to.have.property('count');
  expect(endpointResponse.data).to.have.property('name');
  expect(endpointResponse.data).to.have.property('age');
});

// Step 4: Validate that "count" is a number
Then('The field count should be a number', async function () {
  expect(endpointResponse.data.count).to.be.a('number');
});

// Step 5: Validate that "name" matches the expected name
Then('The field name should match {string}', async function (expectedName) {
  expect(endpointResponse.data.name).to.equal(expectedName);
});

// Step 6: Validate that "age" is an integer
Then('The field age should be an integer', async function () {
  expect(Number.isInteger(endpointResponse.data.age)).to.be.true;
});

// Step 7: Send a GET request without the "name" parameter
When('I send a GET request without a name', async () => {
  response = await axios.get(endpoint).catch(err => err.response);
});

// Step 8: Send a GET request with an empty "name" parameter
When('I send a GET request with an empty parameter name {string}', async function (name) {
  try {
    const params = { name }; // Add query parameters with an empty name
    endpointResponse = await axios.get(apiEndpoint, { params }); // Send the GET request
    return endpointResponse;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
});