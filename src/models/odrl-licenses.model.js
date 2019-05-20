// odrl-licenses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const odrlLicenses = new Schema({
    name: { type: String, required: true },
    odrl: { type: Object, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('odrl-licenses', odrlLicenses);
};
