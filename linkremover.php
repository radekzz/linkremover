<?php
	/*
	Plugin Name: Link remover
	Plugin URI: http://cmsss.all4all.cz
	Description: Remove all links from content. A href tags are removed. Text contains links is replaced by post title.
	Version: 1.0
	Author: Zedna Brickick Website
	Author URI: http://www.mezulanik.cz
	License: GPL2
	*/
function add_my_scripts() {
	if(!is_admin()) {
		wp_enqueue_script('jquery');
    wp_register_script('plugin', '/wp-content/plugins/linkremover/linkremover.js', array('jquery'), '1.0', false);
    wp_enqueue_script('plugin');
	}
}
add_action('wp_enqueue_scripts', 'add_my_scripts');
?>