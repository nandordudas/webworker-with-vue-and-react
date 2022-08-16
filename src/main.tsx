// #region vue
import { createApp } from 'vue'
import VueAppSfc from './VueApp.vue'
// #endregion

// #region react
import { createRoot } from 'react-dom/client'
import ReactApp from './ReactApp'
// #endregion

import '@unocss/reset/tailwind.css'
import 'uno.css'

// #region vue
const app = createApp(VueAppSfc)

app.mount('[data-app=vue]')
// #endregion

// #region react
const container = document.querySelector('[data-app=react]') as HTMLElement
const root = createRoot(container)

root.render(<ReactApp />)
// #endregion
