$(document).ready(function() {
    $('#search_btn').click(function() {
        $('.search-form').toggleClass('active');
        $('.cart-item-container').removeClass('active');
        $('.main_navbar').removeClass('active');
    });

    $('#cart_btn').click(function() {
        $('.cart-item-container').toggleClass('active');
        $('.main_navbar').removeClass('active');
        $('.search-form').removeClass('active');
    });

    $('#bar_btn').click(function() {
        $('.main_navbar').toggleClass('active');
        $('.cart-item-container').removeClass('active');
        $('.search-form').removeClass('active');
    });

    $(window).scroll(function() {
        $('.main_navbar').removeClass('active');
        $('.cart-item-container').removeClass('active');
        $('.search-form').removeClass('active');
    });
});


// let search = document.querySelector('.search-form');
// document.querySelector('#search_btn').onclick = () => {
//     search.classList.toggle('active');
//     cartItem.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-item-container');
// document.querySelector('#cart_btn').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     search.classList.remove('active');
// }

// let navbar = document.querySelector('.main_navbar');
// document.querySelector('#bar_btn').onclick = () => {
//     navbar.classList.toggle('active');
//     cartItem.classList.remove('active');
//     search.classList.remove('active');
// }

// window.onscroll = () => {
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
//     search.classList.remove('active');
// }