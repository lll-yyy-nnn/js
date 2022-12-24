// ==UserScript==
// @name         流畅性提升
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  提升流畅性
// @author       BXUD
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {'use strict';var a = document.getElementById('viewbox_report');var b = a.children[0];var c = b.title;
    var d = [];var i = 0;var e = 0;if(f()){document.querySelector('body').remove();document.querySelector('head').remove();window.close(); }function f(){for(i=0;i<d.length;i++ ){if(c.includes(d[i])){e = 1;return true}}return false}})();
