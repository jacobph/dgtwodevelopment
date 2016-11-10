<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_dgtwo');

/** MySQL database username */
define('DB_USER', 'wp_dgtwo_user');

/** MySQL database password */
define('DB_PASSWORD', 'l6eqo9hYTv7T');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_Bm;EX#2MLj&MW=?7BHm,oEBIGHFPv{;`_5/#&S4Pvop@62R^PX{wUuf3+o-F{*:');
define('SECURE_AUTH_KEY',  'H[tCH^:u4y_0k(L=~zpCuNfESj1wm~7T!Se{JEhlJdT< p$Dahj]xSG?]IVU3GFA');
define('LOGGED_IN_KEY',    '>yQ<yru#@R>[aTdmpk-l$zc[s/?k=rUV-z`tD0(S`]B+ a^Lhr8N:xl9%1-t nd#');
define('NONCE_KEY',        'jzL+^!=4q/ULjZ/<JP7bTwv(Rg}?2{GiHN#_pVG%^t:XT .%~0.ov~hM>.Ef~wPa');
define('AUTH_SALT',        '{Qoanqh+EDhrqVP3~vUv`K6MQ(i]KsQ?LJ,xA+dcEnk?j)uYCBOFJl4sH~{u=6)g');
define('SECURE_AUTH_SALT', 'C=Ur=8^0s&TXQJg];lcZp+aQ_:q=tgjSzR]xiT(oVj*8Hse8]C@c2bXr@rdPA2D?');
define('LOGGED_IN_SALT',   '~-bx{^P-(Rr+Unezaz3athI8x/{LqzYZ@sfQAAE(lelEqG{ZLqEG^8]El;eUzG-m');
define('NONCE_SALT',       '%cz|^,l0Y{;pL4UtYG&{lEMkbEG$Eo11oS:bq*J ,B#wyM&18L8XfZqOW)Q1IC@F');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
