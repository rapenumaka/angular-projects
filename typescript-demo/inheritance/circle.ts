import { shape } from "./shape"

export class circle extends shape{
   constructor( private _rad : number){
    super(_rad,_rad)
   }

   getArea() : number{
    return 3.14* this._rad*this._rad;
   }
   
   public getInfo(): string{
    return super.getinfo() + ' Area is '+this.getArea();
}

}