public with sharing class ContactsLWC {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList(){
        
            return [
                SELECT Id, Name, Phone, Email 
                FROM Contact
                LIMIT 10
            ]; 
    }
    
}