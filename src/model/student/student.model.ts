import { Matter } from "../matter/matter.model";
import { Account } from "../account/account.model"
export class Student {
    public matter: Array<Matter>;
    constructor(private name: string, private cognome: string,private account: Account,private email: string, matterParam: Array<any> ){
        
        this.account = <Account>{
            name: account.name,
            password : account.password
        }
        this.matter = [];
        matterParam.forEach(element => {
            this.matter.push(new Matter(element.name, element.vote));
        });
    }
}