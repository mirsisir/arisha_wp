<?php
namespace BooklyCustomDuration\Frontend\Modules\Booking\ProxyProviders;

use Bookly\Frontend\Modules\Booking\Proxy;
use BooklyCustomDuration\Lib;

/**
 * Class Shared
 * @package BooklyCustomDuration\Frontend\Modules\Booking\ProxyProviders
 */
class Shared extends Proxy\Shared
{
    public static function renderChainItemTail()
    {
        self::renderTemplate( 'chain_item_tail' );
    }
}
