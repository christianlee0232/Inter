// use menu.html template when triggered
// self is the variable being created
// this = means to call self the name of the menu
Template.menu.onCreated(function(){
    var self = this;
//unsubscribe from old subscriptions
    self.autorun(function() {
        //subscribe to recipes
        self.subscribe('recipes');
    });
});
//helpers declares function
Template.menu.helpers({
    //if recipes are present (true) on the inMenu, return the respective recipe
    recipes: ()=> {
        return recipes.find({inMenu: true});
    }
});
