import { configure } from '@storybook/vue'

const req = require.context('@/stories', true, /stories\.js$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
