import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/burger-gurgler/',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@material-ui/icons': '@material-ui/icons/esm',
    },
  },
});
