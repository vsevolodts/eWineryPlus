// ==UserScript==
// @name eWinery Drop Down
// @description Creates name lookup drop-down on an order details page
// @namespace eW
// @author Vsevolod Tsurikov
// @version 1.0
// @include https://admin-WINERY.ewinerysolutions.com/wineries/store/*
// @match https://admin-WINERY.ewinerysolutions.com/wineries/store/*
// @grant none

// ==/UserScript==
(function (window, undefined) {// normalize window
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    // Do not execute in iframes
    if (w.self != w.top) {
        return;
    }
    // additional check @include
    if (/https:\/\/admin-WINERY.ewinerysolutions.com/.test(w.location.href)) {
    //Script
        
    $(document).ready(function(){
        $('input[name="SOURCECODE"]').attr('list', 'referrals');
        $('input[name="SOURCECODE"]').after("<datalist id='referrals'></datalist>");    
        $('#referrals').append("<option value='John.Doe@site.com'><option value='John.Snith@site.com'>");        
    });        
    }
})(window);