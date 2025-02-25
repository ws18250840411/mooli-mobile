/* eslint-disable @typescript-eslint/no-require-imports */
const gulp = require('gulp')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const path = require('path')
const tsconfig = require('./tsconfig.json')

function clean() {
  return del('./dist/**')
}

function buildStyle() {
  return gulp
    .src(['./components/**/*.less'], {
      base: './components/',
      ignore: ['**/tests/**/*'],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, 'components')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./dist/esm'))
    .pipe(gulp.dest('./dist/cjs'))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(concat('mooli-mobile.css'))
    .pipe(gulp.dest('./dist'))
}

function tsCJS() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'CommonJS',
  })
  return gulp
    .src(['components/**/*.{ts,tsx}'], {
      ignore: ['**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('dist/cjs/'))
}

function tsES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  })
  return gulp
    .src(['components/**/*.{ts,tsx}'], {
      ignore: ['**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('dist/esm/'))
}

function tsDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  })
  return gulp
    .src(['components/**/*.{ts,tsx}'], {
      ignore: ['**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/esm/'))
    .pipe(gulp.dest('dist/cjs/'))
}

function umdWebpack() {
  return gulp
    .src('dist/esm/index.js')
    .pipe(
      webpackStream(
        {
          output: {
            filename: 'mooli-mobile.js',
            library: {
              type: 'umd',
              name: 'mooliMobile',
            },
          },
          mode: 'production',
          optimization: {
            usedExports: true,
          },
          resolve: {
            extensions: ['.js', '.json'],
          },
          module: {
            rules: [
              {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset/inline',
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          externals: [
            {
              react: 'React',
            },
          ],
        },
        webpack
      )
    )
    .pipe(gulp.dest('dist/'))
}

exports.umdWebpack = umdWebpack

exports.default = gulp.series(
  clean,
  gulp.parallel(tsCJS, tsES, tsDeclaration, buildStyle),
  gulp.parallel(umdWebpack)
)
