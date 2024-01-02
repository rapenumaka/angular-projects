import { shape } from "./shape";

export class square extends shape{
   
    constructor(private _side: number){
        super( _side, _side);
    };

    public getArea() : number{
        return this._side* this._side;
    }

    public getInfo(): string{
        return super.getinfo() + ' Area is '+this.getArea();
    }

}