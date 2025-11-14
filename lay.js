/*
    Version: 2.1.0
    Last Modified: 2025-11-14
    Author: Maxim
    License: © 2025 Maxim. All Rights Reserved.
    Theme: NOAH INTERIOR - V2 Config
*/

const siteConfig = {
    // === Header Canvas & Image Settings ===
    // V1 used a 3-image slider
    canvas_image_type: 'cover',
    canvas_image_path: './section/',
    canvas_image_count: 3,
    canvas_image_format: 'webp', // User specified format
    canvas_image_slide: 5, // Default 5 seconds
    canvas_indicators: true, // V1 had indicators
    canvas_overlay: 'dotted', // V1 had 'has-dot-pattern'
    
    // === Header Icon Buttons (User Request) ===
    icon_buttons: [
        { name: 'Location', icon: 'location_on', url: '#location' },
        { name: 'Contact', icon: 'contact_support', url: '#contact' }
    ],

    // === API Settings (User Request) ===
    API_BASE_PATH: 'https://agency.maxim.kr/api',
    TURNSTILE_SITE_KEY: '0x4AAAAAACA4Lf2CF7viYhbJ',
};

// V2 Core System Initialization
document.addEventListener('DOMContentLoaded', () => {
    PE_V2.init(siteConfig);
});