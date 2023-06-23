/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import Logo from './app/(admin)/studio/[[...index]]/Logo'
import StudioNavbar from './app/(admin)/studio/[[...index]]/StudioNavbar'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'X_Clone_ECommerce_Studio',
  title: 'X Clone ECommerce',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
})
