const prod1 = {
    prodName: "Prod 1",
    prodDesc: "Desc",
    prodPrice: "150.00",
    prodImg: "https://bulma.io/images/placeholders/1280x960.png",
    prodImg2: "src",
    prodImg3: "src",
    prodImg4: "src",
    prodImg5: "src",
    link: "product-template.html",
    prodCatName: "Cat name",
    category: "category-template.html",
    featured: false
  };

  const prod2 = {
    prodName: "Prod 1",
    prodDesc: "Desc",
    prodPrice: "150.00",
    prodImg: "https://bulma.io/images/placeholders/1280x960.png",
    prodImg2: "src",
    prodImg3: "src",
    prodImg4: "src",
    prodImg5: "src",
    link: "http://www.google.com/",
    prodCatName: "Cat name",
    category: "http://www.cnn.com/",
    featured: false
  };

  function contents(){

    

    //Prod 1
    var prod1Name = document.getElementById("prod1Name").innerHTML = prod1.prodName;
    var prod1Desc = document.getElementById("prod1Desc").innerHTML = prod1.prodDesc;
    var prod1Price = document.getElementById("prod1Price").innerHTML = prod1.prodPrice;
    var prod1Img = document.getElementById("prod1Img").src = prod1.prodImg;
    var prod1Link = document.getElementById("prod1Link").href = prod1.link
    var catName = document.getElementById("prod1CatName").innerHTML = prod1.prodCatName;
    var prod1Link = document.getElementById("prod1Cat").href = prod1.category;
    var prod1Feature = prod1.featured;



  }
