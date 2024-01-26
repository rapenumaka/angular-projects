export class Users{
     private id :number;
     private firstName:string; 
     private lastName:string;
      private email:string

    constructor(id :number,  firstName:string,  lastName:string, email:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }

    
    public  getfirstName(): string{
        return this.firstName;
    }

    public   getId(): number{
        return this.id;
    }

    public   getlastName(): string{
        return this.lastName;
    }

    public  getEmail(): string{
        return this.email;
    }
}