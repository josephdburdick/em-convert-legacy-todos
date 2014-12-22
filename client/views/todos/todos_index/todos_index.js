/*****************************************************************************/
/* TodosIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodosIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   "submit .new-task": function (event){
      
      // Get value from input
      var text = event.target.text.value;

      // Insert into db
      Meteor.call("addTask", text);

      // Clear text field
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
});

Template.TodosIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  tasks: function () {
    if (Session.get("hideCompleted")){
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}})
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },

  incompleteCount: function () {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});

/*****************************************************************************/
/* TodosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosIndex.created = function () {
};

Template.TodosIndex.rendered = function () {
};

Template.TodosIndex.destroyed = function () {
};