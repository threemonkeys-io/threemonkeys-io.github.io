;(function () {
    "use strict";

    var $window, $document, $body, $api;

    $window = $(window);
    $document = $(document);
    $body = $("body");
    $api = location.hostname == 'threemonkeys.io' ? 'https://api.threemonkeys.io' : 'https://dev.threemonkeys.io';
   
    /*==============================================
     Pre loader init
     
    $window.on("load", function () {
        $body.imagesLoaded(function () {
            $(".tb-preloader-wave").fadeOut();
            $("#tb-preloader").delay(200).fadeOut("slow").remove();
        });
    });

    ===============================================*/

    /*==============================================
     Wow init
     ===============================================*/
    //if (typeof WOW == "function")
    //    new WOW().init();


    $document.ready(function () {

        /*==============================================
         Retina support added
         
        if (window.devicePixelRatio > 1) {
            $(".retina").imagesLoaded(function () {
                $(".retina").each(function () {
                    var src = $(this).attr("src").replace(".", "@2x.");
                    var h = $(this).height();
                    $(this).attr("src", src).css({height: h, width: "auto"});
                });
            });
        }
        ===============================================*/

        /*==============================================
         Smooth scroll init
         ===============================================*/
        if (typeof smoothScroll == "object") {
            smoothScroll.init();
        }


        /*==============================================
         Menuzord init
        ===============================================*/ 
        //$(".js-primary-navigation").menuzord();
        

        /*==============================================
         Onepage nav init
        
        $(".op-nav li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".op-nav").onePageNav({
                currentClass: "active"
            });
        }
        ===============================================*/

        /*==============================================
         Sticky nav
         ===============================================*/
        function initSticky() {

            var $navbarSticky, navbarHeight, $brandLogo, centerLogoNormalHeight, centerLogoStickyHeight;
            $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
            navbarHeight = $navbarSticky.height();
            $brandLogo = $(".logo-brand");
            centerLogoNormalHeight = 100;
            centerLogoStickyHeight = 60;

            if ($navbarSticky.hasClass("l-navbar_s-center")) {
                $brandLogo.height(centerLogoNormalHeight);
            }

            $navbarSticky.sticky({
                className: "l-navbar-wrapper_has-sticky",
                wrapperClassName: "l-navbar-wrapper",
                zIndex: 10000,
                bottomSpacing: 100
            }).on("sticky-start", function() {
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.height(0);
                    setTimeout(function() {
                        $brandLogo.addClass("sticky-fix").height(centerLogoStickyHeight);
                    }, 300);
                }
            }).on("sticky-end", function () {
                $navbarSticky.parent().height(navbarHeight);
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.removeClass("sticky-fix").height(centerLogoNormalHeight);
                }
            });
        }
        //initSticky();

        /*==============================================
         Flex slider init
         
        $window.load(function () {
            $(".portfolio-slider").flexslider({
                animation: "slide",
                direction: "vertical",
                slideshowSpeed: 3000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".portfolio-slider-alt").flexslider({
                animation: "slide",
                direction: "horizontal",
                slideshowSpeed: 4000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".post-slider-thumb").flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        });

        $window.load(function () {
            $(".post-slider").flexslider({
                animation: "slide"
                //slideshow: false
            });
        });

        $window.load(function () {
            $(".news-slider").flexslider({
                animation: "slide",
                slideshowSpeed: 3000
            });
        });
        ===============================================*/

        /*==============================================
         Full screen banner init
         
        $window.bind("resizeEnd", function () {
            $("#fullscreen-banner").height($window.height());
        });

        $window.resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger("resizeEnd");
            }, 300);
        }).trigger("resize");
        ===============================================*/

        /*==============================================
         Portfolio filterable grid init
         ===============================================*/
        /*var $portfolioGeneral = $(".portfolio:not(.portfolio-masonry)").isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
            filter: "*"
        });

        var $portfolioMasonry = $(".portfolio-masonry").isotope({
            itemSelector: ".portfolio-item",
            resizesContainer: false,
            layoutMode: "masonry",
            filter: "*"
        });

        if (typeof imagesLoaded == "function") {
            $portfolioGeneral.imagesLoaded().progress(function () {
                $portfolioGeneral.isotope("layout");
            });

            $portfolioMasonry.imagesLoaded().progress(function () {
                $portfolioMasonry.isotope("layout");
            });

            $portfolioGeneral.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioGeneral.isotope("layout");
                }, 400);
            });
            
            $portfolioMasonry.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioMasonry.isotope("layout");
                }, 400);
            });
        }*/

        /*
        if (typeof imagesLoaded == "function") {

            $(".portfolio:not(.portfolio-masonry)").imagesLoaded().progress(function(){
                $(".portfolio:not(.portfolio-masonry)").isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: "fitRows",
                    filter: "*"
                });
            });

            $(".portfolio-masonry").imagesLoaded().progress(function(){
                $(".portfolio-masonry").isotope({
                    itemSelector: ".portfolio-item",
                    resizesContainer: false,
                    layoutMode: "masonry",
                    filter: "*"
                });
            });
        }
        */


        /*==============================================
         Portfolio filter nav
         
        $(".portfolio-filter").on("click", "a", function (event) {
            event.preventDefault();
            var $this = $(this);
            $this.parent().addClass("active").siblings().removeClass("active");
            $this.parents(".text-center").next().isotope({filter: $this.data("filter")});
        });
        ===============================================*/

        /*==============================================
         Portfolio item slider init
         
        $(".portfolio-slider, .portfolio-slider-alt").each(function () { // the containers for all your galleries
            var _items = $(this).find("li > a");
            var items = [];
            for (var i = 0; i < _items.length; i++) {
                items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
            }
            $(this).parent().find(".action-btn").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).parent().find(".portfolio-description").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });
        ===============================================*/

        /*==============================================
         Portfolio popup gallery init
         
        $(".portfolio-gallery").each(function () { // the containers for all your galleries
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).find(".popup-gallery2").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });
        ===============================================*/


        /*==============================================
         Progressbar init
         
        var progressBar = $(".progress-bar");
        progressBar.each(function (indx) {
            $(this).data("animated", 0);
            if ($.fn.visible) {
                animateProgressbar(this);
            }
        });
        $window.on("scroll", function () {
            if ($.fn.visible) {
                progressBar.each(function () {
                    animateProgressbar(this);
                })
            }
        });

        function animateProgressbar(pb) {
            if ($(pb).data("animated") == 0) {
                if ($(pb).visible()) {
                    $(pb).css("width", $(pb).attr("aria-valuenow") + "%");
                    $(pb).data("animated", 1);
                }
            }
        }
        ===============================================*/


        /*==============================================
         Magnific popup init
         
        $(".popup-link").magnificPopup({
            type: "image"
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        ===============================================*/

        /*==============================================
         Accordion init
         
        var allPanels = $(".accordion > dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".accordion").each(function () {
            $(this).find("dt > a").first().addClass("active").parent().next().css({display: "block"});
        });

        $(".accordion > dt > a").click(function () {

            var current = $(this).parent().next("dd");
            $(this).parents(".accordion").find("dt > a").removeClass("active");
            $(this).addClass("active");
            $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });
        ===============================================*/

        /*==============================================
         Toggle init
         
        var allToggles = $(".toggle > dd").hide();
        $(".toggle > dt > a").click(function () {

            if ($(this).hasClass("active")) {

                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");

            }
            else {
                var current = $(this).parent().next("dd");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }

            return false;
        });
        ===============================================*/

        /*==============================================
         Career show/hide button
         
        $(".show-detail").click(function (e) {
            $(this).next().slideToggle();
            e.preventDefault();
            $(this).css({opacity: 0})
        });

        $(".cancel-btn").click(function (e) {
            var prnt = $(this).parents(".career-details-info");
            prnt.slideToggle();
            e.preventDefault();
            $(prnt).prev().css({opacity: 1})
        });

        $(".career-details-info .apply-btn").on("click", function () {

        });
        ===============================================*/


        /*==============================================
         Count to init
         
        var timers = $(".timer");
        if ($.fn.countTo) {
            timers.each(function () {
                $(this).data("animated", 0);
                animateTimer(this);
            });
        }

        $window.on("scroll", function () {
            timers.each(function () {
                animateTimer(this);
            });
        });

        function animateTimer(timer) {
            if ($(timer).data("animated") == 0) {
                if ($.fn.visible && $(timer).visible()) {
                    $(timer).data("animated", 1);
                    $(timer).countTo();
                }
            }
        }
        ===============================================*/

        /*==============================================
         Carousel init
         
        if ($.fn.owlCarousel) {
            $("#clients-1").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 6,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#testimonial-2").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-3").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-4").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-5").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#carousel-object").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
                //pagination : false
            });

            $("#owl-slider").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1,
                navigation: true,
                //pagination : false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            $("#img-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#portfolio-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

            });

            $("#portfolio-carousel-alt").owlCarousel({
                autoPlay: false, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        $(".portfolio-with-title").addClass("portfolio");
        ===============================================*/

        /*==============================================
         Typist init
         
        if (typeof Typist == "function") {
            new Typist(document.querySelector(".typist-element"), {
                letterInterval: 60,
                textInterval: 3000
            });
        }
        ===============================================*/
  


        /*==============================================
         Mailchip init
         
        if ($.fn.ajaxChimp) {
            $(".mailchimp").ajaxChimp({
                url: "paste mailchimp url"
            });
        }
        ===============================================*/

        /*==============================================
         Contact form
         ===============================================*/
        //initMailer();


        const applicationServerPublicKey = 'BMRzWJycASmk8zIwe4_7yM9WaT8BbHr2Db52zHxDl4V2cXDIo5WOf1juJBgVJ-AyP5vWqfmo26FNOIKru-SJR8U';

   
        const pushButton = document.querySelector('.follow-button');
        const pushButtonBottom = $(".follow-button-bottom");
        const popup = document.querySelector('.follow-button-popup-wrapper');
        const popupDialog = document.querySelector('.follow-button-popup');
        const closeDialog = document.querySelector('.close-icon');

        const webNotifyCheckbox = document.querySelector('#web-notifications');        
        const followText = '<i class="large-icon fas fa-bell"></i>FOLLOW <i class="fas fa-chevron-down"></i>';
        const followingText = '<i class="large-icon fas fa-bell"></i>Following <i class="fas fa-chevron-down"></i>';
        
        var isSubscribed = false;
        var webNotifyDisabled = false;
        var showPopup = false;
        var swRegistration = null;
     
        function urlB64ToUint8Array(base64String) {
         const padding = '='.repeat((4 - base64String.length % 4) % 4);
         const base64 = (base64String + padding)
           .replace(/\-/g, '+')
           .replace(/_/g, '/');
       
         const rawData = window.atob(base64);
         const outputArray = new Uint8Array(rawData.length);
       
         for (var i = 0; i < rawData.length; ++i) {
           outputArray[i] = rawData.charCodeAt(i);
         }
         return outputArray;
       }
        
       function updateUI() {
         if (Notification.permission === 'denied') {
             webNotifyCheckbox.disabled = true;
         }
     
         if (isSubscribed) {
           pushButton.innerHTML = followingText;
           pushButton.classList.remove('btn-theme-color');
           pushButton.classList.add('btn-dark-border')
           webNotifyCheckbox.checked = true
           pushButtonBottom.addClass('hidden');
         } else {
           pushButton.innerHTML = followText;
           pushButton.classList.add('btn-theme-color');
           pushButton.classList.remove('btn-dark-border')
           pushButtonBottom.removeClass('hidden');
           popup.classList.add('close-follow');
         }

         if (showPopup) {
            popup.classList.remove('close-follow');   
         } else {
            popup.classList.add('close-follow');
         }
     
       }
     

                
       $window.on("scroll", function () {
           if ($window.scrollTop() > 450) {
               pushButtonBottom.addClass("visible");
           } else {
            pushButtonBottom.removeClass("visible");
           }
       }); 
     
         // All Event listeners here
     
         function initializeUI() {
             
             // Set the initial subscription value
             
             if (swRegistration) {
                swRegistration.pushManager.getSubscription()
                .then(function(subscription) {
                  isSubscribed = !(subscription === null);
                  updateUI();
                });
             }

             webNotifyCheckbox.addEventListener( 'change', function(e) {
                e.preventDefault();
                e.stopPropagation();
                 if(this.checked) {
                     subscribeUser();
                 } else {
                     unsubscribeUser();
                 }
             });

     

            closeDialog.addEventListener( 'click', function(e) {
                e.preventDefault(); 
                e.stopPropagation();
                showPopup = false;
                updateUI();
            });                        

             /*
             popup.addEventListener( 'focusin', function(e) {
                e.preventDefault(); 
                e.stopPropagation()
             });


             pushButton.addEventListener( 'mousedown', function(e) {
                e.preventDefault(); 
                e.stopPropagation()                
             });
             */

             pushButton.addEventListener('click', function(e) {
                e.stopPropagation() 
                e.preventDefault();
                 if (isSubscribed || webNotifyDisabled) {
                    showPopup = true;
                    updateUI();
                 } else {
                   subscribeUser();
                 }
               });   
               
            pushButtonBottom.click(function(e) {
                e.preventDefault();
                if (webNotifyDisabled) {
                    showPopup = true;
                    updateUI()
                } else {
                    subscribeUser();
                }
            });
               
               
            updateUI();

         }
     
       
     
         function subscribeUser() {
             const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
             swRegistration.pushManager.subscribe({
               userVisibleOnly: true,
               applicationServerKey: applicationServerKey
             })
             .then(function(subscription) {
           
               updateSubscriptionOnServer(subscription);
           
               isSubscribed = true;
           
                updateUI();
             })
             .catch(function(err) {
                updateUI();
             });
           }
     
           function unsubscribeUser() {
             swRegistration.pushManager.getSubscription()
             .then(function(subscription) {
               if (subscription) {
                 updateSubscriptionOnServer(subscription);
                 subscription.unsubscribe();
               }
               console.log('You are unsubscribed.');
               isSubscribed = false;
               updateUI();
             })
             .catch(function(error) {
                 console.error('Error unsubscribing', error);
               });
           }      
     
           function updateSubscriptionOnServer(subscription) {
             // TODO: Send subscription to application server
     
             const endpoint = isSubscribed == true ? 'unfollow' : 'follow';
     
             fetch($api + '/subscription/' + endpoint, {
                 method: 'POST',
                 headers: {
                     'Content-type': 'application/json'
                 },
                 body: JSON.stringify({
                     subscription: subscription
                 }),
             });
           }      
     
         if ('serviceWorker' in navigator && 'PushManager' in window) {
         
             navigator.serviceWorker.register('/sw.js')
             .then(function(swReg) {       
                 swRegistration = swReg;
                 initializeUI();
             })
             .catch(function(error) {
                console.error('Service Worker Error', error);
                webNotifyCheckbox.disabled = true;
                webNotifyDisabled = true;
             });
         } else {
             console.warn('Push messaging is not supported.');
             webNotifyCheckbox.disabled = true;
             webNotifyDisabled = true;
             initializeUI();
         }    






    });

    /*
    function initMailer() {
        if (!$.fn.validator) {
            return;
        }

        $(".js-Mailer").validator().on("submit", function(e) {
            var $form     = $(this),
                $btn      = $form.find("[type='submit']"),
                $response = $("<div />", {
                    "class": "alert js-Response",
                    "style": "margin-top: 20px; display:none"
                    });

            if (!$form.data("isready")) {
                $btn.after($response);
                $form.data("isready", true);
            }

            if (e.isDefaultPrevented()) {
                return;
            }
            e.preventDefault();

            $.post(
                "mailer/mailer.php",
                $form.serialize()
            ).done(function(r) {
                var $rHolder = $form.find(".js-Response");
                if (r.success) {
                    showMailerResponse($rHolder, "Your message has been sent.");
                } else {
                    showMailerResponse($rHolder, "There is something wrong, try again!", "warning");
                }
            }).fail(function() {
                showMailerResponse($form.find(".js-Response"), "There is something wrong, try again!", "warning");
            })
        });
    }

    function showMailerResponse($holder, rMessage, rType) {
        var rClass = "alert-warning",
            aClass = "alert-success",
            SPEED  = 1000;

        rType = rType || "success";

        if (rType === "warning") {
            rClass = "alert-success",
            aClass = "alert-warning";
        }

        $holder
            .removeClass(rClass)
            .addClass(aClass)
            .text(rMessage)
            .slideDown()
            .delay(SPEED)
            .slideUp();
    }
    */


})(jQuery);








