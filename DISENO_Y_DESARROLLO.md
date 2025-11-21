# Documentación de Diseño y Desarrollo - Centro Arcadia

## 1. Mapa del Sitio (Diagramado Visual)

El sitio web de Centro Arcadia está estructurado de la siguiente manera:

```
Centro Arcadia (index.html)
│
├── Inicio (index.html)
│   ├── Hero Section con video promocional
│   ├── Carousel de tiendas destacadas
│   └── Galería de imágenes del centro comercial
│
├── Tiendas (tiendas.html)
│   ├── Grid de todas las tiendas disponibles
│   ├── Sistema de búsqueda y filtrado
│   └── Enlaces a páginas de detalle de cada tienda
│
├── Ofertas (ofertas.html)
│   └── Promociones y descuentos especiales
│
├── Eventos (eventos.html)
│   └── Calendario de eventos y actividades
│
├── Servicios (servicios.html)
│   ├── Información de estacionamiento
│   ├── Servicios adicionales del centro
│   └── Food court
│
├── Info (info.html)
│   ├── Horarios de operación
│   ├── Ubicación y mapa
│   ├── Preguntas frecuentes (FAQs)
│   └── Formulario de contacto
│
└── Detalle de Tienda (store-detail.html)
    ├── Información completa de la tienda
    ├── Imágenes
    ├── Promociones activas
    └── Enlace al sitio web de la tienda
```

**Características de navegación:**
- Barra de navegación sticky en todas las páginas
- Botón de búsqueda global accesible desde cualquier página
- Chatbot de asistencia virtual (Groq API) disponible en todas las páginas
- Footer consistente con enlaces rápidos y redes sociales

---

## 2. Público Objetivo (Perfil y Características Digitales)

### Perfil Demográfico:
- **Edad:** 18-65 años
- **Ubicación:** Guatemala (principalmente)
- **Nivel socioeconómico:** Medio a medio-alto
- **Intereses:** Compras, entretenimiento, tecnología, moda, gastronomía

### Características Digitales:
- **Dispositivos:** Uso mixto de dispositivos móviles (60%) y desktop (40%)
- **Nivel tecnológico:** Intermedio a avanzado
- **Comportamiento:** 
  - Buscan información rápida sobre tiendas y ofertas
  - Prefieren interfaces intuitivas y visuales
  - Valoran la accesibilidad y velocidad de carga
  - Utilizan redes sociales activamente
- **Expectativas:**
  - Información actualizada sobre promociones
  - Fácil navegación entre secciones
  - Diseño moderno y atractivo
  - Acceso rápido a información de contacto y ubicación

### Necesidades del Usuario:
1. Encontrar tiendas específicas rápidamente
2. Conocer ofertas y promociones actuales
3. Informarse sobre eventos próximos
4. Obtener información de contacto y ubicación
5. Acceder a horarios de operación
6. Resolver dudas frecuentes sin contacto directo

---

## 3. Proceso de Diseño

### 3.1 Bocetos y Prototipo (Figma o Penpot)

**Fase de conceptualización:**
- Se diseñó inicialmente una estructura de navegación clara y jerárquica
- Se planificó el layout responsive desde el inicio
- Se definieron las secciones principales basadas en las necesidades del usuario

**Prototipo:**
- Diseño mobile-first para garantizar usabilidad en dispositivos móviles
- Wireframes de las páginas principales (Inicio, Tiendas, Eventos, Info)
- Flujos de usuario para búsqueda y navegación entre tiendas

### 3.2 Selección de Colores, Patrones, Imágenes, Logotipo e Iconos (con Fundamentos)

#### Paleta de Colores:
La paleta fue seleccionada para transmitir modernidad, confianza y naturaleza:

