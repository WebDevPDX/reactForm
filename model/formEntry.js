'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormEntrySchema = new Schema({
  name: String,
  company: String,
  tos: Boolean
});
module.exports = mongoose.model('FormEntry', FormEntrySchema);