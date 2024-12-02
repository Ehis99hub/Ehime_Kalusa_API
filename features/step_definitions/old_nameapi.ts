import { Given, When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

let apiEndpoint: string; // Stores the API endpoint
let response: AxiosResponse; // Stores the API response

// Step 1: Set the API endpoint
Given('I have the API endpoint {string}', async function (endpoint: string) {
  return endpoint
});

// Step 2: Send a GET request with the "name" parameter
When('I send a GET request with the parameter name {string}', async function (name: string) {
  try {
    const params = { name }; // Add query parameters
    return await axios.get(apiEndpoint, { params }); // Send the GET request
    // return response
  } catch (error: any) {
    throw new Error(`API request failed: ${error.message}`);
  }
});

// Step 3: Validate that the response contains specific fields
Then('I should get a response containing the fields count, name, and age', async function (response: AxiosResponse) {
  expect(response).to.exist;
  expect(response.data).to.have.property('count');
  expect(response.data).to.have.property('name');
  expect(response.data).to.have.property('age');
});

// Step 4: Validate that "count" is a number
Then('The field count should be a number', async function (response: AxiosResponse) {
  expect(response.data.count).to.be.a('number');
  console.log(`Count: ${response.data.count}`);
});

// Step 5: Validate that "name" matches the expected name
Then('The field name should match {string}', async function (expectedName: string) {
  expect(response.data.name).to.equal(expectedName);
  console.log(`Name: ${response.data.name}`);
});

// Step 6: Validate that "age" is an integer
Then('The field age should be an integer', async function () {
  expect(Number.isInteger(response.data.age)).to.be.true;
  console.log(`Age: ${response.data.Age}`);
});


