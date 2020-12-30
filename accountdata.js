// Variables that will transfer to account
let overallFavorites = [];
let overallPosts = [];
let post = '';
let profilePic = '';
let favCount = '';
let postCount = '';
let profileFirstName = '';
let profileLastName = '';
let profileType = '';

function temp() {
    let currentUser = JSON.parse(sessionStorage.getItem('userDataBase'))[sessionStorage.getItem('currentUser')];

    this.start = () => {
        Temp.generatePosts();
        Temp.userProfile();
    }

    // Generates favorites and own posts
    this.generatePosts = () => {
        overallFavorites = currentUser.favorites;
        overallPosts = currentUser.ownPosts;
        // Post.ownPostData();
    }

    this.userProfile = () => {
        profilePic = currentUser.img;
        postCount = overallPosts.length;
        favCount = overallFavorites.length;
        profileFirstName = currentUser.firstName;
        profileLastName = currentUser.lastName;
        profileType = 'Consumer';
    }

    this.renewUser = () => {
        currentUser = JSON.parse(sessionStorage.getItem('userDataBase'))[sessionStorage.getItem('currentUser')];
        console.log(currentUser);
        Temp.generatePosts();
        Temp.userProfile();
        Post.userInit();
        Post.changeToOwnPosts();
        Post.ownPostData();
        Post.changeToFavs();
    }
}

let Temp = new temp();