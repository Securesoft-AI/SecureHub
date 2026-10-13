// Versión en español de las políticas del paquete de operaciones (ver ./operations.ts).

import type { PolicyTranslations } from "./types";

export const OPERATIONS_POLICIES_ES: PolicyTranslations = {
  "SH-POL-201": {
    title: "Política de Configuración Segura y Bastionado",
    summary: "Exige líneas base bastionadas y aprobadas para todos los sistemas y la detección continua de desviaciones de configuración.",
    purpose:
      "Esta política establece cómo la organización define, aplica y mantiene configuraciones seguras de sus activos tecnológicos, de modo que los sistemas se desplieguen en un estado conocido y defendible y se elimine la superficie de ataque innecesaria antes y durante su explotación.",
    aims: [
      "Garantizar que todo sistema se construya a partir de una línea base de seguridad aprobada y documentada.",
      "Reducir la superficie de ataque eliminando o deshabilitando servicios, cuentas y software innecesarios.",
      "Detectar y corregir con prontitud las desviaciones no autorizadas respecto a las configuraciones aprobadas.",
      "Aportar evidencias de que los estándares de configuración se aplican de forma coherente en todos los entornos.",
    ],
    scope:
      "Esta política se aplica a todos los servidores, estaciones de trabajo, portátiles, dispositivos de red, bases de datos, contenedores, imágenes de máquinas virtuales y recursos en la nube propiedad de la organización, arrendados o gestionados por ella, en entornos de producción y de no producción, ya los opere su personal o terceros por cuenta de la organización.",
    covers: [
      "Definición y aprobación de las líneas base de configuración de seguridad.",
      "Bastionado de sistemas operativos, aplicaciones, dispositivos de red y servicios en la nube.",
      "Gestión de cuentas, credenciales y servicios predeterminados e innecesarios.",
      "Supervisión y corrección de las desviaciones de configuración.",
      "Excepciones a las líneas base aprobadas.",
    ],
    roles: [
      {
        role: "Responsable de la Seguridad de la Información (CISO)",
        responsibilities: [
          "Aprueba las líneas base de configuración y el proceso de excepciones.",
          "Revisa trimestralmente los informes de cumplimiento de las líneas base.",
        ],
      },
      {
        role: "Propietarios de plataformas e infraestructuras",
        responsibilities: [
          "Elaboran y mantienen las líneas base de las tecnologías que operan.",
          "Garantizan que los nuevos sistemas se desplieguen a partir de imágenes o plantillas bastionadas aprobadas.",
          "Corrigen las desviaciones de configuración dentro de los plazos definidos.",
        ],
      },
      {
        role: "Operaciones de Seguridad",
        responsibilities: [
          "Ejecutan evaluaciones automatizadas de configuración y comunican las desviaciones a los propietarios de los activos.",
          "Realizan el seguimiento de los hallazgos abiertos y escalan los que superan su plazo.",
        ],
      },
      {
        role: "Administradores de sistemas",
        responsibilities: [
          "Aplican los parámetros de la línea base al construir o modificar sistemas.",
          "Registran las desviaciones aprobadas en la base de datos de gestión de la configuración.",
        ],
      },
    ],
    sections: [
      {
        heading: "Líneas base de configuración",
        intro: "Las líneas base definen los parámetros mínimos de seguridad que cada tecnología debe cumplir antes de su uso.",
        requirements: [
          "La organización deberá mantener una línea base de configuración de seguridad documentada para cada sistema operativo, base de datos, tipo de dispositivo de red y servicio en la nube en uso.",
          "Las líneas base deberán basarse en referencias reconocidas del sector y adaptarse al perfil de riesgo de la organización.",
          "Cada línea base deberá tener un propietario designado, responsable de su exactitud.",
          "Las líneas base deberán revisarse al menos una vez al año y siempre que se adopte una versión principal de la tecnología correspondiente.",
          "Los cambios en una línea base deberán ser aprobados por el Responsable de la Seguridad de la Información o por la persona en quien delegue antes de su publicación.",
        ],
      },
      {
        heading: "Construcción y despliegue de sistemas",
        requirements: [
          "Los nuevos sistemas deberán construirse a partir de imágenes, plantillas o definiciones de infraestructura como código bastionadas y aprobadas.",
          "Los sistemas no deberán conectarse a las redes de producción hasta que se hayan aplicado y verificado los parámetros de la línea base.",
          "Las imágenes maestras y las plantillas deberán reconstruirse al menos mensualmente para incorporar los parches de seguridad vigentes.",
          "Solo deberá instalarse el software necesario para la función de negocio del sistema.",
          "Las definiciones de infraestructura como código deberán almacenarse en un sistema de control de versiones y analizarse en busca de configuraciones inseguras antes de su despliegue.",
        ],
      },
      {
        heading: "Cuentas, servicios y parámetros predeterminados",
        requirements: [
          "Las contraseñas predeterminadas del fabricante deberán cambiarse antes de poner en servicio un sistema o dispositivo.",
          "Las cuentas predeterminadas e integradas que no sean necesarias deberán deshabilitarse o eliminarse.",
          "Los servicios, puertos, protocolos, scripts y funcionalidades innecesarios deberán deshabilitarse.",
          "Los protocolos inseguros, como Telnet, FTP sin cifrar y SMBv1, deberán deshabilitarse salvo que exista una excepción aprobada.",
          "Las interfaces de administración solo deberán ser accesibles desde redes de gestión designadas o mediante herramientas de acceso privilegiado aprobadas.",
          "Los relojes de los sistemas deberán sincronizarse con una fuente de tiempo autorizada y aprobada.",
        ],
      },
      {
        heading: "Detección y corrección de desviaciones",
        intro: "Las configuraciones deberán evaluarse de forma continua para identificar cuanto antes los cambios no autorizados.",
        requirements: [
          "La organización deberá evaluar los sistemas de producción frente a sus líneas base mediante herramientas automatizadas al menos una vez por semana.",
          "Las desviaciones calificadas como altas o críticas deberán corregirse en un plazo de 14 días desde su detección.",
          "El resto de las desviaciones deberán corregirse en un plazo de 60 días desde su detección.",
          "Los cambios de configuración no autorizados deberán investigarse como posibles incidentes de seguridad.",
          "Los índices de cumplimiento de las líneas base deberán comunicarse trimestralmente al Responsable de la Seguridad de la Información.",
        ],
      },
      {
        heading: "Excepciones",
        requirements: [
          "Toda desviación respecto a una línea base aprobada deberá documentarse con una justificación de negocio y una evaluación de riesgos.",
          "Las excepciones deberán identificar los controles compensatorios cuando la desviación aumente el riesgo.",
          "Las excepciones deberán ser aprobadas por el propietario del activo y por la función de seguridad antes de su aplicación.",
          "Las excepciones deberán caducar en un máximo de 12 meses y volver a aprobarse si siguen siendo necesarias.",
        ],
      },
    ],
  },
  "SH-POL-202": {
    title: "Política de Gestión de Vulnerabilidades y Parches",
    summary: "Fija la frecuencia de los análisis, los plazos de corrección basados en el riesgo y las expectativas de aplicación de parches para todos los activos tecnológicos.",
    purpose:
      "Esta política define cómo la organización identifica, prioriza y corrige las vulnerabilidades técnicas, de forma que las debilidades conocidas se resuelvan en plazos proporcionales al riesgo que representan.",
    aims: [
      "Identificar las vulnerabilidades de todos los activos incluidos en el alcance mediante análisis autenticados y periódicos.",
      "Priorizar la corrección según la gravedad, la explotabilidad y la exposición del activo.",
      "Aplicar los parches de seguridad dentro de los niveles de servicio definidos.",
      "Gestionar el riesgo residual cuando las vulnerabilidades no puedan corregirse a tiempo.",
    ],
    scope:
      "Esta política se aplica a todo el hardware, sistemas operativos, firmware, aplicaciones, bibliotecas, contenedores y servicios en la nube propiedad de la organización u operados por ella, incluidos los sistemas gestionados por terceros por cuenta de la organización.",
    covers: [
      "Análisis y descubrimiento de vulnerabilidades.",
      "Clasificación del riesgo y priorización.",
      "Plazos de corrección y de despliegue de parches.",
      "Aplicación urgente de parches ante vulnerabilidades explotadas activamente.",
      "Excepciones y aceptación del riesgo.",
    ],
    roles: [
      {
        role: "Responsable de Gestión de Vulnerabilidades",
        responsibilities: [
          "Opera el programa de análisis y mantiene la cobertura de los escaneos.",
          "Asigna los hallazgos a los propietarios de los activos y les hace seguimiento hasta su cierre.",
          "Informa mensualmente sobre el desempeño de la corrección.",
        ],
      },
      {
        role: "Propietarios de activos",
        responsibilities: [
          "Corrigen las vulnerabilidades de sus activos dentro de los plazos exigidos.",
          "Solicitan una excepción cuando no pueda cumplirse un plazo.",
        ],
      },
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Prueban y despliegan los parches de sistemas operativos y aplicaciones.",
          "Mantienen las herramientas de despliegue automatizado de parches.",
        ],
      },
      {
        role: "Responsable de la Seguridad de la Información (CISO)",
        responsibilities: [
          "Aprueba la aceptación del riesgo de las vulnerabilidades que superen los plazos de corrección.",
          "Declara los eventos de aplicación urgente de parches.",
        ],
      },
    ],
    sections: [
      {
        heading: "Identificación de vulnerabilidades",
        requirements: [
          "La organización deberá realizar análisis de vulnerabilidades autenticados de todos los sistemas internos al menos una vez al mes.",
          "Los sistemas expuestos a internet deberán analizarse al menos una vez por semana.",
          "Los sistemas nuevos deberán analizarse antes de su puesta en producción.",
          "Las imágenes de contenedores y las dependencias de software deberán analizarse en el flujo de construcción antes de su publicación.",
          "La organización deberá supervisar los avisos de los fabricantes y las fuentes de inteligencia de amenazas para detectar vulnerabilidades recién divulgadas que afecten a sus activos.",
          "La cobertura de los análisis deberá conciliarse con el inventario de activos al menos una vez al trimestre.",
        ],
      },
      {
        heading: "Clasificación del riesgo y priorización",
        intro: "Los hallazgos se clasifican para abordar en primer lugar las debilidades más peligrosas.",
        requirements: [
          "A cada vulnerabilidad deberá asignársele una gravedad crítica, alta, media o baja en función de su puntuación CVSS y del contexto de la organización.",
          "Las vulnerabilidades incluidas en un catálogo de vulnerabilidades explotadas conocidas deberán tratarse como críticas, con independencia de su puntuación base.",
          "La priorización deberá tener en cuenta la exposición del activo, la sensibilidad de los datos y la disponibilidad de código de explotación.",
          "Los hallazgos deberán registrarse en un sistema central de seguimiento con un responsable y una fecha límite.",
        ],
      },
      {
        heading: "Plazos de corrección",
        requirements: [
          "Las vulnerabilidades críticas en sistemas expuestos a internet deberán corregirse en un plazo de 7 días.",
          "Las vulnerabilidades críticas en sistemas internos deberán corregirse en un plazo de 14 días.",
          "Las vulnerabilidades altas deberán corregirse en un plazo de 30 días.",
          "Las vulnerabilidades medias deberán corregirse en un plazo de 90 días.",
          "Las vulnerabilidades bajas deberán corregirse en un plazo de 180 días o aceptarse mediante el proceso de excepciones.",
          "La corrección deberá verificarse mediante un análisis posterior antes de cerrar un hallazgo.",
        ],
      },
      {
        heading: "Despliegue de parches",
        requirements: [
          "Los parches de seguridad de los sistemas operativos y de las aplicaciones habituales deberán desplegarse mediante herramientas automatizadas siempre que sea técnicamente viable.",
          "Los parches deberán probarse en un entorno representativo antes de su despliegue general cuando el sistema sea crítico para el negocio.",
          "El despliegue de parches deberá seguir el proceso de gestión de cambios, tramitándose los parches rutinarios como cambios estándar preaprobados.",
          "El software y el hardware que ya no cuenten con soporte del fabricante deberán sustituirse o aislarse con controles compensatorios documentados.",
          "El cumplimiento en materia de parches deberá medirse y comunicarse mensualmente a la dirección de TI.",
        ],
      },
      {
        heading: "Aplicación urgente de parches",
        requirements: [
          "El Responsable de la Seguridad de la Información deberá declarar un evento de aplicación urgente de parches cuando una vulnerabilidad se esté explotando activamente y afecte a los activos de la organización.",
          "Durante un evento de aplicación urgente de parches, los sistemas afectados expuestos a internet deberán parchearse o mitigarse en un plazo de 72 horas.",
          "Los cambios urgentes deberán registrarse y ser revisados con posterioridad por el comité asesor de cambios.",
          "Deberán aplicarse mitigaciones temporales cuando todavía no exista un parche disponible.",
        ],
      },
      {
        heading: "Excepciones y aceptación del riesgo",
        requirements: [
          "Toda vulnerabilidad que no pueda corregirse dentro de su plazo deberá someterse a una excepción limitada en el tiempo.",
          "Las excepciones deberán documentar los controles compensatorios y una fecha objetivo de corrección.",
          "Las excepciones relativas a vulnerabilidades críticas o altas deberán ser aprobadas por el Responsable de la Seguridad de la Información.",
          "Las excepciones no deberán superar los 6 meses sin una nueva aprobación.",
        ],
      },
    ],
  },
  "SH-POL-203": {
    title: "Política de Registro de Eventos y Monitorización de la Seguridad",
    summary: "Define qué eventos deben registrarse, cómo se protegen y conservan los registros y cómo se supervisan las alertas de seguridad.",
    purpose:
      "Esta política establece los requisitos para generar, recopilar, proteger y revisar los registros relevantes para la seguridad, de modo que la organización pueda detectar actividad maliciosa, investigar incidentes y demostrar la trazabilidad de las acciones.",
    aims: [
      "Garantizar que los eventos relevantes para la seguridad se registren en todos los sistemas incluidos en el alcance.",
      "Centralizar los registros para poder correlacionarlos y analizarlos.",
      "Proteger la integridad de los registros y conservarlos para las necesidades de investigación y regulatorias.",
      "Detectar y responder con prontitud a la actividad sospechosa.",
    ],
    scope:
      "Esta política se aplica a todos los sistemas, aplicaciones, dispositivos de red, herramientas de seguridad y servicios en la nube que almacenan, tratan o protegen información de la organización, así como al personal y a los proveedores que los operan o supervisan.",
    covers: [
      "Requisitos de registro de eventos.",
      "Recopilación y centralización de registros.",
      "Protección, sincronización horaria y conservación de los registros.",
      "Monitorización de la seguridad, alertas y clasificación de incidencias.",
    ],
    roles: [
      {
        role: "Centro de Operaciones de Seguridad (SOC)",
        responsibilities: [
          "Supervisa las alertas de seguridad y las clasifica dentro de los plazos definidos.",
          "Mantiene las reglas de detección y las ajusta para reducir los falsos positivos.",
          "Escala los incidentes confirmados al equipo de respuesta a incidentes.",
        ],
      },
      {
        role: "Propietarios de sistemas y aplicaciones",
        responsibilities: [
          "Configuran sus sistemas para generar los registros exigidos y reenviarlos a la plataforma central.",
          "Notifican al equipo de operaciones de seguridad las nuevas fuentes de registros.",
        ],
      },
      {
        role: "Administradores de la plataforma de registros",
        responsibilities: [
          "Operan la plataforma central de registros y garantizan su disponibilidad.",
          "Aplican los controles de acceso y los parámetros de conservación sobre los datos de registro.",
        ],
      },
      {
        role: "Responsable de la Seguridad de la Información (CISO)",
        responsibilities: [
          "Aprueba los estándares de registro y los periodos de conservación.",
          "Revisa trimestralmente la cobertura de la monitorización y sus indicadores de desempeño.",
        ],
      },
    ],
    sections: [
      {
        heading: "Eventos que deben registrarse",
        requirements: [
          "Los sistemas deberán registrar los intentos de autenticación correctos y fallidos.",
          "Los sistemas deberán registrar el uso de cuentas privilegiadas y los cambios en los derechos de los usuarios.",
          "Los sistemas deberán registrar la creación, modificación y eliminación de cuentas, parámetros de seguridad y configuraciones de auditoría.",
          "Las aplicaciones que traten datos confidenciales deberán registrar el acceso a esos datos con un nivel de detalle suficiente para identificar al usuario y la acción realizada.",
          "Los dispositivos de seguridad de red deberán registrar las conexiones permitidas y denegadas en sus límites de confianza.",
          "Cada entrada de registro deberá incluir la marca de tiempo, el origen, la identidad del usuario o proceso, el tipo de evento y el resultado.",
        ],
      },
      {
        heading: "Recopilación y centralización",
        requirements: [
          "Los registros de todos los sistemas incluidos en el alcance deberán reenviarse a una plataforma central de gestión de registros o SIEM.",
          "Los registros deberán transmitirse a la plataforma central a través de canales cifrados.",
          "La organización deberá mantener un inventario de las fuentes de registros y revisarlo para detectar carencias al menos una vez al trimestre.",
          "La falta de envío de registros por parte de una fuente crítica deberá generar una alerta en un plazo de 24 horas.",
        ],
      },
      {
        heading: "Protección, sincronización horaria y conservación",
        intro: "Los datos de registro deben seguir siendo fiables y estar disponibles durante todo el tiempo que puedan necesitarse.",
        requirements: [
          "El acceso a los datos de registro deberá limitarse al personal autorizado en función de su necesidad profesional.",
          "Los registros deberán protegerse frente a modificaciones y eliminaciones no autorizadas.",
          "Los administradores no deberán poder alterar ni eliminar los registros de su propia actividad.",
          "Todos los sistemas deberán sincronizar sus relojes con una fuente de tiempo autorizada y aprobada.",
          "Los registros de seguridad deberán conservarse al menos 12 meses, manteniendo los 90 días más recientes inmediatamente disponibles para su consulta.",
          "Deberán aplicarse periodos de conservación más largos cuando lo exijan la ley, la normativa o un contrato.",
        ],
      },
      {
        heading: "Monitorización y alertas",
        requirements: [
          "La organización deberá supervisar las alertas de seguridad de forma continua, ya sea con medios propios o mediante un proveedor de servicios gestionados.",
          "Las alertas críticas deberán clasificarse en el plazo de 1 hora desde su generación.",
          "Las alertas altas deberán clasificarse en el plazo de 4 horas desde su generación.",
          "Las reglas de detección deberán asociarse a técnicas de ataque conocidas y revisarse al menos cada seis meses.",
          "Los eventos de seguridad confirmados deberán gestionarse conforme al procedimiento de respuesta a incidentes.",
        ],
      },
      {
        heading: "Revisión y mejora",
        requirements: [
          "Los registros de actividad privilegiada deberán revisarse al menos una vez por semana para detectar acciones inesperadas.",
          "Los indicadores de monitorización, incluidos el volumen de alertas y los tiempos de clasificación, deberán comunicarse mensualmente a la dirección de seguridad.",
          "Las lecciones aprendidas de los incidentes deberán utilizarse para crear o mejorar reglas de detección.",
          "La capacidad de registro y monitorización deberá probarse al menos una vez al año mediante actividad simulada de ataque.",
        ],
      },
    ],
  },
  "SH-POL-204": {
    title: "Política de Protección de Equipos y contra el Software Malicioso",
    summary: "Exige equipos gestionados y protegidos con antimalware, detección y respuesta en el endpoint y controles sobre el software y los soportes extraíbles.",
    purpose:
      "Esta política fija los requisitos para proteger los equipos de la organización frente al software malicioso y al uso indebido, de forma que los dispositivos empleados para acceder a la información de la organización sigan siendo fiables y las amenazas se detecten y contengan con rapidez.",
    aims: [
      "Garantizar que todos los equipos estén gestionados de forma centralizada y protegidos con herramientas de seguridad aprobadas.",
      "Prevenir, detectar y contener el software malicioso.",
      "Limitar el software y los soportes que pueden introducir amenazas en los equipos.",
      "Responder a las amenazas en los equipos de forma coherente y rápida.",
    ],
    scope:
      "Esta política se aplica a todos los ordenadores de sobremesa, portátiles, servidores y escritorios virtuales propiedad de la organización o gestionados por ella, y a todo el personal que los utilice. Los dispositivos móviles de propiedad personal se regulan en la Política de Dispositivos Móviles y BYOD.",
    covers: [
      "Gestión e incorporación de equipos.",
      "Antimalware y detección y respuesta en el endpoint (EDR).",
      "Control de aplicaciones e instalación de software.",
      "Soportes extraíbles y amenazas transmitidas por correo electrónico.",
      "Respuesta ante detecciones de software malicioso.",
    ],
    roles: [
      {
        role: "Ingeniería de Puestos de Trabajo",
        responsibilities: [
          "Despliega y mantiene las herramientas de gestión y protección de equipos.",
          "Garantiza que los agentes de protección estén operativos y reporten en todos los dispositivos.",
        ],
      },
      {
        role: "Operaciones de Seguridad",
        responsibilities: [
          "Supervisan las alertas de los equipos e investigan las detecciones.",
          "Aíslan los dispositivos comprometidos cuando sea necesario.",
        ],
      },
      {
        role: "Servicio de Atención de TI",
        responsibilities: [
          "Incorpora los nuevos dispositivos a la gestión antes de entregarlos a los usuarios.",
          "Reinstala los dispositivos cuyo compromiso se haya confirmado.",
        ],
      },
      {
        role: "Todo el personal",
        responsibilities: [
          "No deshabilita ni manipula el software de seguridad.",
          "Comunica de inmediato cualquier sospecha de software malicioso o comportamiento anómalo del dispositivo.",
        ],
      },
    ],
    sections: [
      {
        heading: "Gestión de equipos",
        requirements: [
          "Todos los equipos propiedad de la organización deberán incorporarse a una plataforma central de gestión antes de entregarse a los usuarios.",
          "Los equipos deberán configurarse conforme a la línea base de bastionado aprobada.",
          "El cifrado de disco completo deberá estar activado en todos los portátiles y ordenadores de sobremesa.",
          "Los equipos deberán bloquearse automáticamente tras un máximo de 15 minutos de inactividad.",
          "Los equipos que no se hayan conectado a la plataforma de gestión durante 30 días deberán investigarse y, si fuera necesario, deshabilitarse.",
        ],
      },
      {
        heading: "Antimalware y detección en el endpoint",
        intro: "Todo equipo debe ejecutar una protección capaz tanto de prevenir como de detectar amenazas.",
        requirements: [
          "Todos los equipos y servidores deberán ejecutar software antimalware y de detección y respuesta en el endpoint aprobado.",
          "El software de protección deberá actualizar automáticamente su contenido de detección al menos una vez al día.",
          "Deberá estar activado el análisis en tiempo real de los archivos al acceder a ellos.",
          "Los usuarios no deberán poder deshabilitar, desinstalar ni reconfigurar el software de protección.",
          "Los equipos con agentes de protección ausentes o en mal estado deberán corregirse en un plazo de 3 días hábiles.",
        ],
      },
      {
        heading: "Instalación de software y control de aplicaciones",
        requirements: [
          "Los usuarios estándar no deberán disponer de derechos de administrador local en sus equipos.",
          "El software solo deberá instalarse desde un catálogo aprobado o con autorización documentada del departamento de TI.",
          "Deberá utilizarse el control de aplicaciones en los servidores y en los equipos de alto riesgo para permitir únicamente ejecutables autorizados.",
          "Las macros de documentos ofimáticos de origen externo deberán bloquearse por defecto.",
          "Los navegadores y sus extensiones deberán gestionarse de forma centralizada y limitarse a una lista aprobada.",
        ],
      },
      {
        heading: "Soportes extraíbles y amenazas por correo electrónico",
        requirements: [
          "Deberá deshabilitarse la ejecución automática de contenido procedente de soportes extraíbles.",
          "Los soportes extraíbles deberán analizarse en busca de software malicioso al conectarse.",
          "El acceso de escritura a los soportes de almacenamiento extraíbles deberá bloquearse salvo que se autorice por una necesidad de negocio.",
          "El correo electrónico entrante deberá filtrarse para detectar adjuntos, enlaces y remitentes suplantados maliciosos.",
          "Los adjuntos de tipos de archivo de alto riesgo deberán bloquearse o detonarse en un entorno aislado (sandbox) antes de su entrega.",
        ],
      },
      {
        heading: "Respuesta ante detecciones",
        requirements: [
          "Las alertas altas y críticas de los equipos deberán ser clasificadas por operaciones de seguridad en el plazo de 1 hora.",
          "Los equipos con un compromiso confirmado deberán aislarse de la red hasta que se investiguen.",
          "Los equipos comprometidos confirmados deberán reinstalarse desde una fuente de confianza antes de volver a ponerse en servicio.",
          "Los incidentes de software malicioso deberán registrarse y gestionarse conforme al procedimiento de respuesta a incidentes.",
        ],
      },
    ],
  },
  "SH-POL-205": {
    title: "Política de Seguridad de Redes",
    summary: "Exige redes segmentadas con denegación por defecto, perímetros controlados, acceso remoto seguro y redes inalámbricas protegidas.",
    purpose:
      "Esta política define cómo la organización diseña, protege y opera sus redes, de modo que se salvaguarde la información en tránsito, se controle el acceso entre zonas de red y se detecte y bloquee el tráfico malicioso.",
    aims: [
      "Separar las redes en zonas según el nivel de confianza y la sensibilidad de los datos.",
      "Restringir el tráfico a lo estrictamente necesario para los fines del negocio.",
      "Proteger el acceso remoto e inalámbrico a las redes de la organización.",
      "Mantener una infraestructura de red segura y bien documentada.",
    ],
    scope:
      "Esta política se aplica a todas las redes cableadas, inalámbricas, virtuales y en la nube operadas por la organización o por cuenta de esta, incluidos cortafuegos, routers, conmutadores, puntos de acceso inalámbricos, pasarelas VPN y servicios de seguridad de red.",
    covers: [
      "Arquitectura y segmentación de la red.",
      "Reglas de cortafuegos y filtrado de tráfico.",
      "Acceso remoto y redes inalámbricas.",
      "Gestión de los dispositivos de red.",
      "Monitorización de la red y protección de los datos en tránsito.",
    ],
    roles: [
      {
        role: "Ingeniería de Redes",
        responsibilities: [
          "Diseña, implanta y mantiene la infraestructura de red conforme a esta política.",
          "Mantiene actualizados los diagramas de red y los inventarios de dispositivos.",
          "Implementa los cambios aprobados en las reglas de cortafuegos.",
        ],
      },
      {
        role: "Arquitectura de Seguridad",
        responsibilities: [
          "Define las zonas de red y los requisitos de segmentación.",
          "Revisa los cambios propuestos que afecten a los límites de confianza.",
        ],
      },
      {
        role: "Operaciones de Seguridad",
        responsibilities: [
          "Supervisan el tráfico de red y las alertas de los dispositivos de seguridad.",
          "Realizan, junto con ingeniería de redes, la revisión periódica de las reglas de cortafuegos.",
        ],
      },
    ],
    sections: [
      {
        heading: "Arquitectura y segmentación",
        requirements: [
          "La organización deberá dividir sus redes en zonas según la función, el nivel de confianza y la sensibilidad de los datos.",
          "Las redes de producción, de no producción, de usuarios y de gestión deberán estar separadas lógicamente.",
          "Los sistemas que almacenen o traten datos altamente confidenciales o regulados deberán ubicarse en zonas dedicadas y restringidas.",
          "Los dispositivos de invitados y no confiables deberán limitarse a redes sin acceso a los recursos internos.",
          "Deberán mantenerse diagramas de red que muestren las zonas, los límites de confianza y los flujos de datos, y revisarse al menos una vez al año.",
        ],
      },
      {
        heading: "Cortafuegos y filtrado de tráfico",
        intro: "El tráfico entre zonas y hacia redes externas solo se permite cuando exista una necesidad de negocio definida.",
        requirements: [
          "Deberán desplegarse cortafuegos o controles equivalentes en todos los límites entre zonas de red y redes externas.",
          "Los conjuntos de reglas de los cortafuegos deberán denegar todo el tráfico por defecto y permitir únicamente los flujos expresamente aprobados.",
          "Cada regla de cortafuegos deberá tener una justificación de negocio documentada y un responsable.",
          "Las reglas de los cortafuegos deberán revisarse al menos cada 6 meses, eliminando las que no se utilicen o sean excesivamente permisivas.",
          "El tráfico saliente a internet desde los servidores deberá limitarse a destinos aprobados.",
          "El tráfico web de los dispositivos de los usuarios deberá filtrarse para bloquear las categorías maliciosas y prohibidas conocidas.",
        ],
      },
      {
        heading: "Acceso remoto e inalámbrico",
        requirements: [
          "El acceso remoto a las redes internas deberá realizarse mediante soluciones cifradas aprobadas con autenticación multifactor.",
          "Las sesiones de acceso remoto deberán finalizar tras un máximo de 12 horas o tras un periodo de inactividad definido.",
          "Las redes inalámbricas corporativas deberán utilizar WPA3-Enterprise o WPA2-Enterprise con autenticación basada en certificados o individual.",
          "No deberán utilizarse claves precompartidas en las redes inalámbricas que den acceso a recursos internos.",
          "La organización deberá buscar puntos de acceso inalámbricos no autorizados al menos una vez al trimestre.",
        ],
      },
      {
        heading: "Gestión de dispositivos de red",
        requirements: [
          "Los dispositivos de red deberán configurarse conforme a las líneas base de bastionado aprobadas.",
          "La administración de los dispositivos de red solo deberá realizarse mediante protocolos cifrados y desde redes de gestión designadas.",
          "Las configuraciones de los dispositivos de red deberán copiarse automáticamente tras cada cambio y, como mínimo, una vez por semana.",
          "El firmware de los dispositivos de red deberá mantenerse dentro del soporte del fabricante y parchearse conforme a la Política de Gestión de Vulnerabilidades y Parches.",
        ],
      },
      {
        heading: "Monitorización y datos en tránsito",
        requirements: [
          "El tráfico de red en los límites clave deberá supervisarse mediante capacidades de detección o prevención de intrusiones.",
          "Los dispositivos de seguridad de red deberán reenviar sus registros a la plataforma central de registros.",
          "Los datos confidenciales transmitidos por redes no confiables deberán cifrarse mediante TLS 1.2 o superior o un protocolo equivalente aprobado.",
          "Las consultas DNS de los dispositivos de la organización deberán encaminarse a través de resolutores aprobados que filtren los dominios maliciosos conocidos.",
        ],
      },
    ],
  },
  "SH-POL-206": {
    title: "Política de Gestión de Cambios y de la Configuración",
    summary: "Exige que los cambios en los sistemas de producción se registren, evalúen, aprueben, prueben y revisen.",
    purpose:
      "Esta política establece un proceso controlado para modificar los sistemas de información de la organización, de forma que los cambios estén autorizados, probados y trazables y se minimice el riesgo de interrupciones o debilidades de seguridad derivadas de ellos.",
    aims: [
      "Garantizar que todos los cambios en los sistemas de producción se registren y se autoricen.",
      "Evaluar el impacto operativo y de seguridad de los cambios antes de su implantación.",
      "Mantener registros precisos de las configuraciones de los sistemas y de sus relaciones.",
      "Permitir una recuperación rápida cuando un cambio produzca un resultado adverso.",
    ],
    scope:
      "Esta política se aplica a los cambios en la infraestructura de producción, aplicaciones, bases de datos, dispositivos de red, recursos en la nube, herramientas de seguridad y sus configuraciones, ya los realice el personal de la organización o terceros.",
    covers: [
      "Categorías de cambios y vías de aprobación.",
      "Evaluación del riesgo, pruebas y planificación de la reversión.",
      "Cambios urgentes.",
      "Registros de configuración y base de datos de gestión de la configuración.",
      "Revisión posterior a la implantación.",
    ],
    roles: [
      {
        role: "Gestor de Cambios",
        responsibilities: [
          "Es responsable del proceso de gestión de cambios y de sus registros.",
          "Preside el comité asesor de cambios.",
          "Informa sobre las tasas de éxito de los cambios y sobre los cambios no autorizados.",
        ],
      },
      {
        role: "Comité Asesor de Cambios",
        responsibilities: [
          "Revisa y aprueba los cambios normales de riesgo medio o alto.",
          "Revisa a posteriori los cambios urgentes.",
        ],
      },
      {
        role: "Solicitantes e implementadores de cambios",
        responsibilities: [
          "Presentan solicitudes de cambio completas, con los detalles de riesgo, pruebas y reversión.",
          "Implementan únicamente los cambios aprobados dentro de la ventana autorizada.",
        ],
      },
      {
        role: "Función de Seguridad",
        responsibilities: [
          "Revisa los cambios que afecten a controles de seguridad, límites de confianza o datos sensibles.",
        ],
      },
    ],
    sections: [
      {
        heading: "Categorías de cambios",
        requirements: [
          "Todo cambio en un sistema de producción deberá registrarse en el sistema de gestión de cambios antes de su implantación.",
          "Los cambios deberán clasificarse como estándar, normales o urgentes.",
          "Los cambios estándar deberán ser actividades de bajo riesgo y repetibles, preaprobadas por el comité asesor de cambios y documentadas como plantillas.",
          "Los cambios normales deberán evaluarse y aprobarse según su nivel de riesgo antes de su implantación.",
          "Las plantillas de cambios estándar deberán revisarse al menos una vez al año.",
        ],
      },
      {
        heading: "Evaluación, aprobación y pruebas",
        intro: "Cada cambio normal se evalúa en cuanto a su impacto antes de aprobarse.",
        requirements: [
          "Las solicitudes de cambio deberán describir el cambio, los sistemas afectados, el nivel de riesgo, los resultados de las pruebas, el plan de implantación y el plan de reversión.",
          "Los cambios que afecten a controles de seguridad, a límites de red o a sistemas que contengan datos confidenciales deberán ser revisados por la función de seguridad.",
          "Los cambios de alto riesgo deberán ser aprobados por el comité asesor de cambios.",
          "Los cambios deberán probarse antes de su implantación en un entorno de no producción que represente razonablemente el de producción.",
          "La persona que desarrolle un cambio no deberá ser la única que lo apruebe.",
          "Los cambios deberán planificarse para minimizar el impacto en el negocio y comunicarse con antelación a las partes interesadas afectadas.",
        ],
      },
      {
        heading: "Cambios urgentes",
        requirements: [
          "Los cambios urgentes solo deberán utilizarse para restablecer un servicio o para atajar una amenaza de seguridad urgente.",
          "Los cambios urgentes deberán ser autorizados por un aprobador de urgencias designado antes de su implantación.",
          "Los cambios urgentes deberán documentarse íntegramente en un plazo de 2 días hábiles desde su implantación.",
          "Los cambios urgentes deberán ser revisados por el comité asesor de cambios en su siguiente reunión.",
        ],
      },
      {
        heading: "Registros de configuración",
        requirements: [
          "La organización deberá mantener una base de datos de gestión de la configuración que recoja los sistemas de producción, sus propietarios y sus relaciones principales.",
          "Los registros de configuración deberán actualizarse como parte del cierre de cada cambio.",
          "Los registros de configuración de los sistemas críticos deberán conciliarse con los activos descubiertos al menos una vez al trimestre.",
          "Los repositorios de infraestructura como código deberán constituir el registro de configuración de referencia allí donde se utilicen.",
        ],
      },
      {
        heading: "Revisión y cambios no autorizados",
        requirements: [
          "Los cambios fallidos y los que hayan causado incidentes deberán someterse a una revisión posterior a la implantación.",
          "La organización deberá detectar los cambios en producción que carezcan de un registro de cambio aprobado.",
          "Los cambios no autorizados deberán investigarse y, cuando proceda, revertirse.",
          "Los indicadores de gestión de cambios deberán comunicarse mensualmente a la dirección de TI.",
        ],
      },
    ],
  },
  "SH-POL-207": {
    title: "Política de Copias de Seguridad y Recuperación",
    summary: "Establece la frecuencia, conservación, protección y pruebas de restauración de las copias de seguridad para poder recuperar los datos críticos tras una pérdida o un ataque.",
    purpose:
      "Esta política garantiza que la información y los sistemas de la organización puedan restaurarse tras un borrado accidental, un fallo de hardware, un ataque de ransomware o un desastre, dentro de los objetivos de recuperación acordados con el negocio.",
    aims: [
      "Realizar copias de seguridad de los datos y sistemas críticos con una frecuencia que cumpla los objetivos de punto de recuperación.",
      "Proteger las copias de seguridad frente a pérdidas, manipulaciones y ransomware.",
      "Conservar las copias durante los periodos que satisfagan las necesidades empresariales, legales y regulatorias.",
      "Demostrar la capacidad de recuperación mediante pruebas de restauración periódicas.",
    ],
    scope:
      "Esta política se aplica a toda la información y a todos los sistemas de los que depende la organización, incluidos los servidores locales, bases de datos, plataformas SaaS, cargas de trabajo en la nube y equipos que contengan datos de negocio no sincronizados con un almacenamiento gestionado.",
    covers: [
      "Objetivos de recuperación y programación de las copias.",
      "Almacenamiento, cifrado e inmutabilidad de las copias.",
      "Conservación y eliminación de las copias.",
      "Pruebas de restauración y procedimientos de recuperación.",
    ],
    roles: [
      {
        role: "Administrador de Copias de Seguridad",
        responsibilities: [
          "Configura y supervisa los trabajos de copia.",
          "Resuelve las copias fallidas e informa sobre el estado de las copias.",
          "Realiza las pruebas de restauración programadas.",
        ],
      },
      {
        role: "Propietarios de sistemas y de datos",
        responsibilities: [
          "Definen los objetivos de punto de recuperación y de tiempo de recuperación de sus sistemas.",
          "Confirman que el alcance de las copias cubre todos los datos necesarios.",
        ],
      },
      {
        role: "Responsable de Operaciones de TI",
        responsibilities: [
          "Garantiza que la infraestructura de copias tenga capacidad y soporte adecuados.",
          "Revisa los resultados de las pruebas de restauración y hace seguimiento de las correcciones.",
        ],
      },
    ],
    sections: [
      {
        heading: "Objetivos de recuperación y programación",
        requirements: [
          "Cada sistema crítico para el negocio deberá contar con un objetivo de punto de recuperación y un objetivo de tiempo de recuperación documentados y aprobados por su propietario.",
          "La frecuencia de las copias deberá ser suficiente para cumplir el objetivo de punto de recuperación de cada sistema.",
          "Los datos críticos para el negocio deberán copiarse al menos una vez al día.",
          "Los datos alojados en plataformas SaaS deberán copiarse cuando la conservación nativa del proveedor no cumpla los requisitos de la organización.",
          "Los trabajos de copia deberán supervisarse, y los fallidos deberán investigarse y volver a ejecutarse en el plazo de 1 día hábil.",
        ],
      },
      {
        heading: "Protección de las copias de seguridad",
        intro: "Las copias de seguridad deben sobrevivir a los mismos eventos que amenazan a los sistemas principales, incluido el ransomware.",
        requirements: [
          "La organización deberá mantener al menos tres copias de los datos críticos en al menos dos tipos de almacenamiento distintos, con al menos una copia fuera de las instalaciones.",
          "Al menos una copia de los datos críticos deberá ser inmutable o estar aislada lógicamente del entorno de producción.",
          "Las copias de seguridad deberán cifrarse en reposo y en tránsito.",
          "Las claves de cifrado de las copias deberán almacenarse separadamente de las copias que protegen.",
          "El acceso a los sistemas de copia deberá limitarse a administradores autorizados mediante autenticación multifactor y con cuentas distintas de las de la administración cotidiana.",
          "La eliminación o modificación de los parámetros de conservación de las copias deberá requerir aprobación y generar una alerta.",
        ],
      },
      {
        heading: "Conservación y eliminación",
        requirements: [
          "Las copias diarias deberán conservarse al menos 30 días.",
          "Las copias mensuales de los sistemas críticos deberán conservarse al menos 12 meses.",
          "Deberá aplicarse una conservación más prolongada cuando lo exijan la ley, la normativa, un contrato o una retención legal.",
          "Los soportes de copia caducados deberán destruirse o sanearse de forma segura, dejando constancia de la eliminación.",
        ],
      },
      {
        heading: "Pruebas de restauración y recuperación",
        requirements: [
          "Las pruebas de restauración de los sistemas críticos para el negocio deberán realizarse al menos una vez al trimestre.",
          "Deberá realizarse anualmente una prueba de recuperación completa de al menos un sistema crítico para validar el objetivo de tiempo de recuperación.",
          "Los resultados de las pruebas de restauración, incluidos el tiempo empleado y los problemas detectados, deberán documentarse.",
          "Los fallos identificados durante las pruebas de restauración deberán corregirse y volver a probarse en un plazo de 30 días.",
          "Deberán mantenerse procedimientos de recuperación documentados y almacenados en un lugar que siga siendo accesible si los sistemas principales no estuvieran disponibles.",
        ],
      },
    ],
  },
  "SH-POL-208": {
    title: "Política de Seguridad en la Nube",
    summary: "Regula la selección, configuración, acceso y monitorización de los servicios en la nube que utiliza la organización.",
    purpose:
      "Esta política fija los requisitos para adoptar y operar de forma segura los servicios en la nube, de modo que la organización conserve el control de sus datos, comprenda sus responsabilidades en el modelo de responsabilidad compartida y configure de forma segura los entornos en la nube.",
    aims: [
      "Garantizar que los servicios en la nube se aprueben y se evalúen antes de su uso.",
      "Aclarar las responsabilidades de seguridad compartidas entre la organización y sus proveedores.",
      "Configurar las cuentas y los recursos en la nube de forma segura y coherente.",
      "Mantener la visibilidad de la actividad y de la postura de seguridad en la nube.",
    ],
    scope:
      "Esta política se aplica a toda oferta de infraestructura, plataforma y software como servicio utilizada para almacenar, tratar o transmitir información de la organización, incluidos los servicios contratados por las unidades de negocio, y a todo el personal que los administre o utilice.",
    covers: [
      "Aprobación de servicios en la nube y evaluación de proveedores.",
      "Responsabilidad compartida y ubicación de los datos.",
      "Gestión de identidades y accesos en la nube.",
      "Configuración segura y gestión de la postura de seguridad.",
      "Registro, monitorización y planificación de la salida en la nube.",
    ],
    roles: [
      {
        role: "Equipo de Plataforma en la Nube",
        responsibilities: [
          "Gestiona la estructura de la organización en la nube, las barreras de protección y las zonas de aterrizaje.",
          "Corrige los hallazgos de postura en los componentes compartidos de la plataforma.",
        ],
      },
      {
        role: "Propietarios de cuentas y servicios en la nube",
        responsibilities: [
          "Garantizan que los recursos de sus cuentas cumplan esta política.",
          "Corrigen los hallazgos de postura dentro de los plazos exigidos.",
        ],
      },
      {
        role: "Función de Seguridad",
        responsibilities: [
          "Evalúa los nuevos servicios y proveedores en la nube antes de su aprobación.",
          "Opera la monitorización de la postura de seguridad en la nube.",
        ],
      },
      {
        role: "Compras",
        responsibilities: [
          "Garantiza que las contrataciones en la nube sigan el proceso de aprobación.",
          "Incluye las cláusulas de seguridad exigidas en los contratos de servicios en la nube.",
        ],
      },
    ],
    sections: [
      {
        heading: "Aprobación de servicios y evaluación de proveedores",
        requirements: [
          "Los servicios en la nube no deberán utilizarse para almacenar o tratar datos de la organización hasta que se aprueben mediante el proceso de aprobación de servicios en la nube.",
          "Los proveedores deberán evaluarse en cuanto a su capacidad de seguridad, utilizando informes de aseguramiento independientes cuando existan, antes de su aprobación y, posteriormente, al menos una vez al año.",
          "Los contratos con los proveedores de servicios en la nube deberán definir las responsabilidades de seguridad, las obligaciones de notificación de brechas y la devolución o supresión de los datos al finalizar la relación.",
          "La organización deberá mantener un inventario de los servicios en la nube aprobados, de sus propietarios y de las clasificaciones de los datos que contienen.",
          "La organización deberá vigilar el uso de servicios en la nube no aprobados.",
        ],
      },
      {
        heading: "Responsabilidad compartida y ubicación de los datos",
        requirements: [
          "Para cada servicio en la nube aprobado, la organización deberá documentar qué controles de seguridad corresponden al proveedor y cuáles a la propia organización.",
          "Los datos solo deberán almacenarse en las regiones aprobadas para su clasificación y conforme a los requisitos legales aplicables.",
          "Los datos confidenciales en servicios en la nube deberán cifrarse en reposo y en tránsito.",
          "Cuando se utilicen claves de cifrado gestionadas por el cliente, la gestión de claves deberá seguir los requisitos de criptografía de la organización.",
        ],
      },
      {
        heading: "Identidad y acceso",
        intro: "Los planos de control en la nube son objetivos de gran valor y exigen controles de acceso robustos.",
        requirements: [
          "El acceso a las consolas de administración y a las API de la nube deberá integrarse con el proveedor de identidad central de la organización cuando sea posible.",
          "Deberá exigirse autenticación multifactor para todo acceso humano a las interfaces de administración de la nube.",
          "Las cuentas raíz o de propietario deberán protegerse con autenticación multifactor respaldada por hardware y utilizarse únicamente para las tareas que lo requieran.",
          "Los permisos deberán seguir el principio de mínimo privilegio y concederse mediante roles en lugar de a usuarios individuales.",
          "Deberán evitarse las claves de acceso de larga duración en favor de credenciales de corta duración, y las claves que subsistan deberán rotarse al menos cada 90 días.",
          "El acceso administrativo a la nube deberá revisarse al menos una vez al trimestre.",
        ],
      },
      {
        heading: "Configuración segura y postura de seguridad",
        requirements: [
          "Los entornos en la nube deberán aprovisionarse mediante plantillas de infraestructura como código y barreras de protección aprobadas siempre que sea factible.",
          "Los recursos de almacenamiento deberán bloquear el acceso público por defecto, y cualquier exposición pública deberá contar con aprobación documentada.",
          "Las cargas de trabajo de producción y de no producción deberán residir en cuentas, suscripciones o proyectos distintos.",
          "La organización deberá evaluar de forma continua las configuraciones en la nube frente a las líneas base aprobadas mediante herramientas de gestión de la postura de seguridad.",
          "Los hallazgos de postura críticos deberán corregirse en un plazo de 7 días y los altos en un plazo de 30 días.",
        ],
      },
      {
        heading: "Registro, monitorización y salida",
        requirements: [
          "El registro de auditoría del plano de control deberá estar activado en todas las cuentas en la nube y reenviarse a la plataforma central de registros.",
          "Los registros de auditoría de la nube deberán protegerse frente a modificaciones por parte de los administradores de las cuentas.",
          "Deberán configurarse alertas para eventos de alto riesgo, como el uso de la cuenta raíz, la desactivación del registro y los cambios en las políticas de identidad.",
          "Cada servicio crítico en la nube deberá contar con un plan de salida documentado que describa cómo se recuperarían o migrarían los datos y las cargas de trabajo.",
        ],
      },
    ],
  },
  "SH-POL-209": {
    title: "Política de Desarrollo Seguro de Software",
    summary: "Incorpora la seguridad en todas las fases del desarrollo de software, desde los requisitos y el diseño hasta las pruebas, la publicación y el mantenimiento.",
    purpose:
      "Esta política establece las prácticas de seguridad que la organización sigue al desarrollar, adquirir y mantener software, de forma que las aplicaciones se diseñen y construyan para resistir ataques y las vulnerabilidades se encuentren y corrijan antes de llegar a producción.",
    aims: [
      "Integrar actividades de seguridad en cada fase del ciclo de vida de desarrollo de software.",
      "Dotar a los desarrolladores de los conocimientos y las herramientas para escribir código seguro.",
      "Detectar pronto los defectos de seguridad mediante pruebas automatizadas y manuales.",
      "Proteger el código fuente, los flujos de construcción y el software publicado frente a manipulaciones.",
    ],
    scope:
      "Esta política se aplica a todo el software desarrollado por la organización o por cuenta de esta, incluidas las aplicaciones web y móviles, las API, las herramientas internas, la infraestructura como código y los scripts que se ejecutan en producción, así como a todos los empleados y contratistas que diseñen, escriban, revisen, construyan o publiquen dicho software.",
    covers: [
      "Requisitos de seguridad y modelado de amenazas.",
      "Estándares de programación segura y formación de los desarrolladores.",
      "Revisión de código y pruebas de seguridad.",
      "Componentes de terceros y de código abierto.",
      "Protección del código fuente, de los flujos de construcción y de los entornos.",
    ],
    roles: [
      {
        role: "Responsable de Ingeniería",
        responsibilities: [
          "Garantiza que los equipos de desarrollo cumplan esta política.",
          "Asigna tiempo para la corrección de los defectos de seguridad.",
        ],
      },
      {
        role: "Equipo de Seguridad de Aplicaciones",
        responsibilities: [
          "Mantiene los estándares de programación segura y las herramientas de pruebas de seguridad.",
          "Apoya el modelado de amenazas y revisa los diseños de alto riesgo.",
          "Hace seguimiento de los defectos de seguridad e informa sobre su corrección.",
        ],
      },
      {
        role: "Desarrolladores",
        responsibilities: [
          "Escriben el código conforme a los estándares de programación segura.",
          "Corrigen los defectos de seguridad de su código dentro de los plazos exigidos.",
        ],
      },
      {
        role: "Responsables de Producto",
        responsibilities: [
          "Incluyen los requisitos de seguridad en los backlogs de producto.",
          "Aceptan o escalan el riesgo de seguridad residual antes de la publicación.",
        ],
      },
    ],
    sections: [
      {
        heading: "Requisitos y diseño",
        requirements: [
          "Deberán definirse requisitos de seguridad para cada aplicación nueva o funcionalidad significativa, teniendo en cuenta los datos que maneje.",
          "Deberá realizarse un modelado de amenazas para las aplicaciones nuevas y para los cambios que introduzcan nuevos límites de confianza, flujos de datos o mecanismos de autenticación.",
          "Los diseños de las aplicaciones que traten datos confidenciales deberán ser revisados por el equipo de seguridad de aplicaciones antes de iniciar el desarrollo.",
          "Las aplicaciones deberán utilizar los componentes de autenticación, autorización, registro y criptografía aprobados por la organización en lugar de implementaciones propias.",
        ],
      },
      {
        heading: "Programación segura y formación",
        requirements: [
          "La organización deberá publicar estándares de programación segura que aborden las clases de vulnerabilidad más comunes, como la inyección, el control de acceso deficiente y la deserialización insegura.",
          "Los desarrolladores deberán completar formación en programación segura al incorporarse y, posteriormente, al menos una vez al año.",
          "Los secretos, como contraseñas, claves y tokens, no deberán almacenarse en el código fuente ni en archivos de configuración incorporados al control de versiones.",
          "Los repositorios de código fuente deberán analizarse automáticamente en busca de secretos incorporados, y todo secreto expuesto deberá revocarse y rotarse en un plazo de 24 horas desde su descubrimiento.",
          "Las entradas de los usuarios y de los sistemas externos deberán validarse, y las salidas deberán codificarse según su contexto.",
        ],
      },
      {
        heading: "Revisión de código y pruebas de seguridad",
        intro: "Los defectos de seguridad son más baratos de corregir cuando se encuentran antes de la publicación.",
        requirements: [
          "Todos los cambios de código deberán ser revisados por un compañero distinto del autor antes de integrarse en la rama principal.",
          "Las pruebas estáticas de seguridad de aplicaciones deberán ejecutarse automáticamente en cada solicitud de integración de las aplicaciones incluidas en el alcance.",
          "Deberán realizarse pruebas dinámicas de seguridad en las aplicaciones expuestas a internet antes de las versiones principales y, como mínimo, una vez al trimestre.",
          "Las aplicaciones expuestas a internet que traten datos confidenciales deberán someterse a una prueba de penetración independiente al menos una vez al año.",
          "Los defectos de seguridad críticos y altos deberán corregirse antes de la publicación, salvo que se apruebe una aceptación del riesgo.",
          "Los defectos de seguridad detectados en producción deberán corregirse dentro de los plazos definidos en la Política de Gestión de Vulnerabilidades y Parches.",
        ],
      },
      {
        heading: "Componentes de terceros y de código abierto",
        requirements: [
          "Los componentes de terceros y de código abierto deberán obtenerse de fuentes de confianza y registrarse en una lista de materiales de software (SBOM) de cada aplicación.",
          "Las dependencias deberán analizarse automáticamente durante la construcción en busca de vulnerabilidades conocidas y problemas de licencias.",
          "Los componentes sin mantenimiento o sin una versión soportada libre de vulnerabilidades críticas deberán sustituirse.",
          "Los componentes nuevos deberán revisarse en cuanto a su idoneidad de seguridad y de licencia antes de su primer uso.",
        ],
      },
      {
        heading: "Código fuente, flujos de construcción y entornos",
        requirements: [
          "Los repositorios de código fuente deberán exigir acceso autenticado con autenticación multifactor y permisos de mínimo privilegio.",
          "Las ramas principales deberán protegerse de modo que los cambios requieran revisión y la superación de las comprobaciones de seguridad.",
          "Los flujos de construcción y despliegue deberán ejecutarse con identidades dedicadas y no deberán exponer credenciales en los registros.",
          "Los entornos de desarrollo, prueba y producción deberán estar separados, y los desarrolladores no deberán tener acceso de escritura permanente a producción.",
          "Los datos de producción no deberán utilizarse en entornos de no producción salvo que se hayan enmascarado o exista una excepción aprobada.",
          "Los artefactos de publicación deberán versionarse y su integridad deberá poder verificarse antes del despliegue.",
        ],
      },
    ],
  },
  "SH-POL-210": {
    title: "Política de Dispositivos Móviles y BYOD",
    summary: "Establece las condiciones en que los dispositivos móviles corporativos y de propiedad personal pueden acceder a la información de la organización.",
    purpose:
      "Esta política define los requisitos de seguridad para los teléfonos inteligentes, tabletas y otros dispositivos móviles que acceden a la información de la organización, incluidos los de propiedad personal, de modo que se protejan los datos de la organización respetando la privacidad de los propietarios de los dispositivos.",
    aims: [
      "Garantizar que solo accedan a los datos de la organización dispositivos móviles gestionados y conformes.",
      "Separar y proteger los datos de la organización en los dispositivos de propiedad personal.",
      "Permitir una respuesta rápida cuando un dispositivo se pierda, sea robado o resulte comprometido.",
      "Establecer expectativas claras y límites de privacidad para los usuarios de los dispositivos.",
    ],
    scope:
      "Esta política se aplica a todos los dispositivos móviles propiedad de la organización y a cualquier teléfono inteligente, tableta o portátil de propiedad personal utilizado para acceder al correo electrónico, las aplicaciones o los datos de la organización, así como a todos los empleados, contratistas y demás usuarios de dichos dispositivos.",
    covers: [
      "Elegibilidad e incorporación de dispositivos.",
      "Configuración mínima de seguridad de los dispositivos móviles.",
      "Separación de los datos de la organización en los dispositivos personales.",
      "Dispositivos perdidos o robados y baja de usuarios.",
      "Obligaciones de los usuarios y privacidad.",
    ],
    roles: [
      {
        role: "Ingeniería de Puestos de Trabajo",
        responsibilities: [
          "Opera la plataforma de gestión de dispositivos y aplicaciones móviles.",
          "Define y aplica las políticas de conformidad de los dispositivos incorporados.",
        ],
      },
      {
        role: "Servicio de Atención de TI",
        responsibilities: [
          "Asiste a los usuarios en la incorporación y baja de dispositivos.",
          "Ejecuta el bloqueo o borrado remoto cuando se comunica la pérdida o el robo de un dispositivo.",
        ],
      },
      {
        role: "Usuarios de dispositivos",
        responsibilities: [
          "Mantienen sus dispositivos actualizados y protegidos conforme a esta política.",
          "Comunican la pérdida o el robo de los dispositivos en un plazo de 24 horas.",
          "No intentan eludir los controles de gestión de los dispositivos.",
        ],
      },
      {
        role: "Recursos Humanos",
        responsibilities: [
          "Notifica a TI las bajas del personal para que el acceso desde los dispositivos se retire el último día laborable.",
        ],
      },
    ],
    sections: [
      {
        heading: "Elegibilidad e incorporación",
        requirements: [
          "Los dispositivos móviles deberán incorporarse a la plataforma de gestión de dispositivos o aplicaciones móviles de la organización antes de acceder a datos de la organización.",
          "Los dispositivos de propiedad personal solo deberán permitirse cuando el usuario haya aceptado los términos de esta política.",
          "Los dispositivos con versiones de sistema operativo que ya no cuenten con soporte del fabricante no deberán poder acceder a datos de la organización.",
          "Los dispositivos con jailbreak o root deberán bloquearse para el acceso a datos de la organización.",
          "El acceso a los recursos de la organización deberá condicionarse a que el dispositivo supere las comprobaciones de conformidad en el momento del acceso.",
        ],
      },
      {
        heading: "Configuración de seguridad de los dispositivos",
        requirements: [
          "Los dispositivos deberán protegerse mediante bloqueo de pantalla con un PIN de al menos 6 dígitos, una contraseña o autenticación biométrica.",
          "Los dispositivos deberán bloquearse automáticamente tras un máximo de 5 minutos de inactividad.",
          "El almacenamiento del dispositivo deberá estar cifrado.",
          "Las actualizaciones de seguridad del sistema operativo deberán instalarse en un plazo de 14 días desde su publicación.",
          "Las aplicaciones que accedan a datos de la organización solo deberán obtenerse de las tiendas de aplicaciones oficiales o del catálogo gestionado de la organización.",
        ],
      },
      {
        heading: "Protección de datos en dispositivos personales",
        intro: "En los dispositivos de propiedad personal, los controles se centran en los datos de la organización y no en la totalidad del dispositivo.",
        requirements: [
          "Los datos de la organización en dispositivos de propiedad personal deberán mantenerse dentro de aplicaciones gestionadas o de un perfil de trabajo gestionado.",
          "Deberá bloquearse la copia, el pegado o el guardado de datos de la organización desde aplicaciones gestionadas hacia aplicaciones no gestionadas.",
          "Los datos de la organización no deberán copiarse a cuentas personales de almacenamiento en la nube.",
          "La organización no deberá recopilar contenido personal, como correo electrónico personal, fotografías, mensajes o historial de navegación, de los dispositivos de propiedad personal.",
          "Deberá informarse a los usuarios de la información que puede ver la plataforma de gestión y de las acciones que puede ejecutar.",
        ],
      },
      {
        heading: "Dispositivos perdidos, robados o comprometidos",
        requirements: [
          "Los usuarios deberán comunicar la pérdida o el robo de dispositivos al servicio de atención de TI en un plazo de 24 horas.",
          "Los dispositivos propiedad de la organización que se comuniquen como perdidos o robados deberán bloquearse de forma remota y, si no se recuperan, borrarse por completo.",
          "En los dispositivos de propiedad personal comunicados como perdidos o robados deberán borrarse de forma selectiva los datos de la organización y las aplicaciones gestionadas.",
          "A los dispositivos que incumplan la conformidad durante más de 7 días deberá bloqueárseles el acceso a los datos de la organización hasta que se corrija.",
        ],
      },
      {
        heading: "Baja de usuarios y obligaciones de los usuarios",
        requirements: [
          "Los datos y el acceso de la organización deberán eliminarse de los dispositivos de propiedad personal a más tardar el último día laborable del usuario.",
          "Los dispositivos móviles propiedad de la organización deberán devolverse en el momento de la baja y borrarse antes de volver a asignarse.",
          "Los usuarios no deberán compartir los dispositivos incorporados con otras personas de forma que se expongan datos de la organización.",
          "Los usuarios deberán evitar conectarse a redes inalámbricas públicas no confiables sin utilizar la VPN aprobada cuando accedan a los sistemas de la organización.",
        ],
      },
    ],
  },
};
