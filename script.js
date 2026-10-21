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
let removedProducts = [];

do {
    menuOption = Number(
        prompt(
            "Choose an option: " +
            "\n[1] - Check stock quantity" +
            "\n[2] - Add units to stock" +
            "\n[3] - Subtract units from stock" +
            "\n[4] - Close the menu"
        )
    );

    switch (menuOption) {
        case 1:
            let productsStockList = "";
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
        break
        case 2:
            let productFoundAdd = false;
            let addOption = prompt(
                "Insert the name of the product that you want to add units:"
            );
            do {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].name === addOption) {
                        productFoundAdd = true;
                        let valueToAdd = Number(
                            prompt(
                                "How much do you want to add in the " +
                                addOption +
                                " item:"
                            )
                        );
                        while (!Number.isInteger(valueToAdd) || (valueToAdd <= 0)) {
                            valueToAdd = Number(
                                prompt(
                                    "Invalid value, please enter it again: "
                                )
                            );
                        }
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
                if (!productFoundAdd) {
                    addOption = prompt(
                        "Product '" +
                        addOption +
                        "' could not be found!" +
                        "\nPlease, enter it again"
                    );
                }
            } while (!productFoundAdd);
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
                    const valueToRemove = Number(
                        prompt(
                            "Selected product units in stock: [" +
                            selectedProduct.quantity +
                            "]" +
                            "\nEnter how much units " +
                            "you want to remove from stock:"
                        )
                    );


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