1. Instalación y estructura del proyecto
   React es una biblioteca de JavaScript para construir interfaces de usuario, creada por Meta (Facebook) en 2013 y de código abierto. Sigue un enfoque declarativo: el desarrollador describe cómo debe verse la interfaz según el estado actual y React se encarga de actualizar el DOM. Esto contrasta con el enfoque imperativo de JavaScript puro, donde se indica paso a paso cómo manipular cada elemento.
   React no es un framework completo, sino una biblioteca centrada en la capa de vista. Por eso necesita herramientas complementarias:
   Entorno de ejecución: Node.js y un gestor de paquetes (npm, yarn o pnpm).
   Empaquetador (bundler): transforma el código moderno (JSX, módulos ES) en código que entiende el navegador. Hoy la herramienta recomendada es Vite, por su arranque rápido y su recarga en caliente (HMR). Su antecesor, Create React App, quedó obsoleto.
   Estructura conceptual del proyecto. Un proyecto React organiza el código según el principio de separación de responsabilidades:
   public/: recursos estáticos que se sirven sin procesar.
   src/components/: piezas de interfaz reutilizables.
   src/pages/: vistas asociadas a rutas.
   src/hooks/: lógica reutilizable extraída de los componentes.
   main.jsx: punto de entrada, donde React se "monta" sobre un nodo del DOM.
   App.jsx: componente raíz, del que cuelga todo el árbol de componentes.
   package.json: manifiesto con dependencias y scripts.
   Una aplicación React es un árbol de componentes cuya raíz se conecta al DOM real a través de un único nodo (<div id="root">).
2. Componentes y sintaxis base
   Componente. Es la unidad fundamental de React: una pieza independiente, reutilizable y autocontenida que encapsula estructura, lógica y comportamiento. Conceptualmente es una función que recibe datos y devuelve una descripción de interfaz. Esta idea se resume en la fórmula:
   UI = f(estado)
   La interfaz es el resultado de aplicar una función al estado actual de la aplicación.
   Composición. React favorece la composición sobre la herencia: las interfaces complejas se construyen combinando componentes pequeños, de modo que la aplicación entera es un componente formado por otros.
   JSX. Es una extensión de sintaxis de JavaScript que permite escribir marcado dentro del código. No es HTML ni es obligatorio, pero es lo habitual. El compilador lo transforma en llamadas a funciones que crean elementos de React (objetos que describen la interfaz). Sus reglas se derivan de que en realidad es JavaScript:
   Todo componente devuelve un único elemento raíz o un fragmento.
   Los atributos usan nomenclatura de JavaScript (className, htmlFor) porque class y for son palabras reservadas.
   Las expresiones se insertan entre llaves { }.
   Los nombres de componentes empiezan con mayúscula para distinguirlos de las etiquetas HTML.
   La renderización condicional y las listas se resuelven con JavaScript (operadores lógicos, ternarios, map), no con directivas propias. Cada elemento de una lista necesita un atributo key que permita a React identificarlo entre renderizados.
3. Props y comunicación entre componentes
   Props (properties). Son los datos que un componente recibe de su padre. Funcionan como los argumentos de una función. Sus principios son:
   Inmutabilidad: un componente nunca debe modificar sus propias props (es el principio de "componente puro").
   Flujo unidireccional de datos: la información viaja siempre de padres a hijos (one-way data flow), lo que hace la aplicación predecible y fácil de depurar.
   Mecanismos de comunicación:
   Direccion
   Mecanismo
   Padre → hijo
   Props
   Hijo → padre
   Funciones callback recibidas por props
   Entre hermanos
   Lifting state up : el estado se sube al ancestro común
   Contenido anidado
   Prop special children
   Entre componentes lejanos
   Contexto estado global

Lifting state up. Cuando dos componentes necesitan compartir información, esta se eleva al ancestro más cercano que los contenga a ambos, manteniendo una única fuente de verdad (single source of truth).
Prop drilling. Es el problema de pasar props a través de muchos niveles intermedios que no las usan. Se resuelve con Context o con estado global.

