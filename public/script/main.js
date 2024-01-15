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