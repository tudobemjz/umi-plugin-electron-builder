import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  plugins: [path.join(__dirname, '../../src')],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
