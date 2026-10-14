// Versión en español de las políticas del paquete de resiliencia (ver ./resilience.ts).

import type { PolicyTranslations } from "./types";

export const RESILIENCE_POLICIES_ES: PolicyTranslations = {
  "SH-POL-301": {
    title: "Política de Respuesta a Incidentes",
    summary: "Establece cómo la organización detecta, notifica, contiene, investiga y extrae enseñanzas de los incidentes de seguridad de la información.",
    purpose:
      "Esta política establece un enfoque coherente y con responsabilidades definidas para gestionar los incidentes de seguridad de la información, de modo que la organización pueda limitar los daños, restablecer rápidamente la normalidad operativa, cumplir sus obligaciones legales y contractuales de notificación y reducir la probabilidad de que se repitan.",
    aims: [
      "Garantizar que los presuntos incidentes se comuniquen con prontitud y lleguen a las personas capaces de actuar.",
      "Contener y erradicar las amenazas de forma controlada, preservando las evidencias.",
      "Cumplir los plazos de notificación regulatorios, contractuales y frente a los clientes.",
      "Recoger las lecciones aprendidas y trasladarlas a los controles de seguridad.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, contratistas y terceros que utilicen o gestionen los sistemas de información, los datos, las instalaciones o los servicios en la nube de la organización, y a todo evento o incidente de seguridad que les afecte, ya esté alojado el activo afectado internamente o en un proveedor de servicios.",
    covers: [
      "Canales de comunicación de incidentes y expectativas para todo el personal.",
      "Clasificación de la gravedad y vías de escalado.",
      "Contención, erradicación, recuperación y tratamiento de las evidencias.",
      "Comunicación interna y externa, incluida la notificación de brechas.",
      "Revisión posterior al incidente y pruebas del plan.",
    ],
    roles: [
      {
        role: "Responsable de la Seguridad de la Información (CISO)",
        responsibilities: [
          "Es responsable de esta política y del plan de respuesta a incidentes.",
          "Declara los incidentes graves y autoriza las notificaciones externas en coordinación con el área Jurídica.",
        ],
      },
      {
        role: "Responsable de Respuesta a Incidentes",
        responsibilities: [
          "Coordina al equipo de respuesta en cada incidente, desde la clasificación inicial hasta el cierre.",
          "Mantiene el registro del incidente, la cronología y el registro de decisiones.",
          "Dirige la revisión posterior al incidente y hace seguimiento de las acciones resultantes.",
        ],
      },
      {
        role: "TI y Operaciones de Seguridad",
        responsibilities: [
          "Supervisan las alertas, realizan la clasificación inicial y ejecutan las acciones de contención y recuperación.",
          "Recopilan y preservan las evidencias técnicas.",
        ],
      },
      {
        role: "Asesoría Jurídica y Privacidad",
        responsibilities: [
          "Evalúa las obligaciones legales, regulatorias y contractuales de notificación.",
          "Asesora sobre la preservación de evidencias y la intervención de terceros externos.",
        ],
      },
      {
        role: "Todo el personal",
        responsibilities: [
          "Comunica de inmediato los presuntos incidentes a través de los canales aprobados.",
          "Sigue las instrucciones del equipo de respuesta y se abstiene de realizar investigaciones por cuenta propia.",
        ],
      },
    ],
    sections: [
      {
        heading: "Preparación",
        intro: "La organización mantiene los planes, las personas y las herramientas necesarios para responder antes de que se produzca un incidente.",
        requirements: [
          "La organización deberá mantener un plan de respuesta a incidentes documentado, aprobado por el CISO y revisado al menos una vez al año.",
          "La organización deberá designar un equipo de respuesta a incidentes con miembros titulares y suplentes nominados para cada función principal.",
          "La organización deberá mantener actualizados los datos de contacto del equipo de respuesta, la alta dirección, la asesoría jurídica, las aseguradoras y los proveedores de servicios clave.",
          "La organización deberá mantener guías de actuación para los tipos de incidente más habituales, incluidos el ransomware, el compromiso de cuentas, la pérdida de datos y el phishing.",
          "La organización deberá asegurarse de que las herramientas de registro, alerta y análisis forense necesarias para la investigación estén disponibles y sean accesibles para el equipo de respuesta.",
        ],
      },
      {
        heading: "Notificación y clasificación",
        requirements: [
          "Todo el personal deberá comunicar los presuntos incidentes de seguridad al equipo de seguridad sin demora y, a más tardar, una hora después de su detección.",
          "La organización deberá disponer de al menos un canal de comunicación disponible en todo momento.",
          "El equipo de seguridad deberá acusar recibo y clasificar cada comunicación en un plazo de cuatro horas hábiles, o de una hora en las marcadas como urgentes.",
          "A cada incidente confirmado deberá asignársele un nivel de gravedad conforme a los criterios definidos en el plan de respuesta a incidentes.",
          "Los incidentes calificados como altos o críticos deberán escalarse al CISO de inmediato tras su clasificación.",
          "Todo incidente deberá registrarse en un registro central de incidentes con un identificador único.",
        ],
      },
      {
        heading: "Contención, erradicación y recuperación",
        requirements: [
          "El equipo de respuesta deberá adoptar acciones de contención proporcionadas a la gravedad y al alcance del incidente.",
          "Las evidencias deberán recopilarse y preservarse de forma que se mantenga su integridad y se documente su cadena de custodia.",
          "El equipo de respuesta deberá identificar y eliminar la causa raíz antes de devolver a producción los sistemas afectados.",
          "Los sistemas restaurados deberán validarse como libres de amenazas y monitorizarse en busca de signos de reaparición durante el periodo definido en el plan.",
          "Las credenciales, claves y secretos que pudieran haber quedado expuestos deberán rotarse como parte de la erradicación.",
        ],
      },
      {
        heading: "Comunicación y notificación",
        requirements: [
          "Solo el personal autorizado por el CISO o por la alta dirección deberá comunicarse sobre un incidente con terceros ajenos a la organización.",
          "Asesoría Jurídica y Privacidad deberá determinar las obligaciones de notificación de todo incidente que afecte a datos personales en un plazo de 24 horas desde la confirmación del incidente.",
          "La organización deberá notificar a los reguladores, a los clientes y a las personas afectadas dentro de los plazos exigidos por la legislación y los contratos aplicables.",
          "La organización deberá mantener informada a la alta dirección de los incidentes altos y críticos con la periodicidad acordada al inicio de la respuesta.",
        ],
      },
      {
        heading: "Revisión posterior al incidente y pruebas",
        requirements: [
          "La organización deberá completar una revisión posterior al incidente en un plazo de diez días hábiles desde el cierre de cualquier incidente alto o crítico.",
          "Las revisiones posteriores al incidente deberán identificar las causas raíz y asignar acciones correctivas con responsables y fechas límite.",
          "La organización deberá probar el plan de respuesta a incidentes al menos una vez al año mediante un ejercicio de mesa o una simulación.",
          "La organización deberá actualizar el plan de respuesta a incidentes y las guías de actuación para reflejar las lecciones aprendidas de los incidentes y de los ejercicios.",
          "Los registros de incidentes deberán conservarse al menos durante tres años, salvo que la ley exija un plazo mayor.",
        ],
      },
    ],
  },
  "SH-POL-302": {
    title: "Política de Continuidad de Negocio y Recuperación ante Desastres",
    summary: "Exige a la organización planificar, respaldar, probar y recuperar los servicios críticos para poder seguir operando ante una interrupción.",
    purpose:
      "Esta política define los requisitos para mantener disponibles los procesos de negocio críticos de la organización y la tecnología que los soporta durante y después de un evento disruptivo, y para restablecerlos dentro de los plazos acordados.",
    aims: [
      "Identificar los procesos y sistemas más críticos para la organización y el tiempo de inactividad tolerable de cada uno.",
      "Mantener capacidades de recuperación que cumplan los objetivos de tiempo y de punto de recuperación definidos.",
      "Proteger las copias de seguridad para que sigan disponibles y fiables cuando se necesiten.",
      "Verificar mediante pruebas periódicas que los planes de continuidad y de recuperación funcionan según lo previsto.",
    ],
    scope:
      "Esta política se aplica a todas las unidades de negocio, sedes, sistemas de información y servicios en la nube de la organización, así como al personal y a los terceros responsables de operarlos o de darles soporte.",
    covers: [
      "Análisis de impacto en el negocio y objetivos de recuperación.",
      "Planes de continuidad de negocio y de recuperación ante desastres.",
      "Copias de seguridad, replicación y redundancia de datos.",
      "Pruebas, mantenimiento y formación sobre los planes.",
      "Gestión de crisis y activación.",
    ],
    roles: [
      {
        role: "Alta Dirección",
        responsibilities: [
          "Aprueba los objetivos de recuperación y los recursos necesarios para alcanzarlos.",
          "Dirige el comité de gestión de crisis cuando se activa un plan de continuidad.",
        ],
      },
      {
        role: "Responsable de Continuidad de Negocio",
        responsibilities: [
          "Es responsable de esta política y coordina el análisis de impacto en el negocio.",
          "Mantiene los planes de continuidad y programa los ejercicios.",
        ],
      },
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Diseñan, operan y prueban las capacidades de copia de seguridad y de recuperación ante desastres.",
          "Restauran los sistemas en el orden de prioridad definido por el análisis de impacto en el negocio.",
        ],
      },
      {
        role: "Propietarios de procesos de negocio",
        responsibilities: [
          "Definen la criticidad y las necesidades de recuperación de sus procesos.",
          "Mantienen procedimientos alternativos para operar durante una interrupción.",
        ],
      },
    ],
    sections: [
      {
        heading: "Análisis de impacto en el negocio",
        intro: "La planificación de la recuperación comienza por entender qué es lo más importante y con qué rapidez debe restablecerse.",
        requirements: [
          "La organización deberá realizar un análisis de impacto en el negocio al menos una vez al año y tras cualquier cambio significativo en las operaciones.",
          "El análisis de impacto en el negocio deberá identificar los procesos críticos, sus sistemas de soporte, proveedores y personal, así como sus interdependencias.",
          "La organización deberá definir un objetivo de tiempo de recuperación y un objetivo de punto de recuperación para cada proceso y sistema crítico.",
          "Los objetivos de recuperación deberán ser aprobados por la alta dirección y comunicados a Operaciones de TI.",
        ],
      },
      {
        heading: "Planificación de la continuidad y la recuperación",
        requirements: [
          "La organización deberá mantener un plan de continuidad de negocio que describa los criterios de activación, la autoridad de decisión, los pasos de comunicación y las modalidades alternativas de trabajo.",
          "La organización deberá mantener procedimientos de recuperación ante desastres para cada sistema crítico, con el detalle suficiente para que una persona cualificada pueda seguirlos sin contar con su autor original.",
          "Los planes deberán almacenarse en un lugar que siga siendo accesible si los sistemas y las instalaciones principales no estuvieran disponibles.",
          "Los planes deberán incluir los datos de contacto del personal clave, los proveedores y las autoridades, y verificarse al menos cada seis meses.",
          "La organización deberá revisar y actualizar todos los planes de continuidad y de recuperación al menos una vez al año.",
        ],
      },
      {
        heading: "Copias de seguridad y redundancia",
        requirements: [
          "La organización deberá realizar copias de seguridad de los datos críticos con una frecuencia que cumpla el objetivo de punto de recuperación definido.",
          "Al menos una copia de las copias de seguridad críticas deberá mantenerse desconectada, ser inmutable o estar aislada lógicamente de los sistemas de producción.",
          "Las copias de seguridad deberán cifrarse en tránsito y en reposo y protegerse con controles de acceso distintos de las credenciales de producción.",
          "Los trabajos de copia deberán supervisarse, y cualquier fallo deberá investigarse y resolverse en el plazo de un día hábil.",
          "Los sistemas críticos deberán diseñarse con una redundancia acorde a su objetivo de tiempo de recuperación.",
          "La organización deberá realizar pruebas de restauración de las copias de seguridad críticas al menos una vez al trimestre.",
        ],
      },
      {
        heading: "Pruebas y ejercicios",
        requirements: [
          "La organización deberá ejercitar el plan de continuidad de negocio al menos una vez al año mediante un ejercicio de mesa o funcional.",
          "La organización deberá realizar una prueba de recuperación ante desastres de cada sistema crítico al menos una vez al año.",
          "Los resultados de las pruebas deberán compararse con los objetivos de recuperación y cualquier desviación deberá registrarse con un responsable de su corrección y una fecha objetivo.",
          "El personal con funciones de continuidad o de recuperación deberá recibir formación sobre sus responsabilidades al menos una vez al año.",
        ],
      },
      {
        heading: "Activación y recuperación",
        requirements: [
          "La organización deberá definir quién tiene autoridad para declarar un desastre y activar los planes de continuidad.",
          "Los controles de seguridad de la información deberán seguir vigentes durante la interrupción, y toda excepción temporal deberá aprobarse y registrarse.",
          "Los sistemas deberán restaurarse en el orden de prioridad establecido por el análisis de impacto en el negocio.",
          "La organización deberá realizar una revisión en los 30 días siguientes a cualquier activación de un plan para recoger las lecciones aprendidas.",
        ],
      },
    ],
  },
  "SH-POL-303": {
    title: "Política de Seguridad de Terceros y Proveedores",
    summary: "Regula cómo la organización selecciona, contrata, supervisa y da de baja a los proveedores que acceden a sus datos o sistemas.",
    purpose:
      "Esta política garantiza que los riesgos de seguridad de la información introducidos por proveedores, prestadores de servicios y otros terceros se identifiquen, se acuerden contractualmente y se gestionen durante toda la vida de cada relación.",
    aims: [
      "Evaluar la postura de seguridad de los terceros antes de concederles acceso a datos o sistemas.",
      "Establecer obligaciones de seguridad claras y exigibles en los contratos con proveedores.",
      "Supervisar de forma continua el riesgo de los proveedores en proporción a su criticidad.",
      "Asegurar que el acceso y los datos se recuperen o destruyan cuando finalice una relación.",
    ],
    scope:
      "Esta política se aplica a todos los terceros que almacenen, traten, transmitan o accedan a información de la organización, se conecten a sus redes, suministren software o servicios en la nube o den soporte a procesos de negocio críticos, así como al personal que los contrata y gestiona.",
    covers: [
      "Inventario de proveedores y clasificación por niveles de riesgo.",
      "Diligencia debida en materia de seguridad previa a la contratación.",
      "Requisitos contractuales de seguridad.",
      "Supervisión continua y reevaluación.",
      "Baja de proveedores.",
    ],
    roles: [
      {
        role: "Compras",
        responsibilities: [
          "Garantiza que no se contrate a ningún proveedor sin haber completado la revisión de seguridad exigida.",
          "Mantiene el inventario de proveedores y los registros de contratos.",
        ],
      },
      {
        role: "Seguridad de la Información",
        responsibilities: [
          "Define los criterios de clasificación por niveles de riesgo y realiza las evaluaciones de seguridad.",
          "Aprueba o rechaza a los proveedores en función del riesgo residual y recomienda controles compensatorios.",
        ],
      },
      {
        role: "Responsable de la Relación con el Proveedor",
        responsibilities: [
          "Actúa como interlocutor de negocio responsable de cada proveedor.",
          "Supervisa la prestación del servicio y comunica a Seguridad de la Información cualquier preocupación de seguridad.",
          "Inicia la baja cuando finaliza una relación.",
        ],
      },
      {
        role: "Asesoría Jurídica",
        responsibilities: [
          "Garantiza que los contratos con proveedores incluyan cláusulas de seguridad, privacidad y auditoría.",
        ],
      },
    ],
    sections: [
      {
        heading: "Inventario y clasificación por niveles de riesgo",
        requirements: [
          "La organización deberá mantener un inventario de todos los terceros que accedan a sus datos o sistemas, con los tipos de datos y servicios implicados.",
          "A cada proveedor deberá asignársele un nivel de riesgo en función de la sensibilidad de los datos, el nivel de acceso y la criticidad para el negocio.",
          "Cada proveedor deberá tener un responsable de la relación designado dentro de la organización.",
          "El inventario de proveedores deberá revisarse para comprobar su exactitud al menos una vez al año.",
        ],
      },
      {
        heading: "Diligencia debida",
        intro: "La profundidad de la revisión aumenta con el nivel de riesgo del proveedor.",
        requirements: [
          "La organización deberá completar una evaluación de seguridad antes de conceder a cualquier proveedor acceso a datos o sistemas.",
          "Los proveedores de alto riesgo deberán aportar un aseguramiento independiente, como un informe SOC 2 Tipo II, un certificado ISO/IEC 27001 o equivalente, o someterse a una evaluación detallada.",
          "Seguridad de la Información deberá documentar las carencias identificadas y la decisión sobre el riesgo de cada proveedor evaluado.",
          "No deberá contratarse a proveedores con hallazgos de alto riesgo sin resolver sin la aceptación del riesgo por escrito del CISO.",
          "La organización deberá identificar los casos en que los proveedores recurran a sus propios subcontratistas para servicios que afecten a los datos de la organización.",
        ],
      },
      {
        heading: "Requisitos contractuales",
        requirements: [
          "Los contratos con proveedores deberán definir los controles de seguridad que el proveedor debe mantener, proporcionales a su nivel de riesgo.",
          "Los contratos deberán obligar al proveedor a notificar a la organización los incidentes de seguridad que afecten a sus datos en un plazo definido que no exceda de 72 horas.",
          "Los contratos con proveedores que traten datos personales deberán incluir las cláusulas de protección de datos exigidas por la legislación aplicable.",
          "Los contratos deberán reconocer a la organización el derecho a solicitar evidencias de seguridad o a auditar al proveedor.",
          "Los contratos deberán exigir la devolución o la destrucción segura de los datos de la organización al término de la relación.",
        ],
      },
      {
        heading: "Supervisión continua",
        requirements: [
          "La organización deberá reevaluar a los proveedores de alto riesgo al menos una vez al año y a los demás al menos cada dos años.",
          "Los responsables de la relación deberán comunicar a Seguridad de la Información los cambios relevantes en los servicios, la propiedad o la postura de seguridad de un proveedor.",
          "El acceso de los proveedores a los sistemas de la organización deberá limitarse a lo necesario y revisarse al menos una vez al trimestre.",
          "La organización deberá hacer seguimiento de la corrección de los hallazgos de seguridad de los proveedores hasta su cierre.",
        ],
      },
      {
        heading: "Baja de proveedores",
        requirements: [
          "El responsable de la relación deberá notificar a Seguridad de la Información y a TI la finalización de la relación con un proveedor con al menos cinco días hábiles de antelación, o de inmediato en caso de resolución por incumplimiento.",
          "Todas las cuentas, credenciales y conexiones de red del proveedor deberán deshabilitarse a más tardar el último día de servicio.",
          "La organización deberá obtener confirmación por escrito de que sus datos han sido devueltos o destruidos.",
          "El inventario de proveedores deberá actualizarse para reflejar el fin de la relación.",
        ],
      },
    ],
  },
  "SH-POL-304": {
    title: "Política de Seguridad de los Recursos Humanos",
    summary: "Cubre la seguridad durante todo el ciclo de vida laboral, desde la selección y la incorporación hasta los cambios de puesto, la baja y el régimen disciplinario.",
    purpose:
      "Esta política garantiza que las personas que trabajan para la organización sean idóneas para sus puestos, comprendan sus responsabilidades de seguridad y tengan sus accesos gestionados correctamente desde el día en que se incorporan hasta después de su salida.",
    aims: [
      "Verificar los antecedentes de los candidatos en proporción a la sensibilidad de su puesto.",
      "Dejar claras y vinculantes las obligaciones de seguridad antes de conceder accesos.",
      "Retirar los accesos con prontitud y recuperar los activos cuando el personal cambie de puesto o cause baja.",
      "Ofrecer un proceso justo y coherente para tratar las infracciones de seguridad.",
    ],
    scope:
      "Esta política se aplica a todos los empleados, personal temporal, becarios y contratistas individuales de la organización, así como a los responsables y al personal de Recursos Humanos que los contratan, gestionan y dan de baja.",
    covers: [
      "Verificación previa a la contratación.",
      "Condiciones laborales e incorporación.",
      "Cambios de puesto y ajustes de acceso.",
      "Baja y obligaciones posteriores al empleo.",
      "Régimen disciplinario por infracciones de seguridad.",
    ],
    roles: [
      {
        role: "Recursos Humanos",
        responsibilities: [
          "Realiza la verificación de candidatos y custodia los contratos de trabajo firmados.",
          "Notifica a TI con prontitud las altas, los cambios de puesto y las bajas.",
          "Gestiona el procedimiento disciplinario.",
        ],
      },
      {
        role: "Responsables de contratación y mandos directos",
        responsibilities: [
          "Definen el acceso que necesita cada miembro del equipo y aprueban los cambios.",
          "Garantizan la devolución de los activos y la finalización del traspaso de funciones cuando un miembro del equipo causa baja.",
        ],
      },
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Aprovisionan, ajustan y revocan los accesos a partir de las notificaciones de Recursos Humanos.",
          "Recuperan y sanean los equipos devueltos.",
        ],
      },
      {
        role: "Seguridad de la Información",
        responsibilities: [
          "Define los niveles de verificación para los puestos sensibles e imparte la formación de seguridad en la incorporación.",
          "Asesora en los asuntos disciplinarios relacionados con la seguridad.",
        ],
      },
    ],
    sections: [
      {
        heading: "Verificación de candidatos",
        requirements: [
          "La organización deberá verificar la identidad y el derecho a trabajar de todo candidato antes del inicio de la relación laboral.",
          "La organización deberá realizar comprobaciones de antecedentes proporcionadas al acceso del puesto a datos y sistemas sensibles, en la medida en que lo permita la legislación aplicable.",
          "Los puestos con acceso privilegiado o con acceso a datos financieros o regulados deberán someterse a una verificación reforzada definida por Recursos Humanos y Seguridad de la Información.",
          "Los resultados de la verificación deberán almacenarse de forma segura y ser accesibles únicamente para el personal autorizado de Recursos Humanos.",
          "Los contratistas aportados por una agencia deberán verificarse conforme a un estándar equivalente, ya sea por la agencia o por la organización.",
        ],
      },
      {
        heading: "Incorporación y condiciones laborales",
        requirements: [
          "Todo el personal deberá firmar un acuerdo que incluya obligaciones de confidencialidad y de seguridad de la información antes de recibir acceso a sistemas o datos.",
          "Todo el personal deberá aceptar las políticas de uso aceptable y de seguridad de la información de la organización antes de que se le conceda acceso.",
          "El personal de nueva incorporación deberá completar la formación de concienciación en seguridad en los 30 días siguientes a su fecha de inicio.",
          "El acceso deberá aprovisionarse a partir de una solicitud documentada y aprobada por el mando directo, y limitarse a lo que requiera el puesto.",
        ],
      },
      {
        heading: "Cambios de puesto",
        requirements: [
          "Recursos Humanos deberá notificar a TI cualquier cambio de puesto con al menos cinco días hábiles de antelación a su efectividad, siempre que sea posible.",
          "Los accesos que ya no sean necesarios para el nuevo puesto deberán retirarse en un plazo de cinco días hábiles desde el cambio.",
          "Los mandos directos deberán confirmar el acceso necesario para el nuevo puesto antes de que se conceda acceso adicional.",
          "El personal que pase a puestos privilegiados o sensibles deberá completar la verificación y la formación adicionales que exija ese puesto.",
        ],
      },
      {
        heading: "Baja del personal",
        intro: "Las salidas son una fuente frecuente de accesos residuales y de pérdida de datos, y deben gestionarse con prontitud.",
        requirements: [
          "Recursos Humanos deberá notificar a TI cada baja tan pronto como se conozca la fecha de finalización.",
          "Todo el acceso a los sistemas del personal que cause baja deberá deshabilitarse al finalizar su último día laborable.",
          "El acceso del personal despedido por causa justificada deberá deshabilitarse antes de que se le comunique la decisión o en el mismo momento.",
          "Los mandos directos deberán asegurarse de que todos los dispositivos, tarjetas y soportes propiedad de la organización se devuelvan el último día laborable o antes.",
          "Deberá recordarse por escrito al personal saliente las obligaciones de confidencialidad que continúan tras la finalización de la relación laboral.",
          "Las credenciales compartidas conocidas por el personal saliente deberán cambiarse en el plazo de un día hábil desde su salida.",
        ],
      },
      {
        heading: "Régimen disciplinario",
        requirements: [
          "La organización deberá mantener un procedimiento disciplinario documentado aplicable a las infracciones de las políticas de seguridad de la información.",
          "Las presuntas infracciones deberán investigarse antes de adoptar medidas disciplinarias, y deberá darse a la persona afectada la oportunidad de ser oída.",
          "Las medidas disciplinarias deberán ser proporcionadas a la gravedad, la intencionalidad y el impacto de la infracción, y coherentes en casos similares.",
          "Recursos Humanos deberá conservar los registros de las medidas disciplinarias relacionadas con la seguridad conforme a los requisitos de conservación.",
        ],
      },
    ],
  },
  "SH-POL-305": {
    title: "Política de Seguridad Física y Ambiental",
    summary: "Protege las instalaciones, los equipos y la información de la organización frente al acceso físico no autorizado, los daños y las amenazas ambientales.",
    purpose:
      "Esta política fija los requisitos para proteger las instalaciones, las salas de servidores y de comunicaciones, los equipos y los documentos en papel de la organización frente al acceso no autorizado, el robo, los daños y los riesgos ambientales.",
    aims: [
      "Restringir el acceso físico a las instalaciones y a las áreas sensibles a las personas autorizadas.",
      "Proteger los equipos y las infraestructuras frente a fallos ambientales y de suministro.",
      "Proteger la información y los dispositivos cuando estén desatendidos o se saquen de las instalaciones.",
      "Garantizar que los equipos y soportes se eliminen sin exponer datos.",
    ],
    scope:
      "Esta política se aplica a todas las oficinas, salas de datos y demás instalaciones propiedad de la organización, arrendadas por ella o utilizadas por ella, a los equipos y soportes ubicados en ellas o que se saquen de las mismas, y a todo el personal y los visitantes que accedan a ellas. Los centros de datos de terceros se abordan mediante el aseguramiento de proveedores.",
    covers: [
      "Perímetro de las instalaciones y acceso a áreas seguras.",
      "Gestión de visitas.",
      "Protección ambiental y de los suministros.",
      "Puesto de trabajo despejado, pantalla bloqueada y equipos fuera de las instalaciones.",
      "Eliminación segura y reutilización de equipos.",
    ],
    roles: [
      {
        role: "Responsable de Instalaciones",
        responsibilities: [
          "Es responsable de los sistemas de control de acceso físico, la seguridad de los edificios y los controles ambientales.",
          "Mantiene los registros de visitas y coordina el mantenimiento de las salvaguardas físicas.",
        ],
      },
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Gestionan el acceso a las salas de servidores y de comunicaciones y a los equipos que contienen.",
          "Garantizan el saneamiento y la eliminación seguros de equipos y soportes.",
        ],
      },
      {
        role: "Seguridad de la Información",
        responsibilities: [
          "Define los requisitos de seguridad física y revisa el acceso a las áreas seguras.",
        ],
      },
      {
        role: "Todo el personal",
        responsibilities: [
          "Lleva su identificación visible o consigo en las instalaciones y se dirige a las personas desconocidas o las comunica.",
          "Cumple las normas de puesto de trabajo despejado y pantalla bloqueada y protege los equipos que tiene a su cargo.",
        ],
      },
    ],
    sections: [
      {
        heading: "Acceso a las instalaciones y a las áreas seguras",
        requirements: [
          "La organización deberá controlar la entrada a sus instalaciones mediante tarjetas, llaves o mecanismos equivalentes entregados únicamente a personas autorizadas.",
          "Las salas de servidores, los armarios de comunicaciones y demás áreas seguras deberán restringirse al personal con una necesidad de negocio documentada.",
          "El acceso a las áreas seguras deberá registrarse, y los registros deberán conservarse al menos 90 días.",
          "Los derechos de acceso a las áreas seguras deberán revisarse al menos una vez al trimestre y retirarse cuando dejen de ser necesarios.",
          "La pérdida o el robo de tarjetas y llaves deberá comunicarse de inmediato, y estas deberán desactivarse o sustituirse sin demora.",
        ],
      },
      {
        heading: "Visitas",
        requirements: [
          "Todos los visitantes deberán registrarse a la entrada, identificarse y recibir una tarjeta de visitante visible.",
          "Los visitantes deberán ir acompañados en todo momento por un empleado en las zonas no públicas.",
          "No deberá permitirse el acceso de visitantes a las áreas seguras salvo autorización previa del responsable del área y acompañamiento permanente.",
          "Los registros de visitas deberán conservarse al menos un año.",
        ],
      },
      {
        heading: "Protección ambiental",
        intro: "La infraestructura que soporta los sistemas críticos debe protegerse frente a riesgos que puedan causar interrupciones o pérdida de datos.",
        requirements: [
          "Las salas de servidores y de comunicaciones deberán contar con detección y extinción de incendios adecuadas para equipos electrónicos.",
          "Los equipos críticos deberán protegerse mediante sistemas de alimentación ininterrumpida dimensionados para permitir un apagado controlado o el paso a una alimentación de respaldo.",
          "La temperatura y la humedad de las salas de servidores deberán monitorizarse, con alertas a Operaciones de TI cuando se superen los umbrales.",
          "Los equipos deberán ubicarse de modo que se reduzca el riesgo de daños por agua, sobrecalentamiento e interferencias accidentales.",
          "Los equipos de protección ambiental y eléctrica deberán inspeccionarse y mantenerse conforme al calendario recomendado por el fabricante.",
        ],
      },
      {
        heading: "Puesto de trabajo y equipos fuera de las instalaciones",
        requirements: [
          "El personal deberá bloquear su pantalla siempre que deje un dispositivo desatendido.",
          "Los dispositivos deberán bloquearse automáticamente tras un máximo de 15 minutos de inactividad.",
          "Los documentos en papel confidenciales y los soportes extraíbles deberán guardarse bajo llave cuando no se utilicen y al final de cada jornada laboral.",
          "Las impresiones que contengan información confidencial deberán recogerse de las impresoras de inmediato.",
          "Los dispositivos portátiles que se saquen de las instalaciones no deberán dejarse desatendidos en lugares públicos ni a la vista en vehículos.",
        ],
      },
      {
        heading: "Eliminación y reutilización",
        requirements: [
          "Los equipos que contengan soportes de almacenamiento deberán sanearse mediante un método aprobado antes de su reutilización, devolución al arrendador o eliminación.",
          "Los soportes que no puedan sanearse deberán destruirse físicamente.",
          "Los residuos en papel confidenciales deberán triturarse o depositarse en contenedores de eliminación segura cerrados con llave.",
          "La organización deberá obtener certificados de destrucción de cualquier tercero que preste servicios de eliminación.",
        ],
      },
    ],
  },
  "SH-POL-306": {
    title: "Política de Uso Aceptable de la Inteligencia Artificial",
    summary: "Define cómo puede el personal utilizar herramientas de IA e IA generativa, qué datos pueden introducirse, cómo se aprueban los proveedores y cómo se revisan los resultados.",
    purpose:
      "Esta política permite al personal utilizar herramientas de inteligencia artificial de forma productiva, protegiendo al mismo tiempo la información confidencial, los clientes y la reputación de la organización, y garantizando que las personas sigan siendo responsables de las decisiones y los trabajos elaborados con ayuda de la IA.",
    aims: [
      "Permitir el uso de herramientas de IA que hayan sido evaluadas y aprobadas por la organización.",
      "Evitar que los datos confidenciales, personales y regulados queden expuestos a través de herramientas de IA.",
      "Asegurar que los proveedores de IA cumplan los requisitos de seguridad, privacidad y contractuales de la organización.",
      "Mantener a una persona cualificada como responsable de revisar y utilizar los resultados de la IA.",
    ],
    scope:
      "Esta política se aplica a todo el personal y a los contratistas que utilicen herramientas de inteligencia artificial en el desempeño de su trabajo para la organización, incluidos los asistentes conversacionales de IA generativa, los asistentes de programación, las funciones de IA integradas en el software empresarial y los servicios de IA a los que se acceda mediante API, ya se faciliten con cuentas gestionadas por la organización o con cuentas personales.",
    covers: [
      "Herramientas de IA aprobadas y prohibidas.",
      "Datos que pueden y no pueden introducirse en herramientas de IA.",
      "Evaluación y aprobación de proveedores y funcionalidades de IA.",
      "Revisión humana y responsabilidad sobre los resultados de la IA.",
      "Transparencia, formación y comunicación de incidentes.",
    ],
    roles: [
      {
        role: "Responsable de Gobernanza de la IA",
        responsibilities: [
          "Es responsable de esta política y mantiene el registro de herramientas de IA aprobadas.",
          "Preside las revisiones de las nuevas herramientas y casos de uso de IA propuestos.",
        ],
      },
      {
        role: "Seguridad de la Información y Privacidad",
        responsibilities: [
          "Evalúan los proveedores de IA en cuanto a los riesgos de seguridad, privacidad y tratamiento de datos.",
          "Definen los controles técnicos que restringen los servicios de IA no aprobados.",
        ],
      },
      {
        role: "Responsables de equipo",
        responsibilities: [
          "Garantizan que sus equipos utilicen únicamente herramientas de IA aprobadas para fines aprobados.",
          "Confirman que los flujos de trabajo que dependen de la IA incorporan una revisión humana adecuada.",
        ],
      },
      {
        role: "Todo el personal",
        responsibilities: [
          "Utiliza las herramientas de IA conforme a esta política y a los límites de su clasificación de datos.",
          "Revisa y asume la responsabilidad de cualquier resultado de la IA que utilice o comparta.",
          "Comunica a Seguridad de la Información los usos indebidos, las exposiciones de datos o los resultados perjudiciales.",
        ],
      },
    ],
    sections: [
      {
        heading: "Herramientas aprobadas",
        requirements: [
          "El personal deberá utilizar para fines laborales únicamente las herramientas de IA incluidas en el registro de herramientas de IA aprobadas de la organización.",
          "El personal deberá acceder a las herramientas de IA aprobadas mediante cuentas gestionadas por la organización y no mediante cuentas personales.",
          "La organización deberá publicar para todo el personal el registro de herramientas de IA aprobadas, indicando la clasificación de datos permitida para cada herramienta.",
          "Las funcionalidades de IA que se activen de nuevo en software ya aprobado deberán ser revisadas por Seguridad de la Información antes de utilizarse con datos confidenciales.",
          "La organización deberá aplicar controles técnicos, cuando sea factible, para bloquear o monitorizar el acceso a servicios de IA no aprobados.",
        ],
      },
      {
        heading: "Datos introducidos en herramientas de IA",
        intro: "La información introducida en una herramienta de IA puede ser almacenada, registrada o utilizada por el proveedor, y debe considerarse comunicada a este.",
        requirements: [
          "El personal no deberá introducir datos confidenciales, restringidos, personales o de clientes en ninguna herramienta de IA salvo que esta esté aprobada para esa clasificación de datos.",
          "El personal no deberá introducir contraseñas, claves, tokens de acceso ni otros secretos en ninguna herramienta de IA.",
          "El personal no deberá introducir código fuente, información financiera no publicada ni secretos comerciales en herramientas de IA que no estén aprobadas para esos datos.",
          "El personal deberá eliminar o anonimizar los datos personales de las instrucciones cuando la tarea pueda realizarse sin ellos.",
          "El personal no deberá cargar contenido de terceros en herramientas de IA cuando ello suponga el incumplimiento de una licencia, un contrato o una obligación de confidencialidad.",
        ],
      },
      {
        heading: "Aprobación de proveedores y casos de uso de IA",
        requirements: [
          "Toda nueva herramienta o proveedor de IA deberá ser evaluado por Seguridad de la Información y Privacidad antes de su aprobación.",
          "Las evaluaciones de proveedores deberán confirmar si los datos aportados por los clientes se utilizan para entrenar modelos, durante cuánto tiempo se conservan, dónde se tratan y qué controles de seguridad existen.",
          "La organización deberá dar preferencia a los proveedores de IA que se comprometan contractualmente a no entrenar con los datos de la organización y que ofrezcan su supresión a petición.",
          "Los casos de uso que tomen o influyan de forma sustancial en decisiones sobre personas, como la contratación, el crédito o la evaluación del desempeño, deberán contar con la aprobación del Responsable de Gobernanza de la IA y de Asesoría Jurídica antes de su puesta en marcha.",
          "Las herramientas de IA aprobadas y sus usos permitidos deberán revisarse al menos una vez al año.",
        ],
      },
      {
        heading: "Revisión humana y responsabilidad",
        requirements: [
          "Una persona cualificada deberá revisar el contenido generado por IA en cuanto a su exactitud, integridad y adecuación antes de basarse en él o de compartirlo fuera del equipo inmediato.",
          "El código generado por IA deberá someterse a la misma revisión de código, pruebas y análisis de seguridad que el escrito por el personal.",
          "El personal no deberá presentar los resultados de la IA como hechos verificados sin contrastarlos con fuentes fiables.",
          "Las decisiones con repercusión jurídica, financiera o personal significativa deberán ser adoptadas por una persona responsable y no deberán delegarse exclusivamente en un sistema de IA.",
          "La persona que utilice o comparta un resultado de la IA deberá seguir siendo responsable del mismo como si lo hubiera elaborado ella misma.",
        ],
      },
      {
        heading: "Transparencia, formación e incidentes",
        requirements: [
          "La organización deberá informar del uso de la IA a los clientes o al público cuando lo exijan la ley, un contrato o los compromisos de la organización.",
          "El personal que utilice herramientas de IA deberá completar la formación sobre uso aceptable de la IA antes del primer uso y, posteriormente, al menos una vez al año.",
          "El personal deberá comunicar a Seguridad de la Información cualquier introducción accidental de datos restringidos en una herramienta de IA en el plazo de un día hábil.",
          "Todo comportamiento perjudicial, sesgado o inesperado de la IA observado en una herramienta aprobada deberá comunicarse al Responsable de Gobernanza de la IA.",
        ],
      },
    ],
  },
  "SH-POL-307": {
    title: "Política de Correo Electrónico y Comunicaciones Electrónicas",
    summary: "Establece las normas para el uso seguro y adecuado del correo electrónico, la mensajería y las herramientas de colaboración, y para la protección de la información que circula por ellos.",
    purpose:
      "Esta política define cómo deben utilizarse y protegerse el correo electrónico, la mensajería instantánea y las plataformas de colaboración de la organización, de modo que las comunicaciones sean seguras, profesionales y acordes con los requisitos legales y de conservación.",
    aims: [
      "Garantizar que las comunicaciones de negocio se realicen únicamente en plataformas aprobadas y gestionadas por la organización.",
      "Proteger la información sensible transmitida por medios electrónicos.",
      "Reducir el riesgo de phishing, suplantación de identidad y adjuntos maliciosos.",
      "Conservar las comunicaciones según lo exigido por fines legales, regulatorios y empresariales.",
    ],
    scope:
      "Esta política se aplica a todo el personal y a los contratistas que utilicen el correo electrónico, la mensajería instantánea, la videoconferencia y las plataformas de colaboración de la organización, en cualquier dispositivo, y a todos los mensajes y archivos enviados o recibidos a través de ellos en nombre de la organización.",
    covers: [
      "Plataformas de comunicación aprobadas y uso aceptable.",
      "Protección de la información sensible en tránsito.",
      "Controles de seguridad del correo electrónico y defensa frente al phishing.",
      "Conservación, monitorización y expectativas de privacidad.",
    ],
    roles: [
      {
        role: "Operaciones de TI",
        responsibilities: [
          "Administran las plataformas de correo y colaboración y su configuración de seguridad.",
          "Implantan los controles de conservación, filtrado y autenticación.",
        ],
      },
      {
        role: "Seguridad de la Información",
        responsibilities: [
          "Define los estándares de seguridad del correo electrónico y vigila el phishing y la fuga de datos.",
          "Investiga los mensajes sospechosos que se le comunican.",
        ],
      },
      {
        role: "Asesoría Jurídica y Cumplimiento",
        responsibilities: [
          "Define los periodos de conservación y gestiona las retenciones legales de comunicaciones.",
        ],
      },
      {
        role: "Todo el personal",
        responsibilities: [
          "Utiliza las plataformas aprobadas de forma profesional y protege la información sensible que envía.",
          "Comunica los mensajes sospechosos mediante el método de notificación designado.",
        ],
      },
    ],
    sections: [
      {
        heading: "Plataformas aprobadas y uso aceptable",
        requirements: [
          "El personal deberá realizar la actividad de la organización únicamente a través de las plataformas de correo y mensajería facilitadas o aprobadas por la organización.",
          "El personal no deberá reenviar automáticamente el correo de la organización a cuentas personales o externas.",
          "El personal no deberá utilizar las plataformas de comunicación de la organización para enviar contenido ilícito, acosador, discriminatorio o contrario al código de conducta de la organización.",
          "El personal deberá limitar el uso personal de las plataformas de comunicación de la organización a un uso ocasional que no interfiera con el trabajo, no consuma recursos excesivos ni infrinja ninguna política.",
          "El personal no deberá enviar mensajes que suplanten a otra persona o tergiversen la autoridad del remitente.",
        ],
      },
      {
        heading: "Protección de la información sensible",
        requirements: [
          "La información confidencial y restringida enviada a destinatarios externos deberá cifrarse o compartirse mediante un método seguro de intercambio de archivos aprobado.",
          "El personal deberá verificar las direcciones de los destinatarios antes de enviar información confidencial.",
          "Las contraseñas y otras credenciales no deberán enviarse por correo electrónico ni por chat en texto sin cifrar.",
          "La organización deberá exigir TLS en el transporte del correo con sus socios cuando sea posible.",
          "La organización deberá aplicar controles de prevención de fuga de datos para detectar y bloquear la transmisión de datos restringidos cuando sea técnicamente viable.",
        ],
      },
      {
        heading: "Seguridad del correo electrónico y defensa frente al phishing",
        intro: "El correo electrónico sigue siendo la principal vía de entrada de los atacantes y requiere controles técnicos y humanos por capas.",
        requirements: [
          "La organización deberá publicar registros SPF, DKIM y DMARC para todos sus dominios de envío y aplicar una política DMARC de cuarentena o rechazo.",
          "El correo entrante deberá analizarse en busca de malware, enlaces maliciosos y suplantación antes de su entrega.",
          "Los mensajes originados fuera de la organización deberán marcarse visiblemente como externos.",
          "El personal deberá comunicar los presuntos casos de phishing mediante el método de notificación designado y no deberá reenviar mensajes sospechosos a sus compañeros.",
          "Las solicitudes recibidas por correo electrónico o chat para cambiar datos de pago o transferir fondos deberán verificarse por un canal distinto y previamente conocido antes de actuar.",
          "La organización deberá realizar ejercicios de simulación de phishing al menos una vez al trimestre.",
        ],
      },
      {
        heading: "Conservación y monitorización",
        requirements: [
          "Las comunicaciones deberán conservarse conforme al calendario de conservación de registros de la organización.",
          "Asesoría Jurídica y Cumplimiento deberá poder establecer retenciones legales que suspendan la eliminación de las comunicaciones pertinentes.",
          "La organización podrá monitorizar las comunicaciones en sus plataformas con fines de seguridad, jurídicos y de cumplimiento, de conformidad con la legislación aplicable, y deberá informar de ello al personal.",
          "Los buzones y las cuentas de chat del personal que cause baja deberán conservarse o transferirse conforme al calendario de conservación antes de su eliminación.",
        ],
      },
    ],
  },
};
