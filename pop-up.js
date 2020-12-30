// Holds the Pop Up HTML to add into website
let popUpTemplate = `
                <div class="pop-up">
                    <div class="remove-pop-up">
                        <div onclick="PopUp.exit()" id="test" class="remove-pop-up-btn-wrap">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="sign-up-wrap">
                        <h1 class="form-header">Sign Up</h1>
                        <div class="image-wrap">
                            <img class="profile-img" src="#" alt="">
                        </div>
                        <div class="input-wrap image-wrap">
                            <!-- <button class="files-btn"> -->
                            <label class="file-label files" for="files">Choose Image</label>
                            <!-- </button> -->
                            <input id="files" type="file" accept='image/*' />
                        </div>
                        <form>

                            <div class="input-wrap">
                                <input class="input-data" placeholder="First Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a first name!</span>
                            <div class="input-wrap">
                                <input class="lastNameInp" placeholder="Last Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div class="input-wrap">
                                <input class="input-data" placeholder="Email" type="email">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a valid email!</span>
                            <div class="input-wrap">
                                <input class="input-data" placeholder="Password" type="password">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a valid password!</span>
                            <div class="input-wrap">
                                <button onclick="FormInput.prompt(); return false" class="submit">Sign Up</button>
                                <button onclick="FormInput.userType('Consumer'); return false">Consumer</button>
                                <button onclick="FormInput.userType('Producer'); return false">Producer</button>
                            </div>
                            <span class="form-type">Already have an account? <a onclick="FormInput.logIn()" href="#">Log In</a></span>
                        </form>
                    </div>
                </div>`;

let postPopupTemplate = `<div id="modal" class="modal">
        <div class="remove-pop-up modal-remove">
        <div onclick="CreateListingModal.exit()" id="test" class="remove-pop-up-btn-wrap">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        </div>
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title" class="col-md-12 align-self-center">Create Listing</h2>
            </div>
            <div class="modal-body">
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <input type="text" class="form-control" id="titleField" placeholder="Title" required>
                            <div class="invalid-feedback">
                                Please enter a post title
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <textarea class="form-control" id="descriptionField" placeholder="Description" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <select id="postTypeField" class="form-control">
                                <option disabled>Post type...</option>
                                <option value="1">Offer</option>
                                <option value="0">Request</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row col-md-12 mb-3 text-center" style="border:2px dashed grey; border-radius: 10px; height:100px;" id="drop_zone" name="files[]" multiple>
                        <span class="col-md-12 align-self-center">Drop images here</span>
                    </div>
                    <output id="list"></output>
            
            
                    <button class="btn btn-primary" type="submit" onclick="Storage.saveListing()">Post</button>
                </form>
            </div>
        </div>
    </div>
`;
// FILLER DATA
let temp1 = [
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1531943965939-7fa7994ffa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic own-poster-img\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6 class=\"own-poster-name\">Gregory Garner</h6>\n                            <p class=\"post-title\">I'd like rice for an upcoming party</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cum voluptas accusamus iste!</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">4</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1531943965939-7fa7994ffa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic own-poster-img\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6 class=\"own-poster-name\">Gregory Garner</h6>\n                            <p class=\"post-title\">Need a few watermelons</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis veniam sed quam suscipit?</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1526841535633-ef3be0b21fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">12</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1531943965939-7fa7994ffa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic own-poster-img\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6 class=\"own-poster-name\">Gregory Garner</h6>\n                            <p class=\"post-title\">Local homeless shelter wants food. Spreading the word!</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quo eaque eligendi praesentium ipsum facilis laborum voluptates tempora nesciunt.</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1661&q=80\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">2</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1531943965939-7fa7994ffa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic own-poster-img\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6 class=\"own-poster-name\">Gregory Garner</h6>\n                            <p class=\"post-title\">Moving in town, would buy some fruit from someone</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa voluptatibus ad eos doloremque veniam a? Inventore quaerat repellat quas quod sit.</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">8</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>"
]

