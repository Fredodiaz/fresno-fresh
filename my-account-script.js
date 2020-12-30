// Variables associated with post insertion
let postManage;

// Variables associated with user profile
let profileImg;
let postLog;

function initialize() {
    // Calls functinons needed on load
    this.start = () => {
        Init.managePost();
        Init.userProfile();
        Interact.searchInit();
        Post.profileInfoInit();

        Temp.start();
        Post.userInit();
        Post.changeToOwnPosts();
        Post.ownPostData();
        Post.changeToFavs();
        Search.init();
    }

    // Initializes post insertertion
    this.managePost = () => {
        postManage = document.getElementById('test-select');
        postManage.innerHTML = overallFavorites;
    }

    // Variables associated with user profile
    this.userProfile = () => {
        profileImg = document.getElementsByClassName('profile')[0];
        postLog = document.getElementsByClassName('posts-on-feed-count');

        // Initializes whether user is authenticated
        if (sessionStorage.getItem('authenticatedUser') == null) {
            sessionStorage.setItem('authenticatedUser', true);
        }
        if (sessionStorage.getItem('authenticatedUser') === 'false') {
            location.href = 'index.html';
        }
    }
}
let Init = new initialize();



function action() {
    // Variables associated with the search bar
    let search;
    let icon;
    let input;
    let searchVal;

    // Highlights search bar and returns information that may have been searched
    this.searchFocus = () => {
        search.style.backgroundColor = "white";
        icon.style.color = "black";
        input.value = searchVal;
    }

    // Empties search bar but holds previous search
    this.searchBlur = () => {
        search.style.backgroundColor = "#67a9f5";
        icon.style.color = "#fff";
        searchVal = input.value;
        input.value = "";
    }

    // Allows for drop down to show and drop other options on nav
    this.dropDown = () => {
        let options = document.getElementsByClassName('individual-option-wrap');
        let optionsWrap = document.getElementsByClassName('user-options')[0];

        if (options[1].className === 'individual-option-wrap') {
            for (let i = 1; i < options.length - 1; i++) {
                options[i].className += ' do-flex';
                console.log(options[i].className);
            }
            optionsWrap.className += ' dropped-options';
            options[options.length - 1].className += ' do-flex create-post-option'

        } else {
            for (let i = 1; i < options.length - 1; i++) {
                options[i].className = 'individual-option-wrap';
            }
            options[options.length - 1].className = 'individual-option-wrap create-post-option'
            optionsWrap.className = 'user-options';
        }
    }

    // Initializes for styles + functionality to search bar
    this.searchInit = () => {
        search = document.getElementsByClassName('search-bar')[0];
        icon = document.getElementsByClassName('fa-search')[0];
        input = document.getElementsByClassName('search-input')[0];
        searchVal = "";
    }
}
let Interact = new action();



function managePost() {
    // Vars associated with user options
    let highlightOpts;
    let userName;
    let userType;

    // Variables associated with own posts
    let ownPostName;
    let ownPostImg;

    // Highlights and grabs array of favorites and adds to feed
    this.changeToFavs = () => {
        postManage.innerHTML = overallFavorites;
        highlightOpts[0].style.backgroundColor = "#fff";
        highlightOpts[1].style.backgroundColor = "#efecec";
    }

    // Highlights and grabs array of own posts and adds to feed
    this.changeToOwnPosts = () => {
        postManage.innerHTML = overallPosts;
        highlightOpts[0].style.backgroundColor = "#efecec";
        highlightOpts[1].style.backgroundColor = "#fff";
    }

    this.post = () => {
        console.log("Inactive function atm");
    }

    // Initializes highlight
    this.profileInfoInit = () => {
        highlightOpts = document.getElementsByClassName('primary-selected');
        userName = document.getElementsByClassName('user-name')[0];
        userType = document.getElementsByClassName('user-type')[0];

        ownPostName = document.getElementsByClassName('own-poster-name');
        ownPostImg = document.getElementsByClassName('');
    }

    // Initializes user info
    this.userInit = () => {
        profileImg.src = profilePic;
        postLog[0].innerHTML = postCount;
        postLog[1].innerHTML = favCount;
        userName.innerHTML = profileFirstName + ' ' + profileLastName;
        userType.innerHTML = profileType;
    }

    // Changes post name and image on overall posts
    this.ownPostData = () => {
        ownPostName = document.getElementsByClassName('own-poster-name');
        ownPostImg = document.getElementsByClassName('own-poster-img');

        for (let i = 0; i < postCount; i++) {
            ownPostName[i].innerHTML = userName.innerHTML;
            ownPostImg[i].src = profilePic;
        }

        overallPosts = postManage.innerHTML;
    }

    this.signOut = ()=> {
        sessionStorage.setItem('authenticatedUser', false);
        location.href = 'index.html';
    }
}
let Post = new managePost();



//  {**/*.html,**/*.js}