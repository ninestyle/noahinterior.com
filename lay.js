/*
    Version: 3.0.1
    Last Modified: 2025-11-23
    Author: Maxim
    Theme: NOAH INTERIOR - Wood Theme (V3 Config)
*/

const siteConfig = {
    // === Header Settings ===
    canvas_image_type: 'cover',
    canvas_image_path: './section/',
    canvas_image_count: 3,
    canvas_image_format: 'webp',
    canvas_image_slide: 5,
    canvas_indicators: true,
    canvas_overlay: 'dotted',
    
    // === Action Buttons (Header) ===
    icon_buttons: [
        { name: 'Location', icon: 'location_on', url: '#location' },
        { name: 'Contact', icon: 'contact_support', url: '#contact' }
    ],

    // === API Settings ===
    API_BASE_PATH: 'https://agency.maxim.kr/api',
    TURNSTILE_SITE_KEY: '0x4AAAAAACA4Lf2CF7viYhbJ',
};

// V3 Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PE_V3 !== 'undefined') {
        PE_V3.init(siteConfig);
    } else {
        console.error("Page Express V3 libraries not loaded.");
    }
});