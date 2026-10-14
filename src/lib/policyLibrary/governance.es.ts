// Versiones en español del paquete de políticas de gobierno (pk-pol-gov).

import type { PolicyTranslations } from "./types";

export const GOVERNANCE_POLICIES_ES: PolicyTranslations = {
  "SH-POL-001": {
    title: "Política de Seguridad de la Información",
    summary: "Establece la dirección, el compromiso de la dirección y la estructura de gobierno del sistema de gestión de la seguridad de la información de la organización.",
    purpose:
      "Esta política establece el compromiso de la organización con la protección de la confidencialidad, la integridad y la disponibilidad de su información y sus sistemas. Define la estructura de gobierno, los objetivos y los principios básicos sobre los que se apoyan el resto de políticas, normas y procedimientos de seguridad.",
    aims: [
      "Demostrar un compromiso visible de la dirección con la seguridad de la información y asignar responsabilidades claras sobre ella.",
      "Establecer un sistema de gestión de la seguridad de la información que se planifique, opere, mida y mejore de forma continua.",
      "Garantizar que las decisiones de seguridad se basen en el riesgo para el negocio y en las obligaciones legales, regulatorias y contractuales.",
      "Proporcionar un marco estable del que se deriven las políticas, normas y procedimientos subordinados.",
    ],
    scope:
      "Esta política se aplica a la organización en su conjunto, incluidas todas las unidades de negocio, ubicaciones, empleados, contratistas, personal temporal y terceros que accedan a la información o a los sistemas de la organización. Abarca la información en cualquier formato, ya sea electrónico, impreso o verbal, y todos los sistemas, aplicaciones, redes y servicios en la nube de su propiedad, arrendados o gestionados en su nombre.",
    covers: [
      "Estructura de gobierno y responsabilidades en materia de seguridad de la información.",
      "Objetivos de seguridad, medición y revisión por la dirección.",
      "Jerarquía de políticas, normas y procedimientos.",
      "Obligaciones de todo el personal y de los terceros.",
      "Mejora continua del programa de seguridad.",
    ],
    roles: [
      {
        role: "Dirección Ejecutiva",
        responsibilities: [
          "Aprobar esta política y proporcionar los recursos necesarios para operar el programa de seguridad.",
          "Fijar el apetito de riesgo de la organización y aceptar los riesgos residuales que superen los umbrales definidos.",
        ],
      },
      {
        role: "Responsable de Seguridad de la Información (CISO)",
        responsibilities: [
          "Ser responsable del sistema de gestión de la seguridad de la información e informar a la dirección sobre su desempeño.",
          "Mantener el marco de políticas y coordinar las actividades de seguridad en toda la organización.",
          "Definir los objetivos de seguridad y las métricas utilizadas para su seguimiento.",
        ],
      },
      {
        role: "Comité de Dirección de Seguridad",
        responsibilities: [
          "Supervisar las prioridades de seguridad, las iniciativas principales y los riesgos significativos.",
          "Revisar las métricas del programa y ordenar acciones correctivas cuando no se alcancen los objetivos.",
        ],
      },
      {
        role: "Responsables de Negocio y de Sistemas",
        responsibilities: [
          "Garantizar que la información y los sistemas bajo su control se protegen conforme a las políticas de seguridad.",
          "Identificar los requisitos de seguridad de los procesos de negocio nuevos o modificados.",
        ],
      },
      {
        role: "Todo el Personal",
        responsibilities: [
          "Cumplir las políticas de seguridad y completar la formación requerida.",
          "Notificar sin demora los incidentes y debilidades de seguridad que se sospechen.",
        ],
      },
    ],
    sections: [
      {
        heading: "Liderazgo y gobierno",
        intro: "La seguridad de la información es una responsabilidad del negocio, liderada desde la cúspide de la organización.",
        requirements: [
          "La organización deberá designar un CISO o un rol equivalente con autoridad y responsabilidad documentadas en materia de seguridad de la información.",
          "La organización deberá constituir un Comité de Dirección de Seguridad que incluya a representantes de alto nivel de las áreas de negocio, tecnología, jurídica y recursos humanos.",
          "El Comité de Dirección de Seguridad deberá reunirse al menos trimestralmente y deberá registrar sus decisiones y acciones.",
          "La Dirección Ejecutiva deberá aprobar formalmente esta política y cualquier cambio sustancial en ella.",
          "La organización deberá definir y documentar los roles y responsabilidades de seguridad y deberá asignarlos a personas o funciones concretas.",
          "La organización deberá segregar las funciones incompatibles cuando una única persona pudiera hacer un uso indebido o comprometer sistemas o información críticos.",
        ],
      },
      {
        heading: "Sistema de gestión de la seguridad",
        intro: "El programa de seguridad funciona como un ciclo gestionado de planificación, operación, evaluación y mejora.",
        requirements: [
          "La organización deberá definir y documentar el alcance y los límites de su sistema de gestión de la seguridad de la información.",
          "La organización deberá identificar las cuestiones internas y externas y las partes interesadas relevantes para la seguridad de la información y revisarlas al menos anualmente.",
          "La organización deberá mantener un registro de los requisitos legales, regulatorios y contractuales de seguridad y revisarlo al menos anualmente.",
          "La organización deberá asignar presupuesto y personal al programa de seguridad como parte de su ciclo anual de planificación.",
          "La organización deberá controlar la información documentada de seguridad de modo que las versiones vigentes estén disponibles para quienes las necesiten y las versiones obsoletas se retiren.",
        ],
      },
      {
        heading: "Objetivos y desempeño de la seguridad",
        requirements: [
          "El CISO deberá fijar objetivos de seguridad de la información medibles al menos anualmente y alinearlos con los objetivos del negocio.",
          "La organización deberá hacer un seguimiento del avance de los objetivos de seguridad mediante métricas definidas e informar de los resultados al Comité de Dirección de Seguridad al menos trimestralmente.",
          "La Dirección Ejecutiva deberá realizar una revisión por la dirección del programa de seguridad al menos anualmente.",
          "La revisión por la dirección deberá considerar los resultados de auditoría, las tendencias de incidentes, el estado de los riesgos, el desempeño de los objetivos y las oportunidades de mejora.",
          "La organización deberá registrar las decisiones y acciones derivadas de cada revisión por la dirección y hacer su seguimiento hasta su finalización.",
        ],
      },
      {
        heading: "Marco de políticas",
        intro: "Esta política ocupa la cúspide de un conjunto de documentos normativos organizado en niveles.",
        requirements: [
          "La organización deberá mantener políticas de seguridad específicas por materia que sean coherentes con esta política.",
          "Las normas y los procedimientos de seguridad deberán derivarse de una política aprobada y ser trazables a ella.",
          "Todas las políticas de seguridad deberán comunicarse al personal pertinente y ponerse a su disposición en una ubicación central.",
          "El personal deberá aceptar esta política y la Política de Uso Aceptable en el momento de su incorporación y, como mínimo, anualmente a partir de entonces.",
          "Cuando un documento subordinado entre en conflicto con esta política, prevalecerá esta política hasta que se resuelva el conflicto.",
        ],
      },
      {
        heading: "Mejora continua",
        requirements: [
          "La organización deberá identificar las no conformidades mediante auditorías, incidentes, evaluaciones y comentarios recibidos.",
          "A cada no conformidad deberá asignársele un responsable, un análisis de causa raíz y una acción correctiva con fecha objetivo.",
          "La organización deberá verificar la eficacia de las acciones correctivas antes de cerrarlas.",
          "La organización deberá revisar las lecciones aprendidas de los incidentes de seguridad significativos y aplicarlas al programa de seguridad en un plazo de 90 días.",
        ],
      },
    ],
  },
  "SH-POL-002": {
    title: "Política de Gestión de Riesgos de Seguridad de la Información",
    summary: "Define cómo la organización identifica, evalúa, trata, acepta y supervisa los riesgos de seguridad de la información.",
    purpose:
      "Esta política establece un enfoque coherente y repetible para gestionar el riesgo de seguridad de la información. Garantiza que los riesgos para la información y los sistemas de la organización se comprendan, se prioricen según su impacto en el negocio y se traten conforme al apetito de riesgo de la organización.",
    aims: [
      "Aplicar un método único y coherente para identificar y evaluar los riesgos de seguridad de la información.",
      "Garantizar que los riesgos se traten en proporción a su probabilidad y a su impacto en el negocio.",
      "Hacer de la aceptación del riesgo una decisión explícita, documentada y con responsable.",
      "Mantener informada a la dirección sobre la situación actual de riesgo de la organización.",
    ],
    scope:
      "Esta política se aplica a toda la información, los sistemas, los procesos, las instalaciones y los servicios de terceros que sustentan las operaciones de la organización. Se aplica a todas las unidades de negocio y a cualquier persona que identifique, posea, evalúe o trate riesgos de seguridad de la información en nombre de la organización.",
    covers: [
      "Apetito de riesgo y criterios de riesgo.",
      "Identificación y evaluación de riesgos.",
      "Planificación del tratamiento del riesgo.",
      "Aceptación y escalado de riesgos.",
      "Seguimiento e informe de riesgos.",
    ],
    roles: [
      {
        role: "Dirección Ejecutiva",
        responsibilities: [
          "Aprobar el apetito de riesgo de la organización y los umbrales de aceptación de riesgos.",
          "Aceptar o rechazar los riesgos calificados como altos o críticos.",
        ],
      },
      {
        role: "Responsable de Seguridad de la Información (CISO)",
        responsibilities: [
          "Ser responsable de la metodología de gestión de riesgos y del registro de riesgos de seguridad de la información.",
          "Informar a la dirección de la situación de riesgo de la organización al menos trimestralmente.",
        ],
      },
      {
        role: "Propietarios de Riesgos",
        responsibilities: [
          "Evaluar y tratar los riesgos que se les asignen dentro de los plazos acordados.",
          "Aprobar los planes de tratamiento y aceptar el riesgo residual dentro de su autoridad delegada.",
        ],
      },
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Facilitar las evaluaciones de riesgos y proporcionar el análisis técnico de amenazas y vulnerabilidades.",
          "Hacer seguimiento de las acciones de tratamiento de riesgos y mantener el registro de riesgos.",
        ],
      },
      {
        role: "Responsables de Sistemas y de Procesos",
        responsibilities: [
          "Identificar y comunicar los riesgos nuevos o modificados que afecten a sus sistemas o procesos.",
          "Implantar las acciones de tratamiento de riesgos acordadas.",
        ],
      },
    ],
    sections: [
      {
        heading: "Marco y criterios de riesgo",
        intro: "Un método documentado garantiza que los resultados de riesgo sean coherentes y comparables en toda la organización.",
        requirements: [
          "La organización deberá documentar una metodología de gestión de riesgos que defina cómo se determinan la probabilidad, el impacto y la valoración global del riesgo.",
          "La organización deberá definir criterios de aceptación de riesgos y una declaración de apetito de riesgo aprobados por la Dirección Ejecutiva.",
          "Las valoraciones de riesgo deberán emplear una escala definida de al menos cuatro niveles, como bajo, medio, alto y crítico.",
          "El CISO deberá revisar la metodología y los criterios de riesgo al menos anualmente.",
          "La organización deberá alinear la gestión de riesgos de seguridad de la información con cualquier proceso de gestión de riesgos corporativos existente.",
        ],
      },
      {
        heading: "Identificación y evaluación de riesgos",
        requirements: [
          "La organización deberá realizar una evaluación integral de riesgos de seguridad de la información al menos anualmente.",
          "La organización deberá realizar una evaluación de riesgos adicional antes de cambios significativos en los sistemas, los procesos, los proveedores o el entorno de amenazas.",
          "Cada evaluación de riesgos deberá considerar los activos pertinentes, las amenazas, las vulnerabilidades, los controles existentes y el posible impacto en el negocio.",
          "A cada riesgo identificado deberá asignársele un propietario del riesgo con autoridad para gestionarlo.",
          "Los resultados de las evaluaciones de riesgos deberán documentarse y conservarse durante al menos tres años.",
          "La organización deberá evaluar los riesgos de seguridad de los nuevos servicios de terceros antes de firmar los contratos.",
        ],
      },
      {
        heading: "Tratamiento del riesgo",
        intro: "Cada riesgo evaluado recibe una decisión de tratamiento deliberada.",
        requirements: [
          "Los propietarios de riesgos deberán seleccionar una opción de tratamiento para cada riesgo: mitigar, evitar, transferir o aceptar.",
          "Los riesgos calificados como críticos deberán contar con un plan de tratamiento aprobado en un plazo de 15 días hábiles desde su identificación.",
          "Los riesgos calificados como altos deberán contar con un plan de tratamiento aprobado en un plazo de 30 días hábiles desde su identificación.",
          "Cada plan de tratamiento deberá identificar los controles que se aplicarán, el responsable, la fecha objetivo y el riesgo residual esperado.",
          "La organización deberá mantener un registro de los controles seleccionados y de la justificación de su inclusión o exclusión.",
        ],
      },
      {
        heading: "Aceptación del riesgo",
        requirements: [
          "La aceptación del riesgo deberá documentarse, incluyendo la justificación, la valoración del riesgo residual y quién la aprueba.",
          "Los riesgos residuales calificados como bajos o medios podrán ser aceptados por el propietario del riesgo.",
          "Los riesgos residuales calificados como altos o críticos deberán ser aceptados únicamente por un directivo ejecutivo.",
          "Las aceptaciones de riesgo deberán tener una fecha de caducidad no superior a 12 meses y deberán reevaluarse antes de que caduquen.",
        ],
      },
      {
        heading: "Seguimiento e informe",
        requirements: [
          "El Equipo de Seguridad deberá mantener un registro de riesgos que recoja cada riesgo, su valoración, propietario, estado de tratamiento y fecha de revisión.",
          "Los propietarios de riesgos deberán revisar el estado de sus riesgos al menos trimestralmente.",
          "El CISO deberá informar al Comité de Dirección de Seguridad, al menos trimestralmente, de los principales riesgos, las acciones de tratamiento vencidas y las tendencias de riesgo.",
          "Las acciones de tratamiento que superen su fecha objetivo en más de 30 días deberán escalarse al CISO.",
          "La organización deberá actualizar las valoraciones de riesgo cuando los incidentes, los hallazgos de auditoría o la inteligencia de amenazas indiquen un cambio sustancial.",
        ],
      },
    ],
  },
  "SH-POL-003": {
    title: "Política de Uso Aceptable",
    summary: "Fija las normas de uso aceptable de la información, los dispositivos, las redes y los servicios en línea de la organización.",
    purpose:
      "Esta política define el comportamiento que se espera de todas las personas que utilizan la información y la tecnología de la organización. Protege a la organización, a sus clientes y a su personal de los perjuicios derivados de un uso negligente, inadecuado o ilícito de los sistemas y los datos.",
    aims: [
      "Dejar claro qué está permitido y qué está prohibido al utilizar la tecnología de la organización.",
      "Reducir el riesgo de malware, fuga de datos y compromiso de cuentas causado por el comportamiento de los usuarios.",
      "Proteger a la organización de daños legales y reputacionales.",
      "Establecer las expectativas en materia de supervisión y privacidad en los sistemas de la organización.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, contratistas, personal temporal y terceros que utilicen la información, los dispositivos, las redes, el correo electrónico, las herramientas de colaboración, los servicios en la nube u otros recursos tecnológicos de la organización. También se aplica a los dispositivos de propiedad personal cuando se utilicen para acceder a información de la organización.",
    covers: [
      "Conducta general y uso permitido.",
      "Protección de cuentas y credenciales.",
      "Uso del correo electrónico, la mensajería e internet.",
      "Requisitos de dispositivos y de trabajo en remoto.",
      "Actividades prohibidas y supervisión.",
    ],
    roles: [
      {
        role: "Todos los Usuarios",
        responsibilities: [
          "Leer, aceptar y cumplir esta política.",
          "Notificar de inmediato cualquier sospecha de uso indebido, suplantación (phishing) o incidente de seguridad.",
        ],
      },
      {
        role: "Mandos Directivos",
        responsibilities: [
          "Asegurarse de que los miembros de su equipo comprenden y cumplen esta política.",
          "Abordar los incumplimientos de la política en sus equipos en coordinación con Recursos Humanos.",
        ],
      },
      {
        role: "Departamento de TI",
        responsibilities: [
          "Proporcionar y configurar los dispositivos y servicios que favorezcan un uso conforme.",
          "Implantar controles técnicos que hagan cumplir esta política cuando sea viable.",
        ],
      },
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Mantener esta política y vigilar los incumplimientos.",
          "Investigar los usos indebidos notificados y recomendar acciones correctivas.",
        ],
      },
      {
        role: "Recursos Humanos",
        responsibilities: [
          "Obtener la aceptación de la política durante la incorporación.",
          "Gestionar las medidas disciplinarias derivadas de los incumplimientos.",
        ],
      },
    ],
    sections: [
      {
        heading: "Uso general",
        intro: "La tecnología de la organización se proporciona principalmente para fines empresariales.",
        requirements: [
          "Los usuarios deberán utilizar los sistemas y la información de la organización únicamente para fines empresariales autorizados, salvo el uso personal limitado que permite esta política.",
          "El uso personal limitado no deberá interferir con las funciones laborales, consumir recursos significativos ni exponer a la organización a riesgos.",
          "Los usuarios deberán aceptar esta política antes de recibir acceso a los sistemas de la organización y, como mínimo, anualmente a partir de entonces.",
          "Los usuarios deberán tratar la información de acuerdo con su clasificación conforme a la Política de Clasificación y Tratamiento de la Información.",
          "Los usuarios no deberán intentar acceder a información o sistemas para los que no se les haya concedido autorización.",
        ],
      },
      {
        heading: "Cuentas y credenciales",
        requirements: [
          "Los usuarios no deberán compartir contraseñas, tokens u otras credenciales de autenticación con nadie, incluido el personal de TI.",
          "Los usuarios deberán utilizar la autenticación multifactor siempre que la organización la haya habilitado.",
          "Los usuarios no deberán reutilizar las contraseñas de la organización en servicios personales o de terceros.",
          "Los usuarios deberán utilizar el gestor de contraseñas aprobado por la organización para almacenar las credenciales de trabajo cuando se les facilite uno.",
          "Los usuarios deberán notificar de inmediato al Equipo de Seguridad cualquier sospecha de compromiso de sus credenciales.",
        ],
      },
      {
        heading: "Correo electrónico, mensajería e internet",
        requirements: [
          "Los usuarios deberán utilizar únicamente los servicios de correo electrónico, mensajería e intercambio de archivos aprobados por la organización para las comunicaciones de negocio.",
          "Los usuarios no deberán reenviar automáticamente el correo de la organización a cuentas personales.",
          "Los usuarios deberán verificar las solicitudes inesperadas de pagos, credenciales o datos sensibles a través de un canal distinto y conocido antes de actuar en consecuencia.",
          "Los usuarios deberán notificar los mensajes sospechosos mediante el método de notificación designado por la organización.",
          "Los usuarios no deberán acceder a contenidos ilegales, de acoso, discriminatorios o sexualmente explícitos, ni descargarlos ni distribuirlos.",
          "Los usuarios no deberán subir información confidencial o restringida a herramientas públicas de inteligencia artificial generativa ni a otros servicios en línea no aprobados.",
        ],
      },
      {
        heading: "Dispositivos y trabajo en remoto",
        requirements: [
          "Los usuarios deberán bloquear la pantalla cuando dejen un dispositivo desatendido.",
          "Los usuarios no deberán desactivar ni eludir el software de seguridad, el cifrado ni los agentes de gestión de dispositivos.",
          "Los usuarios deberán instalar software únicamente desde fuentes aprobadas o mediante el proceso de solicitud de software de la organización.",
          "Los dispositivos de propiedad personal deberán acceder a la información de la organización únicamente si están inscritos en el programa de gestión de dispositivos aprobado por la organización.",
          "Los usuarios deberán notificar en un plazo de 24 horas la pérdida o el robo de dispositivos que contengan información de la organización o permitan acceder a ella.",
          "Los usuarios que trabajen en remoto deberán adoptar las precauciones razonables para evitar que terceros vean u oigan información confidencial.",
        ],
      },
      {
        heading: "Actividades prohibidas",
        requirements: [
          "Los usuarios no deberán utilizar los recursos de la organización para actividades ilícitas, para lucro comercial personal ni para actividades que entren en conflicto con los intereses de la organización.",
          "Los usuarios no deberán instalar ni ejecutar herramientas no autorizadas de pruebas de seguridad, de escaneo o de descifrado de contraseñas.",
          "Los usuarios no deberán conectar dispositivos de red no autorizados, como puntos de acceso inalámbricos, a las redes de la organización.",
          "Los usuarios no deberán infringir los derechos de autor ni las condiciones de licencia, en particular copiando software o contenidos sin licencia.",
          "Los usuarios no deberán crear, almacenar ni transmitir código malicioso.",
        ],
      },
      {
        heading: "Supervisión y privacidad",
        requirements: [
          "La organización deberá informar a los usuarios de que el uso de los sistemas de la organización puede registrarse y supervisarse con fines de seguridad, operativos y legales, con sujeción a la normativa aplicable.",
          "La supervisión deberá ser realizada únicamente por personal autorizado y solo para fines empresariales legítimos.",
          "Los usuarios no deberán tener expectativa de privacidad sobre la información creada, almacenada o transmitida en los sistemas de la organización, en la medida en que lo permita la normativa aplicable.",
          "Los incumplimientos de esta política deberán tratarse conforme al proceso disciplinario de la organización y podrán dar lugar a la revocación de accesos, al despido o a acciones legales.",
        ],
      },
    ],
  },
  "SH-POL-004": {
    title: "Política de Gestión de Activos",
    summary: "Exige a la organización inventariar sus activos de información y tecnología, asignarles propietario, hacerles seguimiento y eliminarlos de forma segura.",
    purpose:
      "Esta política garantiza que la organización sabe qué activos de información y tecnología posee, quién es responsable de ellos y cómo se protegen a lo largo de su ciclo de vida. Un inventario exacto es la base para aplicar controles de seguridad, gestionar vulnerabilidades y responder a incidentes.",
    aims: [
      "Mantener inventarios exactos y completos de los activos de hardware, software, nube e información.",
      "Asignar un propietario claro a cada activo.",
      "Detectar y atender con prontitud los activos no autorizados.",
      "Garantizar que los activos se devuelvan, se sanitizen o se destruyan de forma segura al final de su uso.",
    ],
    scope:
      "Esta política se aplica a todos los activos propiedad de la organización, arrendados, licenciados o gestionados por ella o en su nombre, incluidos los dispositivos de usuario final, los servidores, los equipos de red, los dispositivos móviles, los soportes extraíbles, el software, los servicios en la nube y los repositorios de información. Se aplica a todo el personal y a los terceros que adquieran, utilicen, gestionen o eliminen estos activos.",
    covers: [
      "Inventarios de activos y asignación de propietarios.",
      "Adquisición e incorporación de activos.",
      "Hardware y software no autorizados.",
      "Devolución de activos.",
      "Eliminación segura y reutilización.",
    ],
    roles: [
      {
        role: "Departamento de TI",
        responsibilities: [
          "Mantener los inventarios de hardware y software.",
          "Realizar la sanitización y eliminación segura de equipos y soportes.",
        ],
      },
      {
        role: "Propietarios de Activos",
        responsibilities: [
          "Asegurar que los activos a su cargo estén clasificados, protegidos y se utilicen adecuadamente.",
          "Revisar la exactitud de los registros de inventario de sus activos.",
        ],
      },
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Vigilar la aparición de activos no autorizados y verificar que el inventario esté completo.",
          "Definir las normas de sanitización para cada tipo de soporte.",
        ],
      },
      {
        role: "Compras",
        responsibilities: [
          "Canalizar todas las compras de tecnología a través de los cauces aprobados para que los nuevos activos queden registrados.",
        ],
      },
      {
        role: "Recursos Humanos y Mandos Directivos",
        responsibilities: [
          "Asegurar que el personal saliente devuelva todos los activos de la organización.",
        ],
      },
    ],
    sections: [
      {
        heading: "Inventario de activos",
        intro: "La organización no puede proteger los activos que desconoce.",
        requirements: [
          "La organización deberá mantener un inventario de todos los activos de hardware que recoja, como mínimo, el identificador del activo, el tipo, el propietario, la ubicación y la dirección de red cuando proceda.",
          "La organización deberá mantener un inventario del software autorizado, con información de versión y de licencia.",
          "La organización deberá mantener un inventario de los servicios en la nube y de los sistemas alojados por terceros que almacenen o traten información de la organización.",
          "La organización deberá mantener un inventario de los repositorios de información que contengan información confidencial o restringida.",
          "La organización deberá utilizar herramientas de descubrimiento automatizado, cuando sea viable, para mantener los inventarios actualizados.",
          "Los propietarios de activos deberán revisar los registros de inventario de sus activos al menos cada seis meses.",
        ],
      },
      {
        heading: "Propiedad y responsabilidad",
        requirements: [
          "Todo activo inventariado deberá tener un propietario asignado, que sea una persona o una función de negocio designada.",
          "Los propietarios de activos deberán asegurarse de que sus activos estén clasificados conforme a la Política de Clasificación y Tratamiento de la Información.",
          "La propiedad de los activos deberá reasignarse en un plazo de 10 días hábiles cuando el propietario deje la organización o cambie de puesto.",
          "Los propietarios de activos deberán aprobar el acceso a sus activos o delegar dicha aprobación por escrito.",
        ],
      },
      {
        heading: "Adquisición y activos no autorizados",
        requirements: [
          "El hardware, el software y los servicios en la nube nuevos deberán adquirirse mediante los procesos de compra aprobados.",
          "Los nuevos activos deberán registrarse en el inventario correspondiente antes de conectarse a las redes de la organización o de utilizarse para tratar información de la organización.",
          "La organización deberá buscar dispositivos no autorizados en sus redes al menos semanalmente.",
          "Los dispositivos no autorizados deberán retirarse, aislarse o autorizarse en un plazo de 7 días desde su detección.",
          "El software no autorizado deberá retirarse o aprobarse formalmente en un plazo de 14 días desde su detección.",
          "El software que el fabricante ya no soporte deberá documentarse como excepción o retirarse.",
        ],
      },
      {
        heading: "Devolución de activos",
        requirements: [
          "El personal y los terceros deberán devolver todos los activos de la organización al finalizar su relación laboral, contrato o acuerdo.",
          "Los mandos directivos deberán confirmar la devolución de los activos como parte del proceso de baja.",
          "La organización deberá deshabilitar el acceso desde los dispositivos no devueltos y reclamar su recuperación cuando los activos no se devuelvan en un plazo de 5 días hábiles.",
          "La información de la organización alojada en dispositivos de propiedad personal deberá eliminarse en el momento de la salida.",
        ],
      },
      {
        heading: "Eliminación segura y reutilización",
        requirements: [
          "Los soportes de almacenamiento deberán sanitizarse, antes de su reutilización o eliminación, con un método adecuado al tipo de soporte y a la clasificación de los datos.",
          "Los soportes que no puedan sanitizarse de forma eficaz deberán destruirse físicamente.",
          "Los proveedores externos de eliminación deberán entregar un certificado de sanitización o destrucción por cada lote de activos.",
          "La organización deberá registrar en el inventario la fecha y el método de eliminación de cada activo eliminado.",
          "Los equipos arrendados deberán sanitizarse antes de devolverse al arrendador.",
        ],
      },
    ],
  },
  "SH-POL-005": {
    title: "Política de Clasificación y Tratamiento de la Información",
    summary: "Define los niveles de clasificación de la información de la organización y las normas de tratamiento aplicables a cada nivel.",
    purpose:
      "Esta política establece un esquema común para clasificar la información de la organización según su sensibilidad y su valor. Fija las normas de tratamiento para el etiquetado, el almacenamiento, la transmisión, el intercambio, la conservación y la destrucción de la información, de modo que la protección sea proporcional al daño que causaría su divulgación o pérdida.",
    aims: [
      "Proporcionar un esquema de clasificación sencillo que el personal pueda aplicar de forma coherente.",
      "Garantizar que las medidas de protección se correspondan con la sensibilidad de la información.",
      "Reducir el riesgo de divulgación no autorizada, alteración o pérdida de información sensible.",
      "Apoyar el cumplimiento de las obligaciones de privacidad, contractuales y regulatorias.",
    ],
    scope:
      "Esta política se aplica a toda la información creada, recibida, almacenada, tratada o transmitida por la organización o en su nombre, en cualquier formato y sobre cualquier soporte. Se aplica a todo el personal y a los terceros que traten información de la organización.",
    covers: [
      "Niveles de clasificación y sus definiciones.",
      "Asignación y revisión de la clasificación.",
      "Requisitos de etiquetado.",
      "Normas de almacenamiento, transmisión e intercambio.",
      "Conservación y destrucción segura.",
    ],
    roles: [
      {
        role: "Propietarios de la Información",
        responsibilities: [
          "Asignar y revisar periódicamente la clasificación de la información de la que son propietarios.",
          "Aprobar el intercambio de información confidencial y restringida.",
        ],
      },
      {
        role: "Custodios de la Información",
        responsibilities: [
          "Aplicar los controles técnicos que protejan la información según su clasificación.",
          "Mantener las copias de seguridad y los controles de acceso de los sistemas que operan.",
        ],
      },
      {
        role: "Todo el Personal",
        responsibilities: [
          "Tratar la información de acuerdo con su clasificación.",
          "Notificar de inmediato cualquier sospecha de tratamiento indebido o divulgación no autorizada.",
        ],
      },
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Mantener el esquema de clasificación y las normas de tratamiento.",
          "Operar los controles de prevención de pérdida de datos y de supervisión cuando estén desplegados.",
        ],
      },
      {
        role: "Asesoría Jurídica y Privacidad",
        responsibilities: [
          "Identificar los requisitos regulatorios y contractuales que afecten a la clasificación y a la conservación.",
        ],
      },
    ],
    sections: [
      {
        heading: "Esquema de clasificación",
        intro: "La organización utiliza cuatro niveles de clasificación.",
        requirements: [
          "La organización deberá clasificar la información como Pública, Interna, Confidencial o Restringida.",
          "La información Pública deberá ser aquella cuya difusión al público en general esté aprobada.",
          "La información Interna deberá ser aquella destinada a su uso dentro de la organización cuya divulgación causaría un perjuicio mínimo.",
          "La información Confidencial deberá ser aquella cuya divulgación no autorizada podría causar un perjuicio significativo a la organización, a sus clientes o a su personal.",
          "La información Restringida deberá ser la más sensible, incluidos los datos personales sujetos a regulación, los datos de tarjetas de pago, los secretos de autenticación y la información cuya divulgación podría causar un perjuicio grave.",
          "La información que no haya sido clasificada deberá tratarse como Interna hasta que se clasifique.",
        ],
      },
      {
        heading: "Asignación y etiquetado de la clasificación",
        requirements: [
          "Los propietarios de la información deberán asignar una clasificación a la información en el momento de su creación o recepción.",
          "Los propietarios de la información deberán revisar la clasificación de la información Confidencial y Restringida al menos anualmente.",
          "Los documentos clasificados como Confidenciales o Restringidos deberán mostrar su clasificación en el encabezado, el pie de página o los metadatos del archivo.",
          "Los sistemas y los repositorios deberán clasificarse en el nivel de la información más sensible que contengan.",
          "Cuando se combine información de distintas clasificaciones, el resultado deberá llevar la clasificación más alta aplicable.",
        ],
      },
      {
        heading: "Almacenamiento y acceso",
        requirements: [
          "La información Confidencial y Restringida deberá almacenarse únicamente en sistemas aprobados por el Equipo de Seguridad para esa clasificación.",
          "La información Restringida deberá cifrarse en reposo mediante algoritmos robustos y de aceptación general en el sector.",
          "El acceso a la información Confidencial y Restringida deberá limitarse al personal con una necesidad de negocio documentada.",
          "La información Restringida no deberá almacenarse en soportes extraíbles salvo que el soporte esté cifrado y el propietario de la información haya aprobado su uso.",
          "La información Confidencial y Restringida impresa deberá guardarse en contenedores cerrados con llave cuando no se esté utilizando.",
        ],
      },
      {
        heading: "Transmisión e intercambio",
        requirements: [
          "La información Confidencial y Restringida deberá cifrarse en tránsito por cualquier red.",
          "La información Restringida deberá compartirse con el exterior únicamente con la aprobación del propietario de la información y mediante un acuerdo escrito que incluya obligaciones de confidencialidad.",
          "El personal deberá utilizar únicamente los servicios de transferencia de archivos y colaboración aprobados por la organización para compartir información Interna, Confidencial o Restringida.",
          "No deberán utilizarse enlaces públicos que permitan el acceso anónimo para información Confidencial o Restringida.",
          "El personal deberá verificar las direcciones de los destinatarios antes de enviar información Confidencial o Restringida.",
        ],
      },
      {
        heading: "Conservación y destrucción",
        requirements: [
          "La organización deberá mantener un calendario de conservación de registros que defina los plazos de conservación de cada categoría de información.",
          "La información no deberá conservarse más tiempo del que exija el calendario de conservación, salvo que esté sujeta a una retención legal.",
          "La información Confidencial y Restringida en formato electrónico deberá destruirse mediante métodos que impidan su recuperación.",
          "La información Confidencial y Restringida impresa deberá destruirse mediante trituración de corte cruzado o un servicio de destrucción certificado.",
          "Asesoría Jurídica y Privacidad deberá comunicar a los propietarios de la información las retenciones legales, y la información afectada no deberá destruirse mientras la retención esté vigente.",
        ],
      },
    ],
  },
  "SH-POL-006": {
    title: "Política de Concienciación y Formación en Seguridad",
    summary: "Exige que todo el personal reciba formación de concienciación en seguridad y formación específica por rol adecuada a sus responsabilidades.",
    purpose:
      "Esta política garantiza que todas las personas que trabajan para la organización o en su nombre comprenden los riesgos de seguridad a los que se enfrentan y los comportamientos que se esperan de ellas. Un personal bien informado es un control esencial frente al phishing, la ingeniería social y la exposición accidental de datos.",
    aims: [
      "Dotar a todo el personal de los conocimientos necesarios para reconocer y notificar las amenazas habituales.",
      "Proporcionar formación adicional a los roles con acceso privilegiado o con funciones especializadas de seguridad.",
      "Medir la eficacia del programa de concienciación y mejorarlo con el tiempo.",
      "Mantener registros que acrediten la realización de la formación.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, contratistas y personal temporal de la organización, y a los terceros a quienes se conceda acceso a los sistemas o a la información confidencial de la organización.",
    covers: [
      "Formación de concienciación en la incorporación y anual.",
      "Formación de seguridad específica por rol.",
      "Simulaciones de phishing y concienciación continua.",
      "Registros de formación y medición del programa.",
    ],
    roles: [
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Desarrollar, impartir y actualizar el programa de concienciación y los contenidos formativos.",
          "Realizar simulaciones de phishing e informar de sus resultados.",
        ],
      },
      {
        role: "Recursos Humanos",
        responsibilities: [
          "Asignar la formación de incorporación al personal de nuevo ingreso.",
          "Mantener los registros de realización de la formación.",
        ],
      },
      {
        role: "Mandos Directivos",
        responsibilities: [
          "Asegurar que los miembros de su equipo completen a tiempo la formación obligatoria.",
          "Identificar los puestos de su equipo que requieran formación especializada.",
        ],
      },
      {
        role: "Todo el Personal",
        responsibilities: [
          "Completar la formación asignada dentro del plazo exigido.",
          "Aplicar lo aprendido en el trabajo diario y notificar cualquier actividad sospechosa.",
        ],
      },
    ],
    sections: [
      {
        heading: "Formación de incorporación y anual",
        requirements: [
          "El personal de nuevo ingreso deberá completar la formación de concienciación en seguridad en un plazo de 30 días desde su fecha de incorporación.",
          "No deberá concederse al personal acceso a información Restringida hasta que haya completado la formación de concienciación en seguridad.",
          "Todo el personal deberá completar una formación de repaso de concienciación en seguridad al menos anualmente.",
          "La formación de concienciación deberá abarcar, como mínimo, el phishing y la ingeniería social, las prácticas de contraseñas y autenticación, el tratamiento de datos, el trabajo remoto seguro y la notificación de incidentes.",
          "El Equipo de Seguridad deberá revisar y actualizar los contenidos formativos al menos anualmente y cuando surjan amenazas nuevas significativas.",
        ],
      },
      {
        heading: "Formación específica por rol",
        intro: "Algunos roles necesitan un conocimiento más profundo que el que proporciona la concienciación general.",
        requirements: [
          "El personal con acceso privilegiado a sistemas deberá completar una formación de seguridad específica de su rol antes de recibir dicho acceso y, como mínimo, anualmente a partir de entonces.",
          "Los desarrolladores de software deberán completar formación en desarrollo seguro al menos anualmente.",
          "El personal que gestione pagos, nóminas o datos bancarios de proveedores deberá recibir formación sobre fraude en pagos y compromiso del correo corporativo (BEC) al menos anualmente.",
          "Los miembros del equipo de respuesta a incidentes deberán participar en al menos un ejercicio de respuesta a incidentes cada año.",
          "Los miembros del Equipo de Seguridad deberán completar al menos 20 horas de desarrollo profesional en seguridad de la información cada año.",
        ],
      },
      {
        heading: "Simulaciones de phishing y concienciación continua",
        requirements: [
          "El Equipo de Seguridad deberá realizar ejercicios de simulación de phishing dirigidos a todo el personal al menos trimestralmente.",
          "El personal que no supere dos o más simulaciones de phishing en un periodo de 12 meses deberá completar una formación correctiva específica en un plazo de 14 días.",
          "La organización deberá enviar comunicaciones de concienciación en seguridad al personal al menos mensualmente.",
          "La organización deberá ofrecer al personal un método sencillo para notificar los mensajes de phishing sospechosos.",
          "Los resultados de las simulaciones de phishing deberán utilizarse para mejorar la formación y no deberán emplearse como único fundamento para adoptar medidas disciplinarias.",
        ],
      },
      {
        heading: "Registros y medición",
        requirements: [
          "La organización deberá registrar la realización de la formación de cada persona, incluyendo el curso, la fecha y el resultado.",
          "Los registros de formación deberán conservarse durante al menos tres años.",
          "El Equipo de Seguridad deberá informar al Comité de Dirección de Seguridad, al menos trimestralmente, de las tasas de realización de la formación y de los resultados de las simulaciones de phishing.",
          "Deberá notificarse a los mandos directivos cuando la formación obligatoria de un miembro de su equipo acumule más de 14 días de retraso.",
          "El acceso del personal cuya formación obligatoria acumule más de 30 días de retraso podrá suspenderse hasta que la complete.",
        ],
      },
    ],
  },
  "SH-POL-007": {
    title: "Política de Cumplimiento y Auditoría Interna",
    summary: "Establece cómo la organización identifica sus obligaciones de cumplimiento y audita de forma independiente sus controles de seguridad.",
    purpose:
      "Esta política garantiza que la organización identifica y cumple sus obligaciones legales, regulatorias y contractuales en materia de seguridad, y que la eficacia de sus controles de seguridad se verifica mediante auditorías internas planificadas e independientes. Proporciona a la dirección una garantía objetiva sobre el estado del programa de seguridad.",
    aims: [
      "Identificar y hacer seguimiento de todas las obligaciones aplicables de seguridad y privacidad.",
      "Proporcionar una garantía objetiva e independiente sobre el funcionamiento de los controles de seguridad.",
      "Asegurar que los hallazgos de auditoría se corrijan con prontitud y se verifique su corrección.",
      "Preparar a la organización para evaluaciones y certificaciones externas.",
    ],
    scope:
      "Esta política se aplica a todas las unidades de negocio, sistemas, procesos y servicios de terceros incluidos en el alcance del sistema de gestión de la seguridad de la información de la organización. Se aplica al personal que realiza, apoya o es objeto de revisiones de cumplimiento y auditorías internas.",
    covers: [
      "Identificación de obligaciones legales, regulatorias y contractuales.",
      "Planificación y ejecución de auditorías internas.",
      "Independencia y competencia de los auditores.",
      "Gestión de hallazgos y su corrección.",
      "Seguimiento continuo del cumplimiento.",
    ],
    roles: [
      {
        role: "Dirección Ejecutiva",
        responsibilities: [
          "Aprobar el plan anual de auditoría y recibir los resultados de las auditorías.",
          "Garantizar que se disponga de recursos suficientes para corregir los hallazgos.",
        ],
      },
      {
        role: "Función de Auditoría Interna",
        responsibilities: [
          "Planificar y realizar auditorías independientes del programa de seguridad.",
          "Informar de los hallazgos y verificar que las acciones correctivas son eficaces.",
        ],
      },
      {
        role: "Responsable de Seguridad de la Información (CISO)",
        responsibilities: [
          "Mantener el registro de obligaciones de cumplimiento.",
          "Coordinar la corrección de los hallazgos relacionados con la seguridad.",
        ],
      },
      {
        role: "Asesoría Jurídica y Privacidad",
        responsibilities: [
          "Identificar las leyes y reglamentos nuevos o modificados que afecten a la organización.",
          "Asesorar sobre los compromisos contractuales de seguridad asumidos con los clientes.",
        ],
      },
      {
        role: "Propietarios de Controles",
        responsibilities: [
          "Aportar evidencias del funcionamiento de los controles cuando se les soliciten.",
          "Corregir los hallazgos que se les asignen dentro del plazo acordado.",
        ],
      },
    ],
    sections: [
      {
        heading: "Obligaciones de cumplimiento",
        requirements: [
          "La organización deberá mantener un registro de las obligaciones legales, regulatorias y contractuales de seguridad y privacidad, que incluya el responsable de cada obligación.",
          "Asesoría Jurídica y Privacidad deberá revisar el registro de obligaciones al menos anualmente y cuando entren en vigor nuevas leyes, reglamentos o contratos significativos.",
          "Los contratos con clientes que contengan compromisos de seguridad que excedan los controles estándar de la organización deberán ser revisados por el Equipo de Seguridad antes de su firma.",
          "La organización deberá proteger los registros exigidos por la ley o la regulación frente a pérdida, destrucción y falsificación.",
          "La organización deberá respetar los derechos de propiedad intelectual y las condiciones de licencia del software.",
        ],
      },
      {
        heading: "Planificación de auditorías",
        intro: "Las auditorías internas siguen un plan basado en el riesgo aprobado por la dirección.",
        requirements: [
          "La organización deberá preparar cada año un plan de auditoría interna basado en el riesgo y obtener para él la aprobación de la Dirección Ejecutiva.",
          "El plan de auditoría deberá cubrir todas las áreas del sistema de gestión de la seguridad de la información al menos una vez cada tres años.",
          "Las áreas de alto riesgo y las áreas con hallazgos significativos previos deberán auditarse al menos anualmente.",
          "Cada auditoría deberá contar con un alcance, unos objetivos, unos criterios y un calendario documentados, comunicados con antelación a la parte auditada.",
        ],
      },
      {
        heading: "Independencia y conducta de los auditores",
        requirements: [
          "Los auditores internos no deberán auditar su propio trabajo ni las áreas sobre las que tengan responsabilidad operativa.",
          "Los auditores internos deberán tener competencia acreditada en auditoría de seguridad de la información, demostrada mediante formación, certificación o experiencia.",
          "La organización podrá contratar auditores externos cualificados para complementar la capacidad interna.",
          "A los auditores deberá concedérseles acceso de solo lectura a los sistemas y registros necesarios para realizar la auditoría.",
          "Las evidencias de auditoría y los papeles de trabajo deberán conservarse durante al menos tres años.",
        ],
      },
      {
        heading: "Hallazgos y corrección",
        requirements: [
          "Los hallazgos de auditoría deberán calificarse por gravedad y comunicarse a la parte auditada y al CISO en un plazo de 15 días hábiles desde la finalización de la auditoría.",
          "Los propietarios de controles deberán presentar un plan de acciones correctivas en un plazo de 30 días desde la recepción de un hallazgo.",
          "Los hallazgos de gravedad alta deberán corregirse en un plazo de 90 días, salvo que se apruebe una aceptación de riesgo.",
          "La Función de Auditoría Interna deberá verificar la eficacia de las acciones correctivas antes de cerrar un hallazgo.",
          "Los hallazgos vencidos deberán comunicarse a la Dirección Ejecutiva al menos trimestralmente.",
        ],
      },
      {
        heading: "Seguimiento continuo del cumplimiento",
        requirements: [
          "Los mandos directivos deberán revisar el cumplimiento de las políticas de seguridad en sus áreas al menos anualmente.",
          "El Equipo de Seguridad deberá utilizar la supervisión automatizada para evaluar el cumplimiento de los controles técnicos cuando sea viable.",
          "La organización deberá prepararse para las auditorías y certificaciones externas programadas mediante una revisión de preparación realizada con al menos 60 días de antelación.",
          "Los resultados de las auditorías y evaluaciones externas deberán registrarse en el mismo registro de hallazgos que los resultados de las auditorías internas.",
        ],
      },
    ],
  },
  "SH-POL-008": {
    title: "Política de Gobierno de Políticas y Gestión de Excepciones",
    summary: "Regula cómo se redactan, aprueban, revisan y comunican las políticas de seguridad, y cómo se solicitan y controlan las excepciones a ellas.",
    purpose:
      "Esta política define el ciclo de vida de las políticas, normas y procedimientos de seguridad de la organización, y el proceso para gestionar las excepciones cuando no se puede cumplir un requisito. Mantiene el marco de políticas actualizado y con autoridad, garantizando al mismo tiempo que las desviaciones sean visibles, estén evaluadas en términos de riesgo y tengan duración limitada.",
    aims: [
      "Mantener un formato, una asignación de responsables y un circuito de aprobación coherentes para todos los documentos normativos.",
      "Mantener las políticas actualizadas mediante revisiones programadas y por eventos.",
      "Garantizar que toda excepción esté justificada, evaluada en términos de riesgo, aprobada y limitada en el tiempo.",
      "Proporcionar a la dirección visibilidad de todas las excepciones pendientes.",
    ],
    scope:
      "Esta política se aplica a todas las políticas, normas, procedimientos y guías de seguridad de la información emitidos por la organización, y a toda solicitud de desviación respecto de ellos. Se aplica a los responsables de los documentos, a los aprobadores y a todo el personal que solicite excepciones o se vea afectado por ellas.",
    covers: [
      "Jerarquía y formato de los documentos.",
      "Redacción, aprobación y publicación de políticas.",
      "Revisión periódica y control de versiones.",
      "Solicitud, aprobación y caducidad de excepciones.",
      "Seguimiento e informe de excepciones.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información (CISO)",
        responsibilities: [
          "Ser responsable del marco de políticas y aprobar las normas y los procedimientos de seguridad.",
          "Aprobar las excepciones dentro de su autoridad delegada y mantener el registro de excepciones.",
        ],
      },
      {
        role: "Dirección Ejecutiva",
        responsibilities: [
          "Aprobar las políticas de seguridad y las excepciones que conlleven un riesgo residual alto o crítico.",
        ],
      },
      {
        role: "Responsables de Documentos",
        responsibilities: [
          "Redactar, mantener y revisar en plazo los documentos de políticas que tengan asignados.",
          "Evaluar el impacto de los cambios propuestos en los documentos relacionados.",
        ],
      },
      {
        role: "Solicitantes de Excepciones",
        responsibilities: [
          "Presentar solicitudes de excepción completas, con justificación de negocio y propuesta de controles compensatorios.",
          "Implantar los controles compensatorios y subsanar la situación antes de que caduque la excepción.",
        ],
      },
      {
        role: "Equipo de Seguridad",
        responsibilities: [
          "Evaluar el riesgo de cada solicitud de excepción.",
          "Hacer seguimiento de las fechas de caducidad de las excepciones y avisar a los responsables de los vencimientos próximos.",
        ],
      },
    ],
    sections: [
      {
        heading: "Jerarquía y formato de los documentos",
        intro: "Los documentos normativos siguen una jerarquía definida para que la autoridad y la prelación queden claras.",
        requirements: [
          "La organización deberá organizar los documentos normativos en políticas, normas, procedimientos y guías, en orden decreciente de autoridad.",
          "Las políticas y las normas deberán establecer requisitos obligatorios; las guías tendrán carácter meramente orientativo.",
          "Cada documento normativo deberá incluir un título, un identificador de documento, un responsable, un aprobador, un número de versión, una fecha de entrada en vigor y la fecha de la próxima revisión.",
          "Cada documento normativo deberá tener un único responsable designado.",
        ],
      },
      {
        heading: "Aprobación y publicación",
        requirements: [
          "Las políticas de seguridad deberán ser aprobadas por la Dirección Ejecutiva antes de su publicación.",
          "Las normas y los procedimientos de seguridad deberán ser aprobados por el CISO o por un delegado designado por escrito.",
          "Los cambios propuestos en las políticas deberán ser revisados, antes de su aprobación, por las partes interesadas afectadas de las áreas de negocio, jurídica y tecnología.",
          "Los documentos aprobados deberán publicarse en un repositorio central accesible para todo el personal al que se apliquen.",
          "La organización deberá notificar al personal afectado las políticas nuevas o modificadas de forma sustancial en un plazo de 30 días desde su aprobación.",
        ],
      },
      {
        heading: "Revisión y control de versiones",
        requirements: [
          "Los responsables de los documentos deberán revisar cada política y cada norma al menos anualmente.",
          "Los responsables de los documentos deberán revisar los documentos afectados tras incidentes significativos, hallazgos de auditoría, cambios regulatorios o cambios organizativos.",
          "Cada revisión deberá registrarse, incluso cuando no se introduzcan cambios.",
          "La organización deberá conservar las versiones sustituidas de los documentos normativos durante al menos tres años.",
          "Los documentos que superen en más de 90 días su fecha de revisión deberán comunicarse al Comité de Dirección de Seguridad.",
        ],
      },
      {
        heading: "Solicitudes de excepción",
        intro: "Una excepción es una desviación documentada, aprobada y temporal respecto de un requisito obligatorio.",
        requirements: [
          "Toda desviación respecto de un requisito de seguridad obligatorio deberá estar amparada por una excepción aprobada antes de que se produzca, salvo en caso de emergencia.",
          "Las desviaciones de emergencia deberán comunicarse al Equipo de Seguridad en un plazo de 2 días hábiles y presentarse como solicitud de excepción.",
          "Cada solicitud de excepción deberá indicar el requisito afectado, la justificación de negocio, los sistemas o datos implicados, los controles compensatorios propuestos y la duración solicitada.",
          "El Equipo de Seguridad deberá completar una evaluación de riesgos de cada solicitud de excepción en un plazo de 10 días hábiles desde su recepción.",
          "Las excepciones con riesgo residual bajo o medio deberán ser aprobadas por el CISO; las excepciones con riesgo residual alto o crítico deberán ser aprobadas por la Dirección Ejecutiva.",
        ],
      },
      {
        heading: "Gestión de excepciones",
        requirements: [
          "Las excepciones deberán concederse por un máximo de 12 meses.",
          "La renovación de una excepción deberá requerir una nueva solicitud y una nueva evaluación de riesgos.",
          "El Equipo de Seguridad deberá mantener un registro de excepciones que recoja cada excepción, su aprobador, su valoración de riesgo, sus controles compensatorios y su fecha de caducidad.",
          "El Equipo de Seguridad deberá notificar a los responsables de las excepciones con al menos 30 días de antelación a su caducidad.",
          "Las excepciones caducadas que no se hayan renovado deberán tratarse como incumplimientos de la política.",
          "El CISO deberá informar al Comité de Dirección de Seguridad, al menos trimestralmente, de las excepciones abiertas, las excepciones de alto riesgo y las excepciones caducadas.",
        ],
      },
    ],
  },
};
