jQuery(function () {

    /*using animate.css list*/
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd AnimationEnd';

    function intro_animation() {

        $(".main_illust .backgrid_img").addClass("animated fadeIn");
        $(".main_illust .face_img").delay(400).animate({
            top: '0px'
        });

        setTimeout(function () {
            $(".main_illust .camera_img").addClass("animated jackInTheBox");
            $(".main_illust .siss_img").addClass("animated jackInTheBox");
            $(".main_illust .laptop_img").addClass("animated jackInTheBox");
        }, 600);
        setTimeout(function () {
            $(".intro .down_btn").addClass("animated flash").one(animationend, function () {
                $(this).removeClass('animated flash');
            });
        }, 1500);
    };

    function about_animation() {
        $('.about_text .left_illust').addClass('animated fadeInLeft');
        $('.about_text .right_illust').addClass('animated fadeInRight');
    };

    function workshop_animation() {
        $('.workshop_video .bottom_text .illust').addClass('animated tada').one(animationend, function () {
            $(this).removeClass('animated tada');
        });
    };

    function artist_animation() {
        $('.artist_video .top_text .illust.ear_illust').addClass('animated tada').one(animationend, function () {
            $(this).removeClass('animated tada');
        });
    };
    /*intro animation*/
    window.onload = intro_animation();

    /*fancybox add*/
    $(".fancybox").fancybox();
    $('.ytube').fancybox();
    $(".ov-box a").fancybox();

    /*bxslider add*/
    $('.gallery_img_li').bxSlider({
        pagerCustom: '#gallnav',
        nextSelector: '.gallery_btn.right_btn',
        prevSelector: '.gallery_btn.left_btn',
        easing: 'ease-out',
        maxSlides: 2
    });

    /*button click animation*/
    $('.gallery_btn').on('click', function () {
        $(this).addClass("animated rubberBand").one(animationend, function () {
            $(this).removeClass('animated rubberBand');
        });
    });
    $('.gallnav a span').on('click', function () {
        $(this).addClass("animated jello").one(animationend, function () {
            $(this).removeClass('animated jello');
        });
    });
    /*resizing*/
    $(window).on('resize', function () {
        if ($(window).height() > 960) {

            $('section.intro .main_illust').css({
                'max-width': '900px',
                height: '540px'
            });
            $('.main_illust span').css({
                height: '540px'
            });
        }
    })
    $(window).trigger('resize');
    /*scroll works*/
    $nav_button = $('nav .page_nav li');
    $section = $("section");
    $section_position = new Array();
    for (var i = 0; i < $section.length; i++) {
        $section_position[i] = $section.eq(i).offset().top;
    };
    $('.down_btn').on('click', function () {
        $('html,body').stop().animate({
            scrollTop: $section_position[1]
        });
    });


    $nav_button.on('click', function () {
        $idx = $(this).index();
        $position = $('section').eq($idx).offset().top;
        $('html,body').stop().animate({
            scrollTop: $position
        });
        $(this).addClass('on').siblings().removeClass('on');
    });
    $(window).on('scroll resize', function () {
        $('.videoli_hover').hide();
        $('.artist_hover').hide();
        $html_top = $('html').scrollTop();
        $html_bottom = $(window).scrollTop() + $(window).height();

        $section_position = new Array();
        for (var i = 0; i < $section.length; i++) {
            $section_position[i] = $section.eq(i).offset().top;
        };


        /*scroll animation*/
        if ($html_bottom > $('.about_text .left_illust').offset().top) {
            about_animation();
        };
        $cat_top = $('.workshop_video .bottom_text .illust').offset().top;
        if ($html_bottom > $cat_top && $html_bottom < $cat_top + 40) {
            workshop_animation();
        };
        $ear_top = $('.artist_video .top_text .illust.ear_illust').offset().top;
        if ($html_bottom > $ear_top && $html_bottom < $ear_top + 40) {
            artist_animation();
        };

        /*navigation work*/
        for (var i = 0; i < $section.length; i++) {
            if ($html_top > $section_position[i] - 100) {
                $nav_button.eq(i).addClass('on').siblings().removeClass('on');
            };
        };
    });


    /*video li hover*/
    $('.video_li li').on('mouseenter mousemove', function () {
        if ($(window).width() > 768) {
            $('.videoli_hover').show();
            $video_title = $(this).find('.text .title').text();
            $running_time = $(this).find('.text .running_time').text();

            $('.videoli_hover span.video_title').text($video_title);
            $('.videoli_hover span.running_time').text($running_time);

            $('.videoli_hover').css({
                left: event.clientX + 10,
                top: event.clientY - 20
            });
        }
    });
    $('.video_li li').on('mouseleave', function () {
        $('.videoli_hover').hide();
    });

    /*artist image hover*/
    $artist_images = new Array();
    for (var i = 0; i < $('.artist_lineup .artist_li li').length; i++) {
        $artist_images[i] = 'url(img/videoartist_' + i + '.png)';
    };

    $('.artist_lineup .artist_li li').on('mouseenter mousemove', function () {
        if ($(window).width() > 768) {
            $idx = $(this).index();
            $('.artist_hover span.hover_image').css({
                'background-image': $artist_images[$idx]
            });
            $('.artist_hover').show();

            $('.artist_hover').css({
                left: event.clientX - 50,
                top: event.clientY - 150
            });
        }
    });
    $('.artist_lineup .artist_li li').on('mouseleave', function () {
        $('.artist_hover').hide();
    });

});
