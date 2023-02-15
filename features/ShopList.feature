# features/ShopList.feature
Feature: Shop List

    Scenario: List products with no products
        When I list products
        Then there should be 0 products

    Scenario: List products
        Given there is a product "T-shirt"
        And there is a product "Pants"
        When I list products
        Then there should be 2 products

    Scenario: List products names
        Given there is a product "T-shirt"
        And there is a product "Pants"
        When I list products
        Then there should be the "T-shirt" product
        And there should be the "Pants" product

    Scenario: List products shows prices
        Given there is a product "T-shirt" with price $19
        And there is a product "Pants" with price $29
        When I list products
        Then there should be the "T-shirt" product with price $19
        And there should be the "Pants" product with price $29

