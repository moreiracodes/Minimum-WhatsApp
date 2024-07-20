// ==UserScript==
// @name         Minimum WhatsApp
// @namespace    http://tampermonkey.net/
// @version      2024-07-20
// @description  try to take over the world!
// @author       Moreiracodes
// @match        https://web.whatsapp.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    document.addEventListener('mousemove', function (event) {
        //Hide the sidebar / chat list on mouse over next to window left border
        const chatListElement = getChatListElement();
        if (typeof (chatListElement) != 'undefined' && chatListElement != null && event.x < 20) {
            chatListElement.style.display = "flex";
            console.log("Mostra a sidebar");
        }
        //Show the sidebar / chat list on mouse over next to window right border
        const limit = (window.innerWidth / 100) * 80;
        if (typeof (chatListElement) != 'undefined' && chatListElement != null && event.x > limit) {
            chatListElement.style.display = "none";
            console.log("Oculta a sidebar aaaaaaaa");
        }
    });
    function getChatListElement() {
        return document.querySelector('header').parentNode;
    }

    // Remove width scrollbar on resize window
    function ResizeHandler() {
        const ResizebleElement = document.querySelector("._aigs");
        if (typeof (ResizebleElement) != 'undefined') {
            ResizebleElement.style.minWidth = "0";
        }
    }
    window.onresize = ResizeHandler;

})();