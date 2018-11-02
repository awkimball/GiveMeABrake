import { Account } from './account';

export class Owner implements Account {
  
    idusers:number;
    username:string;
    password:string;
    email:string;
    zipcode:number;
    phone:number;
    name:string;
    account_type:number;

    workingEmail:string;
    description:string;
    review:string[];
    deals:string[];
    //picutre:HTMLImageElement;

}