let temp2 = [
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Elma Sanches</h6>\n                            <p class=\"post-title\">Dairy has spare Milk</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sequi magni odio?</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">23</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Willow Smith</h6>\n                            <p class=\"post-title\">Have some Food</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem repellat cumque suscipit eius similique asperiores nihil ipsam exercitationem.</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">52</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Alex Daniels</h6>\n                            <p class=\"post-title\">Watermelon on sale!</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore a adipisci quo. Sapiente magnam facilis sed soluta nisi architecto?</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">32</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Jesenia Alvarez</h6>\n                            <p class=\"post-title\">This summer's harvest</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, provident minus enim neque, repellendus voluptate earum voluptatem blanditiis velit sint obcaecati minima beatae tenetur ad voluptas tempora!</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">75</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Olivia Holt</h6>\n                            <p class=\"post-title\">I have flowers not food haha</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum earum provident!</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1467165048326-5848fb9c0913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">23</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Kenny Stuart</h6>\n                            <p class=\"post-title\">Giving out food for organizations</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas deleniti quasi aut praesentium tempore reiciendis.</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1548047635-559d51fe852c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">13</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Riley Rhodes</h6>\n                            <p class=\"post-title\">I have flour for baking</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet deleniti aperiam totam explicabo quaerat fuga vero beatae rem?</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1545587195-a625d872ca82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">6</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>",
    "           <!-- Splash Page -->\n        <div class=\"post-container\">\n            <div class=\"post-wrap\">\n                <div class=\"post-description-wrap\">\n                    <div class=\"post-creator-profile\">\n                        <div class=\"post-image-wrap\">\n                            <img src=\"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80\" alt=\"\" class=\"post-profile-pic\">\n                        </div>\n        \n                        <div class=\"post-creator-desc\">\n                            <h6>Julie Arias</h6>\n                            <p class=\"post-title\">Anyone want quality squash farming seeds?</p>\n                        </div>\n                    </div>\n        \n                    <div class=\"post-text-wrap\">\n                        <p class=\"post-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae similique repudiandae inventore, quas illo fugit dolorum, libero incidunt in fugiat cumque? Hic.</p>\n                    </div>\n                </div>\n        \n                <div class=\"post-main-img-wrap\">\n                    <img src=\"https://images.unsplash.com/photo-1528613526328-8c19bd037322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60\" alt=\"\" class=\"post-profile-pic\">\n                </div>\n        \n                <div class=\"likes-wrap\">\n                    <i class=\"fa fa-heart\"></i>\n                    <p class=\"total-likes\">45</p>\n                </div>\n        \n               <div class=\"post-hr\"></div>\n        \n                <!-- No Need to edit this atm\n                <div class=\"asdf1back-wrap\">\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Like</h4>\n                    </div>\n                    <div class=\"asdf1back-type\">\n                        <div class=\"asdf4\">d</div>\n                        <h4>Comment</h4>\n                   </div>\n                </div>\n            -->\n            </div>\n        </div>"
]
// END OF FILLER DATA

// Variables for getting styles from the body tag
let position = document.getElementsByTagName('body')[0];

// Adds the pop up html to the website to register other variables
position.innerHTML += popUpTemplate;
position.innerHTML += postPopupTemplate;

// Variables for getting styles from the pop up
let popUp = document.getElementsByClassName('pop-up')[0];

// Hides pop up and positions it relative to body
position.style.overflow = 'scroll';
position.style.position = 'relative';
popUp.style.display = 'none';

let modal = document.getElementById('modal');
modal.style.display = 'none';

function scripts() {
    // Makes the page scrollable again and removes pop up
    this.exit = () => {
        position.style.overflow = 'scroll';
        popUp.style.display = 'none';
    }

    // Shows the pop up
    this.show = () => {
        position.style.overflow = 'hidden';
        popUp.style.display = 'block';
        FormInput.load();
    }

    // Checks user
    this.verify = (reference) => {
        let verif = sessionStorage.getItem('authenticatedUser');
        console.log(verif + ' verif');
        if (verif === 'true') {
            if (reference === '') {
                location.href = '#';
            }
            if (reference === 'my-account') {
                location.href = 'my-account.html';
            }
            if (reference === 'listpage') {
                location.href = 'listpage.html';
            }
        } else {
            PopUp.show();
        }
    }
}

let PopUp = new scripts();

function searchFuncs() {
    let searchBar;
    let searchWrap;
    let sidebarOpts;



    this.init = () => {
        searchBar = document.getElementsByClassName('search-bar')[0];
        sidebarOpts = document.getElementsByClassName('feed-option');
        searchBar.innerHTML += `
        <div class="search-options-wrap">
            <div onclick="Search.direct('fruits')" class="search-options so-first">
                <div class="search-text">fruits</div>
                <div class="search-img">
                    <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        alt="">
                </div>
            </div>
            <div onclick="Search.direct('dairy')" class="search-options">
                <div class="search-text">dairy</div>
                <div class="search-img">
                    <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        alt="">
                </div>
            </div>
            <div onclick="Search.direct('vegetables')" class="search-options so-end">
                <div class="search-text">vegetables</div>
                <div class="search-img">
                    <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        alt="">
                </div>
            </div>
        </div>
        `;

        searchWrap = document.getElementsByClassName('search-options-wrap')[0];
        Search.initSearch();
    }

    this.show = () => {
        searchWrap.style.display = 'block';
    }

    this.hide = () => {
        setTimeout(function () {
            searchWrap.style.display = 'none';
        }, 250);
    }

    this.direct = (searchVal) => {
        if (location.href.indexOf('listpage.html') === -1) {
            location.href = 'listpage.html#' + searchVal;
        } else {
            Search.find(searchVal);
        }
    }

    this.find = (searchVal) => {
        if (searchVal === 'fruits') {
            Sidebar.opts(1);
        } else if (searchVal === 'dairy') {
            Sidebar.opts(2);
        } else if (searchVal === 'vegetables') {
            Sidebar.opts(3);
        }
        Card.filter(searchVal);
    }

    this.initSearch = () => {
        let hashIndex = location.href.indexOf('#');
        if (hashIndex !== -1) {
            let searchValue = location.href.slice(hashIndex + 1, location.href.length)
            Search.find(searchValue);
        }
    }
}

