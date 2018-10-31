import { Vehicle } from './vehicle';
import { Account } from './account';


export class Driver implements Account {

    username:string;
    password:string;
    email:string;
    zipcode:number;
    phone:number;
    name:string;

    vehicles:Vehicle[];
    
}
