const { src, dest } = require('gulp');

module.exports = function libsPackage() {
    return src('app/assets/libs/*.{css,js,map}').pipe(dest('build/assets/libs'));
};

