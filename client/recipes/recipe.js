//looking for events on recipe
Template.recipe.events({
    //when clicking toggle-menu button (add/remove from menu) changes from true to false and visa versa
    'click .toggle-menu': function() {
        //toggleMenuItem calls back to method in recipes.js collections
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});