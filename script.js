let productQty = 20;
let menuOption = 0;
let addToProduct = 0;
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
    }
} while (menuOption !== 4)