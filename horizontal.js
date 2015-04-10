/*!
 * horizontal layout mode for Isotope
 * v1.1.2
 * http://isotope.metafizzy.co/layout-modes/horizontal.html
 */

( function( window ) {

'use strict';

function horizontalDefinition( LayoutMode ) {

  var Horizontal = LayoutMode.create( 'horizontal', {
    verticalAlignment: 0
  });

  Horizontal.prototype._resetLayout = function() {
    this.x = 0;
  };

  Horizontal.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    var y = ( this.isotope.size.innerHeight - item.size.outerHeight ) *
      this.options.verticalAlignment;
    var x = this.x;
    this.x += item.size.outerWidth;
    return { x: x, y: y };
  };

  Horizontal.prototype._getContainerSize = function() {
    return { width: this.x };
  };

  Horizontal.prototype.needsResizeLayout = function() {
    return this.needsVerticalResizeLayout();
  };

  return Horizontal;

}

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'isotope/js/layout-mode'
    ],
    horizontalDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = horizontalDefinition(
    require('isotope-layout/js/layout-mode')
  );
} else {
  // browser global
  horizontalDefinition(
    window.Isotope.LayoutMode
  );
}

})( window );
