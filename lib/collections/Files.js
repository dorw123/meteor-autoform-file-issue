import { FilesCollection } from 'meteor/ostrio:files';

const Files = new FilesCollection({
    collectionName: 'files',
    allowClientCode: true,
    onBeforeUpload(file){
        if(file.size <= 10485760 && /pdf/i.test(file.extension)){
            return true;
        }
        return 'Please upload a pdf file, with size equal or less than 10MB.';
    }
});

export default Files;