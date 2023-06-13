import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api childValue;
    
    handleAdd(event){
        this.childValue = this.childValue+30;
    }

}