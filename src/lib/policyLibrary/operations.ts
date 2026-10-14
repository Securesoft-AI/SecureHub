// Operations bundle: original SecureHub-authored policies covering day-to-day security operations.

import type { LibraryPolicy } from "./types";

export const OPERATIONS_POLICIES: LibraryPolicy[] = [
  {
    docId: "SH-POL-201",
    title: "Secure Configuration and Hardening Policy",
    summary: "Requires approved, hardened baselines for all systems and continuous detection of configuration drift.",
    purpose:
      "This policy establishes how the organization defines, applies and maintains secure configurations for its technology assets so that systems are deployed in a known, defensible state and unnecessary attack surface is removed before and throughout operation.",
    aims: [
      "Ensure every system is built from an approved and documented security baseline.",
      "Reduce attack surface by removing or disabling unneeded services, accounts and software.",
      "Detect and correct unauthorized deviations from approved configurations promptly.",
      "Provide evidence that configuration standards are applied consistently across environments.",
    ],
    scope:
      "This policy applies to all servers, workstations, laptops, network devices, databases, containers, virtual machine images and cloud resources owned, leased or managed by the organization, in production and non-production environments, whether operated by staff or by third parties on the organization's behalf.",
    covers: [
      "Definition and approval of security configuration baselines.",
      "Hardening of operating systems, applications, network devices and cloud services.",
      "Management of default accounts, credentials and unnecessary services.",
      "Monitoring and remediation of configuration drift.",
      "Exceptions to approved baselines.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Approves configuration baselines and the exception process.",
          "Reviews compliance reporting on baseline adherence each quarter.",
        ],
      },
      {
        role: "Platform and Infrastructure Owners",
        responsibilities: [
          "Develop and maintain baselines for the technologies they operate.",
          "Ensure new systems are deployed from approved hardened images or templates.",
          "Remediate configuration drift within the defined timeframes.",
        ],
      },
      {
        role: "Security Operations",
        responsibilities: [
          "Runs automated configuration assessments and reports deviations to asset owners.",
          "Tracks open findings and escalates overdue items.",
        ],
      },
      {
        role: "System Administrators",
        responsibilities: [
          "Apply baseline settings when building or modifying systems.",
          "Record approved deviations in the configuration management database.",
        ],
      },
    ],
    sections: [
      {
        heading: "Configuration baselines",
        intro: "Baselines define the minimum security settings that each technology must meet before use.",
        requirements: [
          "The organization shall maintain a documented security configuration baseline for each operating system, database, network device type and cloud service in use.",
          "Baselines shall be informed by recognized industry benchmarks and adapted to the organization's risk profile.",
          "Each baseline shall have a named owner responsible for its accuracy.",
          "Baselines shall be reviewed at least annually and whenever a major version of the underlying technology is adopted.",
          "Changes to a baseline shall be approved by the Chief Information Security Officer or a delegate before publication.",
        ],
      },
      {
        heading: "System build and deployment",
        requirements: [
          "New systems shall be built from approved hardened images, templates or infrastructure-as-code definitions.",
          "Systems shall not be connected to production networks until baseline settings have been applied and verified.",
          "Golden images and templates shall be rebuilt at least monthly to incorporate current security patches.",
          "Only software required for the system's business function shall be installed.",
          "Infrastructure-as-code definitions shall be stored in version control and scanned for insecure settings before deployment.",
        ],
      },
      {
        heading: "Default accounts, services and settings",
        requirements: [
          "Vendor default passwords shall be changed before a system or device is placed into service.",
          "Default and built-in accounts that are not required shall be disabled or removed.",
          "Unnecessary services, ports, protocols, scripts and features shall be disabled.",
          "Insecure protocols such as Telnet, unencrypted FTP and SMBv1 shall be disabled unless an approved exception exists.",
          "Administrative interfaces shall be accessible only from designated management networks or through approved privileged access tools.",
          "System clocks shall be synchronized to an approved authoritative time source.",
        ],
      },
      {
        heading: "Drift detection and remediation",
        intro: "Configurations shall be assessed continuously so that unauthorized changes are identified early.",
        requirements: [
          "The organization shall assess production systems against their baselines using automated tooling at least weekly.",
          "Deviations rated high or critical shall be remediated within 14 days of detection.",
          "Other deviations shall be remediated within 60 days of detection.",
          "Unauthorized configuration changes shall be investigated as potential security incidents.",
          "Baseline compliance rates shall be reported to the Chief Information Security Officer each quarter.",
        ],
      },
      {
        heading: "Exceptions",
        requirements: [
          "Any deviation from an approved baseline shall be documented with a business justification and a risk assessment.",
          "Exceptions shall identify compensating controls where the deviation increases risk.",
          "Exceptions shall be approved by the asset owner and the security function before implementation.",
          "Exceptions shall expire after no more than 12 months and be re-approved if still required.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.PS-01",
      "ISO/IEC 27001:2022 — Annex A 8.9",
      "NIST SP 800-53 Rev. 5 — CM-2, CM-6, CM-7",
      "CIS Controls v8 — Control 4",
    ],
  },
  {
    docId: "SH-POL-202",
    title: "Vulnerability and Patch Management Policy",
    summary: "Sets scanning frequencies, risk-based remediation deadlines and patching expectations for all technology assets.",
    purpose:
      "This policy defines how the organization identifies, prioritizes and remediates technical vulnerabilities so that known weaknesses are addressed within timeframes proportionate to the risk they present.",
    aims: [
      "Identify vulnerabilities across all in-scope assets through regular, authenticated scanning.",
      "Prioritize remediation according to severity, exploitability and asset exposure.",
      "Apply security patches within defined service levels.",
      "Manage residual risk where vulnerabilities cannot be remediated on time.",
    ],
    scope:
      "This policy applies to all hardware, operating systems, firmware, applications, libraries, containers and cloud services owned or operated by the organization, including systems managed by third parties on the organization's behalf.",
    covers: [
      "Vulnerability scanning and discovery.",
      "Risk rating and prioritization.",
      "Remediation and patch deployment timeframes.",
      "Emergency patching for actively exploited vulnerabilities.",
      "Exceptions and risk acceptance.",
    ],
    roles: [
      {
        role: "Vulnerability Management Lead",
        responsibilities: [
          "Operates the scanning program and maintains scan coverage.",
          "Assigns findings to asset owners and tracks them to closure.",
          "Reports remediation performance monthly.",
        ],
      },
      {
        role: "Asset Owners",
        responsibilities: [
          "Remediate vulnerabilities on their assets within the required timeframes.",
          "Request an exception when a deadline cannot be met.",
        ],
      },
      {
        role: "IT Operations",
        responsibilities: [
          "Tests and deploys operating system and application patches.",
          "Maintains automated patch deployment tooling.",
        ],
      },
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Approves risk acceptances for vulnerabilities that exceed remediation deadlines.",
          "Declares emergency patching events.",
        ],
      },
    ],
    sections: [
      {
        heading: "Vulnerability identification",
        requirements: [
          "The organization shall perform authenticated vulnerability scans of all internal systems at least monthly.",
          "Internet-facing systems shall be scanned at least weekly.",
          "New systems shall be scanned before being placed into production.",
          "Container images and software dependencies shall be scanned in the build pipeline before release.",
          "The organization shall monitor vendor advisories and threat intelligence sources for newly disclosed vulnerabilities affecting its assets.",
          "Scan coverage shall be reconciled against the asset inventory at least quarterly.",
        ],
      },
      {
        heading: "Risk rating and prioritization",
        intro: "Findings are rated so that the most dangerous weaknesses are addressed first.",
        requirements: [
          "Each vulnerability shall be assigned a severity of critical, high, medium or low based on its CVSS score and the organization's context.",
          "Vulnerabilities listed in a known exploited vulnerabilities catalog shall be treated as critical regardless of base score.",
          "Prioritization shall consider asset exposure, data sensitivity and availability of exploit code.",
          "Findings shall be recorded in a central tracking system with an owner and due date.",
        ],
      },
      {
        heading: "Remediation timeframes",
        requirements: [
          "Critical vulnerabilities on internet-facing systems shall be remediated within 7 days.",
          "Critical vulnerabilities on internal systems shall be remediated within 14 days.",
          "High vulnerabilities shall be remediated within 30 days.",
          "Medium vulnerabilities shall be remediated within 90 days.",
          "Low vulnerabilities shall be remediated within 180 days or accepted through the exception process.",
          "Remediation shall be verified by a follow-up scan before a finding is closed.",
        ],
      },
      {
        heading: "Patch deployment",
        requirements: [
          "Security patches for operating systems and common applications shall be deployed through automated tooling wherever technically feasible.",
          "Patches shall be tested in a representative environment before broad deployment when the system is business critical.",
          "Patch deployment shall follow the change management process, with routine patches handled as pre-approved standard changes.",
          "Software and hardware that is no longer supported by its vendor shall be replaced or isolated with documented compensating controls.",
          "Patch compliance shall be measured and reported to IT leadership monthly.",
        ],
      },
      {
        heading: "Emergency patching",
        requirements: [
          "The Chief Information Security Officer shall declare an emergency patching event when a vulnerability is actively exploited and affects the organization's assets.",
          "During an emergency patching event, affected internet-facing systems shall be patched or mitigated within 72 hours.",
          "Emergency changes shall be recorded and reviewed retrospectively by the change advisory board.",
          "Temporary mitigations shall be applied where a patch is not yet available.",
        ],
      },
      {
        heading: "Exceptions and risk acceptance",
        requirements: [
          "Any vulnerability that cannot be remediated within its deadline shall be submitted for a time-bound exception.",
          "Exceptions shall document compensating controls and a target remediation date.",
          "Exceptions for critical or high vulnerabilities shall be approved by the Chief Information Security Officer.",
          "Exceptions shall not exceed 6 months without re-approval.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — ID.RA-01, PR.PS-02",
      "ISO/IEC 27001:2022 — Annex A 8.8",
      "NIST SP 800-53 Rev. 5 — RA-5, SI-2",
      "CIS Controls v8 — Control 7",
      "NIST SP 800-40 Rev. 4",
    ],
  },
  {
    docId: "SH-POL-203",
    title: "Logging and Security Monitoring Policy",
    summary: "Defines which events must be logged, how logs are protected and retained, and how security alerts are monitored.",
    purpose:
      "This policy establishes requirements for generating, collecting, protecting and reviewing security-relevant logs so that the organization can detect malicious activity, investigate incidents and demonstrate accountability.",
    aims: [
      "Ensure security-relevant events are recorded on all in-scope systems.",
      "Centralize logs so they can be correlated and analyzed.",
      "Protect log integrity and retain logs for investigative and regulatory needs.",
      "Detect and respond to suspicious activity in a timely manner.",
    ],
    scope:
      "This policy applies to all systems, applications, network devices, security tools and cloud services that store, process or protect the organization's information, together with the personnel and providers who operate or monitor them.",
    covers: [
      "Event logging requirements.",
      "Log collection and centralization.",
      "Log protection, time synchronization and retention.",
      "Security monitoring, alerting and triage.",
    ],
    roles: [
      {
        role: "Security Operations Center",
        responsibilities: [
          "Monitors security alerts and triages them within defined timeframes.",
          "Maintains detection rules and tunes them to reduce false positives.",
          "Escalates confirmed incidents to the incident response team.",
        ],
      },
      {
        role: "System and Application Owners",
        responsibilities: [
          "Configure their systems to generate required logs and forward them to the central platform.",
          "Notify the security operations team of new log sources.",
        ],
      },
      {
        role: "Logging Platform Administrators",
        responsibilities: [
          "Operate the central log platform and ensure its availability.",
          "Enforce access controls and retention settings on log data.",
        ],
      },
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Approves logging standards and retention periods.",
          "Reviews monitoring coverage and performance metrics quarterly.",
        ],
      },
    ],
    sections: [
      {
        heading: "Events to be logged",
        requirements: [
          "Systems shall log successful and failed authentication attempts.",
          "Systems shall log the use of privileged accounts and changes to user rights.",
          "Systems shall log creation, modification and deletion of accounts, security settings and audit configurations.",
          "Applications that process confidential data shall log access to that data at a level sufficient to identify the user and the action.",
          "Network security devices shall log permitted and denied connections at their trust boundaries.",
          "Each log entry shall include a timestamp, source, user or process identity, event type and outcome.",
        ],
      },
      {
        heading: "Collection and centralization",
        requirements: [
          "Logs from all in-scope systems shall be forwarded to a central log management or SIEM platform.",
          "Logs shall be transmitted to the central platform over encrypted channels.",
          "The organization shall maintain an inventory of log sources and review it for gaps at least quarterly.",
          "The failure of a critical log source to report shall generate an alert within 24 hours.",
        ],
      },
      {
        heading: "Protection, time synchronization and retention",
        intro: "Log data must remain trustworthy and available for as long as it may be needed.",
        requirements: [
          "Access to log data shall be restricted to authorized personnel based on job need.",
          "Logs shall be protected against unauthorized modification and deletion.",
          "Administrators shall not be able to alter or delete logs of their own activity.",
          "All systems shall synchronize their clocks with an approved authoritative time source.",
          "Security logs shall be retained for at least 12 months, with the most recent 90 days immediately available for search.",
          "Longer retention periods shall apply where required by law, regulation or contract.",
        ],
      },
      {
        heading: "Monitoring and alerting",
        requirements: [
          "The organization shall monitor security alerts on a continuous basis, either internally or through a managed service provider.",
          "Critical alerts shall be triaged within 1 hour of generation.",
          "High alerts shall be triaged within 4 hours of generation.",
          "Detection rules shall be mapped to known attacker techniques and reviewed at least semiannually.",
          "Confirmed security events shall be handled according to the incident response procedure.",
        ],
      },
      {
        heading: "Review and improvement",
        requirements: [
          "Privileged activity logs shall be reviewed at least weekly for unexpected actions.",
          "Monitoring metrics, including alert volumes and triage times, shall be reported monthly to security leadership.",
          "Lessons learned from incidents shall be used to create or improve detection rules.",
          "The logging and monitoring capability shall be tested at least annually through simulated attack activity.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.PS-04, DE.CM, DE.AE",
      "ISO/IEC 27001:2022 — Annex A 8.15, 8.16, 8.17",
      "NIST SP 800-53 Rev. 5 — AU-2, AU-6, AU-9, AU-11, SI-4",
      "CIS Controls v8 — Control 8",
    ],
  },
  {
    docId: "SH-POL-204",
    title: "Endpoint and Malware Protection Policy",
    summary: "Requires managed, protected endpoints with anti-malware, endpoint detection and controls on software and removable media.",
    purpose:
      "This policy sets requirements for protecting the organization's endpoints against malicious software and misuse, so that devices used to access organizational information remain trustworthy and threats are detected and contained quickly.",
    aims: [
      "Ensure all endpoints are centrally managed and protected by approved security tooling.",
      "Prevent, detect and contain malicious software.",
      "Limit the software and media that can introduce threats onto endpoints.",
      "Respond to endpoint threats consistently and quickly.",
    ],
    scope:
      "This policy applies to all desktops, laptops, servers and virtual desktops owned or managed by the organization, and to all personnel who use them. Personally owned mobile devices are addressed by the Mobile Device and BYOD Policy.",
    covers: [
      "Endpoint management and enrollment.",
      "Anti-malware and endpoint detection and response.",
      "Application control and software installation.",
      "Removable media and email-borne threats.",
      "Response to malware detections.",
    ],
    roles: [
      {
        role: "Endpoint Engineering",
        responsibilities: [
          "Deploys and maintains endpoint management and protection tooling.",
          "Ensures protection agents are healthy and reporting on all devices.",
        ],
      },
      {
        role: "Security Operations",
        responsibilities: [
          "Monitors endpoint alerts and investigates detections.",
          "Isolates compromised devices when required.",
        ],
      },
      {
        role: "IT Service Desk",
        responsibilities: [
          "Enrolls new devices before issue to users.",
          "Reimages devices that have been confirmed as compromised.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Do not disable or tamper with security software.",
          "Report suspected malware or unusual device behavior immediately.",
        ],
      },
    ],
    sections: [
      {
        heading: "Endpoint management",
        requirements: [
          "All organization-owned endpoints shall be enrolled in a central management platform before being issued to users.",
          "Endpoints shall be configured according to the approved hardening baseline.",
          "Full-disk encryption shall be enabled on all laptops and desktops.",
          "Endpoints shall lock automatically after no more than 15 minutes of inactivity.",
          "Endpoints that have not checked in with the management platform for 30 days shall be investigated and, if necessary, disabled.",
        ],
      },
      {
        heading: "Anti-malware and endpoint detection",
        intro: "Every endpoint must run protection capable of both preventing and detecting threats.",
        requirements: [
          "All endpoints and servers shall run approved anti-malware and endpoint detection and response software.",
          "Protection software shall update its detection content automatically at least daily.",
          "Real-time scanning of files on access shall be enabled.",
          "Users shall not be able to disable, uninstall or reconfigure protection software.",
          "Endpoints with missing or unhealthy protection agents shall be remediated within 3 business days.",
        ],
      },
      {
        heading: "Software installation and application control",
        requirements: [
          "Standard users shall not hold local administrator rights on their endpoints.",
          "Software shall be installed only from an approved catalog or with documented approval from IT.",
          "Application control shall be used on servers and high-risk endpoints to permit only authorized executables.",
          "Macros in office documents from external sources shall be blocked by default.",
          "Browsers and browser extensions shall be centrally managed and restricted to an approved list.",
        ],
      },
      {
        heading: "Removable media and email threats",
        requirements: [
          "Automatic execution of content from removable media shall be disabled.",
          "Removable media shall be scanned for malware when connected.",
          "Write access to removable storage shall be blocked unless approved for a business need.",
          "Inbound email shall be filtered for malicious attachments, links and spoofed senders.",
          "Attachments of high-risk file types shall be blocked or detonated in a sandbox before delivery.",
        ],
      },
      {
        heading: "Response to detections",
        requirements: [
          "High and critical endpoint alerts shall be triaged by security operations within 1 hour.",
          "Endpoints with a confirmed compromise shall be isolated from the network until investigated.",
          "Confirmed compromised endpoints shall be reimaged from a trusted source before return to service.",
          "Malware incidents shall be recorded and handled under the incident response procedure.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.PS-05, DE.CM-09",
      "ISO/IEC 27001:2022 — Annex A 8.1, 8.7",
      "NIST SP 800-53 Rev. 5 — SI-3, CM-7, MP-7",
      "CIS Controls v8 — Control 10",
    ],
  },
  {
    docId: "SH-POL-205",
    title: "Network Security Policy",
    summary: "Requires segmented, default-deny networks with controlled perimeters, secure remote access and protected wireless.",
    purpose:
      "This policy defines how the organization designs, protects and operates its networks so that information in transit is safeguarded, access between network zones is controlled and malicious traffic is detected and blocked.",
    aims: [
      "Separate networks into zones based on trust and data sensitivity.",
      "Restrict traffic to what is required for business purposes.",
      "Protect remote and wireless access to organizational networks.",
      "Maintain secure, well-documented network infrastructure.",
    ],
    scope:
      "This policy applies to all wired, wireless, virtual and cloud networks operated by or for the organization, including firewalls, routers, switches, wireless access points, VPN gateways and network security services.",
    covers: [
      "Network architecture and segmentation.",
      "Firewall and traffic filtering rules.",
      "Remote access and wireless networks.",
      "Network device management.",
      "Network monitoring and protection of data in transit.",
    ],
    roles: [
      {
        role: "Network Engineering",
        responsibilities: [
          "Designs, implements and maintains network infrastructure in line with this policy.",
          "Maintains current network diagrams and device inventories.",
          "Implements approved firewall rule changes.",
        ],
      },
      {
        role: "Security Architecture",
        responsibilities: [
          "Defines network zones and segmentation requirements.",
          "Reviews proposed changes affecting trust boundaries.",
        ],
      },
      {
        role: "Security Operations",
        responsibilities: [
          "Monitors network traffic and security device alerts.",
          "Conducts the periodic firewall rule review with network engineering.",
        ],
      },
    ],
    sections: [
      {
        heading: "Architecture and segmentation",
        requirements: [
          "The organization shall divide its networks into zones based on function, trust level and data sensitivity.",
          "Production, non-production, user and management networks shall be logically separated.",
          "Systems that store or process highly confidential or regulated data shall reside in dedicated, restricted zones.",
          "Guest and untrusted devices shall be confined to networks with no access to internal resources.",
          "Network diagrams showing zones, trust boundaries and data flows shall be maintained and reviewed at least annually.",
        ],
      },
      {
        heading: "Firewalls and traffic filtering",
        intro: "Traffic between zones and to external networks is permitted only where there is a defined business need.",
        requirements: [
          "Firewalls or equivalent controls shall be deployed at every boundary between network zones and external networks.",
          "Firewall rule sets shall deny all traffic by default and permit only explicitly approved flows.",
          "Each firewall rule shall have a documented business justification and owner.",
          "Firewall rules shall be reviewed at least every 6 months and unused or overly permissive rules removed.",
          "Outbound internet traffic from servers shall be restricted to approved destinations.",
          "Web traffic from user devices shall be filtered to block known malicious and prohibited categories.",
        ],
      },
      {
        heading: "Remote and wireless access",
        requirements: [
          "Remote access to internal networks shall use approved encrypted solutions with multi-factor authentication.",
          "Remote access sessions shall terminate after no more than 12 hours or after a defined period of inactivity.",
          "Corporate wireless networks shall use WPA3-Enterprise or WPA2-Enterprise with certificate-based or individual authentication.",
          "Pre-shared keys shall not be used for wireless networks that provide access to internal resources.",
          "The organization shall scan for unauthorized wireless access points at least quarterly.",
        ],
      },
      {
        heading: "Network device management",
        requirements: [
          "Network devices shall be configured according to approved hardening baselines.",
          "Network device administration shall occur only over encrypted protocols from designated management networks.",
          "Network device configurations shall be backed up automatically after every change and at least weekly.",
          "Network device firmware shall be kept within vendor support and patched according to the Vulnerability and Patch Management Policy.",
        ],
      },
      {
        heading: "Monitoring and data in transit",
        requirements: [
          "Network traffic at key boundaries shall be monitored using intrusion detection or prevention capabilities.",
          "Network security devices shall forward logs to the central logging platform.",
          "Confidential data transmitted over untrusted networks shall be encrypted using TLS 1.2 or higher or an equivalent approved protocol.",
          "DNS queries from organizational devices shall be routed through approved resolvers that filter known malicious domains.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.IR-01, DE.CM-01",
      "ISO/IEC 27001:2022 — Annex A 8.20, 8.21, 8.22, 8.23",
      "NIST SP 800-53 Rev. 5 — SC-7, SC-8, AC-4, AC-17, AC-18",
      "CIS Controls v8 — Controls 12 and 13",
    ],
  },
  {
    docId: "SH-POL-206",
    title: "Change and Configuration Management Policy",
    summary: "Requires changes to production systems to be recorded, assessed, approved, tested and reviewed.",
    purpose:
      "This policy establishes a controlled process for changing the organization's information systems so that changes are authorized, tested and traceable, and the risk of outages or security weaknesses introduced by change is minimized.",
    aims: [
      "Ensure all changes to production systems are recorded and authorized.",
      "Assess the security and operational impact of changes before implementation.",
      "Maintain accurate records of system configurations and their relationships.",
      "Enable rapid recovery when a change causes an adverse outcome.",
    ],
    scope:
      "This policy applies to changes to production infrastructure, applications, databases, network devices, cloud resources, security tooling and their configurations, whether performed by the organization's personnel or by third parties.",
    covers: [
      "Change categories and approval paths.",
      "Risk assessment, testing and rollback planning.",
      "Emergency changes.",
      "Configuration records and the configuration management database.",
      "Post-implementation review.",
    ],
    roles: [
      {
        role: "Change Manager",
        responsibilities: [
          "Owns the change management process and its records.",
          "Chairs the change advisory board.",
          "Reports on change success rates and unauthorized changes.",
        ],
      },
      {
        role: "Change Advisory Board",
        responsibilities: [
          "Reviews and approves normal changes of medium or high risk.",
          "Reviews emergency changes retrospectively.",
        ],
      },
      {
        role: "Change Requesters and Implementers",
        responsibilities: [
          "Submit complete change requests including risk, testing and rollback details.",
          "Implement only approved changes within the approved window.",
        ],
      },
      {
        role: "Security Function",
        responsibilities: [
          "Reviews changes that affect security controls, trust boundaries or sensitive data.",
        ],
      },
    ],
    sections: [
      {
        heading: "Change categories",
        requirements: [
          "Every change to a production system shall be recorded in the change management system before implementation.",
          "Changes shall be classified as standard, normal or emergency.",
          "Standard changes shall be low-risk, repeatable activities pre-approved by the change advisory board and documented as templates.",
          "Normal changes shall be assessed and approved according to their risk rating before implementation.",
          "Standard change templates shall be reviewed at least annually.",
        ],
      },
      {
        heading: "Assessment, approval and testing",
        intro: "Each normal change is assessed for impact before it is approved.",
        requirements: [
          "Change requests shall describe the change, affected systems, risk rating, test results, implementation plan and rollback plan.",
          "Changes affecting security controls, network boundaries or systems holding confidential data shall be reviewed by the security function.",
          "High-risk changes shall be approved by the change advisory board.",
          "Changes shall be tested in a non-production environment that reasonably represents production before implementation.",
          "The person who develops a change shall not be the sole approver of that change.",
          "Changes shall be scheduled to minimize business impact and communicated to affected stakeholders in advance.",
        ],
      },
      {
        heading: "Emergency changes",
        requirements: [
          "Emergency changes shall be used only to restore service or to address an urgent security threat.",
          "Emergency changes shall be authorized by a designated emergency approver before implementation.",
          "Emergency changes shall be fully documented within 2 business days of implementation.",
          "Emergency changes shall be reviewed by the change advisory board at its next meeting.",
        ],
      },
      {
        heading: "Configuration records",
        requirements: [
          "The organization shall maintain a configuration management database recording production systems, their owners and key relationships.",
          "Configuration records shall be updated as part of closing each change.",
          "Configuration records for critical systems shall be reconciled against discovered assets at least quarterly.",
          "Infrastructure-as-code repositories shall serve as the authoritative configuration record where they are used.",
        ],
      },
      {
        heading: "Review and unauthorized changes",
        requirements: [
          "Failed changes and changes that caused incidents shall undergo a post-implementation review.",
          "The organization shall detect production changes that lack an approved change record.",
          "Unauthorized changes shall be investigated and, where appropriate, reversed.",
          "Change management metrics shall be reported to IT leadership monthly.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.PS-01",
      "ISO/IEC 27001:2022 — Annex A 8.9, 8.32",
      "NIST SP 800-53 Rev. 5 — CM-3, CM-4, CM-5, CM-8",
    ],
  },
  {
    docId: "SH-POL-207",
    title: "Backup and Recovery Policy",
    summary: "Sets backup frequency, retention, protection and restore testing so critical data can be recovered after loss or attack.",
    purpose:
      "This policy ensures that the organization's information and systems can be restored after accidental deletion, hardware failure, ransomware or disaster, within recovery objectives agreed with the business.",
    aims: [
      "Back up critical data and systems at a frequency that meets recovery point objectives.",
      "Protect backups from loss, tampering and ransomware.",
      "Retain backups for periods that satisfy business, legal and regulatory needs.",
      "Prove recoverability through regular restore testing.",
    ],
    scope:
      "This policy applies to all information and systems that the organization relies on, including on-premises servers, databases, SaaS platforms, cloud workloads and endpoints holding business data that is not otherwise synchronized to managed storage.",
    covers: [
      "Recovery objectives and backup scheduling.",
      "Backup storage, encryption and immutability.",
      "Retention and disposal of backups.",
      "Restore testing and recovery procedures.",
    ],
    roles: [
      {
        role: "Backup Administrator",
        responsibilities: [
          "Configures and monitors backup jobs.",
          "Resolves failed backups and reports backup status.",
          "Performs scheduled restore tests.",
        ],
      },
      {
        role: "System and Data Owners",
        responsibilities: [
          "Define recovery point and recovery time objectives for their systems.",
          "Confirm that backup scope covers all required data.",
        ],
      },
      {
        role: "IT Operations Manager",
        responsibilities: [
          "Ensures backup infrastructure has adequate capacity and support.",
          "Reviews restore test results and tracks remediation.",
        ],
      },
    ],
    sections: [
      {
        heading: "Recovery objectives and scheduling",
        requirements: [
          "Each business-critical system shall have a documented recovery point objective and recovery time objective approved by its owner.",
          "Backup frequency shall be sufficient to meet the recovery point objective of each system.",
          "Business-critical data shall be backed up at least daily.",
          "Data held in SaaS platforms shall be backed up where the provider's native retention does not meet the organization's requirements.",
          "Backup jobs shall be monitored and failed jobs shall be investigated and rerun within 1 business day.",
        ],
      },
      {
        heading: "Backup protection",
        intro: "Backups must survive the same events that threaten primary systems, including ransomware.",
        requirements: [
          "The organization shall maintain at least three copies of critical data on at least two different storage types, with at least one copy held offsite.",
          "At least one backup copy of critical data shall be immutable or logically isolated from the production environment.",
          "Backups shall be encrypted at rest and in transit.",
          "Encryption keys for backups shall be stored separately from the backups they protect.",
          "Access to backup systems shall be restricted to authorized administrators using multi-factor authentication and accounts separate from everyday administration.",
          "Deletion or modification of backup retention settings shall require approval and generate an alert.",
        ],
      },
      {
        heading: "Retention and disposal",
        requirements: [
          "Daily backups shall be retained for at least 30 days.",
          "Monthly backups of critical systems shall be retained for at least 12 months.",
          "Longer retention shall apply where required by law, regulation, contract or legal hold.",
          "Expired backup media shall be securely destroyed or sanitized and the disposal recorded.",
        ],
      },
      {
        heading: "Restore testing and recovery",
        requirements: [
          "Restore tests of business-critical systems shall be performed at least quarterly.",
          "A full recovery test of at least one critical system shall be performed annually to validate the recovery time objective.",
          "Restore test results, including the time taken and any issues found, shall be documented.",
          "Failures identified during restore tests shall be remediated and retested within 30 days.",
          "Documented recovery procedures shall be maintained and stored where they remain accessible if primary systems are unavailable.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.DS-11, RC.RP",
      "ISO/IEC 27001:2022 — Annex A 8.13",
      "NIST SP 800-53 Rev. 5 — CP-9, CP-10",
      "CIS Controls v8 — Control 11",
    ],
  },
  {
    docId: "SH-POL-208",
    title: "Cloud Security Policy",
    summary: "Governs the selection, configuration, access and monitoring of cloud services used by the organization.",
    purpose:
      "This policy sets requirements for the secure adoption and operation of cloud services so that the organization retains control of its data, understands its responsibilities under the shared responsibility model and configures cloud environments securely.",
    aims: [
      "Ensure cloud services are approved and assessed before use.",
      "Clarify security responsibilities shared between the organization and its providers.",
      "Configure cloud accounts and resources securely and consistently.",
      "Maintain visibility of cloud activity and posture.",
    ],
    scope:
      "This policy applies to all infrastructure, platform and software-as-a-service offerings used to store, process or transmit the organization's information, including services procured by business units, and to all personnel who administer or use them.",
    covers: [
      "Cloud service approval and provider assessment.",
      "Shared responsibility and data location.",
      "Cloud identity and access management.",
      "Secure configuration and posture management.",
      "Cloud logging, monitoring and exit planning.",
    ],
    roles: [
      {
        role: "Cloud Platform Team",
        responsibilities: [
          "Manages the cloud organization structure, guardrails and landing zones.",
          "Remediates posture findings in shared platform components.",
        ],
      },
      {
        role: "Cloud Account and Service Owners",
        responsibilities: [
          "Ensure resources in their accounts comply with this policy.",
          "Remediate posture findings within required timeframes.",
        ],
      },
      {
        role: "Security Function",
        responsibilities: [
          "Assesses new cloud services and providers before approval.",
          "Operates cloud security posture monitoring.",
        ],
      },
      {
        role: "Procurement",
        responsibilities: [
          "Ensures cloud purchases follow the approval process.",
          "Includes required security terms in cloud contracts.",
        ],
      },
    ],
    sections: [
      {
        heading: "Service approval and provider assessment",
        requirements: [
          "Cloud services shall not be used to store or process organizational data until approved through the cloud service approval process.",
          "Providers shall be assessed for security capability, using independent assurance reports where available, before approval and at least annually thereafter.",
          "Contracts with cloud providers shall define security responsibilities, breach notification obligations and data return or deletion on exit.",
          "The organization shall maintain an inventory of approved cloud services, their owners and the data classifications they hold.",
          "The organization shall monitor for the use of unapproved cloud services.",
        ],
      },
      {
        heading: "Shared responsibility and data location",
        requirements: [
          "For each approved cloud service, the organization shall document which security controls are the provider's responsibility and which are its own.",
          "Data shall be stored only in regions approved for its classification and applicable legal requirements.",
          "Confidential data in cloud services shall be encrypted at rest and in transit.",
          "Where customer-managed encryption keys are used, key management shall follow the organization's cryptography requirements.",
        ],
      },
      {
        heading: "Identity and access",
        intro: "Cloud control planes are high-value targets and require strong access controls.",
        requirements: [
          "Access to cloud management consoles and APIs shall be integrated with the organization's central identity provider where supported.",
          "Multi-factor authentication shall be required for all human access to cloud management interfaces.",
          "Root or owner-level accounts shall be protected with hardware-backed multi-factor authentication and used only for tasks that require them.",
          "Permissions shall follow least privilege and be granted through roles rather than to individual users.",
          "Long-lived access keys shall be avoided in favor of short-lived credentials, and any remaining keys shall be rotated at least every 90 days.",
          "Cloud administrative access shall be reviewed at least quarterly.",
        ],
      },
      {
        heading: "Secure configuration and posture",
        requirements: [
          "Cloud environments shall be provisioned through approved infrastructure-as-code templates and guardrails wherever practicable.",
          "Storage resources shall block public access by default and any public exposure shall require documented approval.",
          "Production and non-production workloads shall reside in separate accounts, subscriptions or projects.",
          "The organization shall continuously assess cloud configurations against approved baselines using posture management tooling.",
          "Critical posture findings shall be remediated within 7 days and high findings within 30 days.",
        ],
      },
      {
        heading: "Logging, monitoring and exit",
        requirements: [
          "Control plane audit logging shall be enabled for all cloud accounts and forwarded to the central logging platform.",
          "Cloud audit logs shall be protected from modification by account administrators.",
          "Alerts shall be configured for high-risk events such as root account use, disabling of logging and changes to identity policies.",
          "Each critical cloud service shall have a documented exit plan describing how data and workloads would be retrieved or migrated.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — GV.SC, PR.AA, PR.PS",
      "ISO/IEC 27001:2022 — Annex A 5.23",
      "NIST SP 800-53 Rev. 5 — SA-9, AC-2, AU-2",
      "CIS Controls v8 — Control 15",
    ],
  },
  {
    docId: "SH-POL-209",
    title: "Secure Software Development Policy",
    summary: "Builds security into every stage of software development, from requirements and design to testing, release and maintenance.",
    purpose:
      "This policy establishes the security practices the organization follows when developing, acquiring and maintaining software, so that applications are designed and built to resist attack and vulnerabilities are found and fixed before they reach production.",
    aims: [
      "Integrate security activities into each phase of the software development lifecycle.",
      "Equip developers with the knowledge and tools to write secure code.",
      "Detect security defects early through automated and manual testing.",
      "Protect source code, build pipelines and released software from tampering.",
    ],
    scope:
      "This policy applies to all software developed by or for the organization, including web and mobile applications, APIs, internal tools, infrastructure-as-code and scripts that run in production, and to all employees and contractors who design, write, review, build or release that software.",
    covers: [
      "Security requirements and threat modeling.",
      "Secure coding standards and developer training.",
      "Code review and security testing.",
      "Third-party and open-source components.",
      "Source code, pipeline and environment protection.",
    ],
    roles: [
      {
        role: "Head of Engineering",
        responsibilities: [
          "Ensures development teams follow this policy.",
          "Allocates time for remediation of security defects.",
        ],
      },
      {
        role: "Application Security Team",
        responsibilities: [
          "Maintains secure coding standards and security testing tooling.",
          "Supports threat modeling and reviews high-risk designs.",
          "Tracks security defects and reports on remediation.",
        ],
      },
      {
        role: "Developers",
        responsibilities: [
          "Write code in accordance with secure coding standards.",
          "Fix security defects in their code within required timeframes.",
        ],
      },
      {
        role: "Product Owners",
        responsibilities: [
          "Include security requirements in product backlogs.",
          "Accept or escalate residual security risk before release.",
        ],
      },
    ],
    sections: [
      {
        heading: "Requirements and design",
        requirements: [
          "Security requirements shall be defined for each new application or significant feature, taking account of the data it handles.",
          "Threat modeling shall be performed for new applications and for changes that introduce new trust boundaries, data flows or authentication mechanisms.",
          "Designs for applications that process confidential data shall be reviewed by the application security team before development begins.",
          "Applications shall use the organization's approved authentication, authorization, logging and cryptography components rather than custom implementations.",
        ],
      },
      {
        heading: "Secure coding and training",
        requirements: [
          "The organization shall publish secure coding standards that address common vulnerability classes such as injection, broken access control and insecure deserialization.",
          "Developers shall complete secure coding training on joining and at least annually thereafter.",
          "Secrets such as passwords, keys and tokens shall not be stored in source code or configuration files committed to version control.",
          "Source repositories shall be scanned automatically for committed secrets, and any exposed secret shall be revoked and rotated within 24 hours of discovery.",
          "Input from users and external systems shall be validated and output shall be encoded for its context.",
        ],
      },
      {
        heading: "Code review and security testing",
        intro: "Security defects are cheapest to fix when they are found before release.",
        requirements: [
          "All code changes shall be peer reviewed by someone other than the author before merging to the main branch.",
          "Static application security testing shall run automatically on every merge request for in-scope applications.",
          "Dynamic security testing shall be performed on internet-facing applications before major releases and at least quarterly.",
          "Internet-facing applications that process confidential data shall undergo an independent penetration test at least annually.",
          "Critical and high security defects shall be fixed before release unless a risk acceptance is approved.",
          "Security defects found in production shall be remediated within the timeframes defined in the Vulnerability and Patch Management Policy.",
        ],
      },
      {
        heading: "Third-party and open-source components",
        requirements: [
          "Third-party and open-source components shall be obtained from trusted sources and tracked in a software bill of materials for each application.",
          "Dependencies shall be scanned automatically for known vulnerabilities and license issues during the build.",
          "Components that are unmaintained or have no supported version free of critical vulnerabilities shall be replaced.",
          "New components shall be reviewed for security and licensing suitability before first use.",
        ],
      },
      {
        heading: "Source code, pipelines and environments",
        requirements: [
          "Source code repositories shall require authenticated access with multi-factor authentication and least-privilege permissions.",
          "Main branches shall be protected so that changes require review and passing security checks.",
          "Build and deployment pipelines shall run with dedicated identities and shall not expose credentials in logs.",
          "Development, test and production environments shall be separated, and developers shall not have standing write access to production.",
          "Production data shall not be used in non-production environments unless it has been masked or an approved exception exists.",
          "Release artifacts shall be versioned and their integrity verifiable before deployment.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.PS-06",
      "ISO/IEC 27001:2022 — Annex A 8.25, 8.26, 8.28, 8.29, 8.31",
      "NIST SP 800-53 Rev. 5 — SA-8, SA-11, SA-15",
      "NIST SP 800-218 (SSDF)",
      "CIS Controls v8 — Control 16",
    ],
  },
  {
    docId: "SH-POL-210",
    title: "Mobile Device and BYOD Policy",
    summary: "Sets the conditions under which corporate and personally owned mobile devices may access organizational information.",
    purpose:
      "This policy defines the security requirements for smartphones, tablets and other mobile devices that access the organization's information, including personally owned devices, so that organizational data is protected while respecting the privacy of device owners.",
    aims: [
      "Ensure only managed and compliant mobile devices access organizational data.",
      "Separate and protect organizational data on personally owned devices.",
      "Enable rapid response when a device is lost, stolen or compromised.",
      "Set clear expectations and privacy boundaries for device users.",
    ],
    scope:
      "This policy applies to all organization-owned mobile devices and to any personally owned smartphone, tablet or laptop used to access the organization's email, applications or data, and to all employees, contractors and other users of such devices.",
    covers: [
      "Device eligibility and enrollment.",
      "Minimum security configuration for mobile devices.",
      "Separation of organizational data on personal devices.",
      "Lost or stolen devices and offboarding.",
      "User obligations and privacy.",
    ],
    roles: [
      {
        role: "Endpoint Engineering",
        responsibilities: [
          "Operates the mobile device and application management platform.",
          "Defines and enforces compliance policies for enrolled devices.",
        ],
      },
      {
        role: "IT Service Desk",
        responsibilities: [
          "Assists users with enrollment and removal of devices.",
          "Performs remote lock or wipe actions when a device is reported lost or stolen.",
        ],
      },
      {
        role: "Device Users",
        responsibilities: [
          "Keep their devices updated and protected as required by this policy.",
          "Report lost or stolen devices within 24 hours.",
          "Do not attempt to circumvent device management controls.",
        ],
      },
      {
        role: "Human Resources",
        responsibilities: [
          "Notifies IT of departures so device access can be removed on the last working day.",
        ],
      },
    ],
    sections: [
      {
        heading: "Eligibility and enrollment",
        requirements: [
          "Mobile devices shall be enrolled in the organization's mobile device or application management platform before accessing organizational data.",
          "Personally owned devices shall be permitted only where the user has accepted the terms of this policy.",
          "Devices running operating system versions no longer supported by the vendor shall not be permitted to access organizational data.",
          "Jailbroken or rooted devices shall be blocked from accessing organizational data.",
          "Access to organizational resources shall be conditional on the device meeting compliance checks at the time of access.",
        ],
      },
      {
        heading: "Device security configuration",
        requirements: [
          "Devices shall be protected by a screen lock using a PIN of at least 6 digits, a password or biometric authentication.",
          "Devices shall lock automatically after no more than 5 minutes of inactivity.",
          "Device storage shall be encrypted.",
          "Operating system security updates shall be installed within 14 days of release.",
          "Applications that access organizational data shall be obtained only from official app stores or the organization's managed catalog.",
        ],
      },
      {
        heading: "Data protection on personal devices",
        intro: "On personally owned devices, controls focus on organizational data rather than the whole device.",
        requirements: [
          "Organizational data on personally owned devices shall be held within managed applications or a managed work profile.",
          "Copying, pasting or saving organizational data from managed applications to unmanaged applications shall be blocked.",
          "Organizational data shall not be backed up to personal cloud storage accounts.",
          "The organization shall not collect personal content such as personal email, photos, messages or browsing history from personally owned devices.",
          "Users shall be informed of the information the management platform can see and the actions it can take.",
        ],
      },
      {
        heading: "Lost, stolen and compromised devices",
        requirements: [
          "Users shall report lost or stolen devices to the IT service desk within 24 hours.",
          "Organization-owned devices reported lost or stolen shall be remotely locked and, if not recovered, fully wiped.",
          "Personally owned devices reported lost or stolen shall have organizational data and managed applications selectively wiped.",
          "Devices that fall out of compliance for more than 7 days shall have access to organizational data blocked until remediated.",
        ],
      },
      {
        heading: "Offboarding and user obligations",
        requirements: [
          "Organizational data and access shall be removed from personally owned devices no later than the user's last working day.",
          "Organization-owned mobile devices shall be returned on departure and wiped before reissue.",
          "Users shall not share enrolled devices with others in a way that exposes organizational data.",
          "Users shall avoid connecting to untrusted public wireless networks without using the approved VPN when accessing organizational systems.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.AA, PR.PS",
      "ISO/IEC 27001:2022 — Annex A 6.7, 8.1",
      "NIST SP 800-53 Rev. 5 — AC-19",
      "NIST SP 800-124 Rev. 2",
    ],
  },
];
