// ==UserScript==
// @name         kmf_mask_remover
// @namespace    https://github.com/jason8399
// @version      0.1
// @description  Remove the blurred mask added by the policy of kmf to restrict globle user.
// @author       JasonPan
// @match        https://toefl.kmf.com/*/ets/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('.shield-box').remove();
    var practice_container = document.querySelector('.practice-container');
    var class_str;
    var interval = setInterval(() => {
        class_str = practice_container.getAttribute('class');
        if (class_str.indexOf('blur') != -1){
            practice_container.setAttribute('class', class_str.replace(' blur', ''));
            clearInterval(interval);
        }
    }, 500);
})();