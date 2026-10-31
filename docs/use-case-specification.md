# Use Case Model

## UC01 - Check stock

### Related BRs
- None

### Objective
- View the products registered in the inventory and their respective quantities.

### Preconditions
- None

### Main Flow
1. User requests the list of products registered in the inventory.
2. System checks which products are registered in the inventory.
3. (a) System displays the list of registered products and their quantities.

### Alternative Flows / Exceptions
3. (b) System informs the User that there are no products registered in the inventory.

### Postconditions
- None

## UC02 - Register product

### Related BRs
- BR01 - Unique product registration
- BR02 - Initial product quantity

### Objective
- Register a new product in the inventory.

### Preconditions
- None

### Main Flow
1. User requests the registration of a new product.
2. System displays the list of registered products and asks the User for the name of the product to be registered.
3. User informs the name of the product to be registered.
4. System checks if a product with the informed name is already registered in the inventory.
5. (a) System registers the product informed by the User with quantity 0.
6. (a) System informs the User that the product was successfully registered in the inventory.

### Alternative Flows / Exceptions
5. (b) System informs the User that the informed name matches a product already registered in the inventory.
6. (b) System does not register the product informed by the User.
<!--  -->
5. (c) System informs the User that the product name mustn't be numerical-only.

### Postconditions
- The product informed by the User is registered in the inventory with quantity 0.

## UC03 - Delete product

### Related BRs
- BR03 - Product deletion confirmation

### Objective
- Delete a registered product from the inventory.

### Preconditions
- At least one product must be registered in the inventory.

### Main Flow
1. User requests to delete a product from the inventory.
2. System displays the list of registered products and asks the User for the name of the product to be deleted.
3. User informs the name of the product to be deleted.
4. System checks if the informed product is registered in the inventory.
5. (a) System asks the User to confirm the deletion by typing the exact name of the selected product.
6. (a) User correctly confirms the deletion.
7. (a) System deletes the selected product and its quantity from the inventory.
8. (a) System informs the User that the product was successfully deleted.

### Alternative Flows / Exceptions
5. (b) The informed product is not registered in the inventory.
6. (b) System informs the User that the product was not found and requests another product name.
<!--  -->
6. (c) User does not correctly confirm the deletion.
7. (c) System does not delete the product.

### Postconditions
- The selected product and its quantity are no longer registered in the inventory.

## UC04 - Add units

### Related BRs
- BR04 - Valid quantity for adding units

### Objective
- Add units to a product registered in the inventory.

### Preconditions
- At least one product must be registered in the inventory.

### Main Flow
1. User requests to add units to a product.
2. System displays the registered products and their quantities and asks the User to select a product.
3. User informs the name of the product.
4. System checks if the informed product is registered in the inventory.
5. (a) System asks the User for the number of units to be added.
6. (a) User informs the number of units.
7. (a) System checks if the informed quantity is a positive integer.
8. (a) System adds the informed quantity to the selected product.
9. (a) System informs the User that the units were successfully added.

### Alternative Flows / Exceptions
5. (b) System informs the User that the product is not registered in the inventory.
6. (b) System requests another product name.
<!--  -->
8. (b) The informed quantity is not a positive integer.
9. (b) System informs the User that the quantity is invalid and requests another value.

### Postconditions
- The quantity of the selected product is increased by the number of units informed by the User.

## UC05 - Remove units

### Related BRs
- BR05 - Valid quantity for removing units
- BR06 - Unit removal limit
- BR07 - Removing units from an out-of-stock product

### Objective
- Remove units from a product registered in the inventory.

### Preconditions
- At least one registered product must have a quantity greater than 0.

### Main Flow
1. User requests to remove units from a product.
2. System displays the registered products and their quantities and asks the User to select a product.
3. User informs the name of the product.
4. System checks if the informed product is registered in the inventory.
5. (a) System checks if the selected product has units available.
6. (a) System asks the User for the number of units to be removed.
7. (a) User informs the number of units.
8. (a) System checks if the informed quantity is a positive integer.
9. (a) System checks if the selected product has enough units available.
10. (a) System removes the informed quantity from the selected product.
11. (a) System informs the User that the units were successfully removed.

### Alternative Flows / Exceptions
5. (b) The informed product is not registered in the inventory.
6. (b) System informs the User that the product was not found.
<!--  -->
6. (c) The selected product has quantity 0.
7. (c) System informs the User that units cannot be removed from this product.
<!--  -->
9. (b) The informed quantity is not a positive integer.
10. (b) System informs the User that the quantity is invalid and requests another value.
<!--  -->
10. (c) The informed quantity is greater than the quantity available in the selected product.
11. (c) System informs the User that there are not enough units available and requests another value.

### Postconditions
- The quantity of the selected product is reduced by the number of units informed by the User.