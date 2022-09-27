Feature: Shopping Cart Functionality
  As user I want to add and delete the item

  Scenario: As a user if there is an item already inside my basket

    Given  I am on Homepage
    When   I click on woman tab
    And    I click on product
    And    I click on add to cart
    And    I proceed to checkout
    And    I click on delete button
    Then   I can see shopping cart is empty

    Scenario: As a user I want to select the summer Dresses option from the navigation menu

      Given I am on Homepage
      When  I mousehover on woman tab
      And   I click on summer dresses
      And   I price change
      Then  I verify summer dresses page
