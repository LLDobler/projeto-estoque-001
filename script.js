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
} while (menuOption !== 4)