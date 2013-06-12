/**
 * Video Plugin Name
 *
 * @version      : 0.0
 * @author       : 
 * @date         : 
 * @srcUrl       : http://mantone.github.com/backvideos
 * @demoUrl      : http://mantone.github.com/backvideos
 * @license      :
 *
 * @basedOn      : 
 *
 * @dependencies :
 *
 * descirption   :
 *
 *
 */
;(function($) {



$.fn.backVids = function(options) {
  var $containers = this;
  
  // abort if container is unavailiable
  if (!$containers.length)
    return;


  // grab the user settings
  var settings = {};
  settings = $.extend({}, $.fn.backVids.defaults, options );

  // plugin magic happens here 
  return $containers.each(function() {

    var $ele = $(this); // this is the targeted element

    // check if we need to use the image fallback;
    if( settings.useImageFallback === true) {

      $.fn.backVids.applyImageFallback($ele);

    } else {     

    }

  });


};


// our default settings
$.fn.pluginName.defaults = {
  prop1            : false,
  prop2            : false,
  prop3            : '1.2';
};


// helper function
$.fn.pluginName.helperFunction = function() {

};


}(jQuery));