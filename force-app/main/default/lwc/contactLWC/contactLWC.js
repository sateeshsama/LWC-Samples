import { LightningElement,api,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactsLWC.getContactList'

export default class ContactLWC extends LightningElement {
/*
@wire(getContactList) contacts;

wiredContacts ({error, data}) {
    if (error) {
        console.log(error);
        } else if (data) {
        this.contacts=data;
    }
}*/
@wire(getContactList) contacts;



}