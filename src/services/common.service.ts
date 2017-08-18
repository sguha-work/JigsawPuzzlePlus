import {Injectable} from '@angular/core';
@Injectable()
export class Common {
    
    public getDefaultObject() {
        let obj: any;
        obj = {};
        return obj;
    }
}