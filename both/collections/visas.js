Visas = new Mongo.Collection("visas");
Visas.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 200
  },
  lastName: {
    type: String,
    label: "Last Name"
  },
  travelPurpose: {
    type: String,
    label: "Travel Purpose",
    allowedValues: ['1', '2', '3'],
    autoform: {
      options: [
        {label: "Business", value: "1"},
        {label: "Family", value: "2"},
        {label: "Tourism", value: "3"}
      ]
    }
  },
  sex: {
    type: String,
    label: "Sex",
    allowedValues: ['M', 'F'],
    autoform: {
      options: [
        {label: "Male", value: "M"},
        {label: "Female", value: "F"}
      ]
    }
  },
  dateOfBirth : {
  	type: Date,
    label: "Date of Birth"
  },
  status : {
    type: String,
    label: "Status",
    allowedValues: ['O', 'R', 'D', 'C'],
    autoform: {
      options: [
        {label: "Open", value: "O"},
        {label: "In Review", value: "R"}, 
        {label: "Decision made", value: "D"},
        {label: "Collect Application", value: "C"}
      ]
    }
  },
  photo : {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    label: "userId"
  }

}));

Visas.allow({
 insert: function(userId, doc){
    return doc && doc.userId === userId;
  },
  update: function(userId, doc){
    return doc && doc.userId === userId;
  }
})
