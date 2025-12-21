import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pasteles-panel',

  projectId: 'y7m52g15',
  dataset: 'global',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
