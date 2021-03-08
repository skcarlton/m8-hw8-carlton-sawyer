// It is always helpful to use comments in your code!

var subMenu = document.getElementsByClassName('sub-menu');
var tabs = document.getElementsByClassName('main-menu-labels');


var products = document.getElementsByClassName('products');
var services = document.getElementsByClassName('services');
var company = document.getElementsByClassName('company');
var prod = document.getElementsByClassName('prod');
var serv = document.getElementsByClassName('serv');
var co = document.getElementsByClassName('co');


//products
function show () {
    for(i = 0; i < prod.length; i++) {
        prod[i].classList.toggle('hover');
    }
}

for(i = 0; i < products.length; i++) {
    products[i].addEventListener('mouseenter', show);
    products[i].addEventListener('mouseleave', show);
}

//services
function show2 () {
    for(i = 0; i < serv.length; i++) {
        serv[i].classList.toggle('hover');
    }
}

for(i = 0; i < services.length; i++) {
    services[i].addEventListener('mouseenter', show2);
    services[i].addEventListener('mouseleave', show2);
}

//company
function show3 () {
    for(i = 0; i < co.length; i++) {
        co[i].classList.toggle('hover');
    }
}

for(i = 0; i < company.length; i++) {
    company[i].addEventListener('mouseenter', show3);
    company[i].addEventListener('mouseleave', show3);
}