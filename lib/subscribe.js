if(Meteor.isClient){
    Meteor.subscribe('files.docs.all');
    Meteor.subscribe('documents');
}
