// Global Variables for Searchbar on Nav
let search;
let icon;
let input;
let searchVal;

// Global variables for cards
let cardNumber;

// Initializes attributes for them to have data preset
function initialize() {
    this.start = () => {
        Init.verify();
        Init.input();
        Init.addContent(3);

        Sidebar.init();
        Card.init();
        Search.init();
    }

    this.input = () => {
        // Variables associated with the search bar
        search = document.getElementsByClassName('search-bar')[0];
        icon = document.getElementsByClassName('fa-search')[0];
        input = document.getElementsByClassName('search-input')[0];
        searchVal = "";
    }

    // Temporarily adds cards so html isn't repetitive
    this.addContent = (index) => {
        let cont = document.getElementsByClassName('card-deck')[0];
        for (let i = 0; i < index; i++) {
            cont.innerHTML += cont.innerHTML;
        }
        let listings = Storage.retrieveAllListings();
        console.log(listings)
    }

    this.verify = () => {
        // Initializes whether user is authenticated
        if (sessionStorage.getItem('authenticatedUser') == null) {
            sessionStorage.setItem('authenticatedUser', true);
        }
        if (sessionStorage.getItem('post') == null) {
            sessionStorage.setItem('post', false);
        }
    }
}

let Init = new initialize;

// Function that controls actions such as Dropdown, Searchbar and Pop Up
function action() {

    // Local pop up variables
    let position = document.getElementsByTagName('body')[0];
    let popUp = document.getElementsByClassName('pop-up')[0];

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
            options[options.length - 1].className += ' do-flex create-post-option';

        } else {
            for (let i = 1; i < options.length - 1; i++) {
                options[i].className = 'individual-option-wrap';
            }
            options[options.length - 1].className = 'individual-option-wrap create-post-option';
            optionsWrap.className = 'user-options';
        }
    }
}

let Interact = new action();


let sidebarImg;
// All functionality involved with the sidebar
function sideBar() {
    let sidebar;
    let sidebarContentWrap;
    let sidebarContent;
    let state = true;
    let sidebarBtn;
    let sidebarOpts;
    let currentUser;
    let link;

    // Shows or hides the side bar
    this.activate = () => {
        state = !state;

        if (state) {
            sidebarContentWrap.style.margin = "0 0 0 -250px";
            sidebarContentWrap.style.overflow = "hidden";
            sidebarContent.style.visibility = "hidden";
            sidebarBtn.style.margin = "0";
            sidebarBtn.style.transform = "rotate(0deg)"
        } else {
            if (window.innerWidth > 1000) {
                sidebar.style.width = "auto";
            } else {
                sidebar.style.width = "0";
            }
            sidebarContentWrap.style.margin = "0";
            sidebarBtn.style.margin = "0 0 0 250px";
            sidebarContentWrap.style.overflow = "visible";
            sidebarContent.style.visibility = "visible";
            sidebarBtn.style.transform = "rotate(180deg)"
        }
    }

    this.updateUser = () => {
        if (sessionStorage.getItem('authenticatedUser') === 'true') {
            currentUser = JSON.parse(sessionStorage.getItem('userDataBase'))[sessionStorage.getItem('currentUser')];
            userName.innerHTML = currentUser.firstName + ' ' + currentUser.lastName;
            userType.innerHTML = 'Consumer';
            sidebarImg.src = currentUser.img;
            link.style.display = 'block';
        } else {
            userName.innerHTML = 'Guest';
            userType.innerHTML = '';
            sidebarImg.src = defaultImage;
            link.style.display = 'none';
        }

    }

    // Options
    this.opts = (index) => {
        for (let i = 0; i < sidebarOpts.length - 1; i++) {
            sidebarOpts[i].style.backgroundColor = '#2C6AB8';

            if (i === index) {
                sidebarOpts[i].style.backgroundColor = '#67a9f5';
            }
        }

        if (index === -1) {
            sidebarOpts[0].style.backgroundColor = '#67a9f5';
        }
    }

    this.init = () => {
        // Variables associated with side bar
        sidebar = document.getElementsByClassName('sidebar')[0];
        sidebarContent = document.getElementsByClassName('sidebar-content')[0];
        sidebarContentWrap = document.getElementsByClassName('sidebar-content-wrap')[0];
        sidebarBtn = document.getElementsByClassName('sidebar-btn')[0];
        sidebarOpts = document.getElementsByClassName('feed-option');
        sidebarImg = document.getElementsByClassName('sidebar-img')[0];
        userName = document.getElementsByClassName('user-name')[0];
        userType = document.getElementsByClassName('user-type')[0];
        link = document.getElementsByClassName('account-relocate')[0];

        Sidebar.updateUser();
        sidebarOpts[0].style.backgroundColor = '#67a9f5';
    }
}

