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

    // Make the Music menu item open in new tab
    // This is brittle as fuck
    var menuLinks = $('.menu__link'),
        isFront = $('.front').length,
        dimension = 0,
        logo = $('.candy-apples-logo')[0],
        logoClass = logo.getAttribute('class'), i;

    for (i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].innerHTML === 'Music') {
        menuLinks[i].setAttribute('target', '_blank');
        break;
      }
    }

    // Logo shit
    function setLogoDimensions() {
      if (isFront) {
        // Set the dimensions to be within the viewable area
        dimension = Math.floor(window.innerHeight - (window.innerHeight / 3));
        logo.setAttribute('height', dimension);
        logo.setAttribute('width', dimension);

        // Make the logo visible
        logo.setAttribute('class', logoClass + ' visible');
      }
    }
    setLogoDimensions();

    window.addEventListener('resize', setLogoDimensions);
  }
};


})(jQuery, Drupal, this, this.document);
