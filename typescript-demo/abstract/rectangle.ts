import { shape } from "./shape";

export class rectangle extends shape{

    constructor(private _length: number, private _width: number){
        super( _length, _width);
    };


    computeArea(): number {
        return  this._length * this._width;
    }
    computeCicumference(): number {
        return 2*(this._length + this._width)
    }

    public getInfo(){
        return super.getinfo();
    }

}