let Search = new searchFuncs();




function modalScripts() {
    // Makes the page scrollable again and removes pop up
    this.exit = () => {
        position.style.overflow = 'scroll';
        modal.style.display = 'none';
    }

    // Shows the pop up
    this.show = () => {
        modal.style.display = 'block';
        position.style.overflow = 'hidden';
    }

    // Checks user
    this.verify = (reference) => {
        let verif = sessionStorage.getItem('authenticatedUser');
        console.log(verif + ' verif');
        if (verif === 'true') {
            CreateListingModal.show();
        } else {
            PopUp.show();
        }
    }

    // Render image thumbnails
    this.handleImageSelection = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const files = event.dataTransfer.files;

        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }
            const fname = escape(f.name);
            var reader = new FileReader();
            reader.onload = (function (file) {
                return function (e) {
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(file.name), '"/>'].join('');
                    const imgObjName = "img-" + fname;
                    //console.log(imgObjName);
                    const imgObj = {
                        "IMG_NAME": fname,
                        "data": e.target.result
                    };
                    sessionStorage.setItem(imgObjName, JSON.stringify(imgObj));
                    document.getElementById('list').insertBefore(span, null);
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }

    this.handleDragOver = (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }

    this.setupDropZone = () => {
        const dropZone = document.getElementById('drop_zone');
        dropZone.addEventListener('dragover', CreateListingModal.handleDragOver, false);
        dropZone.addEventListener('drop', CreateListingModal.handleImageSelection, false);
    }
}

let CreateListingModal = new modalScripts();
CreateListingModal.setupDropZone();

// Allows for website to get profile images from user
let defaultImage = 'http://pluspng.com/img-png/user-png-icon-account-human-person-user-icon-512.png';
let imgReceived = document.getElementsByClassName('profile-img')[0];
let inputFile = document.querySelector('input[type="file"]');

// Default image
imgReceived.src = defaultImage;

// Reads the image given and converts it to use as a src attribute
inputFile.addEventListener('change', (event) => {
    console.log(inputFile.files);
    let reader = new FileReader();
    reader.onload = () => {
        imgReceived.src = reader.result;
        FormInput.updateImg();
    }
    reader.readAsDataURL(inputFile.files[0])
}, false)

