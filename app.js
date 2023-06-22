const product = [
    {
        id: 0,
        image: 'images/menu-image1.jpeg',
        title: "Spaghetti Bolognese",
        price: 50,
    },
    {
        id: 1,
        image: 'images/menu-image2.jpeg',
        title: "Vegan stuffed pepper",
        price: 30,
    }
];

const categories = [...new set(product.map((item) => {
    return item
}))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=> {
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>`
    )
})