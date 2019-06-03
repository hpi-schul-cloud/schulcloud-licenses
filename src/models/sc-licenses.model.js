// odrl-licenses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const scLicenses = new Schema({
    name: { type: String, required: true },
    policies: { type: Array, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('sc-licenses', scLicenses);
};
