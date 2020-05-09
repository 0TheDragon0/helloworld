class Ariana {
    name: string;
    grade: number;

    constructor(n: string, g: number) {
        this.name = n;
        this.grade = g;
    }
    sayhello() {
        alert("Hello! My name is " + this.name);
    }
    displaygrade() {
        alert("I am in " + this.grade + " grade");
    }
}
/**
 * This is a multi line comment
 * This is a second line
 */
//This is a single line comment

const ariana = new Ariana("Ari", 7);
ariana.sayhello();
ariana.displaygrade();

const dragon = new Ariana("Dragon", 9);
dragon.sayhello();
dragon.displaygrade();

const ari = new Ariana("Aria", 8);
ari.sayhello();
ari.displaygrade();

class Kiana extends Ariana{
    favoritegame: string;

    constructor(n: string, g: number, fg: string) {
        super("Kiana", 2);
        this.favoritegame = fg;
    }
    displayfavgame() {
        alert("My favorite game is " + this.favoritegame);
    }
}

const kiana = new Kiana("Kiana", 2, "Roblox");
kiana.sayhello();
kiana.displaygrade();
kiana.displayfavgame();

class Dad extends Ariana{
   favoritebook: string;
   
    constructor(n: string, g: number, fb: string) {
        super("Ali", 0);
        this.favoritebook = fb;
    }
    displayfavbook() {
        alert("My favorite book is " + this.favoritebook);
    }
}
const ali = new Dad("Ali", 0, "Sapiens");
ali.sayhello();
ali.displaygrade();
ali.displayfavbook();
