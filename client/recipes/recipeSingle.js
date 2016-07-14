Template.recipeSingle.onCreated(function(){
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});

Template.recipeSingle.helpers({
    recipe: ()=> {
        var id = FlowRouter.getParam('id');
        return recipes.findOne({_id: id});
    }
});
