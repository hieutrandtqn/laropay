(function ($) {
  "use strict";

  $(window).on('load', function () {

    //preloader
    $(".preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $(".preloader").css("display", "none");
    });

    // menu options custom affix
    var fixed_top = $(".header");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown menu-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown menu-fixed");
      }
    });

    // mobile menu js
    $(".navbar-collapse>ul>li>a", ".navbar-collapse ul.sub-menu>li>").on("click", function () {
      let element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      }
      else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
    });

    $(".navbar-collapse>ul>li>div").on("click", function () {
      let element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      }
      else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
    });


    var timer;

    $(".navbar-collapse>ul>li>a").on({
      'mouseover': function () {
        let element = $(this).parent("li");
        timer = setTimeout(function () {
          element.addClass("open");
          element.siblings("li").removeClass("open");
          element.siblings("li").find("li").removeClass("open");
        }, 1000);
      },
      'mouseout': function () {
        clearTimeout(timer);
      }
    });

    // .on("mouseleave", function () {
    //   let element = $(this).parent("li");
    //   element.find("li").removeClass("open");
    // })

    new WOW().init();

    // lightcase plugin init
    $('a[data-rel^=lightcase]').lightcase();

    let img = $('.bg_img');
    img.css('background-image', function () {
      let bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    $('.nice-select').niceSelect();

    $(".hero").on('mousemove', function (e) {
      parallaxIt(e, ".el-1", -45);
      parallaxIt(e, ".el-2", -25);
      parallaxIt(e, ".el-3", -50);
      parallaxIt(e, ".el-4", -35);
      parallaxIt(e, ".el-5", -60);
      parallaxIt(e, ".el-6", -40);
      parallaxIt(e, ".el-7", -45);
      parallaxIt(e, ".el-8", -35);
      parallaxIt(e, ".el-9", -50);
      parallaxIt(e, ".el-10", -35);
      parallaxIt(e, ".el-11", -40);
    });

    function parallaxIt(e, target, movement) {
      var $this = $(".hero");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

    $(".inner-hero").on('mousemove', function (e) {
      parallaxIt2(e, ".el-1", -15);
      parallaxIt2(e, ".el-2", -25);
      parallaxIt2(e, ".el-3", -18);
      parallaxIt2(e, ".el-4", -10);
      parallaxIt2(e, ".el-5", -15);
      parallaxIt2(e, ".el-6", -25);
    });

    function parallaxIt2(e, target, movement) {
      var $this = $(".inner-hero");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

    $("[data-paroller-factor]").paroller();

    // trailerSlider
    function trailerSlider() {
      var BasicSlider = $('.trailer-slider');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.content-slider',
        // autoplay: true
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    trailerSlider();
    $('.content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.trailer-slider',
      dots: false,
      arrows: true,
      prevArrow: $('.trailernav-prev'),
      nextArrow: $('.trailernav-next')
    });


    function testiSlider() {
      var BasicSlider = $('.testimonial-slider');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.testimonial-single:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.testimonial-single[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        speed: 700,
        fade: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        prevArrow: '<div class="prev"><img src="assets/images/elements/prev-btn.png"></div>',
        nextArrow: '<div class="next"><img src="assets/images/elements/next-btn.png"></div>',
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    testiSlider();

    $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      prevArrow: '<div class="prev"><img src="assets/images/elements/prev-btn.png"></div>',
      nextArrow: '<div class="next"><img src="assets/images/elements/next-btn.png"></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    function bannerCarousel() {
      //banner carousel
      $(document).on('swipeleft', 'carouselBannerIndicators', function (event) {
        $(this).carousel('next');
        return false;
      });
      $(document).on('swiperight', 'carouselBannerIndicators', function (event) {
        $(this).carousel('prev');
        return false;
      });
    }
    bannerCarousel();

    //Scrollspy offset
    $('.nav-link').click(function (event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView({ block: "center", inline: "nearest" });
    });

    // small-post-slider 
    $('.small-post-slider').slick({
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
    });

    // single-game-slider
    $('.single-game-slider').slick({
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      prevArrow: '<div class="prev"><img src="assets/images/elements/prev-btn.png"></div>',
      nextArrow: '<div class="next"><img src="assets/images/elements/next-btn.png"></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-to-top").fadeIn(200);
    } else {
      $(".scroll-to-top").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  // Show more hidden content
  $(".more-btn").on("click", function (event) {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("more-btn");

    // if (btnText.style.display === "visible") {
    btnText.style.display = "none";
    moreText.style.display = "inline";
    // }
  });


  //Blog pagination
  if (document.querySelector('.pagination') !== null) {
    let posts = Array.from(document.getElementsByClassName("post-card")).filter(function (e) {
      return e.filtered === undefined || e.filtered !== false;
    });
    updatePagination(posts);
  }


  // let currentPage = 1;
  // const itemPerPage = 3;
  // let links = document.getElementsByClassName("page-item");
  // let posts = document.getElementsByClassName("post-card");
  // const numOfPage = Math.ceil(posts.length/itemPerPage);

  // $('.pagination').append('<li class="page-item"><p class="page-link prev"><i class="las la-angle-double-left"></i>Prev</p></li>');
  // for (let i = 0; i < numOfPage ; i++) {
  //   $('.pagination').append(`<li class="page-item${i === currentPage - 1 ? " active" : ""}"><p class="page-link">${i + 1}</p></li>`);
  // }
  // $('.pagination').append('<li class="page-item"><p class="page-link next">Next<i class="las la-angle-double-right"></i></p></li>')

  // $(".page-link").on("click", function (event) {
  //   let value = $(this).text();
  //   let element = $(this).parent("li");

  //   if (isNaN(value)) {
  //     if (value === "Prev" && currentPage > 1) {
  //       currentPage--;
  //       element.siblings("li").removeClass("active");
  //       links[currentPage].classList.add("active");
  //     } else if (value === "Next" && currentPage < links.length - 2) {
  //       currentPage++;
  //       element.siblings("li").removeClass("active");
  //       links[currentPage].classList.add("active");
  //     }
  //   } else {
  //     element.siblings("li").removeClass("active");
  //     $(this).parent("li").addClass("active")
  //     currentPage = parseInt(value);
  //   }
  //   renderBlogPaginated();
  // });

  // function renderBlogPaginated() {
  //   let startItem = itemPerPage * (currentPage - 1);
  //   let endItem = itemPerPage * currentPage - 1;
  //   Array.from(posts).forEach((item, key) => {
  //     if (key >= startItem && key <= endItem) {
  //       item.style.display = "block";
  //     } else {
  //       item.style.display = "none";
  //     }
  //   });
  // }
  // renderBlogPaginated();

  //Filter by keyword
  $("#search-blog-btn").on("click", function (event) {
    let keyword = $("#search-blog-input").val();
    let allPost = Array.from(document.getElementsByClassName("post-card"));

    for (let item of allPost) {
      const title = item.querySelector(".post-card__title").textContent.replaceAll("\n", "").replace(/\s\s+/g, ' ').toLowerCase();
      const content = item.querySelectorAll(".post-card__content p")[1].textContent.replaceAll("\n", "").replace(/\s\s+/g, ' ').toLowerCase();

      if (title.includes(keyword.toLowerCase()) || content.includes(keyword.toLowerCase())) {
        item.setAttribute("filtered", false);
      } else {
        item.setAttribute("filtered", true);
      }
    }
    let visiblePost = Array.from(document.getElementsByClassName("post-card")).filter(function (e) {
      return e.attributes.filtered.value === undefined || e.attributes.filtered.value === 'false';
    });
    updatePagination(allPost, visiblePost);

    $(".page-info").css({ display: "none" });
    $(".category-result, .search-result, .author-result, .not-found, .not-found-desc").remove();
    $(".page-result").append(`<p class="search-result">Search result for: ${keyword}</p>`);

    if (visiblePost.length === 0) {
      $(".page-result").append(`<p class="not-found">Nothing found</p>
      <p class="not-found-desc">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>`);
    }
  })

  //Filter by tag
  $(".category-list .caption").on("click", function (event) {
    let keyword = $(this).text();
    let allPost = Array.from(document.getElementsByClassName("post-card"));

    for (let item of allPost) {
      const category = item.querySelector(".post-card__category").textContent.replaceAll("\n", "").replace(/\s\s+/g, ' ').toLowerCase();

      if (category.includes(keyword.toLowerCase())) {
        item.setAttribute("filtered", false);
      } else {
        item.setAttribute("filtered", true);
      }
    }
    let visiblePost = Array.from(document.getElementsByClassName("post-card")).filter(function (e) {
      return e.attributes.filtered.value === undefined || e.attributes.filtered.value === 'false';
    });
    updatePagination(allPost, visiblePost)

    $(".page-info").css({ display: "none" });
    $(".category-result, .search-result, .author-result, .not-found, .not-found-desc").remove();
    $(".page-result").append(`<p class="category-result">Category: ${keyword}</p>`);
  })

  //On author clicked
  $(".post-author").on("click", function (event) {
    let keyword = $(".author .name").text();

    window.location.href = "blog.html?author=" + keyword.replace(" ", "-").toLowerCase();

  })

  function updatePagination(allPost, visiblePost) {
    $('.pagination').pagination({
      dataSource: Array.from(visiblePost || allPost),
      pageSize: 3,
      callback: function (data, pagination) {
        for (let item of allPost) {
          item.style.display = "none";
        }
        for (let item of data) {
          item.style.display = "block";
        }
        if (data.length > 0) {
          $('.pagination').css({ display: "block" });

        } else {
          $('.pagination').css({ display: "none" });
        }
        if (data.length > 1) {
          $('.pagination').css({ display: "flex" });
        } else {
          $('.pagination').css({ display: "none" });
        }
        $("html, body").animate({ scrollTop: 0 }, 200);
      }
    })
  }

  if (window.location.href.indexOf("?author=") !== -1) {
    let allPost = Array.from(document.getElementsByClassName("post-card"));
    let allAuthor = Array.from(document.getElementsByClassName("author-result"));
    let keyword = window.location.href.slice(window.location.href.indexOf("?author=") + 8, window.location.href.length);

    for (let item of allAuthor) {
      const result = item.querySelector("." + keyword);
      if (result === undefined) {
        item.querySelector("." + keyword).style.display = "none";
      } else {
        item.querySelector("." + keyword).style.display = "flex";
      }
    }

    for (let item of allPost) {
      const authorName = item.querySelector(".entry-meta .meta-author a").textContent.replaceAll("\n", "").replace(/\s\s+/g, ' ').toLowerCase();

      if (authorName.includes(keyword.toLowerCase().replace("-", " "))) {
        item.setAttribute("filtered", false);
      } else {
        item.setAttribute("filtered", true);
      }
    }
    let visiblePost = Array.from(document.getElementsByClassName("post-card")).filter(function (e) {
      return e.attributes.filtered.value === undefined || e.attributes.filtered.value === 'false';
    });
    updatePagination(allPost, visiblePost)

    $(".page-info").css({ display: "none" });
    $(".category-result, .search-result, .not-found, .not-found-desc").remove();
  }
})(jQuery);
