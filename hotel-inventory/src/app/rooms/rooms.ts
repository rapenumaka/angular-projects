export interface Rooms{
    availableRooms: number;
    bookedRooms : number;
    totalRooms : number;

}


export interface RoomProps{
    title: string, 
    amenities : string, 
    checkInDate : Date,
    checkoutDate : Date, 
    image : string 
    roomNumber : number,
    price : number

}