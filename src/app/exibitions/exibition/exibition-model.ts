export class Exibition{
    id :number;
    exibitionName:string;
    imagePath: string;
    duration: string;
    theme: string;
    price: number;
    description: string;
    isEnrolled: boolean;
    attendees:string[];
    isActive: boolean;
    page: string;
    status?: string;
    constructor(id:number, exibitionName:string, imagePath: string, duration: string, theme: string, price: number, description: string, isEnrolled: boolean, attendees:string[], isActive:boolean, page: string,status?: string){
        this.id = id;
        this.exibitionName = exibitionName;
        this.imagePath = imagePath;
        this.duration = duration;
        this.theme = theme;
        this.price = price;
        this.description = description;
        this.isEnrolled = isEnrolled;
        this.attendees = attendees;
        this.isActive = isActive;
        this.page = page;
        this.status = status;
    }
    getAttendees = () => {return this.attendees;}
    attend = (name:string) => {this.attendees.push(name);}
    getPage = () =>{console.log(this.page);}

}