import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components/index'),
      'hooks': path.resolve(__dirname, './src/hooks/index'),
      'store/contexts': path.resolve(__dirname, './src/store/contexts/index'),
      'store/reducers': path.resolve(__dirname, './src/store/reducers/index'),
      'layouts': path.resolve(__dirname, './src/layouts/index'),
      'pages': path.resolve(__dirname, './src/pages/index'),
      'features': path.resolve(__dirname, './src/features/index'),
    },
  },
})
