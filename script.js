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
            "\n[2] - Add a new product to stock" +
            "\n[3] - Remove a product from stock" +
            "\n[4] - Add units to a product" +
            "\n[5] - Subtract units from a product" +
            "\n[6 or Esc] - Close the menu"
        );

    if (menuOption === null) {
        alert(
            "Shutting off..."
        );
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
            let productToAdd = prompt(
                "Insert the name of the product you want to add:"
            );
            if (productToAdd === null || productToAdd.trim() === "") {
                alert(
                    "Returning to menu..."
                );
                break
            }
            while (!Number.isNaN(Number(productToAdd))) {
                productToAdd = prompt(
                    "Product new name can't be just numbers!" +
                    "\nTry again:"
                );
                if (productToAdd === null || productToAdd.trim() === "") {
                    alert(
                        "Returning to menu..."
                    );
                    break
                }
            }
            if (productToAdd === null || productToAdd.trim() === "") {
                break
            }
            let isSelectedProductRegistered = false;
            for (let i = 0; i < products.length; i++) {
                if (productToAdd.toLowerCase().trim() === products[i].name.toLowerCase().trim()) {
                    isSelectedProductRegistered = true;
                    break
                }
            }
            if (isSelectedProductRegistered) {
                alert(
                    "Selected product's registered already!" +
                    "\nReturning to menu..."
                );
            } else {
                products.push(
                    {
                    name: (productToAdd),
                    quantity: 0
                    }
                );
                alert(
                    "Product registered successfully!" +
                    "\nReturning to menu..."
                );
                break
            }
        break
        case 3:
            if (products.length === 0) {
                alert(
                    "There's no product registered in stock!"
                );
                break
            }
            alert(
                "Attention!" +
                "\nThis is a highly sensitive area!" +
                "\nWe recommend caution past this point!"
            );
            let productToRemove = prompt(
                "Insert the name of the product you want to remove:"
            );
            if (productToRemove === null || productToRemove.trim() === "") {
                alert(
                    "Returning to menu..."
                );
                break
            } else {
                let doesProductExist = false;
                let selectedProduct = null;
                let selectedProductIndex = null;
                for (let i = 0; i < products.length; i++) {
                    if  (products[i].name.toLowerCase() === productToRemove.toLowerCase()) {
                        doesProductExist = true;
                        selectedProduct = products[i];
                        selectedProductIndex = i
                    }
                }
                while (!doesProductExist) {
                    productToRemove = prompt(
                        "Can't find this product!" +
                        "\nTry again:"
                    );
                    if (productToRemove === null || productToRemove.trim() === "") {
                        alert(
                            "Returning to menu..."
                        );
                        break
                    } else {
                        for (let i = 0; i< products.length; i++) {
                            if (products[i].name.toLowerCase() === productToRemove.toLowerCase()) {
                                doesProductExist = true;
                                selectedProduct = products[i];
                                selectedProductIndex = i
                            }
                        }
                    }
                }
                if (productToRemove === null || productToRemove.trim() === "") {
                    break
                }
                if (doesProductExist) {
                    productToRemove = prompt(
                        "ATTENTION!" +
                        "\nThe selected product and its quantities will be removed!" +
                        "\nThis action is irreversible!" +
                        "\nWould you like to continue? (Insert " +
                        selectedProduct.name +
                        " again to continue)"
                    );
                    if (productToRemove === selectedProduct.name) {
                       products.splice(selectedProductIndex, 1);
                       alert(
                        "Product deleted from stock successfully" +
                        "\nReturning to menu..."
                       );
                    } else {
                        alert(
                            "Returning to menu..."
                        );
                        break
                    }
                }
            }
            break
            case 4:
            if (products.length === 0) {
                alert(
                    "There's no product registered in stock!"
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
        case 5:
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
                    "There's no product units to remove!"
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
        case 6:
            alert(
            "Shutting off..."
            );
        break
        default:
            alert(
                "Not a valid choice, choose again!"
            );
    }
} while (menuOption !== 6)