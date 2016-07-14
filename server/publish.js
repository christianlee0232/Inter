//publishes recipes to respective author
Meteor.publish('recipes', function(){
    return recipes.find({author: this.userId});
});
//publishes singleRecipe to respective _id, which is given to each individual recipe
Meteor.publish('singleRecipe', function(id){
    check(id, String);
    return recipes.find({_id: id});
});