let Sidebar = new sideBar();



function cards() {

    let cards;
    let profile;
    let likes;
    let divider;
    let image;
    let state;
    let listProfile;
    let listUserName;
    let listUserType;
    let imageWrap;
    let listingTitle;
    let listingDesc;
    let listingLikes;

    this.interact = (index) => {
        if (sessionStorage.getItem('authenticatedUser') === 'true') {
            if (state[index]) {
                imageWrap[index].style.margin = '0';
                image[index].style.borderRadius = '4px 4px 0 0';
                likes[index].style.opacity = '0';
                cards[index].style.height = "400px";
            } else {
                imageWrap[index].style.margin = '80px 0 0 0';
                image[index].style.borderRadius = '0';
                likes[index].style.opacity = '1';
                cards[index].style.height = "455px";
            }

            state[index] = !state[index];
        }
    }

    this.init = () => {
        console.log('Cardinit');
        cards = document.getElementsByClassName('card-wrap');
        profile = document.getElementsByClassName('profile-header');
        likes = document.getElementsByClassName('likes-wrap');
        divider = document.getElementsByClassName('post-hr');
        image = document.getElementsByClassName('card-image');
        imageWrap = document.getElementsByClassName('card-image-wrap');
        state = [];
        listProfile = document.getElementsByClassName('listing-profile');
        listUserName = document.getElementsByClassName('user-name');
        listUserType = document.getElementsByClassName('user-type');
        listingDesc = document.getElementsByClassName('listing-desc');
        listingTitle = document.getElementsByClassName('listing-title');
        listingLikes = document.getElementsByClassName('total-likes');

        for (let i = 0; i < cards.length; i++) {
            image[i].outerHTML = `
            <img class="card-image" onclick="Card.interact(${i});"
            src="${imgArr[i]}">`;
            state.push(false);

            listProfile[i].outerHTML = `
            <img src="${profImgArr[i]}"
            alt="" class="profile listing-profile">`;

            listUserName[i + 1].outerHTML = `
            <p class="user-name">${userNameArr[i]}</p>`;

            listUserType[i + 1].outerHTML = `
            <p class="user-type">${userTypeArr[i]}</p>`;

            listingTitle[i].outerHTML = `
            <h2 class="listing-title">${descTitleArr[i]}</h2>`;

            listingDesc[i].outerHTML = `
            <p class="listing-desc">${descArr[i]}</p>`;

            listingLikes[i].outerHTML = `<p class="total-likes ${typeArr[i]}">${likesArr[i]}</p>`;

        }

        let listings = Storage.retrieveAllListings();
        for (let i = 0; i < listings.length; i++) {
            // If statement doesn't loop again after zero since 1 holds data
            // that errors
            if (i === 0) {
                let listing = JSON.parse(listings[i])
                image[i].outerHTML = `
            <img class="card-image" onclick="Card.interact(${i});"
            src="${JSON.parse(listing.images[0]).data}">`;
                state.push(false);

                listProfile[i].outerHTML = `
            <img src="${profilePic}"
            alt="" class="profile listing-profile">`;

                listUserName[i + 1].outerHTML = `
            <p class="user-name">${listing.userid}</p>`;

                listUserType[i + 1].outerHTML = `
            <p class="user-type">${listing.listingIsOffer == 1 ? "Producer" : "Consumer"}</p>`;

                listingTitle[i].outerHTML = `
            <h2 class="listing-title">${listing.title}</h2>`;

                listingDesc[i].outerHTML = `
            <p class="listing-desc">${listing.desc}</p>`;

                listingLikes[i].outerHTML = `<p class="total-likes">0</p>`;
            }
        }

        if (sessionStorage.getItem('post') === 'true') {
            Card.test()
        }

    }

    this.filter = (searchInput) => {
        if (searchInput === 'alllistings') {
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = 'initial';
            }
        } else {

            for (let i = 0; i < cards.length; i++) {
                if (listingLikes[i].outerHTML.indexOf(searchInput) === -1) {
                    cards[i].style.display = 'none';
                } else {
                    cards[i].style.display = 'initial';
                }
            }
        }
    }

    this.test = () => {
        listProfile[0].outerHTML = `
            <img src="${sidebarImg.src}"
            alt="" class="profile listing-profile">`;
    }
}

