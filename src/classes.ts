/*
    Data Modifiers

    Public: Público/Default, todos podem acessar.
    Private Privado, ninguém pode acessar, apenas a própria classe.
    Protected Protegido, apenas as próprias classes e subclasses acessam.

    Readonly Leitura, apenas para leitura, se declara inicialmente, mas não se altera.
*/

class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        this.stregth = stregth
        this.skill = skill
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`)
    }
}

class Magic extends Character {
    magicPoints: number;

    constructor(stregth: number,
                skill: number,
                magicPoints: number) {

        super(stregth, skill)
        this.magicPoints = magicPoints

    }

}