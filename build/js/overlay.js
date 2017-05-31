/**
 *
 *     |o     o    |          |
 * ,---|.,---..,---|,---.,---.|__/
 * |   |||   |||   ||---'`---.|  \
 * `---'``---|``---'`---'`---'`   `
 *       `---'    [media solutions]
 *
 * @copyright   (c) digidesk - media solutions
 * @link        http://www.digidesk.de
 * @author      pclaisse
 */

+function( $ )
{
    'use strict';

    // OVERLAY CLASS DEFINITION
    // ========================

    var Overlay = function ()
    {
        this.loadStyles();
        this.loadOverlay();
        this.setEvents();
    };


    // OVERLAY MAIN CONSTANTS
    // ======================

    Overlay.VERSION = '1.0.0';


    // OVERLAY MAIN PROPERTIES
    // =======================

    Overlay.prototype.$overlay = null;
    Overlay.prototype.overlayContext = null;


    // OVERLAY METHODS
    // ===============

    Overlay.prototype.loadStyles = function()
    {
        if( !window.editorModuleUrl )
        {
            return;
        }

        if ( typeof document.createStyleSheet == 'function' )
        {
            document.createStyleSheet( 'https://fonts.googleapis.com/css?family=Open+Sans' );
            document.createStyleSheet( window.editorModuleUrl + 'out/src/css/overlay.min.css' );
        }
        else
        {
            $( 'head' )
                .append( $( '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" type="text/css" />' ) )
                .append( $( '<link rel="stylesheet" href="' + window.editorModuleUrl + 'out/src/css/overlay.min.css" type="text/css" />' ) );
        }
    };

    Overlay.prototype.loadOverlay = function()
    {
        if( !window.editorModuleUrl )
        {
            return;
        }

        var overlay = '<div class="dd-backend-overlay">'
                    + '<div class="dd-overlay-backdrop"></div>'
                    + '<div class="dd-overlay-dialog">'
                    + '  <div class="dd-overlay-dialog-header">'
                    + '    Mediathek'
                    + '    <a href="javascript:void(null);" class="dd-overlay-dialog-close">&times;</a>'
                    + '  </div>'
                    + '  <div class="dd-overlay-dialog-body">'
                    + '    <iframe src="" id="overlayFrame" frameborder="0" style="width: 100%; height: 100%;"></iframe>'
                    + '  </div>'
                    + '  <div class="dd-overlay-dialog-footer">'
                    + '    <button type="button" class="dd-overlay-dialog-button dd-overlay-dialog-cancel">Abbrechen</button>'
                    + '  </div>'
                    + '</div>';

        this.$overlay = $( overlay );

        $( 'html' ).append( this.$overlay );
    };

    Overlay.prototype.setEvents = function()
    {
        var self = this;

        $( '.dd-overlay-dialog-close, .dd-overlay-dialog-cancel', this.$overlay ).on( 'click', function( e )
            {
                e.preventDefault();
                self.hideOverlay();
            }
        );

    };

    Overlay.prototype.onContentLoad = function( callback )
    {
        if( typeof callback === 'function' )
        {
            callback.call( this );
        }
    };

    Overlay.prototype.showOverlay = function( context )
    {
        this.overlayContext = context;

        if( window.editorControllerUrl )
        {
            $( '#overlayFrame', this.$overlay ).attr( 'src', window.editorControllerUrl );
            $( '#overlayFrame', this.$overlay ).data( 'context', context );
        }

        this.$overlay.show();

    };

    Overlay.prototype.hideOverlay = function()
    {
        this.$overlay.hide();

        $( '#overlayFrame', this.$overlay ).attr( 'src', '' );
        $( '.dd-overlay-dialog-footer > *', this.$overlay ).not( '.dd-overlay-dialog-cancel' ).remove();
    };

    // Initialize Overlay
    window.OverlayInstance = new Overlay();

}( jQuery );