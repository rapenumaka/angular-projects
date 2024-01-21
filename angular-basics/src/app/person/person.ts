export class person{

  private name : string;
  private age :number;
  private email : string;

   public constructor (name : string,age :number,email : string){
     this.name=name;
     this.age=age;
     this.email = email;
   }

   public getName() : string{
     return this.name;
   }

   public getEmail() : string{
    return this.email;
  }


  public getAge() : number{
    return this.age;
  }
}