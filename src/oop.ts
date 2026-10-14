// OOP (Object-Oriented Programming) is a programming paradigm that uses objects and classes to structure code. In TypeScript, you can define classes with properties and methods, and create instances of those classes.
class Chai {
    flavor: string;
    price: number;

    constructor(flavor: string, price: number) {
        this.flavor = flavor;
        this.price = price;
    }
}

const masalaChai = new Chai("Masala", 5);

masalaChai.flavor; // "Masala"
masalaChai.price; // 5


// public, private and protected are access modifiers in TypeScript that control the visibility of class members (properties and methods).
// public members can be accessed from anywhere, private members can only be accessed within the class, and protected members can be accessed within the class and its subclasses.
// private members are not accessible from outside the class, while protected members are accessible in subclasses.
// protected members are accessible within the class and its subclasses, but not from outside the class hierarchy.

class Chai2 {
    public flavor: string = "Masala"; // Public members are accessible from anywhere

    private secretIngredient: string = "Cardamom"; // Private members are only accessible within the class

    revealSecretIngredient() {
        return this.secretIngredient;
    }

}

class Shop {
    protected shopName: string = "Chaiwala";
}

class Branch extends Shop {
    getShopName() {
        return this.shopName; // Accessible because shopName is protected
    }
}

new Branch().getShopName(); // "Chaiwala"