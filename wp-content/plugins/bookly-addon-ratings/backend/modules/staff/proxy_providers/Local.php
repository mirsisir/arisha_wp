<?php
namespace BooklyRatings\Backend\Modules\Staff\ProxyProviders;

use Bookly\Backend\Modules\Staff\Proxy;
use BooklyRatings\Lib;

/**
 * Class Local
 * @package BooklyRatings\Backend\Modules\Staff\ProxyProviders
 */
abstract class Local extends Proxy\Ratings
{
    /**
     * @inheritdoc
     */
    public static function renderStaffServiceRating( $staff_id, $service_id = null, $type = '' )
    {
        if ( get_option( 'bookly_ratings_show_at_backend', 1 ) ) {
            $rating = Lib\Utils\Common::calculateStaffRating( $staff_id, $service_id );

            if ( $rating ) {
                printf( '<strong class=\'bookly-js-rating text-primary %s\'><i class=\'fas fa-fw fa-star mr-1\'></i>%.1f</strong>', $type == 'right' ? 'float-right' : '', $rating );
            }
        }
    }
}