# Node Font Awesome

Simple font awesome wrapper to allow serving from node.

## Install

```shell
npm install font-awesome --save
npm install node-font-awesome --save-dev
```

## API 

* __scssPath__: path to scss directory for adding as import path
* __lessPath__: path to less directory for adding as import path
* __css__: path to `font-awesome.css` file.
* __fonts__: glob path to all files in fonts directory.


## Usage

### In your SCSS file

Don't forget to import Font Awesome in your SCSS file (in this example, that's `./sass/main.scss`).

```scss
/* ... */
@import "font-awesome.scss";
/* ... */
```

### Moving Fonts

```javascript
var gulp = require('gulp');
var fontAwesome = require('node-font-awesome');

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./app/fonts'));
});
```

### Adding To SASS Paths

```javascript
var gulp = require('gulp');
var fontAwesome = require('node-font-awesome');

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass({
      includePaths: [fontAwesome.scssPath]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/css'));
});
```

### With Bourbon

```javascript
var gulp = require('gulp');
var fontAwesome = require('node-font-awesome');
var bourbon = require('node-bourbon')

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass({
      includePaths: bourbon.with(fontAwesome.scssPath)
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/css'));
});
```
