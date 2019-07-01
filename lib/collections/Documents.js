import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Documents = new Meteor.Collection('documents');

DocumentsSchema = new SimpleSchema({
    name: {
        type: String
    },
    file: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'files',
                insertConfig: {
                    isBase64: false,
                    transport: 'ddp',
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true
                }
            }
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date();
        },
        autoform: {
            type: "hidden",
            label: false
        },
    }}, {tracker: Tracker});


Documents.allow({
    insert: (doc) => {
        return true;
    },
    update: (doc) => {
        return true;
    },
    remove: (doc) => {
        return true;
    }
});

Documents.attachSchema(DocumentsSchema);

export default Documents;