"use strict";
$(document).ready(function() {
    $("#Index").html(chrome.i18n.getMessage("Index")),
    $("#BBS").html(chrome.i18n.getMessage("BBS")),
    $("#Almanacs").html(chrome.i18n.getMessage("Almanacs")),
    $("#Achievements").html(chrome.i18n.getMessage("Achievements")),
    $("#Github").html(chrome.i18n.getMessage("Github")),
    $("#Search").html(chrome.i18n.getMessage("Search")),
	$("#Donate").html(chrome.i18n.getMessage("Donate")),	
	$("#About").html(chrome.i18n.getMessage("About")),	
	$("#SearchKeyword").attr("placeholder",chrome.i18n.getMessage("Hint"));

	$("#Index").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/"
			}),
			!1
		 }),

	$("#BBS").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://bbs.mcmod.cn/"
			}),
			!1
		 }),

	$("#Almanacs").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/almanacs/"
			}),
			!1
		 }),

	$("#Achievements").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/tools/achievements/"
			}),
			!1
		 }),

	$("#Github").click(function() {
		return chrome.tabs.create
		    ({
				url: "https://github.com/Ahrwing/mcmod/issues"
			}),
			!1
		 }),

	$("#SearchKeyword").keyup(function(enter) {
		13 === enter.keyCode && $("#Search").click()
		}),

	$("#Search").click(function() {
		var Keyword = $("#SearchKeyword").val().trim();
		return  chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/s?key=" + Keyword
			}),
			!1
		 }),

	$("#Donate").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/donate/"
			}),
			!1
		 })
		 
		$("#About").click(function() {
		return chrome.tabs.create
		    ({
				url: "http://www.mcmod.cn/about/"
			}),
			!1
		 })
});