import { Account } from './account';

export class Owner implements Account {
  
    username:string;
    password:string;
    email:string;
    zipcode:number;
    phone:number;
    name:string;

    workingEmail:string;
    description:string;
    review:string[];
    deals:string[];
    //picutre:HTMLImageElement;

}
