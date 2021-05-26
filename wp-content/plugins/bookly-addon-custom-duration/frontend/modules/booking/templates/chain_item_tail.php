<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>
<div class="bookly-form-group">
    <label><?php echo Bookly\Lib\Utils\Common::getTranslatedOption( 'bookly_l10n_label_service_duration' ) ?></label>
    <div>
        <select class="bookly-select-mobile bookly-js-select-units-duration">
            <option value="">-</option>
        </select>
    </div>
</div>