const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');
const webpackConf = require('./conf/webpack.config.js');

gulp.task('webpack:watch', done => {
    webpackWrapper(true, webpackConf, done);
});

gulp.task('webpack', done => {
    webpackWrapper(false, webpackConf, done);
});

function webpackWrapper(watch, conf, done) {
    const webpackBundler = webpack(conf);

    const webpackChangeHandler = (err, stats) => {
        if (err) {
            gutil.log(gutil.colors.red(`[${title}]`), err.toString());
            this.emit('end');
        }

        gutil.log(stats.toString({
            colors: true,
            chunks: false,
            hash: false,
            version: false
        }));

        if (done) {
            done();
            done = null;
        }

        gulp.src('./dist/ngJQueryQueryBuilder.js')
          .pipe(gulp.dest('./demo/lib'));
    };

    if (watch) {
        webpackBundler.watch(200, webpackChangeHandler);
    } else {
        webpackBundler.run(webpackChangeHandler);
    }
}