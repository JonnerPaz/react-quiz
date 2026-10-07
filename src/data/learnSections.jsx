export const learnSections = [
  {
    id: 'instalacion',
    title: 'Instalación y estructura del proyecto',
    content: (
      <>
        <p>
          React es una biblioteca de JavaScript para construir interfaces de
          usuario, creada por Meta (Facebook) en 2013 y de código abierto. Sigue
          un enfoque declarativo: el desarrollador describe cómo debe verse la
          interfaz según el estado actual y React se encarga de actualizar el
          DOM. Esto contrasta con el enfoque imperativo de JavaScript puro,
          donde se indica paso a paso cómo manipular cada elemento.
        </p>
        <p>
          React no es un framework completo, sino una biblioteca centrada en la
          capa de vista. Por eso necesita herramientas complementarias:
        </p>
        <h3>Entorno de ejecución</h3>
        <p>Node.js y un gestor de paquetes (npm, yarn o pnpm).</p>
        <h3>Empaquetador (bundler)</h3>
        <p>
          Transforma el código moderno (JSX, módulos ES) en código que entiende
          el navegador. Hoy la herramienta recomendada es Vite, por su arranque
          rápido y su recarga en caliente (HMR). Su antecesor, Create React App,
          quedó obsoleto.
        </p>
        <h3>Estructura conceptual del proyecto</h3>
        <ul>
          <li>
            <strong>public/</strong>: recursos estáticos que se sirven sin
            procesar.
          </li>
          <li>
            <strong>src/components/</strong>: piezas de interfaz reutilizables.
          </li>
          <li>
            <strong>src/pages/</strong>: vistas asociadas a rutas.
          </li>
          <li>
            <strong>src/hooks/</strong>: lógica reutilizable extraída de los
            componentes.
          </li>
          <li>
            <strong>main.jsx</strong>: punto de entrada, donde React se "monta"
            sobre un nodo del DOM.
          </li>
          <li>
            <strong>App.jsx</strong>: componente raíz, del que cuelga todo el
            árbol de componentes.
          </li>
          <li>
            <strong>package.json</strong>: manifiesto con dependencias y
            scripts.
          </li>
        </ul>
        <p>
          Una aplicación React es un árbol de componentes cuya raíz se conecta
          al DOM real a través de un único nodo (
          <code>{'<div id="root"></div>'}</code>
          ).
        </p>
      </>
    ),
  },
  {
    id: 'componentes',
    title: 'Componentes y sintaxis base',
    content: (
      <>
        <p>
          <strong>Componente.</strong> Es la unidad fundamental de React: una
          pieza independiente, reutilizable y autocontenida que encapsula
          estructura, lógica y comportamiento. Conceptualmente es una función
          que recibe datos y devuelve una descripción de interfaz. Esta idea se
          resume en la fórmula:
        </p>
        <pre>
          <code>UI = f(estado)</code>
        </pre>
        <p>
          La interfaz es el resultado de aplicar una función al estado actual de
          la aplicación.
        </p>
        <h3>Composición</h3>
        <p>
          React favorece la composición sobre la herencia: las interfaces
          complejas se construyen combinando componentes pequeños, de modo que
          la aplicación entera es un componente formado por otros.
        </p>
        <h3>JSX</h3>
        <p>
          Es una extensión de sintaxis de JavaScript que permite escribir
          marcado dentro del código. No es HTML ni es obligatorio, pero es lo
          habitual. El compilador lo transforma en llamadas a funciones que
          crean elementos de React (objetos que describen la interfaz). Sus
          reglas se derivan de que en realidad es JavaScript:
        </p>
        <ul>
          <li>
            Todo componente devuelve un único elemento raíz o un fragmento.
          </li>
          <li>
            Los atributos usan nomenclatura de JavaScript (
            <code>className</code>, <code>htmlFor</code>) porque{' '}
            <code>class</code> y <code>for</code> son palabras reservadas.
          </li>
          <li>
            Las expresiones se insertan entre llaves <code>{}</code>.
          </li>
          <li>
            Los nombres de componentes empiezan con mayúscula para distinguirlos
            de las etiquetas HTML.
          </li>
          <li>
            La renderización condicional y las listas se resuelven con
            JavaScript (operadores lógicos, ternarios, <code>map</code>), no con
            directivas propias. Cada elemento de una lista necesita un atributo{' '}
            <code>key</code> que permita a React identificarlo entre
            renderizados.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'props',
    title: 'Props y comunicación entre componentes',
    content: (
      <>
        <p>
          <strong>Props (properties).</strong> Son los datos que un componente
          recibe de su padre. Funcionan como los argumentos de una función. Sus
          principios son:
        </p>
        <ul>
          <li>
            <strong>Inmutabilidad:</strong> un componente nunca debe modificar
            sus propias props (es el principio de "componente puro").
          </li>
          <li>
            <strong>Flujo unidireccional de datos:</strong> la información viaja
            siempre de padres a hijos (one-way data flow), lo que hace la
            aplicación predecible y fácil de depurar.
          </li>
        </ul>
        <h3>Mecanismos de comunicación</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Dirección</th>
                <th>Mecanismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Padre → hijo</td>
                <td>Props</td>
              </tr>
              <tr>
                <td>Hijo → padre</td>
                <td>Funciones callback recibidas por props</td>
              </tr>
              <tr>
                <td>Entre hermanos</td>
                <td>Lifting state up: el estado se sube al ancestro común</td>
              </tr>
              <tr>
                <td>Contenido anidado</td>
                <td>
                  Prop special <code>children</code>
                </td>
              </tr>
              <tr>
                <td>Entre componentes lejanos</td>
                <td>Contexto / estado global</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Lifting state up</h3>
        <p>
          Cuando dos componentes necesitan compartir información, esta se eleva
          al ancestro más cercano que los contenga a ambos, manteniendo una
          única fuente de verdad (single source of truth).
        </p>
        <h3>Prop drilling</h3>
        <p>
          Es el problema de pasar props a través de muchos niveles intermedios
          que no las usan. Se resuelve con Context o con estado global.
        </p>
      </>
    ),
  },
  {
    id: 'estado',
    title: 'Estado y reactividad',
    content: (
      <>
        <p>
          <strong>Estado.</strong> Es la información que un componente
          "recuerda" y que cambia con el tiempo (un contador, el texto de un
          input, un menú abierto o cerrado). Se diferencia de las props en que
          el estado es interno y modificable por el propio componente, mientras
          que las props llegan desde fuera y son de solo lectura.
        </p>
        <h3>Reactividad en React</h3>
        <p>
          Cuando el estado cambia, React vuelve a ejecutar el componente
          (re-render) y produce una nueva descripción de interfaz. El ciclo es:
        </p>
        <ol>
          <li>Se produce un evento (clic, respuesta de red, temporizador).</li>
          <li>Se actualiza el estado mediante su función setter.</li>
          <li>React programa un nuevo renderizado.</li>
          <li>
            Se compara el resultado con el anterior y se actualiza solo lo
            necesario en el DOM.
          </li>
        </ol>
        <h3>Virtual DOM y reconciliación</h3>
        <p>
          React mantiene una representación ligera del DOM en memoria. Al
          cambiar el estado, genera un nuevo árbol virtual y lo compara con el
          anterior mediante un algoritmo de reconciliación (diffing), aplicando
          en el DOM real únicamente las diferencias. Así se evita el costo de
          manipular el DOM directamente.
        </p>
        <h3>Principios del estado</h3>
        <ul>
          <li>
            <strong>Inmutabilidad:</strong> el estado no se modifica
            directamente; se crea un nuevo valor y se le entrega a React. Esto
            permite detectar cambios por simple comparación de referencias.
          </li>
          <li>
            <strong>Asincronía y agrupamiento (batching):</strong> las
            actualizaciones no son inmediatas; React las agrupa para optimizar
            el rendimiento.
          </li>
          <li>
            <strong>Instantánea (snapshot):</strong> cada renderizado "ve" el
            estado como una fotografía fija de ese momento.
          </li>
        </ul>
        <h3>Hooks</h3>
        <p>
          Son funciones especiales que permiten a los componentes funcionales
          usar características de React. Se rigen por dos reglas: solo se llaman
          en el nivel superior del componente y solo desde componentes o hooks
          personalizados. Los principales son:
        </p>
        <ul>
          <li>
            <code>useState</code>: estado simple
          </li>
          <li>
            <code>useReducer</code>: estado con lógica compleja
          </li>
          <li>
            <code>useRef</code>: valores mutables que no provocan renderizado
          </li>
          <li>
            <code>useMemo</code> y <code>useCallback</code>: memoización
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ciclo-vida',
    title: 'Ciclo de vida',
    content: (
      <>
        <p>
          <strong>Concepto.</strong> Todo componente atraviesa tres fases
          durante su existencia:
        </p>
        <ul>
          <li>
            <strong>Montaje (mounting):</strong> se crea y se inserta por
            primera vez en el DOM.
          </li>
          <li>
            <strong>Actualización (updating):</strong> se vuelve a renderizar
            por un cambio de props o de estado.
          </li>
          <li>
            <strong>Desmontaje (unmounting):</strong> se elimina del DOM.
          </li>
        </ul>
        <p>
          En los componentes de clase (modelo antiguo) existían métodos
          específicos para cada fase: <code>componentDidMount</code>,{' '}
          <code>componentDidUpdate</code> y <code>componentWillUnmount</code>.
        </p>
        <p>
          En el modelo actual con hooks, esta lógica se unifica en{' '}
          <code>useEffect</code>, que permite ejecutar efectos secundarios:
          operaciones que ocurren fuera del cálculo de la interfaz, como
          peticiones de red, suscripciones, temporizadores o manipulación manual
          del DOM.
        </p>
        <h3>Comportamiento de useEffect</h3>
        <ul>
          <li>
            Se ejecuta después del renderizado, cuando la interfaz ya se pintó.
          </li>
          <li>
            El arreglo de dependencias determina cuándo se reejecuta: vacío
            (solo al montar), con valores (cuando cambian) o ausente (en cada
            renderizado).
          </li>
          <li>
            La función de limpieza (cleanup) se ejecuta antes de que el efecto
            vuelva a correr y al desmontar el componente, evitando fugas de
            memoria.
          </li>
        </ul>
        <blockquote>
          Lo importante es un cambio de mentalidad: en lugar de pensar en
          "momentos del ciclo de vida", con hooks se piensa en sincronizar el
          componente con un sistema externo según sus dependencias.
        </blockquote>
      </>
    ),
  },
  {
    id: 'routing',
    title: 'Routing y navegación',
    content: (
      <>
        <p>
          <strong>Concepto.</strong> El routing (enrutamiento) es el mecanismo
          que decide qué contenido mostrar según la URL. Las aplicaciones React
          suelen ser SPA (Single Page Application): se carga un único documento
          HTML y la navegación entre "páginas" ocurre en el cliente, sin
          recargar el navegador. Esto ofrece una experiencia fluida, similar a
          una aplicación de escritorio.
        </p>
        <p>
          Para lograrlo se usa la History API del navegador, que permite cambiar
          la URL sin solicitar una nueva página al servidor.
        </p>
        <h3>React Router</h3>
        <p>
          React no trae enrutador propio, por lo que se emplea React Router, la
          librería más difundida. Sus conceptos clave son:
        </p>
        <ul>
          <li>
            <strong>Rutas (routes):</strong> asocian un patrón de URL con un
            componente.
          </li>
          <li>
            <strong>Enlaces (Link):</strong> navegación sin recarga completa.
          </li>
          <li>
            <strong>Parámetros dinámicos:</strong> segmentos variables de la URL
            (<code>/usuario/:id</code>).
          </li>
          <li>
            <strong>Rutas anidadas y Outlet:</strong> estructuras jerárquicas de
            vistas, donde un diseño común contiene subrutas.
          </li>
          <li>
            <strong>Navegación programática:</strong> cambiar de ruta desde el
            código (tras un login, por ejemplo).
          </li>
          <li>
            <strong>Rutas protegidas:</strong> restringen el acceso según
            condiciones como la autenticación.
          </li>
          <li>
            <strong>Carga diferida (lazy loading):</strong> descarga el código
            de una página solo cuando se visita.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'apis',
    title: 'Consumo de APIs',
    content: (
      <>
        <p>
          <strong>Concepto.</strong> Una API (Application Programming Interface)
          es una interfaz que permite a la aplicación cliente comunicarse con un
          servidor para obtener o enviar datos, normalmente mediante el
          protocolo HTTP y el formato JSON. El estilo más común es REST, aunque
          también se usa GraphQL.
        </p>
        <p>
          Las peticiones son efectos secundarios. Como una petición de red no es
          un cálculo puro de interfaz, se realiza dentro de{' '}
          <code>useEffect</code> (o mediante librerías especializadas). Una
          petición es asíncrona, por lo que hay que gestionar tres estados en la
          interfaz:
        </p>
        <ul>
          <li>
            <strong>Carga:</strong> la respuesta aún no llega.
          </li>
          <li>
            <strong>Éxito:</strong> los datos están disponibles.
          </li>
          <li>
            <strong>Error:</strong> la petición falló.
          </li>
        </ul>
        <h3>Herramientas</h3>
        <ul>
          <li>
            <strong>Fetch API:</strong> interfaz nativa del navegador basada en
            promesas.
          </li>
          <li>
            <strong>Axios:</strong> librería que simplifica la configuración y
            el manejo de errores.
          </li>
          <li>
            <strong>TanStack Query (React Query):</strong> gestiona el llamado
            "server state" (datos que viven en el servidor y que el cliente solo
            consulta). Ofrece caché, reintentos, revalidación y sincronización
            automática.
          </li>
        </ul>
        <h3>Distinción importante</h3>
        <p>
          El estado del servidor (datos remotos, asíncronos, que pueden quedar
          desactualizados) es conceptualmente distinto del estado del cliente
          (interfaz local). Tratarlos por separado simplifica la arquitectura.
        </p>
      </>
    ),
  },
  {
    id: 'estado-global',
    title: 'Manejo de estado global',
    content: (
      <>
        <p>
          <strong>Problema.</strong> Cuando muchos componentes de distintas
          ramas del árbol necesitan los mismos datos (usuario autenticado, tema,
          carrito de compras), el estado local y las props se vuelven
          inmanejables por el prop drilling.
        </p>
        <h3>Clasificación del estado</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Ejemplo</th>
                <th>Dónde vive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local</td>
                <td>un input, un menú</td>
                <td>en el componente</td>
              </tr>
              <tr>
                <td>Compartido</td>
                <td>datos entre hermanos</td>
                <td>en el ancestro común</td>
              </tr>
              <tr>
                <td>Global</td>
                <td>sesión, tema, carrito</td>
                <td>en un almacén centralizado</td>
              </tr>
              <tr>
                <td>Del servidor</td>
                <td>listas traídas de la API</td>
                <td>en una caché (React Query)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Soluciones</h3>
        <ul>
          <li>
            <strong>Context API (nativa):</strong> crea un "canal" desde un
            Provider hacia cualquier descendiente, sin pasar props manualmente.
            Es adecuada para datos poco cambiantes, porque todos los
            consumidores se vuelven a renderizar al modificarse el valor.
          </li>
          <li>
            <strong>Redux / Redux Toolkit:</strong> basado en la arquitectura
            Flux: un store único, acciones que describen qué ocurrió y reducers
            (funciones puras) que calculan el nuevo estado. Su flujo
            unidireccional y predecible facilita la depuración con DevTools, a
            costa de más código.
          </li>
          <li>
            <strong>Zustand:</strong> almacén minimalista basado en hooks, con
            poca configuración.
          </li>
          <li>
            <strong>Jotai / Recoil:</strong> modelo atómico, donde el estado se
            divide en pequeñas unidades independientes.
          </li>
        </ul>
        <blockquote>
          Criterio de selección: usar la solución más simple que resuelva el
          problema. Estado local primero, Context para datos estables y una
          librería externa cuando la complejidad lo justifique.
        </blockquote>
      </>
    ),
  },
  {
    id: 'ecosistema',
    title: 'Ecosistema, rendimiento y casos de uso',
    content: (
      <>
        <h3>Ecosistema</h3>
        <p>
          Como React es solo la capa de vista, a su alrededor existe un
          ecosistema amplio que cubre el resto de necesidades:
        </p>
        <ul>
          <li>
            <strong>Frameworks:</strong> Next.js, Remix, Gatsby.
          </li>
          <li>
            <strong>Componentes de UI:</strong> Material UI, Chakra UI,
            shadcn/ui.
          </li>
          <li>
            <strong>Estilos:</strong> Tailwind CSS, styled-components.
          </li>
          <li>
            <strong>Formularios:</strong> React Hook Form, Formik.
          </li>
          <li>
            <strong>Pruebas:</strong> Jest, Vitest, React Testing Library.
          </li>
          <li>
            <strong>Tipado:</strong> TypeScript.
          </li>
          <li>
            <strong>Móvil:</strong> React Native (aplicaciones nativas con la
            misma filosofía).
          </li>
        </ul>
        <h3>Rendimiento</h3>
        <p>Se basa en reducir el trabajo innecesario:</p>
        <ul>
          <li>
            <strong>Virtual DOM y reconciliación:</strong> minimizan las
            operaciones costosas sobre el DOM.
          </li>
          <li>
            <strong>Memoización:</strong> <code>React.memo</code>,{' '}
            <code>useMemo</code> y <code>useCallback</code> evitan recalcular o
            volver a renderizar cuando nada relevante cambió. El React Compiler
            busca automatizar esta optimización.
          </li>
          <li>
            <strong>
              División de código (code splitting) y carga diferida:
            </strong>{' '}
            con <code>React.lazy</code> y <code>Suspense</code>, se envía al
            usuario solo el código que necesita.
          </li>
          <li>
            <strong>Virtualización de listas:</strong> renderizar únicamente los
            elementos visibles.
          </li>
          <li>
            <strong>Uso correcto de key:</strong> permite una reconciliación
            eficiente.
          </li>
        </ul>
        <blockquote>
          Principio general: medir antes de optimizar (React DevTools Profiler);
          la optimización prematura añade complejidad.
        </blockquote>
        <h3>Casos de uso</h3>
        <ul>
          <li>Aplicaciones de una sola página y paneles administrativos.</li>
          <li>Comercio electrónico y redes sociales.</li>
          <li>Plataformas de contenido y streaming.</li>
          <li>Aplicaciones web progresivas (PWA).</li>
          <li>Aplicaciones móviles multiplataforma.</li>
        </ul>
        <h3>Ventajas y desventajas</h3>
        <ul>
          <li>
            <strong>Ventajas:</strong> arquitectura de componentes
            reutilizables, comunidad y ecosistema muy amplios, gran demanda
            laboral, flujo de datos predecible.
          </li>
          <li>
            <strong>Desventajas:</strong> al ser solo una biblioteca exige tomar
            decisiones de arquitectura, la curva de aprendizaje de los hooks y
            la inmutabilidad, y un SEO deficiente si se usa únicamente
            renderizado en cliente.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ssr',
    title: 'SSR (Renderizado del lado del servidor)',
    content: (
      <>
        <h3>Contexto</h3>
        <p>
          En el modelo tradicional de React (CSR, Client-Side Rendering), el
          servidor envía un HTML casi vacío y el navegador descarga, ejecuta el
          JavaScript y construye la interfaz. Esto genera dos problemas: primera
          carga lenta (el usuario ve una pantalla en blanco mientras se ejecuta
          el código) y SEO limitado (los buscadores reciben poco contenido
          inicial).
        </p>
        <h3>SSR (Server-Side Rendering)</h3>
        <p>
          El HTML se genera en el servidor y llega al navegador con el contenido
          ya construido. Después, React ejecuta el proceso de hidratación
          (hydration): asocia los eventos y la lógica de JavaScript al HTML
          existente para volverlo interactivo.
        </p>
        <h3>Estrategias de renderizado</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Estrategia</th>
                <th>Cuándo se genera el HTML</th>
                <th>Uso ideal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CSR</td>
                <td>En el navegador</td>
                <td>Aplicaciones privadas, dashboards</td>
              </tr>
              <tr>
                <td>SSR</td>
                <td>En el servidor, por cada petición</td>
                <td>Contenido dinámico y personalizado con SEO</td>
              </tr>
              <tr>
                <td>SSG</td>
                <td>En tiempo de compilación (build)</td>
                <td>Contenido estático (blogs, documentación)</td>
              </tr>
              <tr>
                <td>ISR</td>
                <td>Estático con regeneración periódica</td>
                <td>Contenido que cambia con poca frecuencia</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Ventajas del SSR:</strong> mejor SEO, menor tiempo hasta el
          primer contenido visible y mejor experiencia en dispositivos lentos.
        </p>
        <p>
          <strong>Desventajas:</strong> mayor carga en el servidor, mayor
          complejidad y un tiempo de respuesta inicial que depende del servidor.
        </p>
        <h3>Implementación</h3>
        <p>
          React ofrece las APIs de bajo nivel (<code>renderToString</code>,{' '}
          <code>hydrateRoot</code>), pero en la práctica se usa un framework
          como Next.js, que integra SSR, SSG, ISR y enrutamiento.
        </p>
        <h3>React Server Components (RSC)</h3>
        <p>
          Es un modelo introducido en el ecosistema moderno de React (integrado
          en React 19 y usado por Next.js). Distingue entre:
        </p>
        <ul>
          <li>
            <strong>Componentes de servidor:</strong> se ejecutan solo en el
            servidor, pueden acceder directamente a bases de datos y no envían
            su código al cliente, reduciendo el JavaScript descargado.
          </li>
          <li>
            <strong>Componentes de cliente:</strong> manejan interactividad y
            estado en el navegador.
          </li>
        </ul>
        <blockquote>
          Es un cambio de paradigma: se decide componente por componente dónde
          se ejecuta, combinando lo mejor del servidor y del cliente.
        </blockquote>
      </>
    ),
  },
]
