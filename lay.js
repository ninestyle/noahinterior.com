/*
    Version: 3.0.0 (V3 Refactored)
    Framework: User Configuration (Tier 3)
    Last Modified: 2025-11-23
    Author: Maxim
    Theme: NOAH INTERIOR - Wood Theme
*/

const siteConfig = {
    // [기본 설정]
    language: 'ko',

    // [헤더 설정]
    canvas_image_type: 'cover',
    canvas_image_path: './section/',
    canvas_image_count: 3,
    canvas_image_format: 'webp',
    canvas_image_slide: 5,
    canvas_indicators: true,
    canvas_overlay: 'dotted',
    
    icon_buttons: [
        { name: 'Location', icon: 'location_on', url: '#location' }
    ]
};

// V3 Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PE_V3 !== 'undefined') {
        PE_V3.init(siteConfig);
    } else {
        console.error("Page Express V3 libraries not loaded.");
    }
});