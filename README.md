eWineryPlus
===========

Browser plugin that enhance eWinery admin functionality

Description
-----------
This browser plugin allows you to customize EwinerySolutions[1] admin panel. You can modify any field, populate values, create a help messages or better error notifucations for your customer support team.
In demo file I am creating a lookup for 'Order Source' field, but your options are unlimited.

Plugin developed for Chrome and Firefox.
Demo: http://www.vsevolodtsurikov.com/ptf/wine-event/wine-event.gif

INSTALLATION
============
Before you start you need to adjust name of your instance of eWinery to ensure plugin will run only at certain pages you want.
The change needs to be made only in Manifest file; just replace 'admin-WINERY.ewinerysolutions.com' with your admin panel URL.

Installation for Chrome:
------------------------
0) Download plugin in a local folder; adjust the 'manifest' file by specifying name of your eWinery instance;
1) Open Chrome, go to Settings, Extentions, enable "developer Mode" checkbox on top left;
2) Click "Load unpacked extention..." button and select folder where you saved the plugin;
3) Use "ew_script.js" file to make any changes / add functionality to your pages.


Installation for Firefox:
------------------------
0) Download plugin in a local folder; adjust the 'user.js' file by specifying name of your eWinery instance;
1) Install 'greasemonkey' plugin [2];
2) Add "user script":
 2.1 Click the arrow next to monkey face and select "New user script"
 2.2 Indicate name, namespace, add a description (any values you like)
 2.3. Indicate pages where you want to run the plugin, example: https://admin-WINERY.ewinerysolutions.com/wineries/store/index.cfm?method=wstorderspos.AddOrder&CartID*
3) After you created a new script, jusr add content of the file to a window. 


1 - http://ewinerysolutions.com/
2 - https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
