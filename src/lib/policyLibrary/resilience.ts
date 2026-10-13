// Resilience bundle: original SecureHub-authored policy content.
// Covers incident response, continuity, suppliers, people, physical security, AI use and email.

import type { LibraryPolicy } from "./types";

export const RESILIENCE_POLICIES: LibraryPolicy[] = [
  {
    docId: "SH-POL-301",
    bundle: "pk-pol-resilience",
    title: "Incident Response Policy",
    summary: "Sets how the organization detects, reports, contains, investigates and learns from information security incidents.",
    purpose:
      "This policy establishes a consistent and accountable approach for handling information security incidents so that the organization can limit harm, restore normal operations quickly, meet its legal and contractual notification duties, and reduce the likelihood of recurrence.",
    aims: [
      "Ensure suspected incidents are reported promptly and routed to the people able to act on them.",
      "Contain and eradicate threats in a controlled manner that preserves evidence.",
      "Meet regulatory, contractual and customer notification deadlines.",
      "Capture lessons learned and feed them back into security controls.",
    ],
    scope:
      "This policy applies to all employees, contractors and third parties who use or manage the organization's information systems, data, facilities or cloud services, and to every security event or incident affecting them, whether the affected asset is hosted internally or by a service provider.",
    covers: [
      "Incident reporting channels and expectations for all personnel.",
      "Severity classification and escalation paths.",
      "Containment, eradication, recovery and evidence handling.",
      "Internal and external communication, including breach notification.",
      "Post-incident review and plan testing.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer (CISO)",
        responsibilities: [
          "Owns this policy and the incident response plan.",
          "Declares major incidents and authorizes external notifications in coordination with Legal.",
        ],
      },
      {
        role: "Incident Response Lead",
        responsibilities: [
          "Coordinates the response team for each incident from triage through closure.",
          "Maintains the incident record, timeline and decision log.",
          "Runs the post-incident review and tracks resulting actions.",
        ],
      },
      {
        role: "IT and Security Operations",
        responsibilities: [
          "Monitors alerts, performs initial triage and executes containment and recovery actions.",
          "Collects and preserves technical evidence.",
        ],
      },
      {
        role: "Legal and Privacy",
        responsibilities: [
          "Assesses legal, regulatory and contractual notification obligations.",
          "Advises on evidence preservation and engagement of external parties.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Report suspected incidents immediately through approved channels.",
          "Follow instructions from the response team and refrain from independent investigation.",
        ],
      },
    ],
    sections: [
      {
        heading: "Preparation",
        intro: "The organization maintains the plans, people and tools needed to respond before an incident occurs.",
        requirements: [
          "The organization shall maintain a documented incident response plan approved by the CISO and reviewed at least annually.",
          "The organization shall designate an incident response team with named primary and backup members for each core role.",
          "The organization shall maintain current contact details for the response team, executive leadership, legal counsel, insurers and key service providers.",
          "The organization shall maintain playbooks for common incident types, including ransomware, account compromise, data loss and phishing.",
          "The organization shall ensure that logging, alerting and forensic tooling needed for investigation are in place and accessible to the response team.",
        ],
      },
      {
        heading: "Reporting and Classification",
        requirements: [
          "All personnel shall report suspected security incidents to the security team without delay and no later than one hour after discovery.",
          "The organization shall provide at least one reporting channel that is available at all times.",
          "The security team shall acknowledge and triage each report within four business hours, or within one hour for reports flagged as urgent.",
          "Each confirmed incident shall be assigned a severity level using criteria defined in the incident response plan.",
          "Incidents rated high or critical shall be escalated to the CISO immediately upon classification.",
          "Every incident shall be recorded in a central incident register with a unique identifier.",
        ],
      },
      {
        heading: "Containment, Eradication and Recovery",
        requirements: [
          "The response team shall take containment actions proportionate to the severity and scope of the incident.",
          "Evidence shall be collected and preserved in a manner that maintains its integrity and records its chain of custody.",
          "The response team shall identify and remove the root cause before affected systems are returned to production.",
          "Restored systems shall be validated as clean and monitored for signs of recurrence for a period defined in the plan.",
          "Credentials, keys and secrets that may have been exposed shall be rotated as part of eradication.",
        ],
      },
      {
        heading: "Communication and Notification",
        requirements: [
          "Only personnel authorized by the CISO or executive leadership shall communicate about an incident with parties outside the organization.",
          "Legal and Privacy shall determine notification obligations for any incident involving personal data within 24 hours of the incident being confirmed.",
          "The organization shall notify regulators, customers and affected individuals within the timeframes required by applicable law and contract.",
          "The organization shall keep executive leadership informed of high and critical incidents at intervals agreed at the start of the response.",
        ],
      },
      {
        heading: "Post-Incident Review and Testing",
        requirements: [
          "The organization shall complete a post-incident review within ten business days of closing any high or critical incident.",
          "Post-incident reviews shall identify root causes and assign corrective actions with owners and due dates.",
          "The organization shall test the incident response plan at least annually through a tabletop exercise or simulation.",
          "The organization shall update the incident response plan and playbooks to reflect lessons learned from incidents and exercises.",
          "Incident records shall be retained for at least three years unless a longer period is required by law.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — RS.MA, RS.AN, RS.CO, RS.MI",
      "ISO/IEC 27001:2022 — Annex A 5.24 to 5.28",
      "NIST SP 800-53 Rev. 5 — IR family",
      "NIST SP 800-61 Rev. 3",
    ],
  },
  {
    docId: "SH-POL-302",
    bundle: "pk-pol-resilience",
    title: "Business Continuity and Disaster Recovery Policy",
    summary: "Requires the organization to plan, back up, test and recover critical services so it can keep operating through disruption.",
    purpose:
      "This policy defines the requirements for keeping the organization's critical business processes and supporting technology available during and after a disruptive event, and for restoring them within agreed timeframes.",
    aims: [
      "Identify the processes and systems most critical to the organization and the tolerable downtime for each.",
      "Maintain recovery capabilities that meet defined recovery time and recovery point objectives.",
      "Protect backups so they remain available and trustworthy when needed.",
      "Verify through regular testing that continuity and recovery plans work as intended.",
    ],
    scope:
      "This policy applies to all business units, locations, information systems and cloud services of the organization, and to the personnel and third parties responsible for operating or supporting them.",
    covers: [
      "Business impact analysis and recovery objectives.",
      "Business continuity and disaster recovery plans.",
      "Data backup, replication and redundancy.",
      "Plan testing, maintenance and training.",
      "Crisis management and activation.",
    ],
    roles: [
      {
        role: "Executive Leadership",
        responsibilities: [
          "Approves recovery objectives and the resources needed to meet them.",
          "Leads the crisis management team when a continuity plan is activated.",
        ],
      },
      {
        role: "Business Continuity Manager",
        responsibilities: [
          "Owns this policy and coordinates the business impact analysis.",
          "Maintains continuity plans and schedules exercises.",
        ],
      },
      {
        role: "IT Operations",
        responsibilities: [
          "Designs, operates and tests backup and disaster recovery capabilities.",
          "Restores systems in the priority order defined by the business impact analysis.",
        ],
      },
      {
        role: "Business Process Owners",
        responsibilities: [
          "Define the criticality and recovery needs of their processes.",
          "Maintain workaround procedures for operating during an outage.",
        ],
      },
    ],
    sections: [
      {
        heading: "Business Impact Analysis",
        intro: "Recovery planning starts with understanding what matters most and how quickly it must return.",
        requirements: [
          "The organization shall perform a business impact analysis at least annually and after any significant change to operations.",
          "The business impact analysis shall identify critical processes, their supporting systems, suppliers and personnel, and their interdependencies.",
          "The organization shall define a recovery time objective and recovery point objective for each critical process and system.",
          "Recovery objectives shall be approved by executive leadership and communicated to IT Operations.",
        ],
      },
      {
        heading: "Continuity and Recovery Planning",
        requirements: [
          "The organization shall maintain a business continuity plan that describes activation criteria, decision authority, communication steps and alternate working arrangements.",
          "The organization shall maintain disaster recovery procedures for each critical system that are detailed enough for a qualified person to follow without the original author.",
          "Plans shall be stored in a location that remains accessible if primary systems and facilities are unavailable.",
          "Plans shall include contact details for key personnel, suppliers and authorities and shall be verified at least every six months.",
          "The organization shall review and update all continuity and recovery plans at least annually.",
        ],
      },
      {
        heading: "Backup and Redundancy",
        requirements: [
          "The organization shall back up critical data at a frequency that meets the defined recovery point objective.",
          "At least one copy of critical backups shall be kept offline, immutable or otherwise logically isolated from production systems.",
          "Backups shall be encrypted in transit and at rest and protected by access controls separate from production credentials.",
          "Backup jobs shall be monitored and any failure shall be investigated and resolved within one business day.",
          "Critical systems shall be designed with redundancy appropriate to their recovery time objective.",
          "The organization shall perform restore tests of critical backups at least quarterly.",
        ],
      },
      {
        heading: "Testing and Exercising",
        requirements: [
          "The organization shall exercise the business continuity plan at least annually through a tabletop or functional exercise.",
          "The organization shall perform a disaster recovery test of each critical system at least annually.",
          "Test results shall be compared against recovery objectives and any shortfall shall be recorded with a remediation owner and target date.",
          "Personnel with continuity or recovery roles shall receive training on their responsibilities at least annually.",
        ],
      },
      {
        heading: "Activation and Recovery",
        requirements: [
          "The organization shall define who has authority to declare a disaster and activate continuity plans.",
          "Information security controls shall remain in effect during disruption, and any temporary exceptions shall be approved and recorded.",
          "Systems shall be restored in the priority order established by the business impact analysis.",
          "The organization shall conduct a review within 30 days after any plan activation to capture lessons learned.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — RC.RP, PR.DS-11, PR.IR-03",
      "ISO/IEC 27001:2022 — Annex A 5.29, 5.30, 8.13, 8.14",
      "NIST SP 800-53 Rev. 5 — CP family",
      "ISO 22301:2019",
    ],
  },
  {
    docId: "SH-POL-303",
    bundle: "pk-pol-resilience",
    title: "Third-Party and Supplier Security Policy",
    summary: "Governs how the organization selects, contracts, monitors and offboards suppliers that access its data or systems.",
    purpose:
      "This policy ensures that information security risks introduced by suppliers, service providers and other third parties are identified, agreed in contract and managed throughout the life of each relationship.",
    aims: [
      "Assess the security posture of third parties before granting them access to data or systems.",
      "Set clear, enforceable security obligations in supplier agreements.",
      "Monitor supplier risk on an ongoing basis proportionate to criticality.",
      "Ensure access and data are recovered or destroyed when a relationship ends.",
    ],
    scope:
      "This policy applies to all third parties that store, process, transmit or access the organization's information, connect to its networks, provide software or cloud services, or support critical business processes, and to the personnel who engage and manage them.",
    covers: [
      "Supplier inventory and risk tiering.",
      "Pre-engagement security due diligence.",
      "Contractual security requirements.",
      "Ongoing monitoring and reassessment.",
      "Supplier offboarding.",
    ],
    roles: [
      {
        role: "Procurement",
        responsibilities: [
          "Ensures no supplier is engaged without completion of the required security review.",
          "Maintains the supplier inventory and contract records.",
        ],
      },
      {
        role: "Information Security",
        responsibilities: [
          "Defines risk tiering criteria and performs security assessments.",
          "Approves or rejects suppliers based on residual risk and recommends compensating controls.",
        ],
      },
      {
        role: "Supplier Relationship Owner",
        responsibilities: [
          "Acts as the accountable business contact for each supplier.",
          "Monitors service delivery and reports security concerns to Information Security.",
          "Initiates offboarding when a relationship ends.",
        ],
      },
      {
        role: "Legal",
        responsibilities: [
          "Ensures security, privacy and audit clauses are included in supplier agreements.",
        ],
      },
    ],
    sections: [
      {
        heading: "Inventory and Risk Tiering",
        requirements: [
          "The organization shall maintain an inventory of all third parties that access its data or systems, including the data types and services involved.",
          "Each supplier shall be assigned a risk tier based on data sensitivity, level of access and business criticality.",
          "Each supplier shall have a named relationship owner within the organization.",
          "The supplier inventory shall be reviewed for accuracy at least annually.",
        ],
      },
      {
        heading: "Due Diligence",
        intro: "The depth of review increases with the supplier's risk tier.",
        requirements: [
          "The organization shall complete a security assessment before any supplier is given access to data or systems.",
          "High-risk suppliers shall provide independent assurance such as a SOC 2 Type II report, ISO/IEC 27001 certificate or equivalent, or undergo a detailed assessment.",
          "Information Security shall document identified gaps and the risk decision for each assessed supplier.",
          "Suppliers with unresolved high-risk findings shall not be engaged without written risk acceptance from the CISO.",
          "The organization shall identify where suppliers rely on their own subcontractors for services that affect the organization's data.",
        ],
      },
      {
        heading: "Contractual Requirements",
        requirements: [
          "Supplier agreements shall define the security controls the supplier must maintain, proportionate to its risk tier.",
          "Agreements shall require the supplier to notify the organization of security incidents affecting its data within a defined period not exceeding 72 hours.",
          "Agreements with suppliers that process personal data shall include data protection terms required by applicable law.",
          "Agreements shall grant the organization the right to request security evidence or to audit the supplier.",
          "Agreements shall require the return or secure destruction of the organization's data at the end of the relationship.",
        ],
      },
      {
        heading: "Ongoing Monitoring",
        requirements: [
          "The organization shall reassess high-risk suppliers at least annually and other suppliers at least every two years.",
          "Relationship owners shall report material changes in a supplier's services, ownership or security posture to Information Security.",
          "Supplier access to the organization's systems shall be limited to what is necessary and reviewed at least quarterly.",
          "The organization shall track remediation of supplier security findings to closure.",
        ],
      },
      {
        heading: "Offboarding",
        requirements: [
          "The relationship owner shall notify Information Security and IT at least five business days before a supplier relationship ends, or immediately in the case of termination for cause.",
          "All supplier accounts, credentials and network connections shall be disabled no later than the last day of service.",
          "The organization shall obtain written confirmation that its data has been returned or destroyed.",
          "The supplier inventory shall be updated to reflect the end of the relationship.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — GV.SC",
      "ISO/IEC 27001:2022 — Annex A 5.19 to 5.23",
      "NIST SP 800-53 Rev. 5 — SR family, SA-9",
      "NIST SP 800-161 Rev. 1",
    ],
  },
  {
    docId: "SH-POL-304",
    bundle: "pk-pol-resilience",
    title: "Human Resources Security Policy",
    summary: "Covers security across the employment lifecycle, from screening and onboarding through role changes, offboarding and discipline.",
    purpose:
      "This policy ensures that people who work for the organization are suitable for their roles, understand their security responsibilities, and have their access managed correctly from the day they join until after they leave.",
    aims: [
      "Verify the background of candidates in proportion to the sensitivity of their role.",
      "Make security obligations clear and binding before access is granted.",
      "Remove access promptly and recover assets when personnel change roles or leave.",
      "Provide a fair and consistent process for handling security violations.",
    ],
    scope:
      "This policy applies to all employees, temporary staff, interns and individual contractors of the organization, and to the managers and Human Resources personnel who hire, manage and separate them.",
    covers: [
      "Pre-employment screening.",
      "Terms of employment and onboarding.",
      "Role changes and access adjustments.",
      "Offboarding and post-employment obligations.",
      "Disciplinary process for security violations.",
    ],
    roles: [
      {
        role: "Human Resources",
        responsibilities: [
          "Conducts screening and maintains signed employment agreements.",
          "Notifies IT of joiners, movers and leavers in a timely manner.",
          "Administers the disciplinary process.",
        ],
      },
      {
        role: "Hiring and Line Managers",
        responsibilities: [
          "Define the access each team member needs and approve changes.",
          "Ensure assets are returned and handover is completed when a team member leaves.",
        ],
      },
      {
        role: "IT Operations",
        responsibilities: [
          "Provisions, adjusts and revokes access based on Human Resources notifications.",
          "Recovers and sanitizes returned equipment.",
        ],
      },
      {
        role: "Information Security",
        responsibilities: [
          "Defines screening levels for sensitive roles and delivers security onboarding training.",
          "Advises on security-related disciplinary matters.",
        ],
      },
    ],
    sections: [
      {
        heading: "Screening",
        requirements: [
          "The organization shall verify the identity and right to work of every candidate before employment begins.",
          "The organization shall perform background checks in proportion to the role's access to sensitive data and systems, as permitted by applicable law.",
          "Roles with privileged access or access to financial or regulated data shall be subject to enhanced screening defined by Human Resources and Information Security.",
          "Screening results shall be stored securely and accessible only to authorized Human Resources personnel.",
          "Contractors supplied through an agency shall be screened to an equivalent standard, either by the agency or by the organization.",
        ],
      },
      {
        heading: "Onboarding and Terms of Employment",
        requirements: [
          "All personnel shall sign an agreement that includes confidentiality and information security obligations before receiving access to systems or data.",
          "All personnel shall acknowledge the organization's acceptable use and information security policies before access is granted.",
          "New personnel shall complete security awareness training within 30 days of their start date.",
          "Access shall be provisioned based on a documented request approved by the line manager and limited to what the role requires.",
        ],
      },
      {
        heading: "Role Changes",
        requirements: [
          "Human Resources shall notify IT of any role change at least five business days before it takes effect where possible.",
          "Access no longer needed for the new role shall be removed within five business days of the change.",
          "Line managers shall confirm the access required for the new role before additional access is granted.",
          "Personnel moving into privileged or sensitive roles shall complete any additional screening and training required for that role.",
        ],
      },
      {
        heading: "Offboarding",
        intro: "Departures are a frequent source of residual access and data loss and must be handled promptly.",
        requirements: [
          "Human Resources shall notify IT of each departure as soon as the end date is known.",
          "All system access for departing personnel shall be disabled by the end of their last working day.",
          "Access for personnel dismissed for cause shall be disabled before or at the time they are informed.",
          "Line managers shall ensure all organization-owned devices, badges and media are returned on or before the last working day.",
          "Departing personnel shall be reminded in writing of confidentiality obligations that continue after employment ends.",
          "Shared credentials known to departing personnel shall be changed within one business day of departure.",
        ],
      },
      {
        heading: "Disciplinary Process",
        requirements: [
          "The organization shall maintain a documented disciplinary process that applies to violations of information security policies.",
          "Suspected violations shall be investigated before disciplinary action is taken, and the individual shall be given an opportunity to respond.",
          "Disciplinary actions shall be proportionate to the severity, intent and impact of the violation and consistent across similar cases.",
          "Human Resources shall keep records of security-related disciplinary actions in accordance with retention requirements.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — GV.RR-04, PR.AT",
      "ISO/IEC 27001:2022 — Annex A 6.1 to 6.6",
      "NIST SP 800-53 Rev. 5 — PS family",
    ],
  },
  {
    docId: "SH-POL-305",
    bundle: "pk-pol-resilience",
    title: "Physical and Environmental Security Policy",
    summary: "Protects the organization's premises, equipment and information from unauthorized physical access, damage and environmental threats.",
    purpose:
      "This policy sets requirements for securing the organization's facilities, server and network rooms, equipment and paper records against unauthorized access, theft, damage and environmental hazards.",
    aims: [
      "Restrict physical access to premises and sensitive areas to authorized people.",
      "Protect equipment and infrastructure from environmental and utility failures.",
      "Secure information and devices when they are unattended or taken off site.",
      "Ensure equipment and media are disposed of without exposing data.",
    ],
    scope:
      "This policy applies to all offices, data rooms and other premises owned, leased or used by the organization, to equipment and media located in them or taken off site, and to all personnel and visitors who enter them. Third-party data centers are addressed through supplier assurance.",
    covers: [
      "Facility perimeter and secure area access.",
      "Visitor management.",
      "Environmental and utility protection.",
      "Clear desk, clear screen and off-site equipment.",
      "Secure disposal and reuse of equipment.",
    ],
    roles: [
      {
        role: "Facilities Manager",
        responsibilities: [
          "Owns physical access systems, building security and environmental controls.",
          "Maintains visitor logs and coordinates maintenance of physical safeguards.",
        ],
      },
      {
        role: "IT Operations",
        responsibilities: [
          "Manages access to server and network rooms and the equipment within them.",
          "Ensures secure sanitization and disposal of equipment and media.",
        ],
      },
      {
        role: "Information Security",
        responsibilities: [
          "Defines physical security requirements and reviews access to secure areas.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Wear or carry identification on premises and challenge or report unknown individuals.",
          "Follow clear desk and clear screen rules and protect equipment in their care.",
        ],
      },
    ],
    sections: [
      {
        heading: "Facility and Secure Area Access",
        requirements: [
          "The organization shall control entry to its premises using badges, keys or equivalent mechanisms issued only to authorized individuals.",
          "Server rooms, network closets and other secure areas shall be restricted to personnel with a documented business need.",
          "Access to secure areas shall be logged, and logs shall be retained for at least 90 days.",
          "Access rights to secure areas shall be reviewed at least quarterly and removed when no longer required.",
          "Lost or stolen badges and keys shall be reported immediately and deactivated or replaced without delay.",
        ],
      },
      {
        heading: "Visitors",
        requirements: [
          "All visitors shall sign in, provide identification and be issued a visible visitor badge.",
          "Visitors shall be escorted by an employee at all times in non-public areas.",
          "Visitors shall not be permitted in secure areas unless approved in advance by the area owner and escorted throughout.",
          "Visitor records shall be retained for at least one year.",
        ],
      },
      {
        heading: "Environmental Protection",
        intro: "Infrastructure supporting critical systems must be protected against hazards that could cause outages or data loss.",
        requirements: [
          "Server and network rooms shall be equipped with fire detection and suppression appropriate for electronic equipment.",
          "Critical equipment shall be protected by uninterruptible power supplies sized to allow a controlled shutdown or transfer to backup power.",
          "Temperature and humidity in server rooms shall be monitored with alerts sent to IT Operations when thresholds are exceeded.",
          "Equipment shall be positioned to reduce the risk of water damage, overheating and accidental interference.",
          "Environmental and power protection equipment shall be inspected and maintained according to the manufacturer's recommended schedule.",
        ],
      },
      {
        heading: "Workspace and Off-Site Equipment",
        requirements: [
          "Personnel shall lock their screens whenever they leave a device unattended.",
          "Devices shall automatically lock after no more than 15 minutes of inactivity.",
          "Confidential paper documents and removable media shall be locked away when not in use and at the end of each working day.",
          "Printouts containing confidential information shall be collected from printers immediately.",
          "Portable devices taken off site shall not be left unattended in public places or visible in vehicles.",
        ],
      },
      {
        heading: "Disposal and Reuse",
        requirements: [
          "Equipment containing storage media shall be sanitized using an approved method before reuse, return to a lessor or disposal.",
          "Media that cannot be sanitized shall be physically destroyed.",
          "Confidential paper waste shall be shredded or placed in locked secure disposal containers.",
          "The organization shall obtain certificates of destruction from any third party performing disposal services.",
        ],
      },
    ],
    references: [
      "NIST CSF 2.0 — PR.AA-06, PR.IR-02",
      "ISO/IEC 27001:2022 — Annex A 7.1 to 7.14",
      "NIST SP 800-53 Rev. 5 — PE family, MP-6",
      "NIST SP 800-88 Rev. 1",
    ],
  },
  {
    docId: "SH-POL-306",
    bundle: "pk-pol-resilience",
    title: "Artificial Intelligence Acceptable Use Policy",
    summary: "Defines how personnel may use AI and generative AI tools, what data may be entered, how vendors are approved and how outputs are reviewed.",
    purpose:
      "This policy enables personnel to use artificial intelligence tools productively while protecting the organization's confidential information, customers and reputation, and ensuring that people remain accountable for decisions and work products created with AI assistance.",
    aims: [
      "Allow the use of AI tools that have been assessed and approved by the organization.",
      "Prevent confidential, personal and regulated data from being exposed through AI tools.",
      "Ensure AI vendors meet the organization's security, privacy and contractual requirements.",
      "Keep a qualified human accountable for reviewing and acting on AI outputs.",
    ],
    scope:
      "This policy applies to all personnel and contractors who use artificial intelligence tools in the course of work for the organization, including generative AI chat assistants, coding assistants, AI features embedded in business software, and AI services accessed through APIs, whether provided on organization-managed or personal accounts.",
    covers: [
      "Approved and prohibited AI tools.",
      "Data that may and may not be entered into AI tools.",
      "Assessment and approval of AI vendors and features.",
      "Human review and accountability for AI outputs.",
      "Transparency, training and incident reporting.",
    ],
    roles: [
      {
        role: "AI Governance Owner",
        responsibilities: [
          "Owns this policy and maintains the register of approved AI tools.",
          "Chairs reviews of proposed new AI tools and use cases.",
        ],
      },
      {
        role: "Information Security and Privacy",
        responsibilities: [
          "Assess AI vendors for security, privacy and data handling risks.",
          "Define technical controls that restrict unapproved AI services.",
        ],
      },
      {
        role: "Managers",
        responsibilities: [
          "Ensure their teams use only approved AI tools for approved purposes.",
          "Confirm that appropriate human review is built into workflows that rely on AI.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Use AI tools in line with this policy and their data classification limits.",
          "Review and take responsibility for any AI output they use or share.",
          "Report misuse, data exposure or harmful outputs to Information Security.",
        ],
      },
    ],
    sections: [
      {
        heading: "Approved Tools",
        requirements: [
          "Personnel shall use only AI tools listed in the organization's register of approved AI tools for work purposes.",
          "Personnel shall access approved AI tools through organization-managed accounts and not through personal accounts.",
          "The organization shall publish the register of approved AI tools, including the permitted data classification for each tool, to all personnel.",
          "AI features newly enabled within existing approved software shall be reviewed by Information Security before use with confidential data.",
          "The organization shall apply technical controls where practical to block or monitor access to unapproved AI services.",
        ],
      },
      {
        heading: "Data Entered into AI Tools",
        intro: "Information entered into an AI tool may be stored, logged or used by the provider and must be treated as disclosed to that provider.",
        requirements: [
          "Personnel shall not enter confidential, restricted, personal or customer data into any AI tool unless the tool is approved for that data classification.",
          "Personnel shall not enter passwords, keys, access tokens or other secrets into any AI tool.",
          "Personnel shall not enter source code, unreleased financial information or trade secrets into AI tools that are not approved for that data.",
          "Personnel shall remove or anonymize personal data from prompts where the task can be accomplished without it.",
          "Personnel shall not upload third-party content into AI tools where doing so would breach a license, contract or confidentiality obligation.",
        ],
      },
      {
        heading: "AI Vendor and Use Case Approval",
        requirements: [
          "Any new AI tool or AI vendor shall be assessed by Information Security and Privacy before approval.",
          "Vendor assessments shall confirm whether customer inputs are used to train models, how long inputs are retained, where data is processed, and what security controls are in place.",
          "The organization shall prefer AI vendors that contractually commit not to train on the organization's data and that offer data deletion on request.",
          "Use cases that make or materially influence decisions about individuals, such as hiring, credit or performance, shall require approval by the AI Governance Owner and Legal before deployment.",
          "Approved AI tools and their permitted uses shall be reviewed at least annually.",
        ],
      },
      {
        heading: "Human Review and Accountability",
        requirements: [
          "A qualified person shall review AI-generated content for accuracy, completeness and appropriateness before it is relied upon or shared outside the immediate team.",
          "AI-generated code shall be subject to the same code review, testing and security scanning as code written by personnel.",
          "Personnel shall not present AI outputs as verified facts without checking them against reliable sources.",
          "Decisions with legal, financial or significant personal impact shall be made by an accountable person and shall not be delegated solely to an AI system.",
          "The person who uses or shares an AI output shall remain responsible for it as if they had produced it themselves.",
        ],
      },
      {
        heading: "Transparency, Training and Incidents",
        requirements: [
          "The organization shall disclose the use of AI to customers or the public where required by law, contract or the organization's commitments.",
          "Personnel who use AI tools shall complete AI acceptable use training before first use and at least annually thereafter.",
          "Personnel shall report any accidental entry of restricted data into an AI tool to Information Security within one business day.",
          "Harmful, biased or unexpected AI behavior observed in an approved tool shall be reported to the AI Governance Owner.",
        ],
      },
    ],
    references: [
      "ISO/IEC 42001:2023",
      "NIST AI RMF 1.0 (NIST AI 100-1)",
      "NIST AI 600-1 — Generative AI Profile",
      "ISO/IEC 27001:2022 — Annex A 5.10",
    ],
  },
  {
    docId: "SH-POL-307",
    bundle: "pk-pol-resilience",
    title: "Email and Electronic Communications Policy",
    summary: "Sets rules for secure and appropriate use of email, messaging and collaboration tools and the protection of information sent through them.",
    purpose:
      "This policy defines how the organization's email, instant messaging and collaboration platforms are to be used and protected so that communications remain secure, professional and compliant with legal and retention requirements.",
    aims: [
      "Ensure business communications take place only on approved, organization-managed platforms.",
      "Protect sensitive information transmitted electronically.",
      "Reduce the risk of phishing, spoofing and malicious attachments.",
      "Retain communications as required for legal, regulatory and business purposes.",
    ],
    scope:
      "This policy applies to all personnel and contractors who use the organization's email, instant messaging, video conferencing and collaboration platforms, on any device, and to all messages and files sent or received through them on behalf of the organization.",
    covers: [
      "Approved communication platforms and acceptable use.",
      "Protection of sensitive information in transit.",
      "Email security controls and phishing defense.",
      "Retention, monitoring and privacy expectations.",
    ],
    roles: [
      {
        role: "IT Operations",
        responsibilities: [
          "Administers email and collaboration platforms and their security configuration.",
          "Implements retention, filtering and authentication controls.",
        ],
      },
      {
        role: "Information Security",
        responsibilities: [
          "Defines email security standards and monitors for phishing and data leakage.",
          "Investigates reported suspicious messages.",
        ],
      },
      {
        role: "Legal and Compliance",
        responsibilities: [
          "Defines retention periods and manages legal holds on communications.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Use approved platforms professionally and protect sensitive information they send.",
          "Report suspicious messages using the designated reporting method.",
        ],
      },
    ],
    sections: [
      {
        heading: "Approved Platforms and Acceptable Use",
        requirements: [
          "Personnel shall conduct organization business only through email and messaging platforms provided or approved by the organization.",
          "Personnel shall not automatically forward organization email to personal or external accounts.",
          "Personnel shall not use organization communication platforms to send content that is unlawful, harassing, discriminatory or otherwise inconsistent with the organization's code of conduct.",
          "Personnel shall limit any personal use of organization communication platforms to occasional use that does not interfere with work, consume excessive resources or breach any policy.",
          "Personnel shall not send messages that impersonate another person or misrepresent the sender's authority.",
        ],
      },
      {
        heading: "Protecting Sensitive Information",
        requirements: [
          "Confidential and restricted information sent to external recipients shall be encrypted or shared through an approved secure file-sharing method.",
          "Personnel shall verify recipient addresses before sending confidential information.",
          "Passwords and other credentials shall not be sent by email or chat in plain text.",
          "The organization shall enforce TLS for email transport with partners where supported.",
          "The organization shall apply data loss prevention controls to detect and block transmission of restricted data where technically feasible.",
        ],
      },
      {
        heading: "Email Security and Phishing Defense",
        intro: "Email remains the most common entry point for attackers and requires layered technical and human controls.",
        requirements: [
          "The organization shall publish SPF, DKIM and DMARC records for all its sending domains and shall enforce a DMARC policy of quarantine or reject.",
          "Inbound email shall be scanned for malware, malicious links and spoofing before delivery.",
          "Messages originating from outside the organization shall be visibly marked as external.",
          "Personnel shall report suspected phishing using the designated reporting method and shall not forward suspicious messages to colleagues.",
          "Requests received by email or chat to change payment details or transfer funds shall be verified through a separate, previously known channel before action is taken.",
          "The organization shall run phishing simulation exercises at least quarterly.",
        ],
      },
      {
        heading: "Retention and Monitoring",
        requirements: [
          "Communications shall be retained according to the organization's records retention schedule.",
          "Legal and Compliance shall be able to place legal holds that suspend deletion of relevant communications.",
          "The organization may monitor communications on its platforms for security, legal and compliance purposes in accordance with applicable law, and personnel shall be informed of this.",
          "Mailboxes and chat accounts of departing personnel shall be preserved or transferred according to the retention schedule before deletion.",
        ],
      },
    ],
    references: [
      "CIS Critical Security Controls v8 — Control 9",
      "ISO/IEC 27001:2022 — Annex A 5.10, 5.14",
      "NIST CSF 2.0 — PR.DS-02",
      "NIST SP 800-177 Rev. 1",
    ],
  },
];
