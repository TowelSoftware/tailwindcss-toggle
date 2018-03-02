let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.copy('src/index.html', 'dist/')
.postCss('src/main.css', 'dist/', [
    tailwindcss('tailwind.js'),
]);