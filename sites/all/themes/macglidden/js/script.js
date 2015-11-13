/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.candy_apples_behavior = {
  attach: function(context, settings) {

    // This is brittle as fuck
    var menuLinks = $('.menu__link'), i;

    for (i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].innerHTML === 'Music') {
        menuLinks[i].setAttribute('target', '_blank');
        break;
      }
    }

  }
};


})(jQuery, Drupal, this, this.document);
