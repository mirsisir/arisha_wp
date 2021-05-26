<?php

namespace LivemeshAddons\ThemeBuilder;

use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Section_Document;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Livemesh_Grid extends Theme_Section_Document {

    public static function get_properties() {
        
        $properties = parent::get_properties();

        $properties['condition_type'] = '';
        $properties['location'] = 'livemesh_grid';

        return $properties;
    }

    public function get_name() {
        return 'livemesh_grid';
    }

    public static function get_title() {

        return __( 'Livemesh Grid', 'livemesh-el-addons' );
    }

    /* The category for the loop item widget */
    protected static function get_editor_panel_categories() {

        $categories = [
            'livemesh-grid' => [
                'title' => __( 'Livemesh Grid', 'livemesh-el-addons' ),
            ],
        ];

        return $categories + parent::get_editor_panel_categories();

    }

}

