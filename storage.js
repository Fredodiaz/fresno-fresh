function storageFuncs() {

    this.retrieveAllListings = () => {
      var listings = [];
      for (var i = 0; i < localStorage.length; i++) {
        listings.push(localStorage.getItem(localStorage.key(i)));
      }
      return listings;
    }
  
    this.saveListing = () => {
      Temp.start()
      const userid = profileFirstName + ' ' + profileLastName;
      const titleFieldContents = document.getElementById("titleField").value;
      const descriptionFieldContents = document.getElementById("descriptionField").value;
      const listingTypeFieldContents = document.getElementById("postTypeField").value;
  
      var listingObj = {
        userid: userid,
        title: titleFieldContents,
        desc: descriptionFieldContents,
        listingIsOffer: listingTypeFieldContents,
        images: []
      };
  
      var listingImgIdx = 0;
      for (var i = 0; i < sessionStorage.length; i++) {
        const imgObj = sessionStorage.getItem(sessionStorage.key(i));
        if (JSON.parse(imgObj).IMG_NAME != undefined) {
          listingObj.images.push(imgObj);
          sessionStorage.removeItem(sessionStorage.key(i))
        }
      }
  
      const stringifiedListing = JSON.stringify(listingObj);
      var date = new Date();
      var j = date.toString
      const identifier = userid + "-" + j;
      localStorage.setItem(identifier, stringifiedListing);
  
      sessionStorage.setItem('post', true);
    }
  }
  
  let Storage = new storageFuncs();