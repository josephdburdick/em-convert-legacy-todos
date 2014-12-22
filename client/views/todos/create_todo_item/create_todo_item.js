/*****************************************************************************/
/* CreateTodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateTodoItem.events({
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
    Meteor.call("addTodo", text);

    // Clear text field
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  }
});

Template.CreateTodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};