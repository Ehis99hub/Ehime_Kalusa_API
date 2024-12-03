Feature: Verifying the agify.io API
    verify the endpoint

    Scenario: Fetch age for a given name
    Given I have the API endpoint "https://api.agify.io"
    When I send a GET request with the parameter name "billybob"
    Then I should get a response containing the fields count, name, and age
    And The field count should be a number
    And The field name should match "billybob"
    And The field age should be an integer

    Scenario: Fetch age with an empty name parameter
    Given I have the API endpoint "https://api.agify.io"
    When I send a GET request with an empty parameter name ""
    Then I should get a response containing the fields count, name, and age