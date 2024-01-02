import { shape } from "./shape";

export class rectangle extends shape{
   
    constructor(private _length: number, private _width: number){
        super( _length, _width);
    };

    public getArea() : number{
        return this._length* this._width;
    }

    public getInfo(): string{
        return super.getinfo() + ' Area is '+this.getArea();
    }

}