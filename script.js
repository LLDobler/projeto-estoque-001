const products = [
    {
    name: "Mechanical Keyboard",
    quantity: 20
    },
    {
    name: "Gaming Mouse",
    quantity: 15
    },
    {
    name: "Headset",
    quantity: 8
    }
];
let menuOption = 0;

do {
    menuOption =
        prompt(
            "Choose an option: " +
            "\n[1] - Check stock quantity" +
            "\n[2] - Add units to stock" +
            "\n[3] - Subtract units from stock" +
            "\n[4 or Esc] - Close the menu"
        );

    if (menuOption === null) {
        break
    } else {
        menuOption = Number(menuOption);
    }

    switch (menuOption) {
        case 1:
            let productsStockList = "";
            if (products.length === 0) {
                alert(
                    "There's no product registered in stock!"
                );
            } else {
                for (let i = 0; i < products.length; i++) {
                    const productProp = products[i];
                    productsStockList += productProp.name +
                    " = " +
                    productProp.quantity +
                    "\n";
                }
                alert(
                    "Products available: \n\n" +
                    productsStockList
                );
            }
        break
        case 2:
            if (products.length === 0) {
                alert(
                    "Can't add any units because there's no product registered in stock!"
                );
            } else {
                let productFoundAdd = false;
                let addOption = prompt(
                    "Insert the name of the product that you want to add units:"
                );
                if (addOption === null) {
                    alert(
                        "Cancelling operation..."
                    );
                    break
                }
                do {
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].name === addOption) {
                            productFoundAdd = true;
                            let valueToAdd = 0;

                            valueToAdd =
                                prompt(
                                    "How much do you want to add in the " +
                                    addOption +
                                    " item:"
                                );
                            if (valueToAdd === null) {
                                alert(
                                    "Cancelling operation..."
                                );
                                break
                            } else {
                                valueToAdd = Number(valueToAdd)
                            }
                            while (!Number.isInteger(valueToAdd) || (valueToAdd <= 0)) {
                                valueToAdd =
                                    prompt(
                                        "Invalid value, please enter it again: "
                                    );

                                    if (valueToAdd === null) {
                                        alert(
                                            "Cancelling operation..."
                                        );
                                    break
                                    } else {
                                        valueToAdd = Number(valueToAdd)
                                    }
                            }
                            if (valueToAdd === null) {
                                break
                            } else {
                                products[i].quantity += valueToAdd;
                                alert(
                                    "[" +
                                    valueToAdd +
                                    "] units added to " +
                                    addOption +
                                    " stock!" +
                                    "\nAvailable " +
                                    addOption +
                                    " units in stock: [" +
                                    products[i].quantity +
                                    "]"
                                );
                            }
                        }
                    }
                    if (!productFoundAdd) {
                        addOption = prompt(
                            "Product '" +
                            addOption +
                            "' could not be found!" +
                            "\nPlease, enter it again"
                        );
                        if (addOption === null) {
                            alert(
                                "Cancelling operation..."
                            );
                            break
                        }
                    }
                } while (!productFoundAdd);
            }
        break
        case 3:
            let hasStockUnits = false;
            let productsQtyDisplay = "";

            for (let i = 0; i < products.length; i++) {
                const productsStockList = products[i];
                productsQtyDisplay += productsStockList.name +
                " = [" +
                productsStockList.quantity +
                "]\n";

                if (productsStockList.quantity > 0) {
                    hasStockUnits = true;
                }
            }
            if (!hasStockUnits) {
                alert(
                    "There is no units left in Stock!"
                );
                alert(
                    "Returning to menu..."
                );
                break
            }

            let subOption = prompt(
                "Products available: \n\n" +
                productsQtyDisplay +
                "\nSelect a product to remove units:"
            );
            if (subOption === null) {
                alert(
                    "Cancelling operation..."
                );
                break
            }

            let selectedProduct = null;
            for (let i = 0; i < products.length; i++) {
                if (products[i].name === subOption) {
                    selectedProduct = products[i];
                    break
                }
            }
            if (selectedProduct === null) {
                alert(
                    "The selected product does not exist!" +
                    "\nReturning to menu..."
                );
                break
            }

            if (selectedProduct.quantity > 0) {
                let returnToMenu = false;
                do {
                    let valueToRemove =
                        prompt(
                            "Selected product units in stock: [" +
                            selectedProduct.quantity +
                            "]" +
                            "\nEnter how much units " +
                            "you want to remove from stock:"
                        );

                    if (valueToRemove === null) {
                        alert(
                            "Cancelling operation..."
                        );
                        break
                    } else {
                        valueToRemove = Number(valueToRemove);
                    }

                    if (valueToRemove <= 0 || !Number.isInteger(valueToRemove)) {
                        alert(
                            "Invalid value, try again!"
                        );
                        continue
                    }

                    if (valueToRemove <= selectedProduct.quantity) {
                        selectedProduct.quantity -= valueToRemove;
                        returnToMenu = true;
                        alert(
                            "[" +
                            valueToRemove +
                            "] unit(s) removed successfully!\n" +
                            selectedProduct.name +
                            " stock is: [" +
                            selectedProduct.quantity + "]"
                        );
                        alert(
                            "Returning to menu..."
                        );
                    } else {
                        alert(
                            "Can't take [" +
                            valueToRemove +
                            "] from product " +
                            selectedProduct.name +
                            "!\nIt only has [" +
                            selectedProduct.quantity +
                            "] in stock!\nTry again!"
                        );
                    }
                } while (!returnToMenu)
            } else {
                alert(
                    "Selected product doesn't have " +
                    "any units left to remove!"
                );
                alert(
                    "Returning to menu..."
                );
            }
        break
        case 4:
        break
        default:
            alert(
                "Not a valid choice, choose again!"
            );
    }
} while (menuOption !== 4)