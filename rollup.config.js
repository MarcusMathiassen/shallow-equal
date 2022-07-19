// rollup.config.js
import { terser } from 'rollup-plugin-terser'

const inputName = 'index'
const inputsDirs = ['']
const formats = ['esm', 'cjs', 'umd']

export default inputsDirs.reduce((acc, inputDir) => {
    acc.push(
        ...formats.map((format) => ({
            input: `src/${inputName}.js`,
            output: {
                name: 'deepEqual',
                file: `dist/${inputDir}${inputName}.${format}.js`,
                format,
            },
            plugins: [
                // terser({
                //     compress: {
                //         booleans: false,
                //     },
                // }),
            ],
        }))
    )
    return acc
}, [])
