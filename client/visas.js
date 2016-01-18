Template.visas.helpers({
  visas: function(){
    return Visas.find();
  }
})

Template.insertVisaForm.events({
  'change .photo': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});

Template.updateVisaForm.events({
  'change .photo': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.update(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});