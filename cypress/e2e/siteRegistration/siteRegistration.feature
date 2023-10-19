Feature: registration form of demo.wpeverest.com

Scenario: enter valid data in registration form
Given I am on the registration page
When I fill first name with "test"
When I fill last name with "test"
When I fill email with "shweta.abc@gmail.com"
When I fill gender as Female
When I fill password with "test@1234L"
When I fill phone number with "1234567890"
When I fill emergency contact number with "1234567890"
When I fill room And bed type as "Single Room"
When I fill occupation And place of employment as "test"
When I fill parking as "Yes"
When I fill room preference as "Single Room"
When I fill dietary preference as "Vegetarian"
When I select terms and conditions
When I click on submit button
Then I should see user successfully registered message