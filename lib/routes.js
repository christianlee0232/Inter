//.onLogin .onLogout only for gwendall:auth-client-callbacks package
//Only with in Client side code
if(Meteor.isClient) {    
    //On homepage, when you login, you automatically go to the recipe-book page
    Accounts.onLogin(function() {
         FlowRouter.go('/recipe-book');
    });
    //On recipe-book, when you logout, you automatically go to the homepage
    Accounts.onLogout(function() {
         FlowRouter.go('home');
    });
}

//Triggers are the way FlowRouter allows you to perform tasks before you enter into a route and after you exit from a route.
//context=if statement or other command
//redirect=else
FlowRouter.triggers.enter([function(context, redirect){
    // !=does not exist
    //if there does not exist a user id...
    if(!Meteor.userId()) {
        //Redirect/else go to homepage/login
        FlowRouter.go('home');
    }
}]);
//The page the route begins in
FlowRouter.route('/',{
    //linking 'home' (homepage) with hyperlink (/)
    name:'home',
    //action that you want the route to take
    action(){
        //The if statement = if the user id exists, go to recipe-book page
        if(Meteor.userId()){
            FlowRouter.go('/recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book',{
    name: 'recipe-book',
    action(){
            GAnalytics.pageview();
            // main refers to dynamic template "main" created in mainlayout
            //'recipes' refers to recipes.html 
            //('mainLayout', {main: 'recipes'}) refers to the mainlayout dynamic template using 
            BlazeLayout.render('mainLayout', {main: 'recipes'});
    }
});

FlowRouter.route('/recipe/:id',{
    name:'recipe',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout',{main:'recipeSingle'});
    }
});
FlowRouter.route('/menu',{
    name:'menu',
    action(){
        BlazeLayout.render('mainLayout',{main:'menu'});
    }
});
