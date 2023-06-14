import { LightningElement,api } from 'lwc';

export default class ChiComp extends LightningElement {
    @api selectedOption;


    get input1(){
        if(this.selectedOption === 'Input1'){
            return this.selectedOption;
        }
    }
    get input2(){
        if(this.selectedOption === 'Input2'){
            return this.selectedOption;
        }
    }
    get input3(){
        if(this.selectedOption === 'Input3'){
            return this.selectedOption;
        }
    }

}