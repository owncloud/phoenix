import 'core-js/stable'
import 'regenerator-runtime/runtime'

import translationsJson from '../l10n/translations'
import DrawIoEditor from './DrawIoEditor.vue'

const routes = [
  {
    name: 'draw-io-edit',
    path: '/edit/:filePath',
    components: {
      fullscreen: DrawIoEditor
    },
    meta: { hideHeadbar: true }
  }
]

const appInfo = {
  name: 'Draw.io',
  id: 'draw-io',
  icon: 'grid_on',
  extensions: [
    {
      extension: 'drawio',
      newTab: true,
      routeName: 'draw-io-edit',
      newFileMenu: {
        menuTitle($gettext) {
          return $gettext('New draw.io document…')
        }
      },
      routes: [
        'files-list',
        'files-favorites',
        'files-shared-with-others',
        'files-shared-with-me',
        'public-files'
      ]
    },
    {
      extension: 'vsdx',
      newTab: true,
      routeName: 'draw-io-edit'
    }
  ]
}

const translations = translationsJson
export default define({
  appInfo,
  routes,
  translations
})
