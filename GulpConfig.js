module.exports = {
    root: "./dist",
    styles: {
        src: [
            './src/scss/**/*.scss',
        ],
        dest: './dist/css',
    },
    images: {
        src: [
            './src/images/**/*.{jpg,png}',
        ],
        dest: './dist/images',
    },
    js: {
        src: [
            './src/js/**/*.js',
        ],
        dest: './dist/js',
    },
    html: {
        src: [
            './src/**/*.{html,njk}',
        ],
        dest: './dist',
    },
    fonts: {
        src: [
            './src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        ],
        dest: './dist/fonts',
    }
};
