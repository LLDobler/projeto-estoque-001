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
let subToProduct = 0;

do {
    menuOption = Number(
        prompt(
            "Choose an option: " +
            "\n[1] - Check stock quantity" +
            "\n[2] - Add to stock" +
            "\n[3] - Subtract from stock" +
            "\n[4] - Close the menu"
        )
    );
    switch (menuOption) {
        case 1:
            let productList = "";
            for (let i = 0; i < products.length; i++) {
                const productProp = products[i];
                productList += productProp.name +
                " = " +
                productProp.quantity +
                "\n";
            }
            alert(
                "Products available: \n\n" +
                productList
            );
        break
        case 2:
            let productFound = false;
            let addOption = prompt(
                "Insert the name of the product that you want to add units:"
            );
            do {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].name === addOption) {
                        productFound = true;
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
                if (!productFound) {
                    addOption = prompt(
                        "Product '" +
                        addOption +
                        "' could not be found!" +
                        "\nPlease, enter it again"
                    );
                }
            } while (!productFound);
        break
        case 3:
            if (productQty === 0) {
                alert(
                    "Item not available!"
                );
                break
            }
            subToProduct = Number(
                prompt(
                    "Insert quantity you want to sub: "
                )
            );
            while (!Number.isInteger(subToProduct) || subToProduct <= 0 || subToProduct > productQty) {
                if (!Number.isInteger(subToProduct) || subToProduct <= 0) {
                    subToProduct = Number(
                        prompt(
                            "Invalid value, enter it again: "
                        )
                    );
                } else if (subToProduct > productQty) {
                    subToProduct = Number(
                        prompt(
                            "Can't take [" +
                            subToProduct +
                            "] units from stock" +
                            "\nCurrent units available: [" +
                            productQty + "]"
                        )
                    );
                }
            }
            productQty -= subToProduct
            alert(
                "Item removed successfully!" +
                "\nQuantity available: [" + productQty + "]"
            );
        break
        case 4:
        break
        default:
            alert(
                "Not a valid choice, choose again!"
            );
    }
} while (menuOption !== 4)