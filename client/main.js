import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Documents from '../lib/collections/Documents';


import './main.html';

Template.hello.helpers({

  getDocuments(){
    return Documents.find({}).fetch();
  }
});