// Holds all functionality needed for pop up to gather user data
function inputs() {
    let inputDataHolder = document.getElementsByClassName('input-data');
    let lastNameInp = document.getElementsByClassName('lastNameInp')[0];
    let formType = document.getElementsByClassName('form-type')[0];
    let inputForm = document.getElementsByClassName('input-wrap');
    let formHeader = document.getElementsByClassName('form-header')[0];
    let fileLabel = document.getElementsByClassName('file-label')[0];
    let button = document.getElementsByClassName('submit')[0];
    let start = 0;
    let totalPrompts = 3;
    let defaultImg = imgReceived.src;
    let chosenImg = defaultImg;
    let popUpState = 'signup';
    let currentUser = -1;


    // Determines if all information needed is entered then submits
    this.prompt = () => {

        // Evens are inputs, odds are span tags (0 - 5)
        let promptCounter = 0;
        inputDataHolder[3].innerHTML = 'Please enter a valid email!';
        inputDataHolder[5].innerHTML = 'Please enter a valid password!';

        for (let i = start; i < 5; i += 2) {
            if (inputDataHolder[i].value === "") {
                inputDataHolder[i + 1].style.display = "block";
            } else {
                inputDataHolder[i + 1].style.display = "none";
                promptCounter += 1;
                if (promptCounter === totalPrompts) {
                    console.log('sign up succesful');
                    FormInput.registerUser();
                }
            }
        }
    }

    // Hides span tags that alert user
    this.load = () => {
        for (let i = 1; i < 6; i += 2) {
            inputDataHolder[i].style.display = "none";
        }
    }

    // Converts the pop up to prompt for sign up
    this.logIn = () => {
        FormInput.load();
        popUpState = 'login';
        formType.innerHTML = 'Don\'t have an account? <a onclick="FormInput.signUp()" href="#">Sign Up</a>';
        formHeader.innerHTML = 'Log In';
        inputForm[1].style.display = 'none';
        inputForm[2].style.display = 'none';
        start = 2;
        totalPrompts = 2;
        fileLabel.style.display = 'none';
        imgReceived.src = defaultImg;
        button.innerHTML = 'Log In';
    }

    // Converts the pop up to prompt for sign up
    this.signUp = () => {
        FormInput.load();
        popUpState = 'signup';
        formType.innerHTML = 'Already have an account? <a onclick="FormInput.logIn()" href="#">Log In</a>';
        formHeader.innerHTML = 'Sign Up';
        inputForm[1].style.display = 'block';
        inputForm[2].style.display = 'block';
        start = 0;
        totalPrompts = 3;
        fileLabel.style.display = 'block';
        imgReceived.src = chosenImg;
        button.innerHTML = 'Sign Up';
    }

    // Gets image from user and adds to preview
    this.updateImg = () => {
        chosenImg = imgReceived.src;
    }

    this.validifyEntries = (state) => {
        // Checks if valid email only if sign up
        // Also checks password if log in
        if (state) {
            // Valid email and password if true
            for (let i = 0; i < USERDB.length; i++) {
                // console.log(USERDB.length);
                if (USERDATA.email === USERDB[i].email && USERDATA.password === USERDB[i].password) {
                    currentUser = i;
                    return true;
                }
            }
            return false;
        } else {
            // Invalid email if true
            for (let i = 0; i < USERDB.length; i++) {
                // console.log(USERDB.length);
                if (USERDATA.email === USERDB[i].email) {
                    return true;
                }
            }
            return false;
        }
    }

    this.userType = () => {

    }

    this.registerUser = () => {
        USERDATA = {
            img: chosenImg,
            firstName: inputDataHolder[0].value,
            lastName: lastNameInp.value,
            email: inputDataHolder[2].value,
            password: inputDataHolder[4].value,
            ownPosts: [],
            favorites: [],
            userType: popUpState
        }

        if (popUpState === 'signup') {
            // Returns true if invalid email
            if (FormInput.validifyEntries(false)) {
                inputDataHolder[3].innerHTML = 'Email is already in use!';
                inputDataHolder[3].style.display = 'block';
            } else {
                USERDB.push(USERDATA);
                currentUser = USERDB.length - 1;
                sessionStorage.setItem('userDataBase', JSON.stringify(USERDB));
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                sessionStorage.setItem('authenticatedUser', true);
                FormInput.authenticatedUser();
            }
        } else {
            // Returns true if valid log in
            console.log(FormInput.validifyEntries(true));
            if (FormInput.validifyEntries(true)) {
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                sessionStorage.setItem('authenticatedUser', true);
                FormInput.authenticatedUser();
            } else {
                inputDataHolder[5].innerHTML = 'Email or password is invalid!';
                inputDataHolder[5].style.display = 'block';
            }
        }
    }

    this.authenticatedUser = () => {
        position.style.overflow = 'scroll';
        popUp.style.display = "none";
        if (location.href.indexOf('my-account.html') != -1) {
            Temp.renewUser();
        }
        if (location.href.indexOf('listpage.html') != -1) {
            Sidebar.updateUser();
        }
    }
}
let FormInput = new inputs();

// User data - global var cz why not *shrugs*
let USERDATA = {
    img: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ownPosts: [],
    favorites: [],
    userType: ''
}

// Array of users w/ info
let USERDB = [];

USERDB.push({
    img: 'https://images.unsplash.com/photo-1531943965939-7fa7994ffa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    email: 'gregarner@gmail.com',
    password: 'test123',
    favorites: [temp2[0], temp2[1], temp2[2], temp2[3], temp2[4], temp2[5], temp2[6], temp2[7]],
    ownPosts: [temp1[0], temp1[1]],
    firstName: 'Gregory',
    lastName: 'Garner',
});

USERDB.push({
    img: 'https://ih1.redbubble.net/image.827676009.0767/stf,small,600x600-pad,750x1000,f8f8f8.u1.jpg',
    firstName: 'Alfredo',
    lastName: 'Diaz-Avina',
    email: 'test1',
    password: 'test1123',
    favorites: [temp2[0]],
    ownPosts: [temp1[0]]
});

if (!sessionStorage.getItem('currentUser')) {
    sessionStorage.setItem('userDataBase', JSON.stringify(USERDB));
    sessionStorage.setItem('currentUser', JSON.stringify(0));
}