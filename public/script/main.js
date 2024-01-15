function onSignIn(user){
    try{
    const profile = user.getBasicProfile();
    console.log(profile.getID());
    console.log(profile.getName());
    }
    catch(err){
        console.log(err);
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        console.log(response);
        statusChangeCallback(response);
    });
  }