let Card = new cards();

let imgArr = ['https://images.unsplash.com/photo-1507919181268-0a42063f9704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1563635707451-c427db1e1f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1552034507-dc5d8099e659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
    'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1715&q=80',
    'https://images.unsplash.com/photo-1464195157370-5b596406ff80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1563696629810-8f510c46ecf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
];

let profImgArr = [
    'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1469365897239-504fabc9b11b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    'https://images.unsplash.com/photo-1560597324-f8e931d1339d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1562584030-0f36395c7b6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1455146106369-1e31beb07fce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
]

let userNameArr = [
    'Berthold Farms',
    'Levenhold Company',
    'SamSmith Farms',
    'Beautiful Floristry',
    'Help Now Shelter',
    'Womens care Group',
    "That's Good Cofeeshop",
    'Smiths Law Firm',
]

let userTypeArr = [
    'Producer',
    'Consumer',
    'Producer',
    'Producer',
    'Consumer',
    'Consumer',
    'Consumer',
    'Consumer',
]

let descTitleArr = [
    'Squash for Sale - Berthold Farms',
    'Free Food!',
    'Almonds',
    'Flowers - Not Food',
    'Need Vegetables! Rescue Mission',
    'Need Personal Care Items',
    'Free lunch!',
    'Going out of Business',
]

let descArr = [
    'Our Farm has 10lbs of squash we are looking to get rid of. $2.00/lb. Call Us.',
    'Our company had a meeting and we have lots of food left over! Free sandwiches, veggies, and fruit platters. Need it gone ASAP. Email or call.',
    'SamSmith farms wants to give out 1lb bags of almonds. Limited quantity available. First come, first served.',
    'Have some bouquets from our florist shop that need to go. Call if interested.',
    'Our shelter is in need of canned or fresh vegetables. Please contact us if you can donate.',
    "The Women's Care group is looking for personal care items to donate to a local shelter.",
    'Our coffeeshop has lots of unsold food that we’ll need to throw away once it expires. We are willing to donate. Contact us.',
    "Our law firm is going out of business. We have lots of stationary, printers, scanners, etc. for low prices. Needs to go ASAP. Contact us.",
]

let likesArr = [
    '5',
    '7',
    '1',
    '9',
    '3',
    '8',
    '2',
    '5',
]

let typeArr = [
    'vegetables',
    'fruits vegetables',
    '',
    '',
    'vegetables',
    '',
    'dairy',
    '',
]




// WHEN NEW FORM IS POSTED, ADD CARD WITH CARD INFO



// WHEN CARD IS CLICKED, OPEN UP POP UP WITH CONTACT INFO

window.addEventListener('load', function () {
    var theParent = document.getElementById("theDude");
    theParent.addEventListener("click", doSomething, false);

    function doSomething(e) {
        if (e.target.className == 'card-image' && sessionStorage.getItem('authenticatedUser') === 'false') {

            // BRINGS UP POP UP WITH CONTACT INFORMATION
            PopUp.show();
        }
        e.stopPropagation();
    }
});