4. Estado y reactividad
   Estado. Es la información que un componente "recuerda" y que cambia con el tiempo (un contador, el texto de un input, un menú abierto o cerrado). Se diferencia de las props en que el estado es interno y modificable por el propio componente, mientras que las props llegan desde fuera y son de solo lectura.
   Reactividad en React. Cuando el estado cambia, React vuelve a ejecutar el componente (re-render) y produce una nueva descripción de interfaz. El ciclo es:
   Se produce un evento (clic, respuesta de red, temporizador).
   Se actualiza el estado mediante su función setter.
   React programa un nuevo renderizado.
   Se compara el resultado con el anterior y se actualiza solo lo necesario en el DOM.
   Virtual DOM y reconciliación. React mantiene una representación ligera del DOM en memoria. Al cambiar el estado, genera un nuevo árbol virtual y lo compara con el anterior mediante un algoritmo de reconciliación (diffing), aplicando en el DOM real únicamente las diferencias. Así se evita el costo de manipular el DOM directamente.
   Principios del estado:
   Inmutabilidad: el estado no se modifica directamente; se crea un nuevo valor y se le entrega a React. Esto permite detectar cambios por simple comparación de referencias.
   Asincronía y agrupamiento (batching): las actualizaciones no son inmediatas; React las agrupa para optimizar el rendimiento.
   Instantánea (snapshot): cada renderizado "ve" el estado como una fotografía fija de ese momento.
   Hooks. Son funciones especiales que permiten a los componentes funcionales usar características de React. Se rigen por dos reglas: solo se llaman en el nivel superior del componente y solo desde componentes o hooks personalizados. Los principales son useState, useReducer (estado con lógica compleja), useRef (valores mutables que no provocan renderizado), useMemo y useCallback (memoización).
5. Ciclo de vida
   Concepto. Todo componente atraviesa tres fases durante su existencia:
   Montaje (mounting): se crea y se inserta por primera vez en el DOM.
   Actualización (updating): se vuelve a renderizar por un cambio de props o de estado.
   Desmontaje (unmounting): se elimina del DOM.
   En los componentes de clase (modelo antiguo) existían métodos específicos para cada fase: componentDidMount, componentDidUpdate y componentWillUnmount.
   En el modelo actual con hooks, esta lógica se unifica en useEffect, que permite ejecutar efectos secundarios: operaciones que ocurren fuera del cálculo de la interfaz, como peticiones de red, suscripciones, temporizadores o manipulación manual del DOM.
   Comportamiento de useEffect:
   Se ejecuta después del renderizado, cuando la interfaz ya se pintó.
   El arreglo de dependencias determina cuándo se reejecuta: vacío (solo al montar), con valores (cuando cambian) o ausente (en cada renderizado).
   La función de limpieza (cleanup) se ejecuta antes de que el efecto vuelva a correr y al desmontar el componente, evitando fugas de memoria.
   Lo importante es un cambio de mentalidad: en lugar de pensar en "momentos del ciclo de vida", con hooks se piensa en sincronizar el componente con un sistema externo según sus dependencias.
6. Routing y navegación
   Concepto. El routing (enrutamiento) es el mecanismo que decide qué contenido mostrar según la URL. Las aplicaciones React suelen ser SPA (Single Page Application): se carga un único documento HTML y la navegación entre "páginas" ocurre en el cliente, sin recargar el navegador. Esto ofrece una experiencia fluida, similar a una aplicación de escritorio.
   Para lograrlo se usa la History API del navegador, que permite cambiar la URL sin solicitar una nueva página al servidor.
   React Router. React no trae enrutador propio, por lo que se emplea React Router, la librería más difundida. Sus conceptos clave son:
   Rutas (routes): asocian un patrón de URL con un componente.
   Enlaces (Link): navegación sin recarga completa.
   Parámetros dinámicos: segmentos variables de la URL (/usuario/:id).
   Rutas anidadas y Outlet: estructuras jerárquicas de vistas, donde un diseño común contiene subrutas.
   Navegación programática: cambiar de ruta desde el código (tras un login, por ejemplo).
   Rutas protegidas: restringen el acceso según condiciones como la autenticación.
   Carga diferida (lazy loading): descarga el código de una página solo cuando se visita.
7. Consumo de APIs
   Concepto. Una API (Application Programming Interface) es una interfaz que permite a la aplicación cliente comunicarse con un servidor para obtener o enviar datos, normalmente mediante el protocolo HTTP y el formato JSON. El estilo más común es REST, aunque también se usa GraphQL.
   Las peticiones son efectos secundarios. Como una petición de red no es un cálculo puro de interfaz, se realiza dentro de useEffect (o mediante librerías especializadas). Una petición es asíncrona, por lo que hay que gestionar tres estados en la interfaz:
   Carga: la respuesta aún no llega.
   Éxito: los datos están disponibles.
   Error: la petición falló.
   Herramientas:
   Fetch API: interfaz nativa del navegador basada en promesas.
   Axios: librería que simplifica la configuración y el manejo de errores.
   TanStack Query (React Query): gestiona el llamado "server state" (datos que viven en el servidor y que el cliente solo consulta). Ofrece caché, reintentos, revalidación y sincronización automática.
   Distinción importante: el estado del servidor (datos remotos, asíncronos, que pueden quedar desactualizados) es conceptualmente distinto del estado del cliente (interfaz local). Tratarlos por separado simplifica la arquitectura.
