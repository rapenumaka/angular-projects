export abstract class  shape {
    constructor(private _x : number,private _y: number){

    }

    public set x(X: number){
        this._x=X;
    }

    public set y(Y : number){
        this._y=Y;
    }

    public get x(){
        return this._x;
    }

    public get y(){
        return this._y;
    }
    abstract computeArea(): number;

    abstract computeCicumference() : number;

    public getinfo(): string{
        let v1 = this._x;
        let v2 = this._y
        let v3 = this.computeArea;
        let v4 = this.computeCicumference;
        return `x = ${v1} y= ${v2} area= ${v3} perimeter= ${v4}`;
    }


}