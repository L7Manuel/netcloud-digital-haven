import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/netcloud-vlza/' : '/';
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'placeholder.svg'],
        manifest: {
          name: 'NETCLOUD - Tecnología del Futuro',
          short_name: 'NETCLOUD',
          description: 'Soluciones tecnológicas innovadoras. Cloud computing, desarrollo software, ciberseguridad e IA.',
          theme_color: '#3b82f6',
          background_color: '#0f172a',
          display: 'standalone',
          scope: base,
          start_url: base,
          icons: [
            {
              src: 'favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\.dicebear\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'dicebear-avatars',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'google-fonts-stylesheets',
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: false,
      minify: 'terser',
      cssMinify: true,
      cssCodeSplit: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // React core libraries
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            // Radix UI components
            'vendor-ui': [
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-popover',
              '@radix-ui/react-tabs',
              '@radix-ui/react-toast',
              '@radix-ui/react-tooltip',
              '@radix-ui/react-avatar',
              '@radix-ui/react-collapsible',
              '@radix-ui/react-label',
              '@radix-ui/react-slot',
            ],
            // Icons library
            'vendor-icons': ['lucide-react'],
            // Forms and validation
            'vendor-forms': ['react-hook-form', '@hookform/resolvers'],
            // React Query
            'vendor-query': ['@tanstack/react-query'],
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
  };
});
