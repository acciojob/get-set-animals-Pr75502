//complete this code
class Animal {
	constructor(species){
		this.species=species
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(){
		super("Dog")
	}

	 makeSound() { 
       console.log(`The ${this.species} makes a sound`)
    }
   
    bark() { 
        console.log(`The ${this.species} makes a sound`);
    }

}

class Cat extends Animal {
	constructor(){
		super("Cat")
	}
	 makeSound() { 
       console.log(`The ${this.species} makes a sound`)
    }
	 purr() { 
        console.log(`The ${this.species} makes a sound`);
    }
	
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
