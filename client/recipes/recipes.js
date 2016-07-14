  Template.recipes.onCreated(function(){
    var self = this;
//unsubscribe from old subscriptions
    self.autorun(function() {
        //subscribe to recipes
        self.subscribe('recipes');
    });
});
Template.recipes.helpers({
    recipes: ()=> {
        return recipes.find({});
    }
});
