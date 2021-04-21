import { defineConfig } from 'vite';
import { resolve } from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@material-ui/icons': '@material-ui/icons/esm',
    },
  },
});
