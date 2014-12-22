/*****************************************************************************/
/* TodosIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todos_index', function () {
  // you can remove this if you return a cursor
  // return Todos.find({user_id: this.userId});
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});