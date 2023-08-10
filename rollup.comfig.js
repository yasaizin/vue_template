import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import html from 'rollup-plugin-bundle-html';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import dotenv from 'dotenv';
import typescript from 'rollup-plugin-typescript2';
import typescriptCompiler from 'ypescript';
import sveltePreprocessor from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import alias from '@rollup/plugin-alias';
import path from 'path';

const production = !process.env.NODE_ENV;

const aliases = alias({
    // resolve: ['.svelte', '.js', '.ts'], // どの拡張子のファイルでこのルールを有効にするか
    entries: [
        // find: 絶対パスの書き方 // replacement: その書き方で、どのフォルダを指すか
        // 以下は参考例です。
        { find: 'src', replacement: path.resolve(path.resolve(__dirname), 'src') },
        // { find: 'routes', replacement: 'src/routes/' },
    ]
});

export default {
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: './dist/js/bundle.js'
    },
    plugins: [
        
        svelte({
            dev: !production,
            extensions: [".svelte"],
            css: css => {
                css.write('./public/build/bundle.css');
            },
            preprocess: sveltePreprocessor({
                scss: true,
            }),
            emitCss: true,
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        postcss({
            extract: true
        }),
        typescript({ typescript: typescriptCompiler }),
        commonjs(),
        !production && serve(),
        !production && livereload('./dist'),
        production && terser(),
        aliases,
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
