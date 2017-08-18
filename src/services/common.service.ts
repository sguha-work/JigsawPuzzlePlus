import {Injectable} from '@angular/core';
@Injectable()
export class Common {
    
    public getDefaultObject() {
        let obj: any;
        obj = {
            imageData: "0"
        };
        return obj;
    }
}