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