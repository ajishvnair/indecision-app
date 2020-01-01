class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreetings(){
        return `Hi i am ${this.name}`;
    }
    getDiscription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}
class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreetings(){
        let discription=super.getGreetings();
        if(this.hasHomeLocation()){
            return `${discription}. I am From ${this.homeLocation}`;
        }
        return `${discription}`;
        
    }
}
const me=new Traveller( 'ajish',21);
console.log(me.getGreetings());