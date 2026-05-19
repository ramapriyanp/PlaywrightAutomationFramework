Feature: Ecommerce validations

  @Regression
  Scenario: Plcing the Order
    Given a login to Ecommerce application with "testfl3@gmail.com" and "Welcome11*"
    When add "ZARA COAT 34" to cart
    Then verify "ZARA COAT 34" is displayed in the cart
    And Enter valid details and place the order
    

