$(function () {

    $('input, select').styler();

    $(".rate-star").rateYo({
        starWidth: "16px",
        rating: 4.5,
        readOnly: true,
        normalFill: 'transparent',
        ratedFill: '#ffc000',
    });
    $(".rate-star__product").rateYo({
        starWidth: "13px",
        rating: 4.5,
        readOnly: true,
        normalFill: 'transparent',
        ratedFill: '#ffc000',
    });

    $('.slider-product__inner').slick({
        infinite: true,
        dots: false,
    });
    $('.slider-follow__inner').slick({
        infinite: true,
        dots: false,
        slidesToScroll: 3,
        slidesToShow: 3,
    });

    $('.bell').mouseup( function () {
        $('.bell-drop__list').fadeToggle(200, "swing")
    });
    let bellDrop = $(".bell");
    let bellItem = $(".bell-drop__list");
    $(document).on('click', function (b) {
        if ( ! bellDrop.is(b.target) && bellDrop.has(b.target).length === 0 &&
            ! bellItem.is(b.target) && bellItem.has(b.target).length === 0
        ) {
            bellItem.fadeOut();
        }
    });
    $('.event').on('click', function () {
        $('.event-drop__list').fadeToggle(200, "swing")
    });
    let messDrop = $(".event");
    let messItem = $(".event-drop__list");
    $(document).on('click', function (m) {
        if ( ! messDrop.is(m.target) && messDrop.has(m.target).length === 0 &&
            ! messItem.is(m.target) && messItem.has(m.target).length === 0
        ) {
            messItem.fadeOut();
        }
    });
    $('.cart').on('click', function () {
        $('.cart-drop__list').fadeToggle(200, "swing")
    });
    let btnCategories = $(".cart");
    let categories = $(".cart-drop__list");
    $(document).on('click', function (e) {
        if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            ! categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            categories.fadeOut();
        }
    });
    $('.header__user').mouseup( function () {
        $('.header__user-drop').fadeToggle(200, "swing")
    });
    let userList = $(".header__user");
    let userMenu = $(".header__user-drop");
    $(document).on('click', function (u) {
        if ( ! userList.is(u.target) && userList.has(u.target).length === 0 &&
            ! userMenu.is(u.target) && userMenu.has(u.target).length === 0
        ) {
            userMenu.fadeOut();
        }
    });

    var mixer = mixitup('.new-products__inner');

    // $('.icon-th-list').on('click', function () {
    //     $('.product__item').addClass('list')
    //     $('.icon-th-large').removeClass('active')
    //     $('.icon-th-list').addClass('active')
    // });
    //
    // $('.icon-th-large').on('click', function () {
    //     $('.product__item').removeClass('list')
    //     $('.icon-th-list').removeClass('active')
    //     $('.icon-th-large').addClass('active')
    // });
    //


});