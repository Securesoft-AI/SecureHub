// Versiones en español del paquete de acceso y protección de datos (pk-pol-access).

import type { PolicyTranslations } from "./types";

export const ACCESS_POLICIES_ES: PolicyTranslations = {
  "SH-POL-101": {
    title: "Política de Control de Accesos",
    summary: "Define cómo se solicita, aprueba, concede, revisa y retira el acceso a la información y a los sistemas conforme al principio de mínimo privilegio.",
    purpose:
      "Esta política establece las reglas que la organización aplica para controlar el acceso lógico a su información, aplicaciones e infraestructura, de modo que cada persona y cada sistema disponga únicamente del acceso necesario para desempeñar una función de negocio aprobada.",
    aims: [
      "Garantizar que el acceso se conceda únicamente por una necesidad de negocio documentada y con la aprobación adecuada.",
      "Aplicar de forma coherente los principios de mínimo privilegio y segregación de funciones en todos los sistemas.",
      "Retirar o ajustar el acceso con prontitud cuando una persona se incorpora, cambia de puesto o abandona la organización.",
      "Ofrecer garantías, mediante revisiones periódicas, de que los derechos de acceso siguen siendo adecuados.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, contratistas, personal temporal y terceros que accedan a sistemas de información propiedad de la organización, operados o gestionados por ella, ya estén alojados en sus instalaciones o en un proveedor de servicios o de nube.",
    covers: [
      "Principios de control de acceso y diseño de accesos basado en roles.",
      "Ciclo de vida del acceso: altas, cambios y bajas.",
      "Revisiones periódicas de accesos de usuarios y recertificación.",
      "Segregación de funciones y combinaciones de acceso incompatibles.",
      "Acceso mediante cuentas compartidas, genéricas y de terceros.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y aprueba las excepciones a ella.",
          "Informa a la alta dirección de los resultados de las revisiones de accesos y de los riesgos de acceso relevantes.",
        ],
      },
      {
        role: "Responsables de Sistemas y de Datos",
        responsibilities: [
          "Definen los roles y niveles de acceso adecuados para cada sistema del que son responsables.",
          "Aprueban las solicitudes de acceso y realizan las revisiones periódicas de accesos de sus sistemas.",
        ],
      },
      {
        role: "Mandos Directivos",
        responsibilities: [
          "Solicitan el acceso de su personal en función de sus responsabilidades laborales.",
          "Comunican sin demora a Recursos Humanos y a TI los cambios de puesto y las salidas.",
        ],
      },
      {
        role: "Servicios de TI y Administración de Identidades",
        responsibilities: [
          "Conceden, modifican y revocan accesos únicamente sobre la base de una solicitud aprobada.",
          "Mantienen un registro auditable de todos los cambios de acceso.",
        ],
      },
      {
        role: "Todos los Usuarios",
        responsibilities: [
          "Utilizan únicamente el acceso que se les ha concedido y solo para fines autorizados.",
          "Comunican cualquier acceso que mantengan y que ya no necesiten.",
        ],
      },
    ],
    sections: [
      {
        heading: "Principios de control de acceso",
        intro: "Estos principios rigen el diseño del acceso en todos los sistemas incluidos en el alcance.",
        requirements: [
          "La organización deberá conceder acceso a la información y a los sistemas conforme a los principios de mínimo privilegio y necesidad de conocer.",
          "La organización deberá denegar el acceso por defecto salvo que se haya autorizado de forma explícita.",
          "Los responsables de sistemas deberán definir el acceso mediante roles documentados y no mediante permisos asignados a personas concretas, siempre que el sistema lo permita.",
          "A cada usuario deberá asignársele un identificador único, y el acceso deberá poder trazarse hasta una persona concreta o un servicio aprobado.",
          "La organización deberá mantener un registro de los sistemas incluidos en el alcance que identifique el responsable y el modelo de acceso de cada uno.",
        ],
      },
      {
        heading: "Solicitudes de acceso y aprovisionamiento",
        requirements: [
          "Todas las solicitudes de acceso nuevo o modificado deberán presentarse mediante el proceso de solicitud aprobado por la organización y quedar registradas.",
          "Las solicitudes de acceso deberán ser aprobadas, antes del aprovisionamiento, por el mando directivo del usuario y por el responsable del sistema afectado.",
          "TI no deberá aprovisionar el acceso antes de que Recursos Humanos o el responsable del contrato hayan confirmado la relación laboral o la contratación del usuario.",
          "El acceso de contratistas y terceros deberá configurarse con una fecha de caducidad que no exceda del final de la vigencia del contrato.",
          "El acceso deberá aprovisionarse dentro del alcance aprobado, y cualquier acceso que lo exceda deberá requerir una solicitud independiente.",
        ],
      },
      {
        heading: "Cambios de puesto y retirada de accesos",
        requirements: [
          "Los mandos directivos deberán comunicar a Recursos Humanos y a TI cualquier traslado interno o cambio de responsabilidades en un plazo de dos días hábiles.",
          "El acceso que deje de ser necesario tras un cambio de puesto deberá retirarse en un plazo de cinco días hábiles desde que el cambio surta efecto.",
          "El acceso de las personas que causen baja deberá deshabilitarse, como máximo, al finalizar su último día de trabajo.",
          "El acceso de las personas despedidas o que se marchen en circunstancias adversas deberá deshabilitarse de inmediato tras la notificación.",
          "Las cuentas inactivas durante 90 días deberán deshabilitarse, y las cuentas inactivas durante 180 días deberán eliminarse, salvo que exista una excepción aprobada.",
        ],
      },
      {
        heading: "Revisiones de accesos",
        intro: "Las revisiones periódicas confirman que el acceso concedido sigue respondiendo a una necesidad de negocio.",
        requirements: [
          "Los responsables de sistemas deberán revisar los derechos de acceso de los usuarios a sus sistemas al menos cada seis meses.",
          "El acceso a los sistemas que almacenen datos confidenciales o regulados deberá revisarse al menos trimestralmente.",
          "Los accesos inadecuados o injustificados identificados durante una revisión deberán retirarse en un plazo de cinco días hábiles.",
          "La evidencia de cada revisión, incluidos el revisor, la fecha y las acciones adoptadas, deberá conservarse durante al menos dos años.",
        ],
      },
      {
        heading: "Segregación de funciones y cuentas compartidas",
        requirements: [
          "Los responsables de sistemas deberán identificar las combinaciones de acceso que generen un conflicto de funciones e impedir que se asignen a un mismo usuario.",
          "Cuando no pueda aplicarse la segregación de funciones, el responsable del sistema deberá implantar y documentar controles compensatorios, como la revisión independiente de la actividad.",
          "No deberán utilizarse cuentas de usuario compartidas o genéricas salvo que sea técnicamente inevitable y lo apruebe el Responsable de Seguridad de la Información.",
          "Cada cuenta compartida aprobada deberá tener un responsable designado y sus credenciales deberán almacenarse en la caja fuerte de credenciales aprobada por la organización.",
        ],
      },
    ],
  },
  "SH-POL-102": {
    title: "Política de Identidad y Autenticación",
    summary: "Establece los requisitos para las identidades de usuario, las contraseñas, la autenticación multifactor, el inicio de sesión único y las cuentas de servicio.",
    purpose:
      "Esta política define cómo la organización establece, gestiona y verifica las identidades digitales, de modo que solo las personas y los servicios autenticados y autorizados puedan acceder a sus sistemas de información.",
    aims: [
      "Garantizar que cada identidad sea única, esté verificada y pueda atribuirse a una persona o responsable concretos.",
      "Aplicar prácticas de contraseñas robustas y usables, alineadas con las recomendaciones actuales del sector.",
      "Exigir autenticación multifactor siempre que el riesgo de compromiso sea significativo.",
      "Centralizar la autenticación mediante inicio de sesión único para simplificar el control y la supervisión.",
      "Gobernar las identidades no humanas, como las cuentas de servicio, con el mismo rigor que las cuentas de usuario.",
    ],
    scope:
      "Esta política se aplica a todas las identidades utilizadas para acceder a sistemas propiedad de la organización o gestionados por ella, incluidas las cuentas del personal, las cuentas de contratistas, las cuentas administrativas, las cuentas de servicio, las credenciales de aplicación y las claves de API.",
    covers: [
      "Verificación de la identidad y creación de cuentas.",
      "Requisitos de contraseñas y frases de contraseña.",
      "Autenticación multifactor.",
      "Inicio de sesión único e identidad federada.",
      "Cuentas de servicio y credenciales de máquina.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y fija las normas de autenticación de la organización.",
          "Aprueba las excepciones cuando un sistema no pueda cumplir los requisitos de autenticación.",
        ],
      },
      {
        role: "Equipo de Gestión de Identidades y Accesos",
        responsibilities: [
          "Opera el proveedor de identidad y la plataforma de inicio de sesión único de la organización.",
          "Configura los parámetros de contraseñas, bloqueo y autenticación multifactor conforme a esta política.",
        ],
      },
      {
        role: "Responsables de Aplicaciones y de Servicios",
        responsibilities: [
          "Integran sus aplicaciones con la plataforma de inicio de sesión único de la organización cuando sea posible.",
          "Registran y mantienen la titularidad de las cuentas de servicio utilizadas por sus aplicaciones.",
        ],
      },
      {
        role: "Centro de Atención al Usuario",
        responsibilities: [
          "Verifica la identidad de los usuarios antes de restablecer credenciales o factores de autenticación.",
        ],
      },
      {
        role: "Todos los Usuarios",
        responsibilities: [
          "Mantienen la confidencialidad de sus contraseñas y dispositivos de autenticación y los conservan bajo su exclusivo control.",
          "Comunican de inmediato al equipo de seguridad cualquier sospecha de compromiso de credenciales.",
        ],
      },
    ],
    sections: [
      {
        heading: "Gestión de identidades",
        requirements: [
          "La organización deberá verificar la identidad de cada persona antes de emitirle una cuenta.",
          "Cada cuenta deberá estar asociada de forma exclusiva a una persona, y las cuentas no deberán compartirse entre personas.",
          "La organización deberá mantener una única fuente de identidad autorizada a partir de la cual se creen y deshabiliten las cuentas del personal.",
          "Las actividades administrativas deberán realizarse con cuentas distintas de las utilizadas para el correo electrónico y la navegación web general.",
          "Los nombres de usuario no deberán revelar el nivel de privilegio ni el rol cuando pueda evitarse.",
        ],
      },
      {
        heading: "Contraseñas",
        intro: "Las reglas de contraseñas priorizan la longitud y la comprobación frente a valores conocidos como comprometidos por encima de la complejidad y la rotación frecuente.",
        requirements: [
          "Las contraseñas de usuario deberán tener al menos 12 caracteres, y las contraseñas de las cuentas privilegiadas deberán tener al menos 15 caracteres.",
          "Los sistemas deberán admitir contraseñas de al menos 64 caracteres y aceptar todos los caracteres imprimibles, incluidos los espacios.",
          "Las contraseñas nuevas y las modificadas deberán contrastarse con una lista de contraseñas de uso común, previsibles y conocidas como comprometidas, y rechazarse si figuran en ella.",
          "La organización no deberá exigir cambios periódicos de contraseña, pero deberá exigir un cambio siempre que existan indicios o sospechas de compromiso.",
          "Los sistemas deberán bloquear o ralentizar una cuenta tras no más de 10 intentos de autenticación fallidos consecutivos.",
          "Las contraseñas deberán almacenarse únicamente como hashes con sal, mediante un algoritmo adaptativo aprobado como Argon2id, scrypt, bcrypt o PBKDF2.",
          "Deberá proporcionarse a los usuarios un gestor de contraseñas aprobado, y estos no deberán reutilizar las contraseñas de la organización en ningún otro servicio.",
        ],
      },
      {
        heading: "Autenticación multifactor",
        requirements: [
          "Deberá exigirse autenticación multifactor para todo acceso remoto, todas las aplicaciones en la nube y expuestas a internet, el correo electrónico y todo acceso privilegiado.",
          "La organización deberá dar preferencia a los autenticadores resistentes al phishing, como las llaves de seguridad FIDO2 o las passkeys de plataforma, y deberá exigirlos para las cuentas privilegiadas.",
          "Los códigos de un solo uso por SMS o llamada de voz no deberán utilizarse como factor de autenticación salvo mediante una excepción aprobada y de duración limitada.",
          "Los autenticadores basados en notificaciones push deberán emplear la coincidencia de números o un mecanismo equivalente que evite la aprobación de solicitudes no solicitadas.",
          "El centro de atención al usuario deberá restablecer o volver a registrar un factor de autenticación únicamente tras verificar la identidad del usuario mediante un método fuera de banda.",
        ],
      },
      {
        heading: "Inicio de sesión único y federación",
        requirements: [
          "Las aplicaciones compatibles con SAML 2.0 u OpenID Connect deberán integrarse con el proveedor de identidad de la organización.",
          "Las cuentas locales de las aplicaciones deberán deshabilitarse para los usuarios autenticados mediante inicio de sesión único, salvo las cuentas de acceso de emergencia documentadas.",
          "Las sesiones interactivas deberán exigir una nueva autenticación tras un máximo de 12 horas y, en las sesiones privilegiadas, tras 15 minutos de inactividad.",
          "La relación de confianza de federación con proveedores de identidad externos deberá ser aprobada por el Responsable de Seguridad de la Información y revisarse anualmente.",
        ],
      },
      {
        heading: "Cuentas de servicio y credenciales de máquina",
        intro: "Las identidades no humanas son objetivo frecuente de ataques y deben tener responsable, estar inventariadas y limitadas.",
        requirements: [
          "Cada cuenta de servicio deberá tener un responsable designado y una finalidad documentada, registrados en el inventario de cuentas de servicio.",
          "A las cuentas de servicio deberán concedérseles únicamente los permisos que requiera su función y deberá denegárseles el inicio de sesión interactivo cuando la plataforma lo permita.",
          "Las contraseñas de las cuentas de servicio deberán tener al menos 32 caracteres generados aleatoriamente, o la cuenta deberá utilizar en su lugar autenticación mediante certificado, identidad de carga de trabajo o identidad gestionada.",
          "Los secretos, las claves de API y los tokens deberán almacenarse en el sistema de gestión de secretos aprobado por la organización y no deberán incrustarse en el código fuente ni en archivos de configuración.",
          "Las credenciales de las cuentas de servicio deberán rotarse al menos anualmente, e inmediatamente cuando abandone la organización una persona que las conozca o se sospeche un compromiso.",
          "Los responsables deberán revisar sus cuentas de servicio al menos cada seis meses y eliminar las que ya no sean necesarias.",
        ],
      },
    ],
  },
  "SH-POL-103": {
    title: "Política de Gestión de Accesos Privilegiados",
    summary: "Regula la concesión, el uso, la supervisión y la revisión del acceso administrativo y de otros accesos privilegiados a los sistemas de la organización.",
    purpose:
      "Esta política establece cómo la organización restringe y supervisa el acceso privilegiado, que entraña el mayor potencial de daño si se utiliza indebidamente o se ve comprometido.",
    aims: [
      "Limitar el número de cuentas privilegiadas y el alcance de sus permisos al mínimo necesario.",
      "Garantizar que el acceso privilegiado esté protegido mediante autenticación robusta y una gestión controlada de las credenciales.",
      "Registrar y supervisar la actividad privilegiada para poder detectar e investigar usos indebidos.",
      "Disponer de un acceso de emergencia controlado, con responsabilidad atribuible y revisado tras su uso.",
    ],
    scope:
      "Esta política se aplica a todas las cuentas y roles privilegiados del entorno de la organización, incluidos los administradores de dominio y de directorio, los administradores de tenants y suscripciones en la nube, los administradores de bases de datos, los administradores de dispositivos de red y de seguridad, las cuentas root y de administrador local, y los roles privilegiados de aplicación.",
    covers: [
      "Definición e inventario de cuentas privilegiadas.",
      "Concesión y elevación temporal de privilegios.",
      "Custodia de credenciales en caja fuerte y estaciones de trabajo administrativas seguras.",
      "Supervisión y registro de sesiones.",
      "Acceso de emergencia (break-glass).",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y aprueba el acceso privilegiado permanente a los sistemas críticos.",
          "Revisa al menos trimestralmente las métricas y las excepciones del acceso privilegiado.",
        ],
      },
      {
        role: "Administradores de la Gestión de Accesos Privilegiados",
        responsibilities: [
          "Operan la plataforma de gestión de accesos privilegiados y la caja fuerte de credenciales.",
          "Mantienen el inventario de cuentas privilegiadas.",
        ],
      },
      {
        role: "Responsables de Sistemas",
        responsibilities: [
          "Aprueban las solicitudes de acceso privilegiado a sus sistemas.",
          "Realizan revisiones trimestrales del acceso privilegiado a sus sistemas.",
        ],
      },
      {
        role: "Operaciones de Seguridad",
        responsibilities: [
          "Supervisan las alertas de actividad privilegiada e investigan las anomalías.",
          "Revisan todos los usos de las cuentas de acceso de emergencia.",
        ],
      },
      {
        role: "Usuarios Privilegiados",
        responsibilities: [
          "Utilizan el acceso privilegiado únicamente para tareas administrativas aprobadas.",
          "Realizan sus actividades diarias con su cuenta estándar, sin privilegios.",
        ],
      },
    ],
    sections: [
      {
        heading: "Concesión de acceso privilegiado",
        requirements: [
          "El acceso privilegiado deberá concederse únicamente por una necesidad de negocio documentada y aprobada por el responsable del sistema y por el Responsable de Seguridad de la Información o su delegado.",
          "La organización deberá mantener un inventario completo de las cuentas privilegiadas, con sus responsables, sistemas y niveles de permiso.",
          "El acceso privilegiado deberá emitirse mediante cuentas nominales dedicadas, distintas de la cuenta estándar del usuario.",
          "La organización deberá utilizar la elevación puntual (just-in-time), que caduque automáticamente en un máximo de ocho horas, siempre que la plataforma lo permita.",
          "Los privilegios permanentes de administrador global o equivalentes a nivel de todo el tenant deberán limitarse a un máximo de cinco personas designadas, salvo que se apruebe una excepción.",
        ],
      },
      {
        heading: "Autenticación y gestión de credenciales",
        requirements: [
          "Todo acceso privilegiado deberá requerir autenticación multifactor resistente al phishing.",
          "Las credenciales de las cuentas administrativas compartidas, root y de administrador local deberán almacenarse en la caja fuerte de credenciales privilegiadas de la organización y retirarse únicamente para tareas aprobadas.",
          "Las credenciales compartidas custodiadas en la caja fuerte deberán rotarse automáticamente tras cada uso o, como mínimo, cada 30 días.",
          "Las contraseñas de administrador local en equipos y servidores deberán ser únicas por dispositivo y estar gestionadas mediante una solución automatizada aprobada.",
          "Las cuentas administrativas predeterminadas del fabricante deberán renombrarse o deshabilitarse, y sus contraseñas por defecto deberán cambiarse antes de que el sistema entre en producción.",
        ],
      },
      {
        heading: "Entorno administrativo",
        intro: "El trabajo administrativo debe realizarse desde dispositivos de confianza y bastionados.",
        requirements: [
          "El acceso privilegiado a los sistemas críticos deberá realizarse únicamente desde estaciones de trabajo administrativas bastionadas y gestionadas por la organización, o mediante una pasarela de acceso privilegiado aprobada.",
          "Las estaciones de trabajo administrativas no deberán utilizarse para el correo electrónico, la navegación web general ni otras actividades no administrativas.",
          "Las interfaces de gestión de la infraestructura y de los dispositivos de seguridad deberán ser accesibles únicamente desde segmentos de red administrativos restringidos.",
          "Los usuarios privilegiados no deberán instalar software no aprobado en los sistemas que administran.",
        ],
      },
      {
        heading: "Supervisión y registro",
        requirements: [
          "Todos los eventos de autenticación y elevación privilegiada deberán registrarse en la plataforma central de registros de la organización.",
          "Las sesiones privilegiadas interactivas en sistemas críticos deberán grabarse mediante la plataforma de gestión de accesos privilegiados.",
          "Operaciones de Seguridad deberá recibir alertas casi en tiempo real sobre la creación de cuentas privilegiadas y los cambios en la pertenencia a grupos privilegiados.",
          "Los registros de acceso privilegiado y las grabaciones de sesiones deberán conservarse durante al menos 12 meses y protegerse frente a modificaciones por parte de los usuarios a los que registran.",
          "Los usuarios privilegiados no deberán poder deshabilitar, alterar ni eliminar los registros de su propia actividad.",
        ],
      },
      {
        heading: "Acceso de emergencia y revisión",
        requirements: [
          "La organización deberá mantener al menos dos cuentas de acceso de emergencia por cada plataforma de identidad crítica, excluidas de las dependencias de acceso condicional que pudieran provocar un bloqueo.",
          "Las credenciales de las cuentas de emergencia deberán dividirse o sellarse, almacenarse de forma segura y ser accesibles únicamente mediante un procedimiento de emergencia documentado.",
          "Cualquier uso de una cuenta de acceso de emergencia deberá generar una alerta inmediata y ser revisado por Operaciones de Seguridad en un plazo de un día hábil.",
          "Las credenciales de las cuentas de emergencia deberán rotarse tras cada uso.",
          "Los responsables de sistemas deberán revisar el acceso privilegiado a sus sistemas al menos trimestralmente y retirar, en un plazo de cinco días hábiles, cualquier acceso que ya no esté justificado.",
        ],
      },
    ],
  },
  "SH-POL-104": {
    title: "Política de Acceso Remoto",
    summary: "Especifica cómo el personal y los terceros pueden conectarse de forma segura a los sistemas y datos de la organización desde fuera de sus instalaciones.",
    purpose:
      "Esta política define las condiciones en las que se permite el acceso remoto a las redes, sistemas y datos de la organización, y los controles necesarios para proteger dicho acceso.",
    aims: [
      "Garantizar que las conexiones remotas estén autenticadas, cifradas y limitadas a métodos aprobados.",
      "Garantizar que solo se conecten a los recursos de la organización dispositivos de confianza y conformes.",
      "Controlar y supervisar el acceso remoto de terceros y proveedores.",
      "Proteger la información tratada al trabajar fuera de las instalaciones de la organización.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, contratistas y terceros que accedan a las redes, aplicaciones o datos de la organización desde cualquier ubicación distinta de las instalaciones controladas por la organización, utilizando dispositivos gestionados por ella o de propiedad personal.",
    covers: [
      "Métodos y tecnologías de acceso remoto aprobados.",
      "Requisitos de los dispositivos para las conexiones remotas.",
      "Acceso remoto de terceros y proveedores.",
      "Prácticas de trabajo remoto seguro.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y aprueba las tecnologías de acceso remoto.",
          "Aprueba las excepciones para accesos remotos no estándar.",
        ],
      },
      {
        role: "Equipo de Redes e Infraestructura",
        responsibilities: [
          "Opera y mantiene actualizadas las pasarelas de acceso remoto y los servicios de acceso de confianza cero.",
          "Aplica las comprobaciones de estado del dispositivo y de autenticación en las conexiones remotas.",
        ],
      },
      {
        role: "Responsables de la Relación con Proveedores",
        responsibilities: [
          "Patrocinan y justifican las solicitudes de acceso remoto de terceros.",
          "Garantizan que el acceso de los proveedores se retire cuando ya no sea necesario.",
        ],
      },
      {
        role: "Usuarios Remotos",
        responsibilities: [
          "Se conectan únicamente mediante métodos aprobados y desde dispositivos conformes.",
          "Protegen la información de la organización para que otras personas no puedan verla ni acceder a ella mientras trabajan en remoto.",
        ],
      },
    ],
    sections: [
      {
        heading: "Métodos de acceso remoto aprobados",
        requirements: [
          "El acceso remoto a los sistemas internos deberá proporcionarse únicamente mediante tecnologías de acceso remoto aprobadas por el Responsable de Seguridad de la Información, como una VPN gestionada o un servicio de acceso a la red de confianza cero.",
          "Las sesiones de acceso remoto deberán cifrarse mediante TLS 1.2 o superior, o IPsec con conjuntos de cifrado aprobados.",
          "El escritorio remoto, SSH y otros protocolos administrativos no deberán exponerse directamente a internet.",
          "Las pasarelas de acceso remoto deberán actualizarse frente a las vulnerabilidades críticas en un plazo de 72 horas desde la publicación de la corrección del fabricante, o mitigarse mediante una solución alternativa aprobada.",
          "Los usuarios no deberán instalar ni utilizar herramientas de control remoto o de escritorio remoto no aprobadas para acceder a los sistemas de la organización.",
        ],
      },
      {
        heading: "Controles de autenticación y de sesión",
        requirements: [
          "Todo acceso remoto deberá requerir autenticación multifactor.",
          "El acceso remoto deberá conceder a los usuarios acceso únicamente a las aplicaciones y segmentos de red que estén autorizados a utilizar, y no a toda la red interna.",
          "Las sesiones remotas deberán desconectarse tras un máximo de 30 minutos de inactividad y deberán exigir una nueva autenticación tras un máximo de 12 horas.",
          "Los registros de conexión de acceso remoto, incluidos el usuario, el dispositivo, la dirección de origen y las horas de sesión, deberán conservarse durante al menos 12 meses.",
        ],
      },
      {
        heading: "Requisitos de los dispositivos",
        intro: "La seguridad de una conexión remota depende de la seguridad del dispositivo desde el que se realiza.",
        requirements: [
          "El acceso remoto completo a la red deberá permitirse únicamente desde dispositivos gestionados por la organización.",
          "Los dispositivos utilizados para el acceso remoto deberán contar con cifrado de disco completo, un sistema operativo con soporte, las actualizaciones de seguridad al día y protección activa del puesto final.",
          "La organización deberá verificar la conformidad del dispositivo antes de permitir una conexión remota y deberá bloquear los dispositivos no conformes.",
          "Los dispositivos de propiedad personal deberán limitarse al acceso mediante navegador o en entornos aislados (contenedores) a las aplicaciones aprobadas, y no deberá permitírseles almacenar datos confidenciales de forma local.",
          "El túnel dividido (split tunnelling) deberá configurarse de modo que el tráfico hacia los recursos de la organización pase siempre por la conexión controlada.",
        ],
      },
      {
        heading: "Acceso remoto de terceros",
        requirements: [
          "El acceso remoto de terceros deberá ser aprobado por el responsable del sistema y por el responsable de la relación con el proveedor, y quedar registrado antes de habilitarse.",
          "Cada usuario de un tercero deberá tener una cuenta individual, y no deberán utilizarse cuentas compartidas de proveedores.",
          "El acceso de terceros a los sistemas críticos deberá habilitarse únicamente durante la actividad aprobada y deshabilitarse cuando esta finalice.",
          "Las sesiones privilegiadas de terceros deberán intermediarse y grabarse mediante la plataforma de gestión de accesos privilegiados de la organización.",
          "Los responsables de la relación con proveedores deberán revisar al menos trimestralmente el acceso remoto de terceros que esté activo.",
        ],
      },
      {
        heading: "Trabajo remoto seguro",
        requirements: [
          "Los usuarios remotos deberán bloquear la pantalla siempre que dejen su dispositivo desatendido.",
          "Los usuarios remotos no deberán permitir que familiares u otras personas no autorizadas utilicen los dispositivos de la organización.",
          "Los usuarios remotos deberán evitar trabajar con información confidencial en lugares donde personas no autorizadas puedan verla u oírla.",
          "Los usuarios remotos deberán comunicar al centro de atención al usuario la pérdida o el robo de dispositivos en el plazo de una hora desde que lo adviertan.",
        ],
      },
    ],
  },
  "SH-POL-105": {
    title: "Política de Criptografía y Gestión de Claves",
    summary: "Define los algoritmos y protocolos criptográficos aprobados y los controles del ciclo de vida de las claves de cifrado y los certificados.",
    purpose:
      "Esta política garantiza que la organización utiliza la criptografía de forma correcta y coherente para proteger la confidencialidad, la integridad y la autenticidad de la información, y que las claves criptográficas se gestionan de forma segura durante todo su ciclo de vida.",
    aims: [
      "Garantizar que la información sensible se cifre en tránsito y en reposo mediante métodos aprobados.",
      "Impedir el uso de algoritmos y protocolos débiles, obsoletos o no aprobados.",
      "Proteger las claves criptográficas frente a su divulgación, pérdida y uso indebido durante todo su ciclo de vida.",
      "Mantener la capacidad de sustituir con rapidez algoritmos y claves cuando se debiliten o se vean comprometidos.",
    ],
    scope:
      "Esta política se aplica a todos los sistemas, aplicaciones, dispositivos y servicios que almacenen, traten o transmitan información por cuenta de la organización, y a todas las claves criptográficas, certificados y secretos generados o utilizados por la organización o por proveedores de servicios que actúen en su nombre.",
    covers: [
      "Algoritmos, longitudes de clave y protocolos aprobados.",
      "Cifrado de datos en tránsito y en reposo.",
      "Generación, almacenamiento, distribución, rotación y destrucción de claves.",
      "Gestión de certificados digitales.",
      "Agilidad criptográfica y preparación poscuántica.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y mantiene la norma de criptografía aprobada.",
          "Aprueba las excepciones para sistemas heredados que no puedan cumplir los requisitos.",
        ],
      },
      {
        role: "Custodios de Claves",
        responsibilities: [
          "Generan, protegen, rotan y destruyen las claves bajo su custodia conforme a esta política.",
          "Mantienen registros de las claves que gestionan.",
        ],
      },
      {
        role: "Equipos de Infraestructura y Plataformas",
        responsibilities: [
          "Configuran los sistemas y servicios para hacer cumplir los protocolos y el cifrado aprobados.",
          "Operan el servicio de gestión de claves y las herramientas del ciclo de vida de los certificados.",
        ],
      },
      {
        role: "Desarrolladores de Software",
        responsibilities: [
          "Utilizan únicamente bibliotecas criptográficas aprobadas y bien mantenidas, y nunca implementan algoritmos criptográficos propios.",
          "Mantienen las claves y los secretos fuera del código fuente y de los artefactos de compilación.",
        ],
      },
    ],
    sections: [
      {
        heading: "Algoritmos y protocolos aprobados",
        intro: "Solo podrán utilizarse los algoritmos y protocolos recogidos en este apartado o en la norma de criptografía aprobada por la organización.",
        requirements: [
          "El cifrado simétrico deberá utilizar AES con una longitud de clave de 256 bits, en un modo autenticado como GCM cuando sea posible.",
          "La criptografía asimétrica deberá utilizar claves RSA de al menos 3072 bits o claves de curva elíptica de al menos 256 bits, como P-256 o Curve25519.",
          "El resumen criptográfico (hash) para la integridad y las firmas digitales deberá utilizar SHA-256 o superior, de las familias SHA-2 o SHA-3.",
          "La organización no deberá utilizar DES, 3DES, RC4, MD5, SHA-1 para firmas, ni versiones de SSL y TLS anteriores a la 1.2.",
          "Los valores aleatorios utilizados para claves, tokens y nonces deberán generarse mediante un generador de números aleatorios criptográficamente seguro.",
          "La organización deberá mantener un inventario de los algoritmos criptográficos en uso y deberá preparar un plan de migración a los algoritmos poscuánticos estandarizados por el NIST, como ML-KEM y ML-DSA.",
        ],
      },
      {
        heading: "Cifrado de datos en tránsito y en reposo",
        requirements: [
          "Todos los datos transmitidos por redes públicas o no confiables deberán cifrarse mediante TLS 1.2 o superior, con preferencia por TLS 1.3.",
          "Los datos confidenciales y restringidos transmitidos dentro de las redes internas también deberán cifrarse en tránsito.",
          "Los datos confidenciales y restringidos almacenados en bases de datos, almacenes de archivos, copias de seguridad y almacenamiento en la nube deberán cifrarse en reposo mediante AES-256.",
          "Todos los portátiles, dispositivos móviles y soportes extraíbles que puedan contener datos de la organización deberán utilizar cifrado de disco completo o de dispositivo.",
          "Los servicios web de cara al público deberán habilitar HTTP Strict Transport Security.",
        ],
      },
      {
        heading: "Generación y almacenamiento de claves",
        requirements: [
          "Las claves deberán generarse dentro de un módulo de seguridad hardware, un servicio de gestión de claves en la nube o una biblioteca criptográfica aprobada en un sistema de confianza.",
          "Las claves que protejan datos restringidos y las claves de las autoridades de certificación raíz o emisoras deberán almacenarse en un módulo de seguridad hardware validado conforme a FIPS 140-2 o FIPS 140-3 nivel 3, o equivalente.",
          "Las claves no deberán almacenarse nunca en texto claro junto a los datos que protegen, y las claves de cifrado de datos deberán protegerse mediante claves de cifrado de claves independientes.",
          "El acceso a los sistemas de gestión de claves deberá limitarse a los custodios de claves autorizados y requerir autenticación multifactor.",
          "Cada clave deberá utilizarse para una única finalidad definida, y una misma clave no deberá emplearse para cifrar y para firmar.",
        ],
      },
      {
        heading: "Ciclo de vida de las claves",
        requirements: [
          "Cada clave deberá tener un responsable, una finalidad y un criptoperiodo definidos, registrados en el inventario de claves.",
          "Las claves simétricas de cifrado de datos y las claves de cifrado de claves deberán rotarse al menos anualmente, o antes si el criptoperiodo de la norma aprobada es más corto.",
          "Las claves deberán revocarse y sustituirse de inmediato ante una sospecha de compromiso, y el incidente deberá comunicarse al equipo de seguridad.",
          "Las claves retiradas que sean necesarias para descifrar datos archivados deberán conservarse de forma segura durante la vida de esos datos y utilizarse únicamente para descifrar.",
          "Las claves deberán destruirse, cuando ya no sean necesarias, mediante un método que impida su recuperación, y la destrucción deberá quedar registrada.",
          "Las actividades que impliquen claves maestras o raíz deberán requerir control dual, de modo que ninguna persona pueda realizarlas por sí sola.",
        ],
      },
      {
        heading: "Gestión de certificados",
        requirements: [
          "La organización deberá mantener un inventario de todos los certificados TLS y de firma de código, con su responsable y su fecha de caducidad.",
          "Los certificados TLS públicos deberán obtenerse únicamente de autoridades de certificación aprobadas.",
          "La renovación de certificados deberá automatizarse siempre que sea posible, y los responsables deberán recibir una alerta al menos 30 días antes de que caduque cualquier certificado.",
          "No deberán utilizarse certificados autofirmados en sistemas de producción accesibles a usuarios o a terceros externos.",
        ],
      },
    ],
  },
  "SH-POL-106": {
    title: "Política de Conservación de Datos y Eliminación Segura",
    summary: "Establece durante cuánto tiempo conserva la organización la información y cómo elimina de forma segura los datos y sanitiza los soportes cuando termina la conservación.",
    purpose:
      "Esta política garantiza que la organización conserva la información durante el tiempo que sea necesario por motivos empresariales, legales y regulatorios, y no más, y que la información y los soportes se eliminan de forma que se impida su recuperación no autorizada.",
    aims: [
      "Cumplir las obligaciones legales, regulatorias y contractuales de conservación de registros.",
      "Reducir el riesgo y el coste de almacenamiento no conservando la información más allá del plazo exigido.",
      "Garantizar que los datos sean irrecuperables una vez eliminados o cuando se deseche el soporte que los contiene.",
      "Preservar la información sujeta a retención legal mientras esta se mantenga.",
    ],
    scope:
      "Esta política se aplica a toda la información creada, recibida o mantenida por la organización en cualquier formato, incluidos los registros electrónicos, las copias de seguridad, los logs, el correo electrónico, los documentos en papel, y todos los soportes y dispositivos de almacenamiento en los que resida dicha información, ya los gestione la propia organización o un proveedor de servicios.",
    covers: [
      "El calendario de conservación y su mantenimiento.",
      "Retenciones legales.",
      "Eliminación segura de datos electrónicos.",
      "Sanitización y destrucción de soportes y dispositivos de almacenamiento.",
      "Eliminación de documentos en papel.",
    ],
    roles: [
      {
        role: "Responsable de Protección de Datos y Gestión Documental",
        responsibilities: [
          "Es responsable de esta política y mantiene el calendario de conservación de la organización.",
          "Coordina las revisiones anuales del cumplimiento de la conservación.",
        ],
      },
      {
        role: "Asesoría Jurídica",
        responsibilities: [
          "Asesora sobre los requisitos legales de conservación.",
          "Emite y levanta las retenciones legales.",
        ],
      },
      {
        role: "Propietarios de los Datos",
        responsibilities: [
          "Aplican el calendario de conservación a la información de la que son propietarios.",
          "Autorizan la eliminación de la información que haya alcanzado el final de su periodo de conservación.",
        ],
      },
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Implantan reglas automatizadas de conservación y eliminación en los sistemas.",
          "Sanitizan los soportes y dispositivos o gestionan su destrucción certificada.",
        ],
      },
    ],
    sections: [
      {
        heading: "Calendario de conservación",
        requirements: [
          "La organización deberá mantener un calendario de conservación que especifique el periodo de conservación, la base legal y el responsable de cada categoría de información.",
          "El calendario de conservación deberá revisarse al menos anualmente y siempre que cambien los requisitos legales o de negocio pertinentes.",
          "La información deberá conservarse durante un periodo no superior al indicado en el calendario de conservación, salvo que esté sujeta a una retención legal o a una excepción aprobada.",
          "Cuando no se haya especificado un periodo de conservación, el propietario de los datos deberá solicitar una determinación al Responsable de Protección de Datos y Gestión Documental antes de conservar la información durante más de un año.",
          "Los sistemas deberán aplicar reglas automatizadas de conservación y eliminación siempre que la plataforma lo permita.",
        ],
      },
      {
        heading: "Retenciones legales",
        intro: "Una retención legal prevalece sobre la conservación y la eliminación habituales respecto de la información a la que afecta.",
        requirements: [
          "La Asesoría Jurídica deberá emitir una notificación escrita de retención legal a los custodios cuando sea razonablemente previsible un litigio, una investigación o una auditoría.",
          "La información sujeta a retención legal no deberá alterarse, eliminarse ni destruirse hasta que la Asesoría Jurídica levante la retención por escrito.",
          "Operaciones de TI deberá suspender la eliminación automática de la información sujeta a retención legal en un plazo de dos días hábiles desde la notificación.",
          "La Asesoría Jurídica deberá revisar las retenciones legales vigentes al menos cada seis meses.",
        ],
      },
      {
        heading: "Eliminación segura de datos electrónicos",
        requirements: [
          "Los propietarios de los datos deberán iniciar la eliminación de la información en un plazo de 30 días desde el final de su periodo de conservación.",
          "La eliminación deberá abarcar todas las copias de la información que se encuentren bajo el control de la organización, incluidas las réplicas, las exportaciones y los entornos de prueba.",
          "Los datos incluidos en copias de seguridad deberán eliminarse cuando la copia alcance el final de su propio ciclo de conservación y no deberán restaurarse para uso empresarial una vez finalizado su periodo de conservación.",
          "Cuando los datos estén en poder de un proveedor de servicios, la organización deberá obtener un compromiso contractual y, al finalizar el servicio, una confirmación escrita de que los datos han sido eliminados.",
          "El borrado criptográfico, consistente en destruir las claves que protegen los datos cifrados, podrá utilizarse como método de eliminación cuando todas las copias estén cifradas con las claves destruidas.",
        ],
      },
      {
        heading: "Sanitización y destrucción de soportes",
        requirements: [
          "Todos los soportes de almacenamiento deberán sanitizarse antes de su reutilización, de su devolución a un arrendador o proveedor, o de su eliminación, mediante métodos conformes con NIST SP 800-88.",
          "Los soportes que hayan contenido datos confidenciales o restringidos y que vayan a salir del control de la organización deberán purgarse o destruirse físicamente, y no limitarse a un simple borrado.",
          "Las unidades averiadas o al final de su vida útil que no puedan sanitizarse con fiabilidad deberán destruirse físicamente mediante trituración, desintegración o desmagnetización, según corresponda al tipo de soporte.",
          "Los proveedores externos de eliminación deberán ser aprobados por la organización y entregar un certificado de destrucción que relacione cada activo por su número de serie.",
          "Operaciones de TI deberá registrar en el registro de activos la sanitización o destrucción de cada activo, con indicación del método, la fecha y la persona responsable.",
          "Los dispositivos móviles deberán borrarse criptográficamente y restablecerse a los valores de fábrica antes de su reasignación o eliminación.",
        ],
      },
      {
        heading: "Documentos en papel",
        requirements: [
          "El papel que contenga información confidencial o restringida deberá depositarse en contenedores cerrados de residuos confidenciales y no deberá arrojarse a la basura general ni al reciclaje.",
          "Los residuos de papel confidencial deberán destruirse mediante trituración de corte cruzado o pulpeado, ya sea en las instalaciones o por un proveedor aprobado que emita un certificado de destrucción.",
          "Los contenedores de residuos confidenciales deberán vaciarse al menos una vez al mes, o con mayor frecuencia cuando estén llenos.",
          "Los documentos en papel deberán destruirse al final de su periodo de conservación, conforme al calendario de conservación.",
        ],
      },
    ],
  },
  "SH-POL-107": {
    title: "Política de Privacidad y Protección de Datos Personales",
    summary: "Establece los principios y controles que la organización aplica para recoger, utilizar, compartir y proteger los datos personales de forma lícita y transparente.",
    purpose:
      "Esta política establece cómo la organización trata los datos personales de forma leal, lícita y transparente, respeta los derechos de las personas y cumple sus obligaciones conforme a la normativa aplicable en materia de protección de datos y privacidad.",
    aims: [
      "Tratar los datos personales únicamente para fines determinados y legítimos y sobre una base jurídica válida.",
      "Recoger y conservar únicamente los datos personales necesarios y exactos.",
      "Permitir que las personas ejerzan sus derechos de privacidad de forma ágil y efectiva.",
      "Integrar la privacidad en el diseño de los sistemas, los procesos y las relaciones con proveedores.",
      "Detectar, contener y notificar las violaciones de seguridad de los datos personales dentro de los plazos exigidos.",
    ],
    scope:
      "Esta política se aplica a todos los datos personales tratados por la organización o por su cuenta, relativos a clientes, empleados, candidatos, contratistas, proveedores y cualesquiera otras personas, en cualquier formato y ubicación, y a todo el personal y los terceros que traten dichos datos.",
    covers: [
      "Principios de protección de datos y bases jurídicas del tratamiento.",
      "Transparencia y derechos de las personas.",
      "Privacidad desde el diseño y evaluaciones de impacto relativas a la protección de datos.",
      "Encargados del tratamiento, comunicación de datos y transferencias internacionales.",
      "Gestión de las violaciones de seguridad de los datos personales.",
    ],
    roles: [
      {
        role: "Delegado de Protección de Datos o Responsable de Privacidad",
        responsibilities: [
          "Es responsable de esta política y supervisa el cumplimiento de las obligaciones de privacidad por parte de la organización.",
          "Asesora sobre las evaluaciones de impacto relativas a la protección de datos y actúa como punto de contacto para las personas interesadas y las autoridades de control.",
        ],
      },
      {
        role: "Alta Dirección",
        responsibilities: [
          "Es responsable del cumplimiento de la normativa de protección de datos por parte de la organización.",
          "Proporciona los recursos para el programa de privacidad.",
        ],
      },
      {
        role: "Propietarios de Datos y de Procesos",
        responsibilities: [
          "Mantienen los registros de las actividades de tratamiento de sus ámbitos de actuación.",
          "Garantizan que el tratamiento en su área tenga una finalidad y una base jurídica documentadas.",
        ],
      },
      {
        role: "Compras y Gestión de Proveedores",
        responsibilities: [
          "Garantizan que los proveedores que traten datos personales sean evaluados y estén vinculados por las condiciones de tratamiento de datos.",
        ],
      },
      {
        role: "Todo el Personal",
        responsibilities: [
          "Tratan los datos personales únicamente en la medida necesaria para su puesto y conforme a esta política.",
          "Trasladan al Responsable de Privacidad las solicitudes de las personas interesadas y comunican de inmediato las sospechas de violación de seguridad de los datos personales.",
        ],
      },
    ],
    sections: [
      {
        heading: "Principios y licitud del tratamiento",
        requirements: [
          "La organización deberá tratar los datos personales únicamente para fines determinados, explícitos y legítimos y no deberá tratarlos ulteriormente de manera incompatible con dichos fines.",
          "Cada actividad de tratamiento deberá tener una base jurídica documentada, registrada antes de que comience el tratamiento.",
          "La organización deberá recoger únicamente los datos personales adecuados, pertinentes y limitados a lo necesario para la finalidad declarada.",
          "Cuando el consentimiento sea la base jurídica, deberá ser libre, específico, informado y estar registrado, y las personas deberán poder retirarlo con la misma facilidad con la que lo otorgaron.",
          "Las categorías especiales de datos personales y los datos relativos a condenas penales deberán tratarse únicamente cuando concurra una condición legal específica y con garantías adicionales aprobadas por el Responsable de Privacidad.",
          "La organización deberá mantener un registro de las actividades de tratamiento y revisarlo al menos anualmente.",
        ],
      },
      {
        heading: "Transparencia y derechos de las personas",
        intro: "Las personas deben comprender cómo se utilizan sus datos y poder ejercer sus derechos.",
        requirements: [
          "La organización deberá facilitar avisos de privacidad claros en el momento de la recogida de los datos personales, que describan las finalidades, la base jurídica, los destinatarios, el plazo de conservación y los derechos de las personas.",
          "La organización deberá mantener un procedimiento documentado para atender las solicitudes de acceso, rectificación, supresión, limitación, portabilidad u oposición al tratamiento de datos personales.",
          "Las solicitudes de las personas deberán acusarse en un plazo de cinco días hábiles y atenderse en el plazo de un mes desde su recepción, o en cualquier plazo más corto que exija la normativa aplicable.",
          "La organización deberá verificar la identidad del solicitante antes de divulgar o modificar datos personales en respuesta a una solicitud.",
          "La organización no deberá adoptar decisiones con efectos jurídicos o significativos similares para las personas basadas únicamente en un tratamiento automatizado sin una base jurídica y un medio de revisión humana.",
        ],
      },
      {
        heading: "Privacidad desde el diseño y evaluaciones de impacto",
        requirements: [
          "Los responsables de proyectos y de sistemas deberán considerar los requisitos de privacidad desde la fase de diseño más temprana de cualquier sistema, producto o proceso nuevo que trate datos personales.",
          "Deberá completarse una evaluación de impacto relativa a la protección de datos (EIPD), revisada por el Responsable de Privacidad, antes de iniciar un tratamiento que pueda entrañar un alto riesgo para las personas.",
          "Los sistemas deberán configurarse de modo que, por defecto, solo se traten y sean accesibles los datos personales necesarios para cada finalidad específica.",
          "Los datos personales deberán seudonimizarse o anonimizarse cuando la finalidad pueda lograrse sin identificar a las personas.",
          "Los datos personales de producción no deberán utilizarse en entornos de desarrollo o pruebas salvo que hayan sido enmascarados o exista una excepción aprobada.",
        ],
      },
      {
        heading: "Seguridad de los datos personales",
        requirements: [
          "La organización deberá proteger los datos personales con medidas técnicas y organizativas adecuadas al riesgo, incluidos el control de acceso, el cifrado y el registro de actividad.",
          "El acceso a los datos personales deberá limitarse al personal que lo necesite para su puesto.",
          "Los datos personales deberán conservarse únicamente durante el periodo definido en el calendario de conservación de la organización.",
          "Todo el personal con acceso a datos personales deberá completar formación de concienciación en privacidad en el momento de su incorporación y, como mínimo, anualmente.",
        ],
      },
      {
        heading: "Encargados del tratamiento, comunicación de datos y transferencias internacionales",
        requirements: [
          "La organización deberá contratar únicamente encargados del tratamiento que ofrezcan garantías suficientes de protección de datos, evaluadas antes de la firma del contrato.",
          "Todo encargado del tratamiento deberá estar vinculado mediante un acuerdo escrito que establezca el objeto, la duración, la naturaleza y la finalidad del tratamiento, así como las obligaciones de seguridad y confidencialidad del encargado.",
          "Los datos personales deberán comunicarse a terceros únicamente cuando exista una base jurídica y la comunicación quede registrada.",
          "Los datos personales deberán transferirse fuera de las fronteras nacionales únicamente cuando el destino ofrezca una protección adecuada, o cuando existan un mecanismo de transferencia aprobado y, en su caso, la evaluación del riesgo de la transferencia exigida.",
        ],
      },
      {
        heading: "Violaciones de seguridad de los datos personales",
        requirements: [
          "El personal deberá comunicar al Responsable de Privacidad y al equipo de seguridad cualquier sospecha de violación de seguridad de los datos personales en cuanto tenga conocimiento de ella.",
          "La organización deberá evaluar el riesgo para las personas de cada violación de seguridad de los datos personales y registrarla en un registro de violaciones, sea o no notificable.",
          "Cuando lo exija la normativa aplicable, la organización deberá notificarlo a la autoridad de control competente sin dilación indebida y, de ser posible, en un plazo de 72 horas desde que haya tenido conocimiento de la violación.",
          "Cuando sea probable que una violación entrañe un alto riesgo para las personas, la organización deberá informar a los afectados sin dilación indebida.",
        ],
      },
    ],
  },
  "SH-POL-108": {
    title: "Política de Prevención de Fuga de Datos",
    summary: "Define los controles para detectar y prevenir la divulgación no autorizada o la exfiltración de información sensible en puestos finales, red, correo electrónico y nube.",
    purpose:
      "Esta política establece cómo la organización identifica la información sensible y aplica controles preventivos y de detección para evitar que salga de las ubicaciones autorizadas, ya sea por error, por uso indebido o por una actividad maliciosa.",
    aims: [
      "Identificar y etiquetar la información sensible para poder aplicar controles de protección.",
      "Impedir la transferencia no autorizada de información sensible por los canales de exfiltración habituales.",
      "Detectar los eventos de pérdida de datos y responder a ellos con prontitud.",
      "Equilibrar la protección con las necesidades legítimas del negocio mediante un proceso de excepciones gobernado.",
    ],
    scope:
      "Esta política se aplica a toda la información de la organización clasificada como confidencial o restringida y a todos los canales por los que pueda salir de la organización, incluidos los puestos finales, los soportes extraíbles, el correo electrónico, las cargas web, el almacenamiento en la nube y los servicios de colaboración, las plataformas de mensajería, la impresión y las herramientas de inteligencia artificial generativa.",
    covers: [
      "Descubrimiento de datos y etiquetado de clasificación.",
      "Controles DLP en los canales de puesto final, correo electrónico, red y nube.",
      "Soportes extraíbles y compartición externa.",
      "Gestión de alertas y respuesta a incidentes.",
      "Excepciones a la política y ajuste de reglas.",
    ],
    roles: [
      {
        role: "Responsable de Seguridad de la Información",
        responsibilities: [
          "Es responsable de esta política y aprueba los conjuntos de reglas DLP que bloqueen actividad del negocio.",
          "Informa a la alta dirección de los eventos significativos de pérdida de datos.",
        ],
      },
      {
        role: "Propietarios de los Datos",
        responsibilities: [
          "Clasifican la información de la que son propietarios y definen qué constituye una divulgación no autorizada.",
          "Aprueban las excepciones de negocio a los controles DLP aplicables a sus datos.",
        ],
      },
      {
        role: "Operaciones de Seguridad",
        responsibilities: [
          "Operan las herramientas DLP y clasifican las alertas dentro de los plazos definidos.",
          "Escalan los eventos de pérdida de datos confirmados a través del proceso de respuesta a incidentes.",
        ],
      },
      {
        role: "Recursos Humanos y Asesoría Jurídica",
        responsibilities: [
          "Apoyan las investigaciones que afecten al personal y garantizan que la supervisión se realice de forma lícita y proporcionada.",
        ],
      },
      {
        role: "Todos los Usuarios",
        responsibilities: [
          "Aplican la etiqueta de clasificación correcta a la información que crean.",
          "Comparten información sensible únicamente a través de canales aprobados.",
        ],
      },
    ],
    sections: [
      {
        heading: "Descubrimiento y clasificación de datos",
        requirements: [
          "La organización deberá mantener un inventario de las ubicaciones donde se almacenan datos confidenciales y restringidos.",
          "Deberán realizarse análisis automatizados de descubrimiento en recursos compartidos de archivos, almacenamiento en la nube y plataformas de colaboración, al menos trimestralmente, para localizar datos sensibles desprotegidos.",
          "La información deberá llevar una etiqueta de clasificación que los controles DLP puedan leer, aplicada automáticamente siempre que sea posible y por el usuario en los demás casos.",
          "Las reglas de detección DLP deberán cubrir, como mínimo, los datos de tarjetas de pago, los identificadores oficiales, los secretos de autenticación, la información de salud y los datos que la organización designe como restringidos.",
        ],
      },
      {
        heading: "Controles de puesto final y soportes extraíbles",
        requirements: [
          "El DLP de puesto final deberá desplegarse en todos los portátiles y equipos de sobremesa gestionados por la organización.",
          "La escritura de datos en soportes de almacenamiento extraíbles deberá bloquearse por defecto y permitirse únicamente a usuarios aprobados con dispositivos cifrados y proporcionados por la organización.",
          "Deberá bloquearse la copia de datos restringidos a almacenamiento personal en la nube, correo electrónico personal o aplicaciones no gestionadas.",
          "La impresión de información restringida deberá registrarse y limitarse a usuarios autorizados.",
          "La captura de pantalla y la transferencia mediante portapapeles de datos restringidos desde aplicaciones gestionadas a aplicaciones no gestionadas deberán restringirse en dispositivos móviles y de propiedad personal.",
        ],
      },
      {
        heading: "Controles de correo electrónico, web y nube",
        requirements: [
          "El correo electrónico saliente que contenga datos confidenciales o restringidos deberá inspeccionarse y, cuando se envíe a destinatarios externos, cifrarse o bloquearse según la regla DLP aplicable.",
          "Las cargas de datos restringidos a sitios web y servicios en la nube no aprobados deberán bloquearse mediante proxy web o controles de seguridad de acceso a la nube.",
          "Los enlaces de compartición externa en las plataformas en la nube aprobadas deberán configurarse por defecto para destinatarios nominales y caducar en un máximo de 30 días.",
          "Los datos restringidos no deberán introducirse en herramientas de inteligencia artificial generativa distintas de las aprobadas por la organización para esa clasificación.",
          "Los datos sensibles no deberán transmitirse a través de servicios de mensajería o de transferencia de archivos no aprobados.",
        ],
      },
      {
        heading: "Supervisión, alertas y respuesta",
        intro: "Las alertas DLP son una fuente de eventos de seguridad y deben clasificarse de forma coherente.",
        requirements: [
          "Operaciones de Seguridad deberá clasificar las alertas DLP de gravedad alta en un plazo de cuatro horas laborables, y las demás alertas en un plazo de dos días hábiles.",
          "La pérdida confirmada o sospechada de datos restringidos o personales deberá escalarse como incidente de seguridad conforme al proceso de respuesta a incidentes de la organización.",
          "Los usuarios deberán recibir una notificación en pantalla que explique por qué se bloqueó o se marcó una acción, salvo que ello comprometa una investigación en curso.",
          "Los registros de eventos DLP deberán conservarse durante al menos 12 meses y el acceso a su contenido deberá limitarse a investigadores autorizados.",
          "La supervisión de la actividad de los usuarios deberá ser proporcionada, comunicarse al personal con antelación y realizarse conforme a la normativa aplicable.",
        ],
      },
      {
        heading: "Excepciones y ajuste de reglas",
        requirements: [
          "Las excepciones a los controles DLP deberán solicitarse por escrito, justificarse por una necesidad de negocio, ser aprobadas por el propietario de los datos y por el Responsable de Seguridad de la Información, y limitarse a un máximo de 12 meses.",
          "Las nuevas reglas DLP deberán ejecutarse en modo de supervisión antes de habilitar el bloqueo, salvo que un riesgo urgente exija su aplicación inmediata.",
          "Operaciones de Seguridad deberá revisar la eficacia de las reglas DLP y sus tasas de falsos positivos al menos trimestralmente y ajustar las reglas en consecuencia.",
          "La lista de excepciones aprobadas deberá revisarse al menos cada seis meses y las excepciones caducadas deberán eliminarse.",
        ],
      },
    ],
  },
};
