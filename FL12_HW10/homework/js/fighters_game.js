function Fighter(hero) {
    let name = hero.name;
    let damage = hero.damage;
    let hp = hero.hp;
    let strength = hero.strength;
    let agility = hero.agility;
    let wins = 0;
    let losses = 0;
    return {
        getName() {
            return name;
        },
        getDamage() {
            return damage;
        },
        getStrength() {
            return strength;
        },
        getAgility() {
            return agility;
        },
        getHealth() {
            return hp;
        },
        addWin() {
            wins++;
        },
        addLoss() {
            losses++;
        },
        attack(hero) {
          let probabilityOfSuccess = 100 - hero.strength + hero.agility;
            console.log(probabilityOfSuccess)
        },
        logCombatHistory() {
return console.log('Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses);
        } 


    }
 
}


    

    const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
    const myFighter2 = new Fighter({ name: 'Commodus', damage: 20, hp: 100, strength: 15, agility: 10 });

   

