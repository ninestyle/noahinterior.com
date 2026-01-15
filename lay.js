const siteConfig = {
    meta: {
        lang: 'ko'
    },
    canvas: {
        target: '#home',
        overlay: 'dotted',

        image_type: 'cover',
        image_count: 4,
        image_slide: 6,
        image_path: './section/',
        image_format: 'webp'
    },
    api: {
        provider: true,
        turnstile: '0x4AAAAAACJQlCjpqGMqegcx'
    },
    buttons: [
        { name: 'Overview', icon: 'home', url: '#overview' },
        { name: 'Portfolio', icon: 'style', url: '#portfolio' },
        { name: 'Location', icon: 'location_on', url: '#location' },
        { name: 'Request', icon: 'post_add', url: './request' }
    ]
};

if (window.PV4) {
    window.PV4.init(siteConfig);
}