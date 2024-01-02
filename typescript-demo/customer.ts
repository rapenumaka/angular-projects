class Customer{
    private firstname:string;
    public lastname:string;
    private _email:string;
    
    // Cant define empty constructor


    constructor(first:string, last :string){
        this.firstname=first;
        this.lastname=last;
    }

    // Defining the getter and setter method for firstname property

    public getFirstName(): string{
        return this.firstname;
    }

    public setFirstName(first:string): void{
        this.firstname=first;
    }

    public get email(): string{
        return this._email;
    }
   // set property can't have return type 
    public set email(_setEmail: string){
        this._email=_setEmail;
    }
}

// Removing the boiler plate code

class Person{
    constructor(private _name :string, private _email: string) {
        
    }
   
    public get email() : string{
        return this._email;
    }
    
    public set email(setEmail : string){
    this._email=setEmail;
    }

    public get name() : string{
        return this._name;
    }

    public set name(setName : string){
        this._name=setName;
    }
}

let newcs = new Customer('martin', 'dickson');
console.log(newcs.getFirstName);
console.log(newcs.lastname);


console.log('JS file is generated even when there is compilation error');
console.log('To present this generatio use tsc --noEmitOnError customer.ts')


newcs.setFirstName('Jerry');

let p1 = new Person('John', 'joh@gmail.com');
console.log(p1.name)
