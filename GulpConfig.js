module.exports = {
    root: "./dist",
    styles: {
        src: [
            './src/scss/**/*.scss',
        ],
        dest: './dist/css',
        tailwind: './tailwind/css',
    },
    images: {
        src: [
            './src/images/**/*.{jpg,png,svg}',
        ],
        dest: './dist/images',
        tailwind: './tailwind/images',
    },
    js: {
        src: [
            './src/js/**/*.js',
        ],
        dest: './dist/js',
        tailwind: './tailwind/js',
    },
    html: {
        src: [
            './src/**/*.{html,njk}',
        ],
        dest: './dist',
        tailwind: './tailwind',
    },
    fonts: {
        src: [
            './src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        ],
        dest: './dist/fonts',
        tailwind: './tailwind/fonts',
    }
};
