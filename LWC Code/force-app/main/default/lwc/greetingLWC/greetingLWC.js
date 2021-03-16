import { LightningElement, track } from 'lwc';

export default class GreetingLWC extends LightningElement {

@track message
handleClick(){
    this.message='On first LWC';
}

}