8. Manejo de estado global
   Problema. Cuando muchos componentes de distintas ramas del árbol necesitan los mismos datos (usuario autenticado, tema, carrito de compras), el estado local y las props se vuelven inmanejables por el prop drilling.
   Clasificación del estado:
   Tipo
   Ejemplo
   Donde Vive
   Local
   un input. un menú
   en el componente
   Compartido
   datos entre hermanos
   en el ancestro común
   Global
   sesion, tema, carrito
   en un almacén centralizado
   del servidor
   listas traídas de la API
   en una cache (React Query=

Soluciones:
Context API (nativa): crea un "canal" desde un Provider hacia cualquier descendiente, sin pasar props manualmente. Es adecuada para datos poco cambiantes, porque todos los consumidores se vuelven a renderizar al modificarse el valor.
Redux / Redux Toolkit: basado en la arquitectura Flux: un store único, acciones que describen qué ocurrió y reducers (funciones puras) que calculan el nuevo estado. Su flujo unidireccional y predecible facilita la depuración con DevTools, a costa de más código.
Zustand: almacén minimalista basado en hooks, con poca configuración.
Jotai / Recoil: modelo atómico, donde el estado se divide en pequeñas unidades independientes.
Criterio de selección: usar la solución más simple que resuelva el problema. Estado local primero, Context para datos estables y una librería externa cuando la complejidad lo justifique. 9. Ecosistema, rendimiento y casos de uso
Ecosistema. Como React es solo la capa de vista, a su alrededor existe un ecosistema amplio que cubre el resto de necesidades:
Frameworks: Next.js, Remix, Gatsby.
Componentes de UI: Material UI, Chakra UI, shadcn/ui.
Estilos: Tailwind CSS, styled-components.
Formularios: React Hook Form, Formik.
Pruebas: Jest, Vitest, React Testing Library.
Tipado: TypeScript.
Móvil: React Native (aplicaciones nativas con la misma filosofía).
Rendimiento. Se basa en reducir el trabajo innecesario:
Virtual DOM y reconciliación: minimizan las operaciones costosas sobre el DOM.
Memoización: React.memo, useMemo y useCallback evitan recalcular o volver a renderizar cuando nada relevante cambió. El React Compiler busca automatizar esta optimización.
División de código (code splitting) y carga diferida: con React.lazy y Suspense, se envía al usuario solo el código que necesita.
Virtualización de listas: renderizar únicamente los elementos visibles.
Uso correcto de key: permite una reconciliación eficiente.
Principio general: medir antes de optimizar (React DevTools Profiler); la optimización prematura añade complejidad.
Casos de uso:
Aplicaciones de una sola página y paneles administrativos.
Comercio electrónico y redes sociales.
Plataformas de contenido y streaming.
Aplicaciones web progresivas (PWA).
Aplicaciones móviles multiplataforma.
Ventajas: arquitectura de componentes reutilizables, comunidad y ecosistema muy amplios, gran demanda laboral, flujo de datos predecible.
Desventajas: al ser solo una biblioteca exige tomar decisiones de arquitectura, la curva de aprendizaje de los hooks y la inmutabilidad, y un SEO deficiente si se usa únicamente renderizado en cliente. 10. SSR (Renderizado del lado del servidor)
Contexto. En el modelo tradicional de React (CSR, Client-Side Rendering), el servidor envía un HTML casi vacío y el navegador descarga, ejecuta el JavaScript y construye la interfaz. Esto genera dos problemas: primera carga lenta (el usuario ve una pantalla en blanco mientras se ejecuta el código) y SEO limitado (los buscadores reciben poco contenido inicial).
SSR (Server-Side Rendering). El HTML se genera en el servidor y llega al navegador con el contenido ya construido. Después, React ejecuta el proceso de hidratación (hydration): asocia los eventos y la lógica de JavaScript al HTML existente para volverlo interactivo.
Estrategias de renderizado:
Estrategia
Cuándo se genera el HTML
Uso ideal
CSR
En el navegador
Aplicaciones privadas, dashboards
SSR
En el servidor, por cada petición
Contenido dinámico y personalizado con SEO
SSG
En tiempo de compilación (build)
Contenido estático (blogs, documentación)
ISR
Estático con regeneración periódica
Contenido que cambia con poca frecuencia

Ventajas del SSR: mejor SEO, menor tiempo hasta el primer contenido visible y mejor experiencia en dispositivos lentos.
Desventajas: mayor carga en el servidor, mayor complejidad y un tiempo de respuesta inicial que depende del servidor.
Implementación. React ofrece las APIs de bajo nivel (renderToString, hydrateRoot), pero en la práctica se usa un framework como Next.js, que integra SSR, SSG, ISR y enrutamiento.
React Server Components (RSC). Es un modelo introducido en el ecosistema moderno de React (integrado en React 19 y usado por Next.js). Distingue entre:
Componentes de servidor: se ejecutan solo en el servidor, pueden acceder directamente a bases de datos y no envían su código al cliente, reduciendo el JavaScript descargado.
Componentes de cliente: manejan interactividad y estado en el navegador.
Es un cambio de paradigma: se decide componente por componente dónde se ejecuta, combinando lo mejor del servidor y del cliente.
