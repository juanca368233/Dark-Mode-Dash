// src/themes/ChakraTheme.tsx
// Importa las utilidades correctas para Chakra UI v3 (Panda CSS)
import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react';

const theme = defineConfig({
  theme: { // <--- AÑADE LA PROPIEDAD 'theme' AQUÍ
    // Define tus tokens (colores, fuentes, espaciados, etc.)
    tokens: {
      colors: {
        brand: {
          900: { value: '#1a365d' },
          800: { value: '#153e75' },
          700: { value: '#2a69ac' },
        },
      },
      fonts: {
        heading: { value: `'Urbanist', sans-serif` },
        body: { value: `'Urbanist', sans-serif` },
      },
      // Puedes añadir más tokens aquí si los necesitas (ej. spacing, fontSizes, etc.)
      // spacing: {
      //   '4.5': { value: '1.125rem' } // Ejemplo de espaciado personalizado
      // }
    },

    // Define tus "recipes" (cómo se estilizan los componentes de Chakra UI)
    recipes: {
      Button: {
        base: {
          borderRadius: 'md',
        },
        // variants: { ... }
      },
    },

    // Aquí irían otras configuraciones como 'styles' (para estilos globales)
    // styles: {
    //   global: {
    //     body: {
    //       bg: 'gray.50',
    //       color: 'gray.800',
    //     },
    //   },
    // },
  }
});

// Combina tu configuración con la configuración por defecto de Chakra
const config = mergeConfigs(defaultConfig, theme);

// Crea el sistema de Chakra UI (basado en Panda CSS)
const system = createSystem(config);

export default system;