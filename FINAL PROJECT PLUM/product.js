// let countNum = document.getElementById("masai")
// console.log(countNum)
// let Product_Name = document.getElementById("body")
// console.log(Product_Name)

function AddToCart(p) {



    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
        // console.log(countNum)
    let Product_Name = document.getElementById("body")
        // console.log(Product_Name)
    let Discount = document.getElementById("off1")
    let Image = document.getElementById("img1")
    let Del_price = document.getElementById("delprice1")
    let Price = document.getElementById("price1")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)


    countNum.textContent = products_cart.length

    // countNum.style.fontWeight = "bold"

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart2(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }


    let Product_Name = document.getElementById("skin")
    let Discount = document.getElementById("off2")
    let Image = document.getElementById("img2")
    let Del_price = document.getElementById("delprice2")
    let Price = document.getElementById("price2")
    let countNum = document.getElementById("masai")

    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart3(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("kit")
    let Discount = document.getElementById("off3")
    let Image = document.getElementById("img3")
    let Del_price = document.getElementById("delprice3")
    let Price = document.getElementById("price3")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart4(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }
    let countNum = document.getElementById("masai")

    let Product_Name = document.getElementById("bodylovin")
    let Discount = document.getElementById("off4")
    let Image = document.getElementById("img4")
    let Del_price = document.getElementById("delprice4")
    let Price = document.getElementById("price4")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }

    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart5(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("hydration")
    let Discount = document.getElementById("off5")
    let Image = document.getElementById("img5")
    let Del_price = document.getElementById("delprice5")
    let Price = document.getElementById("price5")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart6(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("trio")
    let Discount = document.getElementById("off6")
    let Image = document.getElementById("img6")
    let Del_price = document.getElementById("delprice6")
    let Price = document.getElementById("price6")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart7(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("vanilla")
    let Discount = document.getElementById("off7")
    let Image = document.getElementById("img7")
    let Del_price = document.getElementById("delprice7")
    let Price = document.getElementById("price7")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }

    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart8(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("rumba")
    let Discount = document.getElementById("off8")
    let Image = document.getElementById("img8")
    let Del_price = document.getElementById("delprice8")
    let Price = document.getElementById("price8")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart9(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("greentea")
    let Discount = document.getElementById("off9")
    let Image = document.getElementById("img9")
    let Del_price = document.getElementById("delprice9")
    let Price = document.getElementById("price9")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }

    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart10(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("candy")
    let Discount = document.getElementById("off10")
    let Image = document.getElementById("img10")
    let Del_price = document.getElementById("delprice10")
    let Price = document.getElementById("price10")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart11(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("ricewater")
    let Discount = document.getElementById("off11")
    let Image = document.getElementById("img11")
    let Del_price = document.getElementById("delprice11")
    let Price = document.getElementById("price11")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart12(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("chocolate")
    let Discount = document.getElementById("off12")
    let Image = document.getElementById("img12")
    let Del_price = document.getElementById("delprice12")
    let Price = document.getElementById("price12")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }
    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)
    countNum.textContent = products_cart.length

    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart13(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("oilfree")
    let Discount = document.getElementById("off13")
    let Image = document.getElementById("img13")
    let Del_price = document.getElementById("delprice13")
    let Price = document.getElementById("price13")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart14(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("aleovera")
    let Discount = document.getElementById("off14")
    let Image = document.getElementById("img14")
    let Del_price = document.getElementById("delprice14")
    let Price = document.getElementById("price14")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}

function AddToCart15(p) {
    if (localStorage.getItem("plumcart") === null) {
        localStorage.setItem("plumcart", JSON.stringify([]))
    }

    let countNum = document.getElementById("masai")
    let Product_Name = document.getElementById("night")
    let Discount = document.getElementById("off15")
    let Image = document.getElementById("img15")
    let Del_price = document.getElementById("delprice15")
    let Price = document.getElementById("price15")


    let productDetails = {
        Name: Product_Name.textContent,
        Discount: Discount.textContent,
        Image: Image.src,
        Del_price: Del_price.textContent,
        Price: Price.textContent,
    }


    let products_cart = JSON.parse(localStorage.getItem("plumcart"));
    products_cart.push(productDetails)

    countNum.textContent = products_cart.length
    localStorage.setItem("plumcart", JSON.stringify(products_cart));

    console.log("products_cart:", products_cart)
}









function returnCart() {
    let cart = JSON.parse(localStorage.getItem("viewmore"))

    let parent = document.getElementById("PRODUCTS")
        // console.log(parent)
    parent.append(cart)



    // showProducts()
}