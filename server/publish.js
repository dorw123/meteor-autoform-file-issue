import Files from '../lib/collections/Files';
import Documents from '../lib/collections/Documents';

if(Meteor.isServer){
    Meteor.publish('files.docs.all', function() {
        return Files.collection.find({});
    });
    Meteor.publish('documents', function() {
        return Documents.find({});
    });
}
