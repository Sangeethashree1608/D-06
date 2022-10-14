//1. Create a class Movie:

class Movie{

    constructor(title,studio,rating){
this.title=title;
this.studio= studio;
this.rating=rating
    }
    getPG(){
        return this.rating
    }
}
var film=new Movie("Casino Royale","Eon Productions","PG13");
console.log(film.getPG);

//3. create a class Person:

class Person{
constructor(name,age,DOB,occupancy,salary){
this.name=name,
this.age=age,
this.DOB=DOB,
this.occupancy=occupancy,
this.salary=salary
}

}
var Person1=new Person("Sangeetha","22","16-08-2000","Professional","20000");
console.log(Person1);


//4. Class to calculate price of Uber:

class Uber{
    constructor(travel_dis_km){
        this.rate_per_km=10;
        this.travel_dis_km =travel_dis_km;
    }
price(){

    return this.rate_per_km * this.travel_dis_km;
}
}
var res= new Uber(20);
console.log(res.price());

