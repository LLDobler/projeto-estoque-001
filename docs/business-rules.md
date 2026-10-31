# Business Rules

This document contains the business rules applied to the Stock Control System of Project Stock 001.

## BR01 - Unique product registration

A product cannot be registered more than once in the inventory.

To identify duplicated products, differences between uppercase and lowercase letters and spaces at the beginning or end of the product name are ignored.

## BR02 - Initial product quantity

Every new product must be registered in the inventory with an initial quantity of 0.

## BR03 - Product deletion confirmation

To delete a product from the inventory, the User must confirm the action by typing the exact name of the selected product.

## BR04 - Valid quantity for adding units

The number of units added to a product must be a positive integer.

## BR05 - Valid quantity for removing units

The number of units removed from a product must be a positive integer.

## BR06 - Unit removal limit

The number of units removed from a product cannot be greater than the quantity currently available in the inventory.

## BR07 - Removing units from an out-of-stock product

Units cannot be removed from a product whose available quantity in the inventory is 0.