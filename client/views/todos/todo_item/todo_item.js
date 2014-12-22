/*****************************************************************************/
/* TodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodoItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  "click .toggle-checked": function () {
    // Set the checked property to the opposite 
    // of it's current value.
    Meteor.call("setChecked", this._id, ! this.checked);
  },

  "click .delete": function () {
    Meteor.call("deleteTodo", this._id);
  },

  // Add an event for the new button to Template.task.events
  "click .toggle-private": function(){
    Meteor.call("setPrivate", this._id, ! this.private)
  }
});

Template.TodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  isOwner: function(){
    return this.owner === Meteor.userId();
  }
});

/*****************************************************************************/
/* TodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoItem.created = function () {
};

Template.TodoItem.rendered = function () {
};

Template.TodoItem.destroyed = function () {
};