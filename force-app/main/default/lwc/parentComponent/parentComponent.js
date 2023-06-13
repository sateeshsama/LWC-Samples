import { LightningElement, track} from 'lwc';

export default class ParentComponent extends LightningElement {
   @track parentValue = "Initial value";

   handleClick(){
    this.parentValue = "Value is set in Parent.js";
   }
}