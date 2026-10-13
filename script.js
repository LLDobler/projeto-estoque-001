let productQty = 20;
let menuOption = 0;
let addToProduct = 0;
let subToProduct = 0;

do {
    menuOption = Number(
        prompt(
            "You have chosen: Mechanical Keyboard!  " +
            "\nChoose an option: " +
            "\n[1] - Check stock quantity" +
            "\n[2] - Add to stock" +
            "\n[3] - Subtract from stock" +
            "\n[4] - Close the menu"
        )
    );
    switch (menuOption > 0 || menuOption < 5) {
        case (menuOption <= 0 || menuOption > 4):
            alert(
                "Not a valid option, choose again!"
            );
        break
        case 1:
            alert(
                "Product available: " + productQty + "!"
            );
        break
        case 2:
            addToProduct = Number(
                prompt(
                    "Insert quantity you want to add: "
                )
            );
            while (!Number.isInteger(addToProduct) || (addToProduct <= 0)) {
                addToProduct = Number(
                    prompt(
                        "Invalid value, enter again: "
                    )
                );
            }
            productQty += addToProduct
            alert(
                "Item added successfully!" +
                "\nQuantity available: [" + productQty + "]"
            );
        break
        case 3:
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
    }
} while (menuOption <= 0 || menuOption > 4)