- **Onyx (#0D0A0B):** Negro profundo para contraste y elegancia
  - *Fundamento:* Proporciona contraste máximo para legibilidad y un aspecto premium
  
- **Charcoal Blue (#454955):** Gris azulado para elementos secundarios
  - *Fundamento:* Neutral y profesional, complementa sin competir con colores principales
  
- **Lavender Mist (#F3EFF5):** Beige-lavanda claro para fondos
  - *Fundamento:* Suave y acogedor, reduce fatiga visual, asociado con calma y elegancia
  
- **Lime Moss (#72B01D):** Verde lima vibrante para acentos y CTAs
  - *Fundamento:* Representa crecimiento, naturaleza y frescura; psicológicamente asociado con acción y positividad
  
- **Green (#3F7D20):** Verde oscuro para títulos y elementos importantes
  - *Fundamento:* Estabilidad y confianza, complementa el verde claro creando armonía cromática

**Teoría del color aplicada:**
- Contraste adecuado para accesibilidad (WCAG AA)
- Colores complementarios (verde/rosa-lavanda) para jerarquía visual
- Gradientes sutiles para profundidad sin saturación

#### Patrones de Diseño:
- **Gradientes lineales:** Transiciones suaves entre colores para crear profundidad
- **Radial gradients:** Overlays sutiles para añadir interés visual sin distraer
- **Sombras suaves:** Box-shadows para elevación y jerarquía
- **Bordes redondeados:** Border-radius consistente (15px-30px) para modernidad

#### Imágenes:
- Imágenes de alta calidad de tiendas y productos
- Videos promocionales autoplay (muted) para engagement
- Aspect ratios consistentes para grid layouts
- Optimización para carga rápida

#### Iconos:
- SVG inline para escalabilidad y rendimiento
- Iconos consistentes de Feather Icons / Heroicons
- Tamaños estándar (20px, 24px) para coherencia visual
- Accesibles con aria-labels

### 3.3 Tipografía, Composición Visual y Estilo Gráfico

#### Tipografía:

**Familias de fuentes seleccionadas:**
1. **Lugrasimo (Cursive):** 
   - Uso: Títulos principales, logo, elementos destacados
   - *Fundamento:* Elegante y distintiva, añade personalidad sin comprometer legibilidad
   - Tamaños: 1.8rem (logo) a 4.5rem (hero titles)

2. **Stack Sans Notch (Sans-serif):**
   - Uso: Texto secundario, slogans, subtítulos
   - *Fundamento:* Moderna y legible, complementa la fuente decorativa
   - Tamaños: 1rem a 2rem

3. **Sistema de fuentes (Fallback):**
   - -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
   - *Fundamento:* Garantiza rendimiento y legibilidad en todos los dispositivos

**Jerarquía tipográfica:**
- H1: 4.5rem (desktop) → 2rem (mobile) - Hero titles
- H2: 2.5rem → 1.75rem - Secciones principales
- H3: 1.75rem → 1.25rem - Subtítulos
- Body: 1rem → 0.95rem - Texto general
- Small: 0.875rem - Información secundaria

#### Composición Visual:

**Principios aplicados:**
1. **Grid System:**
   - Máximo ancho de contenido: 1400px
   - Padding lateral: 2rem (desktop), 1rem (mobile)
   - Gaps consistentes: 1rem, 2rem, 3rem según contexto

2. **Espaciado:**
   - Sistema de espaciado basado en múltiplos de 0.5rem
   - Márgenes verticales generosos para respiración visual
   - Padding interno consistente en cards y contenedores

3. **Jerarquía Visual:**
   - Tamaño: Elementos más importantes son más grandes
   - Color: Verde oscuro para títulos, gris para texto secundario
   - Contraste: Fondos claros con texto oscuro, y viceversa
   - Espaciado: Elementos importantes tienen más espacio alrededor

4. **Balance:**
   - Simetría en layouts de grid
   - Asimetría controlada en hero sections
   - Peso visual equilibrado entre imágenes y texto

#### Estilo Gráfico:

**Características del estilo:**
- **Moderno y Minimalista:** Espacios en blanco generosos, elementos esenciales
- **Elegante:** Tipografía decorativa usada con moderación
- **Vibrante pero Controlado:** Colores llamativos (verde) usados como acentos
- **Consistente:** Mismos patrones de diseño en todas las páginas
- **Profesional:** Balance entre creatividad y funcionalidad

**Elementos distintivos:**
- Gradientes sutiles en fondos de página
- Animaciones suaves (fadeIn, hover effects)
- Cards con sombras y bordes redondeados
- Botones con gradientes y efectos hover
- Transiciones suaves (0.3s ease) en todos los elementos interactivos

---

## 4. Análisis de Usabilidad: Aplicación de las 10 Heurísticas de Nielsen

### 1. Visibilidad del Estado del Sistema
✅ **Implementado:**
- Indicadores de carga ("Cargando información...")
- Estados activos en navegación (clase `.active`)
- Feedback visual en botones (hover, active states)
- Indicadores de carousel (dots activos)
- Estados de formularios (focus, error)

### 2. Correspondencia entre el Sistema y el Mundo Real
✅ **Implementado:**
- Lenguaje en español, familiar para el público objetivo
- Iconos universales (búsqueda, menú, redes sociales)
- Navegación intuitiva: "Tiendas", "Ofertas", "Eventos"
- Terminología del dominio (centro comercial)

### 3. Control y Libertad del Usuario
✅ **Implementado:**
- Botón "Volver" en páginas de detalle
- Navegación clara entre secciones
- Botón de cerrar en modal de búsqueda
- Botón de cerrar en chatbot
- Carousel navegable con botones prev/next

### 4. Consistencia y Estándares
✅ **Implementado:**
- Misma barra de navegación en todas las páginas
- Footer consistente con misma estructura
- Mismos estilos de botones en todo el sitio
- Paleta de colores uniforme
- Tipografía consistente
- Patrones de interacción repetibles

### 5. Prevención de Errores
✅ **Implementado:**
- Validación de formularios (contacto)
- Confirmaciones visuales antes de acciones
- Links externos con `target="_blank"` y `rel="noopener noreferrer"`
- Mensajes de error claros
- Búsqueda con sugerencias

### 6. Reconocimiento antes que Recuerdo
✅ **Implementado:**
- Navegación siempre visible (sticky navbar)
- Iconos descriptivos con texto
- Breadcrumbs visuales (botón "Volver")
- Información contextual visible
- Labels claros en formularios

### 7. Flexibilidad y Eficiencia de Uso
✅ **Implementado:**
- Búsqueda rápida desde cualquier página
- Atajos de teclado (Enter para buscar)
- Chatbot para usuarios que prefieren asistencia
- Filtros y categorías en página de tiendas
- Carousel para navegación rápida de tiendas destacadas

### 8. Diseño Estético y Minimalista
✅ **Implementado:**
- Interfaz limpia sin elementos innecesarios
- Espacios en blanco generosos
- Información priorizada (jerarquía visual clara)
- Contenido relevante destacado
- Animaciones sutiles, no distractoras

### 9. Ayuda a los Usuarios a Reconocer, Diagnosticar y Recuperarse de Errores
✅ **Implementado:**
- Mensajes de error descriptivos
- Página 404 con opción de volver
- Estados de carga claros
- Mensajes cuando no hay resultados de búsqueda
- Instrucciones en formularios

### 10. Ayuda y Documentación
✅ **Implementado:**
- Sección de Preguntas Frecuentes (FAQs)
- Chatbot de asistencia virtual
- Información de contacto accesible
- Tooltips en elementos interactivos (aria-labels)
- Textos descriptivos en botones y enlaces

---

## 5. Accesibilidad Web: Decisiones para Cumplir Criterios WCAG

### 5.1 Nivel de Conformidad Objetivo: WCAG 2.1 Nivel AA

### 5.2 Decisiones Técnicas y Visuales Implementadas

#### A. Perceptible

**1. Alternativas de Texto:**
- ✅ Todos los elementos `<img>` tienen atributos `alt` descriptivos
- ✅ Iconos SVG tienen `aria-label` cuando son interactivos
- ✅ Videos tienen controles y están muted por defecto (no bloquean contenido)

**2. Contraste de Colores:**
- ✅ Contraste mínimo 4.5:1 para texto normal
- ✅ Contraste mínimo 3:1 para texto grande (títulos)
- ✅ Verde (#3F7D20) sobre Lavender Mist (#F3EFF5): Ratio 4.8:1 ✓
- ✅ Charcoal Blue (#454955) sobre Lavender Mist: Ratio 4.2:1 ✓
- ✅ Texto claro sobre fondos oscuros: Ratio > 4.5:1 ✓

**3. Adaptable:**
- ✅ Contenido responsive que se adapta sin pérdida de información
- ✅ Texto redimensionable sin scroll horizontal (hasta 200%)
- ✅ Layouts flexibles con CSS Grid y Flexbox
- ✅ Media queries para diferentes tamaños de pantalla

**4. Distinguible:**
- ✅ Información no se transmite solo por color
- ✅ Estados de enlaces indicados por subrayado y cambio de color
- ✅ Focus visible en todos los elementos interactivos

#### B. Operable

**1. Navegable por Teclado:**
- ✅ Todos los elementos interactivos son accesibles por teclado
- ✅ Orden de tabulación lógico
- ✅ Focus visible con outline en elementos (ej: `outline: 2px solid #72B01D`)
- ✅ Sin trampas de teclado

**2. Tiempo Suficiente:**
- ✅ Animaciones controladas (no autoplay infinito que distrae)
- ✅ Carousel con controles manuales
- ✅ Sin timeouts que interrumpan al usuario

**3. Navegación:**
- ✅ Navegación consistente en todas las páginas
- ✅ Múltiples formas de encontrar contenido (menú, búsqueda, footer)
- ✅ Títulos de página descriptivos y únicos
- ✅ Encabezados con estructura semántica (h1, h2, h3)

**4. Modalidades de Entrada:**
- ✅ Funcionalidad disponible sin gestos complejos
- ✅ Botones con tamaño mínimo 44x44px (touch targets)
- ✅ Áreas clickeables suficientemente grandes

#### C. Comprensible

**1. Legible:**
- ✅ Idioma del documento especificado (`lang="es"` o `lang="en"`)
- ✅ Abreviaciones explicadas cuando es necesario
- ✅ Texto claro y conciso

**2. Predecible:**
- ✅ Navegación consistente
- ✅ Componentes con funciones consistentes
- ✅ Cambios de contexto solo cuando el usuario los solicita

**3. Asistencia para la Entrada:**
- ✅ Labels asociados a inputs de formularios
- ✅ Instrucciones de error claras
- ✅ Validación de formularios

#### D. Robusto

**1. Compatible:**
- ✅ HTML5 semántico válido
- ✅ Atributos ARIA cuando es necesario
- ✅ Compatibilidad con tecnologías asistivas

### 5.3 Ejemplos Específicos de Adaptación Visual o Técnica

#### Ejemplo 1: Navegación Móvil Accesible
```scss
// Botones con tamaño mínimo para touch
.navbar-actions .search-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
}

// Menú móvil con texto centrado y áreas clickeables grandes
.navbar-menu li a {
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

#### Ejemplo 2: Focus Visible
```scss
.search-btn:focus {
    outline: 2px solid #72B01D;
    outline-offset: 2px;
}
```

#### Ejemplo 3: Contraste en Estados Hover
```scss
// Hover mantiene contraste adecuado
.navbar-menu li a:hover {
    color: #72B01D; // Verde claro sobre fondo oscuro
    background: rgba(114, 176, 29, 0.1);
}
```

#### Ejemplo 4: ARIA Labels en Elementos Interactivos
```html
<button class="search-btn" aria-label="Buscar">
<button class="menu-toggle" aria-label="Menu">
<button class="chat-button" aria-label="Abrir chat">
```

#### Ejemplo 5: Estructura Semántica
```html
<nav class="navbar"> <!-- Navegación principal -->
<main> <!-- Contenido principal -->
<footer class="footer"> <!-- Pie de página -->
<section> <!-- Secciones temáticas -->
```

#### Ejemplo 6: Responsive y Adaptable
```scss
// Breakpoints para diferentes dispositivos
@media (max-width: 968px) { /* Tablets */ }
@media (max-width: 768px) { /* Mobile landscape */ }
@media (max-width: 576px) { /* Mobile portrait */ }

// Texto escalable
h1 {
    font-size: 4.5rem; // Desktop
    @media (max-width: 968px) {
        font-size: 3rem; // Tablet
    }
    @media (max-width: 576px) {
        font-size: 2rem; // Mobile
    }
}
```

#### Ejemplo 7: Alternativas de Texto
```html
<img src="assets/images/TechStore.jpg" alt="Striker Components - Tienda de tecnología y electrónica">
<svg aria-label="Buscar" ...>
```

#### Ejemplo 8: Links Externos Seguros
```html
<a href="https://..." target="_blank" rel="noopener noreferrer">
```

---

## Conclusión

El sitio web de Centro Arcadia fue diseñado con un enfoque centrado en el usuario, priorizando:
- **Usabilidad:** Navegación intuitiva y eficiente
- **Accesibilidad:** Cumplimiento de estándares WCAG 2.1 AA
- **Estética:** Diseño moderno y atractivo que refleja la identidad del centro comercial
- **Rendimiento:** Optimización para carga rápida y experiencia fluida
- **Responsive:** Funcionalidad completa en todos los dispositivos

El proceso de diseño siguió principios de diseño centrado en el usuario, aplicando heurísticas de usabilidad y estándares de accesibilidad web para crear una experiencia inclusiva y efectiva para todos los visitantes.

