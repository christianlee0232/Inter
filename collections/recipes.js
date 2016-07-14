//Declaring js as recipes
//Recipes is a new Mongo collection from recipes.js
//Mongo.Collection is a grouping of mongodb documents
recipes = new Mongo.Collection('recipes');


recipes.allow({
    //adding new allow statement for a logged in user to make/insert a recipe
    insert: function(userId, doc) {
        return !!userId;
    },
    //adding new allow statement for a logged in user to update a recipe
    update: function(userId, doc) {
        return !userId;
    }
});

//Subdocument of RecipeSchema
Ingredient = new SimpleSchema({
    //Name and Amount must be string
    name: {
        type: String
    },
    amount:{
        type: String
    }
});

//RecipeSchema is the name of new SimpleSchema
RecipeSchema = new SimpleSchema({
    //name, desc, ingredients all must be strings
    name: {
        type: String,
        //label = labels each sections
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredient: {
        //[Ingredient] = refers to ingredients subdocument above
        type:[Ingredient]
    },
    inMenu: {
      //Booleans  = true or false
      type: Boolean, 
      defaultValue: false,
        optional: true,
        //Autoform-hidden = available on client side, but hidden
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        //automatically returns current users Id
        autoValue: function() {
            return this.userId
        },
        //available on client side, but hidden
        autoform:{
        type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        //automatically returns date of recipe made
        autoValue: function() {
            return new Date()
        }, 
        //available on client side, but hidden
        autoform:{
        type: "hidden"
        }
    }
});

//declaring a method from Meteor
Meteor.methods({
    //the method toggleMenuItem accepts id and currentState
    toggleMenuItem: function(id, currentState) {
        //updateing recipes
        recipes.update(id, {
            //replaces value in inMenu...
            $set: {
                //to opposite of currentState
                //true to false visa versa
                //! not or opposite
                inMenu: !currentState
            }
        });
    }
});
recipes.attachSchema ( RecipeSchema );
