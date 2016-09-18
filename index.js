var self = require("sdk/self");
// // a dummy function, to show how tests work.
// // to see how to test this function, look at test/test-index.js
// function dummy(text, callback) {
// callback(text);
// }
//
// exports.dummy = dummy;

// contentScriptFile: [data.url("jquery-1.4.2.min.js"),
// data.url("my-content-script.js")];
// var data = require("sdk/self").data;
// var x = data.url("lib/jquery-3.1.0.min.js");
// $ = require('lib/jquery-3.1.0.min.js');
//
// $.ajaxSetup({
// timeout: 60000
// });

// contains Cc, Ci, Cu, Cr, Cm, CC, components, ChromeWorker
var {Cu} = require('chrome');
//console.info("TRACE chrome:" + showObjDetails(chrome));
//console.info("TRACE chrome.Ci:" + showObjDetails(chrome.Ci));
//console.info("TRACE Cu:" + showObjDetails(Cu));


//var ioFile = require("sdk/io/file");
//var buttons = require('sdk/ui/button/action');
//var toggleButton = require("sdk/ui/button/toggle");
//var tabs = require("sdk/tabs");
//var panels = require("sdk/panel");
//var prefs = require("sdk/preferences/service");
//
//var state = "INIT";
//var stateMessage = "";
//
//console.info("TRACE tb:" + showObjDetails(toggleButton));
//
//function showObjDetails(obj) {
//    if (!obj) {
//        return "" + obj;
//    }
//    var sup = "";
//    var own = "";
//    for ( var name in obj) {
//        if (typeof obj.hasOwnProperty == 'function' && obj.hasOwnProperty(name)) {
//            own += "\n-" + name;
//        } else {
//            sup += "\n^" + name;
//        }
//    }
//    return "tagName: " + obj.tagName + ", typeof : " + (typeof obj)
//            + ", constructor.name: "
//            + (obj.constructor ? obj.constructor.name : "no ctor") + "\n" + own
//            + sup + "\n" + "textContent = \"" + obj.textContent + "\"";
//}
//
//var button = toggleButton.ToggleButton({
//    id : "my-button",
//    label : "my button",
//    icon : {
//        "16" : "./icon-16.png",
//        "32" : "./icon-32.png",
//        "64" : "./icon-64.png"
//    },
////    onClick : handleClick,
//    onChange : handleChange
//});
//
//function handleClick(state) {
//    tabs.open("http://www.mozilla.org/");
//}
//
//var panel = panels.Panel({
//    contentURL : "./popup.html",
//    onHide : handleHide
//});
//
//function handleChange(state) {
//    if (state.checked) {
//        panel.show({
//            position : button
//        });
//    }
//}
//
//function handleHide() {
//    button.state('window', {
//        checked : false
//    });
//}
//
//
//prefs.set("network.protocol-handler.expose.file", false);
//prefs.set("network.protocol-handler.external.file", true);


Cu.import("resource://gre/modules/FileUtils.jsm");
console.info("TRACE after");

var root = new FileUtils.File("\\\\.");
var drivesEnum = root.directoryEntries, drives = [];
while (drivesEnum.hasMoreElements()) {
  drives.push(drivesEnum.getNext().
    QueryInterface(Components.interfaces.nsILocalFile).path);
}
console.info("TRACE later");

//console.info("drives...");
//var drives = ioFile.list("\\\\.\\PHYSICALDRIVE1");
//for(var i=0; i<drives.length; i++) {
//    console.info("drives[" + i + "]: " + drives[i]);
//}

