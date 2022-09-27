Feature: Create Account Page Test

  Scenario Outline: verifyThatUserShouldCreateAccountSuccessfully
    Given I am on Home Page
    When  I click on sign in link
    And   I Enter email "<email>"
    And   I click on create an account button
    And   I enter first name "<firstname>"
    And   I enter last name "<lastname>"
    And   I enter register password "<password>"
    And   I enter address "<address>"
    And   I enter city "<city>"
    And   I select state "<state>"
    And   I enter postal code "<postalCode>"
    And   I select country "<country>"
    And   I enter phone number "<phoneNumber>"
    Then  I click on register button
    Then  I verify account name "Haritapatel"
    Examples:
      | email          | firstname | lastname | password   | address    | city    | state   | postalcode | country       | phonenumber   |
      | abcdef@gmail.com | abcd      |xyz       | 123456@    | Kingstreet | Toronto | Ontario | M9V3T1     | United States | +12365458456  |




