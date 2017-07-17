<?php
/**
 * This file is part of OXID eSales WYSIWYG module.
 *
 * OXID eSales WYSIWYG module is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * OXID eSales WYSIWYG module is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OXID eSales WYSIWYG module.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link      http://www.oxid-esales.com
 * @copyright (C) OXID eSales AG 2003-2017
 * @version   OXID eSales WYSIWYG
 */

/**
 * Metadata version
 */
$sMetadataVersion = '1.1';

/**
 * Module information
 */
$aModule = array(
    'id'          => 'ddoewysiwyg',
    'title'       => 'WYSIWYG Editor + Mediathek',
    'description' => array(
        'de' => '',
        'en' => '',
    ),
    'thumbnail'   => 'logo.png',
    'version'     => '1.0.0',
    'author'      => 'OXID eSales AG & digidesk - media solutions',
    'url'         => 'http://www.oxid-esales.com',
    'email'       => 'info@oxid-esales.com',
    'extend'      => array(

        // Admin Controller

        \OxidEsales\Eshop\Application\Controller\TextEditorHandler::class => 'ddoe/wysiwyg/application/controllers/ddoewysiwygtexteditorhandler',

        // Core

        \OxidEsales\Eshop\Core\Language::class => 'ddoe/wysiwyg/core/ddoewysiwygoxlang',
        \OxidEsales\Eshop\Core\Utils::class    => 'ddoe/wysiwyg/core/ddoewysiwygoxutils',

    ),
    'files'       => array(

        // Models

        'ddoewysiwygmedia' => 'ddoe/wysiwyg/application/models/ddoewysiwygmedia.php',

        // Controller

        'ddoewysiwyglangjs'        => 'ddoe/wysiwyg/application/controllers/ddoewysiwyglangjs.php',
        'ddoewysiwygmedia_view'    => 'ddoe/wysiwyg/application/controllers/admin/ddoewysiwygmedia_view.php',
        'ddoewysiwygmedia_wrapper' => 'ddoe/wysiwyg/application/controllers/admin/ddoewysiwygmedia_wrapper.php',

        // Events
        'ddoewysiwygevents'        => 'ddoe/wysiwyg/application/events/ddoewysiwygevents.php',

    ),
    'templates'   => array(

        'ddoewysiwyg.tpl'                     => 'ddoe/wysiwyg/application/views/admin/tpl/ddoewysiwyg.tpl',
        'dialog/ddoewysiwygmedia.tpl'         => 'ddoe/wysiwyg/application/views/admin/tpl/dialog/ddoewysiwygmedia.tpl',
        'dialog/ddoewysiwygmedia_wrapper.tpl' => 'ddoe/wysiwyg/application/views/admin/tpl/dialog/ddoewysiwygmedia_wrapper.tpl',

    ),
    'events'      => array(
        'onActivate'   => 'ddoewysiwygevents::onActivate',
        'onDeactivate' => 'ddoewysiwygevents::onDeactivate'
    ),
    'blocks'      => array(),
    'settings'    => array()
);
