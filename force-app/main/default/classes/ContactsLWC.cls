public with sharing class ContactsLWC {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList(){

            return [
                SELECT Id, Name, Phone, Email, Picture__c
                FROM Contact
                LIMIT 10
            ];
        }
}