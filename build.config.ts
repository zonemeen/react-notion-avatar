import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['package/index'],
  outDir: './notion-dist',
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
