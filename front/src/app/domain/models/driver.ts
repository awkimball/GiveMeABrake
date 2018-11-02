import { Vehicle } from './vehicle';
import { Account } from './account';


export class Driver implements Account {

    idusers:number;
    username:string;
    password:string;
    email:string;
    zipcode:number;
    phone:number;
    name:string;
    account_type:number;

    vehicles:Vehicle[];
    
}
