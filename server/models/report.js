const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    userName: String,
    personalSpir: Number,
    persEmot: Number,
    persHealth: Number,
    persPrReq: String,
    prTime: String,
    prPeople: Number,
    prEffect: Number,
    upgsEngaged: Number,
    upgsEffect: Number,
    strategicFocus: String,
    numFocus: Number,
    timeFocus: String,
    training: String,
    date: String,
    trainingResult: String,
    fieldWorkers: Number,
    mobilizers: Number,
    partnerCare: Number,
    stories: String,
    
  });
  
  const Report = mongoose.model("Report", reportSchema);
  
  module.exports = Report;