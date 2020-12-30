// Global Variables for Searchbar on Nav
let search;
let icon;
let input;
let searchVal;

// Initializes attributes for them to have data preset
function initialize() {
    this.start = () => {
        Init.input();
        Search.init();
    }

    this.input = () => {
        // Variables associated with the search bar
        search = document.getElementsByClassName('search-bar')[0];
        icon = document.getElementsByClassName('fa-search')[0];
        input = document.getElementsByClassName('search-input')[0];
        searchVal = "";

        // Initializes whether user is authenticated
        if (sessionStorage.getItem('authenticatedUser') == null) {
            sessionStorage.setItem('authenticatedUser', true);
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