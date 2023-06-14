import { LightningElement,track } from 'lwc';

export default class ParComp extends LightningElement {
    @track selOption;

    get options(){
        return [
            {label:'Input1 - Name', value:'Input1'},
            {label:'Input2 - Phone', value:'Input2'},
            {label:'Input3 - Email', value:'Input3'}
        ];
    }
    
    handleChange(event){
        this.selOption = event.detail.value;
    }
}