// ==UserScript==
// @name         kmf_mask_remover
// @namespace    https://github.com/jason8399
// @version      0.1.2
// @description  Remove the blurred mask added by the policy of kmf to restrict globle user.
// @author       JasonPan
// @match        https://toefl.kmf.com/*/ets/*
// @match        https://toefl.kmf.com/mock*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var shield_box;
    var practice_container;
    var class_str;
    var interval = setInterval(() => {
        shield_box = document.querySelector('.shield-box');
        if (shield_box !== null) {
            shield_box.remove();
        } 
        practice_container = document.querySelector('.practice-container');
        class_str = practice_container.getAttribute('class');
        if (class_str.indexOf('blur') != -1){
            practice_container.setAttribute('class', class_str.replace(' blur', ''));
            clearInterval(interval);
        }
    }, 750);
})();
