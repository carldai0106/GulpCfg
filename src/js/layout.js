(function($) {
    "use strict";
    window.nifty = {
            container: $("#container"),
            contentContainer: $("#content-container"),
            navbar: $("#navbar"),
            mainNav: $("#mainnav-container"),
            aside: $("#aside-container"),
            footer: $("#footer"),
            scrollTop: $("#scroll-top"),
            window: $(window),
            body: $("body"),
            bodyHtml: $("body, html"),
            document: $(document),
            screenSize: "",
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }(),
            randomInt: function(n, t) {
                return Math.floor(Math.random() * (t - n + 1) + n);
            },
            transition: function() {
                var el = document.body || document.documentElement;
                var style = el.style;
                var rs = undefined !== style.transition || undefined !== style.WebkitTransition;
                return rs;
            }()
        },
        nifty.document.ready(function() {
            nifty.document.trigger("nifty.ready");
        }),
        nifty.document.on("nifty.ready", function() {
            var t = $(".add-tooltip");
            t.length && t.tooltip();
            var e = $(".add-popover");
            e.length && e.popover();
            var i = $(".nano");
            i.length && i.nanoScroller({
                    preventPageScrolling: true
                }),
                $("#navbar-container .navbar-top-links").on("shown.bs.dropdown", ".dropdown",
                    function() {
                        $(this).find(".nano").nanoScroller({
                            preventPageScrolling: true
                        });
                    }),
                nifty.body.addClass("nifty-ready");
        });
})(jQuery);

$(function() {

    $("#navbar").load("../layout/_header.html");
    $("#mainnav-container").load("../layout/_siderbar.html", function() {

        $("a.switcher").on("click", function() {
            $(".carte-children").hide();
            $(".carte>li>a").find(".fa-angle-right").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(".carte-children>li.active").find(".fa-angle-right").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(".carte-children>li.active").removeClass("active");

            if ($("#container").hasClass("mainnav-sm")) {
                $("#container").removeClass("mainnav-sm").addClass("mainnav-lg");
            } else {
                $("#container").removeClass("mainnav-lg").addClass("mainnav-sm");
            }
        });

        $(window).on("resize", function() {
            var width = $(this).width();
            var data = $("a.switcher").attr("data");
            if (width < 534) {
                $("#main-container").css({
                    left: "0"
                });
            } else if (width > 534 && data === "true") {
                $("#main-container").css({
                    left: "50px"
                });
            } else if (data === "false" || data === undefined) {
                $("#main-container").css({
                    left: "220px"
                });
            }
        });

        $(".carte li>a").on("click", function() {
            var value = $(this).attr("href");
            if (value === "#") {
                var parent = $(this).parent();
                var isSm = $("#container").hasClass("mainnav-sm");
                if (parent.parent().hasClass("carte") && isSm) {
                    return;
                }

                $(this).find("b").toggleClass(function() {
                    if ($(this).hasClass("fa-angle-right")) {
                        $(this).removeClass("fa-angle-right");
                        return "fa-angle-down";
                    } else {
                        $(this).removeClass("fa-angle-down");
                        return "fa-angle-right";
                    }
                });

                parent.siblings("li").removeClass("active");

                parent.siblings("li").children(".carte-children").slideUp(300, "linear", function() {
                    $(this).parent("li").removeClass("active");
                    $(this).parent("li").find("a>b").removeClass("fa-angle-down").addClass("fa-angle-right");
                });

                parent.siblings("li").find("a>i").removeClass("icon-spread");

                parent.siblings("li").find("li").children(".carte-children").slideUp(300, function() {
                    $(this).parent("li").removeClass("active");
                });

                parent.siblings("li").find("li>a>i").removeClass("icon-spread");

                parent.children(".carte-children").slideToggle(300, function() {
                    $(this).parent("li").addClass("active");
                });

                parent.find(".carte-children").each(function(index, item) {
                    $(item).find("li.active").each(function(i, el) {
                        $(el).removeClass("active");
                        $(el).find("a>b").removeClass("fa-angle-down").addClass("fa-angle-right");
                    });
                    $(item).find(".carte-children").hide();
                });


                var isMenuChildren = parent.parent().is(".carte-children");
                var hasMenuChildren = $(this).next().is(".carte-children");
                var size = $(this).children("i.icon-spread").size();
                if (hasMenuChildren && isMenuChildren && size === 0) {
                    $(this).children("i").addClass("icon-spread");
                } else {
                    $(this).children("i.icon-spread").removeClass("icon-spread");
                }
            }
        });


        var parentName = window.siderbar.parentName;
        var childName = window.siderbar.childName;
       
        if(parentName !== ""){
            $("li[data-id="+ parentName +"]").addClass("active");
        }

        if(childName !== ""){
            $("li[data-id="+ childName +"]").addClass("current");
        }

    });

    $("#footer").load("../layout/_footer.html");



});

function openLoading() {
    $("#dlgload").dialog({
        position: {
            my: "center top",
            at: "center top+100px",
        },
        modal: true,
        dialogClass: "ui-dialog-front",
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
}

function closeLoading() {
    $("#dlgload").dialog("close");
}

/*bootstrap Model Dialog*/
function openModelDialog(message) {
    $("#modal-btnConfirm").hide();
    $("#modal-btnCancel").html(abp.localization.localize("Button.Close", "BLR"));
    $("#dialogModelTitle").html(abp.localization.localize("Script.Information", "BLR"));
    $("#dialogModelMsg").html(message);
    $('#dialogModel').modal({
        keyboard: true
    });
}

function openConfirmDialog(message, callback, title) {
    if (title === undefined || title === "") {
        title = abp.localization.localize("Script.Confirmation", "BLR");
    }
    $("#modal-btnCancel").html(abp.localization.localize("Button.Cancel", "BLR"));
    $("#modal-btnConfirm").show();
    $("#dialogModelTitle").html(title);
    $("#dialogModelMsg").html(message);
    $("#dialogModel").modal({
        keyboard: true
    });

    $("#modal-btnConfirm").on("click", function() {
        $("#dialogModel").modal("hide");
        if ($.isFunction(callback)) {
            callback.apply();
        }
    });
}

/*jquery UI*/
function openAlert(message) {

    $("#dlgmsg").attr("title", abp.localization.localize("Script.Information", "cms-en-US"));
    $("#dlgmsg-text").html(message);
    $("#dlgmsg").dialog({
        position: {
            my: "center top",
            at: "center top+200px",
        },
        width: 400,
        modal: true,
        dialogClass: "ui-dialog-front",
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
}

function openConfirm(message, callback, title) {

    if (title === undefined || title === "") {
        title = abp.localization.localize("Script.Confirmation", "cms-en-US");
    }

    $("#dlgmsg").attr("title", title);
    $("#dlgmsg-text").html(message);
    $("#dlgmsg").dialog({
        position: {
            my: "center top",
            at: "center top+200px",
        },
        width: 400,
        modal: true,
        dialogClass: "ui-dialog-front",
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                if ($.isFunction(callback)) {
                    callback.apply();
                }
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });
}