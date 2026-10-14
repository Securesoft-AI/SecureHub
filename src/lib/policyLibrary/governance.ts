// Governance policy bundle (pk-pol-gov): original SecureHub-authored content.

import type { LibraryPolicy } from "./types";

export const GOVERNANCE_POLICIES: LibraryPolicy[] = [
  {
    docId: "SH-POL-001",
    title: "Information Security Policy",
    summary: "Sets the direction, leadership commitment and governance structure for the organization's information security management system.",
    purpose:
      "This policy establishes the organization's commitment to protecting the confidentiality, integrity and availability of its information and systems. It defines the governance structure, the objectives and the core principles that all other security policies, standards and procedures build upon.",
    aims: [
      "Demonstrate visible leadership commitment to information security and assign clear accountability for it.",
      "Establish an information security management system that is planned, operated, measured and continually improved.",
      "Ensure security decisions are driven by business risk and by legal, regulatory and contractual obligations.",
      "Provide a stable framework from which subordinate policies, standards and procedures are derived.",
    ],
    scope:
      "This policy applies to the organization as a whole, including all business units, locations, employees, contractors, temporary staff and third parties who access the organization's information or systems. It covers information in every form, whether electronic, printed or spoken, and all systems, applications, networks and cloud services owned, leased or operated on behalf of the organization.",
    covers: [
      "Information security governance structure and accountability.",
      "Security objectives, measurement and management review.",
      "The hierarchy of policies, standards and procedures.",
      "Obligations of all personnel and third parties.",
      "Continual improvement of the security program.",
    ],
    roles: [
      {
        role: "Executive Leadership",
        responsibilities: [
          "Approve this policy and provide the resources needed to operate the security program.",
          "Set the organization's risk appetite and accept residual risks above defined thresholds.",
        ],
      },
      {
        role: "Chief Information Security Officer (CISO)",
        responsibilities: [
          "Own the information security management system and report on its performance to leadership.",
          "Maintain the policy framework and coordinate security activities across the business.",
          "Define security objectives and the metrics used to track them.",
        ],
      },
      {
        role: "Security Steering Committee",
        responsibilities: [
          "Oversee security priorities, major initiatives and significant risks.",
          "Review program metrics and direct corrective action where objectives are not met.",
        ],
      },
      {
        role: "Business and System Owners",
        responsibilities: [
          "Ensure that information and systems under their control are protected in line with security policies.",
          "Identify security requirements for new or changed business processes.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Comply with security policies and complete required training.",
          "Report suspected security incidents and weaknesses promptly.",
        ],
      },
    ],
    sections: [
      {
        heading: "Leadership and governance",
        intro: "Information security is a business responsibility led from the top of the organization.",
        requirements: [
          "The organization shall designate a CISO or equivalent role with documented authority and accountability for information security.",
          "The organization shall establish a Security Steering Committee that includes senior representatives from business, technology, legal and human resources functions.",
          "The Security Steering Committee shall meet at least quarterly and shall record its decisions and actions.",
          "Executive leadership shall formally approve this policy and any material change to it.",
          "The organization shall define and document security roles and responsibilities and shall assign them to named individuals or functions.",
          "The organization shall segregate conflicting duties where a single person could otherwise misuse or compromise critical systems or information.",
        ],
      },
      {
        heading: "Security management system",
        intro: "The security program operates as a managed cycle of planning, operation, evaluation and improvement.",
        requirements: [
          "The organization shall define the scope and boundaries of its information security management system and document them.",
          "The organization shall identify internal and external issues and interested parties relevant to information security and review them at least annually.",
          "The organization shall maintain a register of legal, regulatory and contractual security requirements and review it at least annually.",
          "The organization shall allocate budget and staffing for the security program as part of its annual planning cycle.",
          "The organization shall control documented security information so that current versions are available to those who need them and obsolete versions are withdrawn.",
        ],
      },
      {
        heading: "Security objectives and performance",
        requirements: [
          "The CISO shall set measurable information security objectives at least annually and align them with business objectives.",
          "The organization shall track progress against security objectives using defined metrics and report the results to the Security Steering Committee at least quarterly.",
          "Executive leadership shall conduct a management review of the security program at least annually.",
          "The management review shall consider audit results, incident trends, risk status, objective performance and opportunities for improvement.",
          "The organization shall record decisions and actions arising from each management review and track them to completion.",
        ],
      },
      {
        heading: "Policy framework",
        intro: "This policy sits at the top of a layered set of governing documents.",
        requirements: [
          "The organization shall maintain topic-specific security policies that are consistent with this policy.",
          "Security standards and procedures shall be derived from and traceable to an approved policy.",
          "All security policies shall be communicated to relevant personnel and made accessible in a central location.",
          "Personnel shall acknowledge this policy and the Acceptable Use Policy upon hire and at least annually thereafter.",
          "Where a subordinate document conflicts with this policy, this policy shall take precedence until the conflict is resolved.",
        ],
      },
      {
        heading: "Continual improvement",
        requirements: [
          "The organization shall identify nonconformities through audits, incidents, assessments and feedback.",
          "Each nonconformity shall be assigned an owner, a root cause analysis and a corrective action with a target date.",
          "The organization shall verify the effectiveness of corrective actions before closing them.",
          "The organization shall review lessons learned from significant security incidents and apply them to the security program within 90 days.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Clauses 5.1, 5.2, 5.3, 9.3 and 10",
      "ISO/IEC 27001:2022 — Annex A 5.1, 5.2, 5.3, 5.4",
      "NIST CSF 2.0 — GV.OC, GV.RR, GV.PO, GV.OV",
      "NIST SP 800-53 Rev. 5 — PM family",
    ],
  },
  {
    docId: "SH-POL-002",
    title: "Information Security Risk Management Policy",
    summary: "Defines how the organization identifies, assesses, treats, accepts and monitors information security risks.",
    purpose:
      "This policy establishes a consistent and repeatable approach for managing information security risk. It ensures that risks to the organization's information and systems are understood, prioritized according to business impact, and treated in line with the organization's risk appetite.",
    aims: [
      "Apply a single, consistent method for identifying and assessing information security risks.",
      "Ensure risks are treated in proportion to their likelihood and business impact.",
      "Make risk acceptance an explicit, documented and accountable decision.",
      "Keep leadership informed of the organization's current risk posture.",
    ],
    scope:
      "This policy applies to all information, systems, processes, facilities and third-party services that support the organization's operations. It applies to all business units and to every person who identifies, owns, assesses or treats information security risk on behalf of the organization.",
    covers: [
      "Risk appetite and risk criteria.",
      "Risk identification and assessment.",
      "Risk treatment planning.",
      "Risk acceptance and escalation.",
      "Risk monitoring and reporting.",
    ],
    roles: [
      {
        role: "Executive Leadership",
        responsibilities: [
          "Approve the organization's risk appetite and risk acceptance thresholds.",
          "Accept or reject risks rated high or critical.",
        ],
      },
      {
        role: "Chief Information Security Officer (CISO)",
        responsibilities: [
          "Own the risk management methodology and the information security risk register.",
          "Report the organization's risk posture to leadership at least quarterly.",
        ],
      },
      {
        role: "Risk Owners",
        responsibilities: [
          "Assess and treat risks assigned to them within agreed timeframes.",
          "Approve treatment plans and accept residual risk within their delegated authority.",
        ],
      },
      {
        role: "Security Team",
        responsibilities: [
          "Facilitate risk assessments and provide technical analysis of threats and vulnerabilities.",
          "Track risk treatment actions and maintain the risk register.",
        ],
      },
      {
        role: "System and Process Owners",
        responsibilities: [
          "Identify and report new or changed risks affecting their systems or processes.",
          "Implement agreed risk treatment actions.",
        ],
      },
    ],
    sections: [
      {
        heading: "Risk framework and criteria",
        intro: "A documented method ensures risk results are consistent and comparable across the organization.",
        requirements: [
          "The organization shall document a risk management methodology that defines how likelihood, impact and overall risk ratings are determined.",
          "The organization shall define risk acceptance criteria and a risk appetite statement approved by executive leadership.",
          "Risk ratings shall use a defined scale of at least four levels, such as low, medium, high and critical.",
          "The CISO shall review the risk methodology and risk criteria at least annually.",
          "The organization shall align information security risk management with any enterprise risk management process that exists.",
        ],
      },
      {
        heading: "Risk identification and assessment",
        requirements: [
          "The organization shall perform a comprehensive information security risk assessment at least annually.",
          "The organization shall perform an additional risk assessment before significant changes to systems, processes, suppliers or the threat environment.",
          "Each risk assessment shall consider relevant assets, threats, vulnerabilities, existing controls and potential business impact.",
          "Each identified risk shall be assigned a named risk owner with the authority to manage it.",
          "Risk assessment results shall be documented and retained for at least three years.",
          "The organization shall assess security risks of new third-party services before contracts are signed.",
        ],
      },
      {
        heading: "Risk treatment",
        intro: "Each assessed risk receives a deliberate treatment decision.",
        requirements: [
          "Risk owners shall select a treatment option for each risk: mitigate, avoid, transfer or accept.",
          "Risks rated critical shall have an approved treatment plan within 15 business days of being identified.",
          "Risks rated high shall have an approved treatment plan within 30 business days of being identified.",
          "Each treatment plan shall identify the controls to be applied, the responsible owner, the target date and the expected residual risk.",
          "The organization shall maintain a record of selected controls and the justification for including or excluding them.",
        ],
      },
      {
        heading: "Risk acceptance",
        requirements: [
          "Risk acceptance shall be documented, including the rationale, the residual risk rating and the approver.",
          "Residual risks rated low or medium may be accepted by the risk owner.",
          "Residual risks rated high or critical shall be accepted only by an executive leader.",
          "Risk acceptances shall have an expiry date of no more than 12 months and shall be re-evaluated before expiry.",
        ],
      },
      {
        heading: "Monitoring and reporting",
        requirements: [
          "The Security Team shall maintain a risk register that records each risk, its rating, owner, treatment status and review date.",
          "Risk owners shall review the status of their risks at least quarterly.",
          "The CISO shall report the top risks, overdue treatment actions and risk trends to the Security Steering Committee at least quarterly.",
          "Treatment actions that exceed their target date by more than 30 days shall be escalated to the CISO.",
          "The organization shall update risk ratings when incidents, audit findings or threat intelligence indicate a material change.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Clauses 6.1.2, 6.1.3, 8.2, 8.3",
      "NIST CSF 2.0 — GV.RM, ID.RA",
      "NIST SP 800-53 Rev. 5 — RA family, PM-9",
      "NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments",
    ],
  },
  {
    docId: "SH-POL-003",
    title: "Acceptable Use Policy",
    summary: "Sets the rules for acceptable use of the organization's information, devices, networks and online services.",
    purpose:
      "This policy defines the behavior expected of everyone who uses the organization's information and technology. It protects the organization, its customers and its personnel from harm caused by careless, inappropriate or unlawful use of systems and data.",
    aims: [
      "Make clear what is permitted and prohibited when using organizational technology.",
      "Reduce the risk of malware, data leakage and account compromise caused by user behavior.",
      "Protect the organization from legal and reputational harm.",
      "Set expectations regarding monitoring and privacy on organizational systems.",
    ],
    scope:
      "This policy applies to all employees, contractors, temporary staff and third parties who use the organization's information, devices, networks, email, collaboration tools, cloud services or other technology resources. It also applies to personally owned devices when they are used to access organizational information.",
    covers: [
      "General conduct and permitted use.",
      "Account and credential protection.",
      "Email, messaging and internet use.",
      "Device and remote working requirements.",
      "Prohibited activities and monitoring.",
    ],
    roles: [
      {
        role: "All Users",
        responsibilities: [
          "Read, acknowledge and follow this policy.",
          "Report suspected misuse, phishing or security incidents immediately.",
        ],
      },
      {
        role: "Managers",
        responsibilities: [
          "Ensure their team members understand and follow this policy.",
          "Address policy violations within their teams in coordination with Human Resources.",
        ],
      },
      {
        role: "IT Department",
        responsibilities: [
          "Provide and configure devices and services that support compliant use.",
          "Implement technical controls that enforce this policy where practical.",
        ],
      },
      {
        role: "Security Team",
        responsibilities: [
          "Maintain this policy and monitor for policy violations.",
          "Investigate reported misuse and recommend corrective action.",
        ],
      },
      {
        role: "Human Resources",
        responsibilities: [
          "Obtain policy acknowledgment during onboarding.",
          "Manage disciplinary action arising from violations.",
        ],
      },
    ],
    sections: [
      {
        heading: "General use",
        intro: "Organizational technology is provided primarily for business purposes.",
        requirements: [
          "Users shall use organizational systems and information only for authorized business purposes, except for limited personal use permitted by this policy.",
          "Limited personal use shall not interfere with work duties, consume significant resources or expose the organization to risk.",
          "Users shall acknowledge this policy before receiving access to organizational systems and at least annually thereafter.",
          "Users shall handle information in accordance with its classification under the Data Classification and Handling Policy.",
          "Users shall not attempt to access information or systems for which they have not been granted authorization.",
        ],
      },
      {
        heading: "Accounts and credentials",
        requirements: [
          "Users shall not share passwords, tokens or other authentication credentials with anyone, including IT staff.",
          "Users shall use multi-factor authentication wherever the organization has enabled it.",
          "Users shall not reuse organizational passwords on personal or third-party services.",
          "Users shall use the organization's approved password manager to store work credentials where one is provided.",
          "Users shall report any suspected compromise of their credentials to the Security Team immediately.",
        ],
      },
      {
        heading: "Email, messaging and internet",
        requirements: [
          "Users shall use only organization-approved email, messaging and file sharing services for business communication.",
          "Users shall not forward organizational email automatically to personal accounts.",
          "Users shall verify unexpected requests for payments, credentials or sensitive data through a separate, known channel before acting on them.",
          "Users shall report suspicious messages using the organization's designated reporting method.",
          "Users shall not access, download or distribute content that is illegal, harassing, discriminatory or sexually explicit.",
          "Users shall not upload confidential or restricted information to public generative AI tools or other unapproved online services.",
        ],
      },
      {
        heading: "Devices and remote work",
        requirements: [
          "Users shall lock their screens when leaving a device unattended.",
          "Users shall not disable or bypass security software, encryption or device management agents.",
          "Users shall install software only from approved sources or through the organization's software request process.",
          "Personally owned devices shall access organizational information only if enrolled in the organization's approved device management program.",
          "Users shall report lost or stolen devices that hold or access organizational information within 24 hours.",
          "Users working remotely shall take reasonable care to prevent others from viewing or overhearing confidential information.",
        ],
      },
      {
        heading: "Prohibited activities",
        requirements: [
          "Users shall not use organizational resources for unlawful activity, personal commercial gain or activity that conflicts with the organization's interests.",
          "Users shall not install or run unauthorized security testing, scanning or password cracking tools.",
          "Users shall not connect unauthorized network devices, such as wireless access points, to organizational networks.",
          "Users shall not infringe copyright or licensing terms, including by copying unlicensed software or media.",
          "Users shall not create, store or transmit malicious code.",
        ],
      },
      {
        heading: "Monitoring and privacy",
        requirements: [
          "The organization shall inform users that use of organizational systems may be logged and monitored for security, operational and legal purposes, subject to applicable law.",
          "Monitoring shall be performed only by authorized personnel and only for legitimate business purposes.",
          "Users shall have no expectation of privacy in information created, stored or transmitted on organizational systems, to the extent permitted by applicable law.",
          "Violations of this policy shall be handled under the organization's disciplinary process and may result in access revocation, termination or legal action.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 5.10, 6.7, 8.1",
      "NIST SP 800-53 Rev. 5 — PL-4",
      "NIST CSF 2.0 — GV.PO, PR.AT",
      "CIS Controls v8 — Control 14",
    ],
  },
  {
    docId: "SH-POL-004",
    title: "Asset Management Policy",
    summary: "Requires the organization to inventory, assign ownership of, track and securely dispose of its information and technology assets.",
    purpose:
      "This policy ensures that the organization knows what information and technology assets it has, who is responsible for them, and how they are protected throughout their lifecycle. An accurate inventory is the foundation for applying security controls, managing vulnerabilities and responding to incidents.",
    aims: [
      "Maintain accurate and complete inventories of hardware, software, cloud and information assets.",
      "Assign a clear owner to every asset.",
      "Detect and address unauthorized assets promptly.",
      "Ensure assets are returned, sanitized or destroyed securely at end of use.",
    ],
    scope:
      "This policy applies to all assets owned, leased, licensed or operated by or for the organization, including end-user devices, servers, network equipment, mobile devices, removable media, software, cloud services, and information repositories. It applies to all personnel and third parties who acquire, use, manage or dispose of these assets.",
    covers: [
      "Asset inventories and ownership.",
      "Asset acquisition and onboarding.",
      "Unauthorized hardware and software.",
      "Return of assets.",
      "Secure disposal and reuse.",
    ],
    roles: [
      {
        role: "IT Department",
        responsibilities: [
          "Maintain the hardware and software inventories.",
          "Perform secure sanitization and disposal of equipment and media.",
        ],
      },
      {
        role: "Asset Owners",
        responsibilities: [
          "Ensure assets in their care are classified, protected and used appropriately.",
          "Review the accuracy of inventory records for their assets.",
        ],
      },
      {
        role: "Security Team",
        responsibilities: [
          "Monitor for unauthorized assets and verify inventory completeness.",
          "Define sanitization standards for each type of media.",
        ],
      },
      {
        role: "Procurement",
        responsibilities: [
          "Route all technology purchases through approved channels so that new assets are recorded.",
        ],
      },
      {
        role: "Human Resources and Managers",
        responsibilities: [
          "Ensure departing personnel return all organizational assets.",
        ],
      },
    ],
    sections: [
      {
        heading: "Asset inventory",
        intro: "The organization cannot protect assets it does not know about.",
        requirements: [
          "The organization shall maintain an inventory of all hardware assets that records, at a minimum, the asset identifier, type, owner, location, and network address where applicable.",
          "The organization shall maintain an inventory of authorized software, including version and license information.",
          "The organization shall maintain an inventory of cloud services and third-party hosted systems that store or process organizational information.",
          "The organization shall maintain an inventory of information repositories that hold confidential or restricted information.",
          "The organization shall use automated discovery tools where practical to keep inventories current.",
          "Asset owners shall review inventory records for their assets at least every six months.",
        ],
      },
      {
        heading: "Ownership and accountability",
        requirements: [
          "Every inventoried asset shall have an assigned owner who is an individual or a named business function.",
          "Asset owners shall ensure their assets are classified in accordance with the Data Classification and Handling Policy.",
          "Asset ownership shall be reassigned within 10 business days when an owner leaves or changes roles.",
          "Asset owners shall approve access to their assets or delegate that approval in writing.",
        ],
      },
      {
        heading: "Acquisition and unauthorized assets",
        requirements: [
          "New hardware, software and cloud services shall be acquired through approved procurement processes.",
          "New assets shall be recorded in the relevant inventory before being connected to organizational networks or used to process organizational information.",
          "The organization shall scan for unauthorized devices on its networks at least weekly.",
          "Unauthorized devices shall be removed, quarantined or authorized within 7 days of detection.",
          "Unauthorized software shall be removed or formally approved within 14 days of detection.",
          "Software that is no longer supported by its vendor shall be documented as an exception or removed.",
        ],
      },
      {
        heading: "Return of assets",
        requirements: [
          "Personnel and third parties shall return all organizational assets upon termination of employment, contract or agreement.",
          "Managers shall confirm the return of assets as part of the offboarding process.",
          "The organization shall disable access to unreturned devices and pursue recovery when assets are not returned within 5 business days.",
          "Organizational information held on personally owned devices shall be removed upon departure.",
        ],
      },
      {
        heading: "Secure disposal and reuse",
        requirements: [
          "Storage media shall be sanitized using a method appropriate to the media type and data classification before reuse or disposal.",
          "Media that cannot be sanitized effectively shall be physically destroyed.",
          "Third-party disposal providers shall supply a certificate of sanitization or destruction for each batch of assets.",
          "The organization shall record the disposal date and method for each disposed asset in the inventory.",
          "Leased equipment shall be sanitized before return to the lessor.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 5.9, 5.11, 7.10, 7.14",
      "NIST CSF 2.0 — ID.AM",
      "NIST SP 800-53 Rev. 5 — CM-8, MP-6",
      "CIS Controls v8 — Controls 1 and 2",
    ],
  },
  {
    docId: "SH-POL-005",
    title: "Data Classification and Handling Policy",
    summary: "Defines the organization's data classification levels and the handling rules that apply to each level.",
    purpose:
      "This policy establishes a common scheme for classifying the organization's information according to its sensitivity and value. It sets the handling rules for labeling, storing, transmitting, sharing, retaining and destroying information so that protection is proportionate to the harm that disclosure or loss would cause.",
    aims: [
      "Provide a simple classification scheme that personnel can apply consistently.",
      "Ensure that protective measures match the sensitivity of the information.",
      "Reduce the risk of unauthorized disclosure, alteration or loss of sensitive information.",
      "Support compliance with privacy, contractual and regulatory obligations.",
    ],
    scope:
      "This policy applies to all information created, received, stored, processed or transmitted by or on behalf of the organization, in any format and on any medium. It applies to all personnel and to third parties who handle the organization's information.",
    covers: [
      "Classification levels and definitions.",
      "Assigning and reviewing classification.",
      "Labeling requirements.",
      "Storage, transmission and sharing rules.",
      "Retention and secure destruction.",
    ],
    roles: [
      {
        role: "Data Owners",
        responsibilities: [
          "Assign and periodically review the classification of information they own.",
          "Approve sharing of confidential and restricted information.",
        ],
      },
      {
        role: "Data Custodians",
        responsibilities: [
          "Apply technical controls that protect information according to its classification.",
          "Maintain backups and access controls for the systems they operate.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Handle information according to its classification.",
          "Report suspected mishandling or unauthorized disclosure immediately.",
        ],
      },
      {
        role: "Security Team",
        responsibilities: [
          "Maintain the classification scheme and handling standards.",
          "Operate data loss prevention and monitoring controls where deployed.",
        ],
      },
      {
        role: "Legal and Privacy",
        responsibilities: [
          "Identify regulatory and contractual requirements that affect classification and retention.",
        ],
      },
    ],
    sections: [
      {
        heading: "Classification scheme",
        intro: "The organization uses four classification levels.",
        requirements: [
          "The organization shall classify information as Public, Internal, Confidential or Restricted.",
          "Public information shall be information approved for release to the general public.",
          "Internal information shall be information intended for use within the organization whose disclosure would cause minimal harm.",
          "Confidential information shall be information whose unauthorized disclosure could cause significant harm to the organization, its customers or its personnel.",
          "Restricted information shall be the most sensitive information, including regulated personal data, payment card data, authentication secrets and information whose disclosure could cause severe harm.",
          "Information that has not been classified shall be treated as Internal until it is classified.",
        ],
      },
      {
        heading: "Assigning and labeling classification",
        requirements: [
          "Data owners shall assign a classification to information at the time it is created or received.",
          "Data owners shall review the classification of Confidential and Restricted information at least annually.",
          "Documents classified as Confidential or Restricted shall display their classification in the header, footer or file metadata.",
          "Systems and repositories shall be classified at the level of the most sensitive information they hold.",
          "When information of different classifications is combined, the result shall carry the highest applicable classification.",
        ],
      },
      {
        heading: "Storage and access",
        requirements: [
          "Confidential and Restricted information shall be stored only in systems approved by the Security Team for that classification.",
          "Restricted information shall be encrypted at rest using strong, industry-accepted algorithms.",
          "Access to Confidential and Restricted information shall be limited to personnel with a documented business need.",
          "Restricted information shall not be stored on removable media unless the media is encrypted and the data owner has approved the use.",
          "Printed Confidential and Restricted information shall be stored in locked containers when not in use.",
        ],
      },
      {
        heading: "Transmission and sharing",
        requirements: [
          "Confidential and Restricted information shall be encrypted in transit over any network.",
          "Restricted information shall be shared externally only with data owner approval and under a written agreement that includes confidentiality obligations.",
          "Personnel shall use only organization-approved file transfer and collaboration services to share Internal, Confidential or Restricted information.",
          "Public links that allow anonymous access shall not be used for Confidential or Restricted information.",
          "Personnel shall verify recipient addresses before sending Confidential or Restricted information.",
        ],
      },
      {
        heading: "Retention and destruction",
        requirements: [
          "The organization shall maintain a records retention schedule that defines retention periods for each category of information.",
          "Information shall be retained no longer than required by the retention schedule, unless subject to a legal hold.",
          "Electronic Confidential and Restricted information shall be destroyed using methods that prevent recovery.",
          "Printed Confidential and Restricted information shall be destroyed using cross-cut shredding or a certified destruction service.",
          "Legal and Privacy shall notify data owners of legal holds, and affected information shall not be destroyed while the hold is in effect.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 5.12, 5.13, 5.14, 8.10",
      "NIST CSF 2.0 — ID.AM-07, PR.DS",
      "NIST SP 800-53 Rev. 5 — RA-2, MP family",
      "CIS Controls v8 — Control 3",
      "FIPS 199 — Standards for Security Categorization",
    ],
  },
  {
    docId: "SH-POL-006",
    title: "Security Awareness and Training Policy",
    summary: "Requires all personnel to receive security awareness training and role-based training appropriate to their responsibilities.",
    purpose:
      "This policy ensures that everyone who works for or on behalf of the organization understands the security risks they face and the behaviors expected of them. Well-informed personnel are an essential control against phishing, social engineering and accidental data exposure.",
    aims: [
      "Give all personnel the knowledge to recognize and report common threats.",
      "Provide additional training to roles with elevated access or specialized security duties.",
      "Measure the effectiveness of the awareness program and improve it over time.",
      "Maintain records that demonstrate training completion.",
    ],
    scope:
      "This policy applies to all employees, contractors and temporary staff of the organization, and to third parties who are granted access to the organization's systems or confidential information.",
    covers: [
      "Onboarding and annual awareness training.",
      "Role-based security training.",
      "Phishing simulations and ongoing awareness.",
      "Training records and program measurement.",
    ],
    roles: [
      {
        role: "Security Team",
        responsibilities: [
          "Develop, deliver and update the awareness program and training content.",
          "Run phishing simulations and report on results.",
        ],
      },
      {
        role: "Human Resources",
        responsibilities: [
          "Assign onboarding training to new personnel.",
          "Maintain training completion records.",
        ],
      },
      {
        role: "Managers",
        responsibilities: [
          "Ensure team members complete required training on time.",
          "Identify roles in their team that require specialized training.",
        ],
      },
      {
        role: "All Personnel",
        responsibilities: [
          "Complete assigned training within the required timeframe.",
          "Apply training to daily work and report suspicious activity.",
        ],
      },
    ],
    sections: [
      {
        heading: "Onboarding and annual training",
        requirements: [
          "New personnel shall complete security awareness training within 30 days of their start date.",
          "Personnel shall not be granted access to Restricted information until they have completed security awareness training.",
          "All personnel shall complete refresher security awareness training at least annually.",
          "Awareness training shall cover, at a minimum, phishing and social engineering, password and authentication practices, data handling, secure remote work and incident reporting.",
          "The Security Team shall review and update training content at least annually and when significant new threats emerge.",
        ],
      },
      {
        heading: "Role-based training",
        intro: "Some roles need deeper knowledge than general awareness provides.",
        requirements: [
          "Personnel with privileged system access shall complete role-based security training before receiving that access and at least annually thereafter.",
          "Software developers shall complete secure development training at least annually.",
          "Personnel who handle payments, payroll or vendor banking details shall receive training on payment fraud and business email compromise at least annually.",
          "Incident response team members shall participate in at least one incident response exercise each year.",
          "Security Team members shall complete at least 20 hours of professional development in information security each year.",
        ],
      },
      {
        heading: "Phishing simulations and ongoing awareness",
        requirements: [
          "The Security Team shall conduct phishing simulation exercises for all personnel at least quarterly.",
          "Personnel who fail two or more phishing simulations within a 12-month period shall complete targeted remedial training within 14 days.",
          "The organization shall provide security awareness communications to personnel at least monthly.",
          "The organization shall provide a simple method for personnel to report suspected phishing messages.",
          "Phishing simulation results shall be used to improve training and shall not be used as the sole basis for disciplinary action.",
        ],
      },
      {
        heading: "Records and measurement",
        requirements: [
          "The organization shall record training completion for each individual, including the course, date and outcome.",
          "Training records shall be retained for at least three years.",
          "The Security Team shall report training completion rates and phishing simulation results to the Security Steering Committee at least quarterly.",
          "Managers shall be notified when a team member's required training is more than 14 days overdue.",
          "Access for personnel whose mandatory training is more than 30 days overdue may be suspended until the training is completed.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Clauses 7.2, 7.3; Annex A 6.3",
      "NIST CSF 2.0 — PR.AT",
      "NIST SP 800-53 Rev. 5 — AT family",
      "CIS Controls v8 — Control 14",
    ],
  },
  {
    docId: "SH-POL-007",
    title: "Compliance and Internal Audit Policy",
    summary: "Establishes how the organization identifies its compliance obligations and independently audits its security controls.",
    purpose:
      "This policy ensures that the organization identifies and meets its legal, regulatory and contractual security obligations, and that the effectiveness of its security controls is verified through planned, independent internal audits. It provides leadership with objective assurance about the state of the security program.",
    aims: [
      "Identify and track all applicable security and privacy obligations.",
      "Provide objective, independent assurance on the operation of security controls.",
      "Ensure audit findings are remediated promptly and verified.",
      "Prepare the organization for external assessments and certifications.",
    ],
    scope:
      "This policy applies to all business units, systems, processes and third-party services within the scope of the organization's information security management system. It applies to personnel who perform, support or are subject to compliance reviews and internal audits.",
    covers: [
      "Identification of legal, regulatory and contractual obligations.",
      "Internal audit planning and execution.",
      "Auditor independence and competence.",
      "Findings management and remediation.",
      "Ongoing compliance monitoring.",
    ],
    roles: [
      {
        role: "Executive Leadership",
        responsibilities: [
          "Approve the annual audit plan and receive audit results.",
          "Ensure adequate resources are available to remediate findings.",
        ],
      },
      {
        role: "Internal Audit Function",
        responsibilities: [
          "Plan and perform independent audits of the security program.",
          "Report findings and verify that corrective actions are effective.",
        ],
      },
      {
        role: "Chief Information Security Officer (CISO)",
        responsibilities: [
          "Maintain the compliance obligations register.",
          "Coordinate remediation of security-related findings.",
        ],
      },
      {
        role: "Legal and Privacy",
        responsibilities: [
          "Identify new and changed laws and regulations affecting the organization.",
          "Advise on contractual security commitments made to customers.",
        ],
      },
      {
        role: "Control Owners",
        responsibilities: [
          "Provide evidence of control operation upon request.",
          "Remediate findings assigned to them within the agreed timeframe.",
        ],
      },
    ],
    sections: [
      {
        heading: "Compliance obligations",
        requirements: [
          "The organization shall maintain a register of legal, regulatory and contractual security and privacy obligations, including the owner of each obligation.",
          "Legal and Privacy shall review the obligations register at least annually and when new laws, regulations or significant contracts take effect.",
          "Customer contracts that contain security commitments beyond the organization's standard controls shall be reviewed by the Security Team before signature.",
          "The organization shall protect records required by law or regulation against loss, destruction and falsification.",
          "The organization shall respect intellectual property rights and software licensing terms.",
        ],
      },
      {
        heading: "Audit planning",
        intro: "Internal audits follow a risk-based plan approved by leadership.",
        requirements: [
          "The organization shall prepare a risk-based internal audit plan each year and obtain executive approval for it.",
          "The audit plan shall cover all areas of the information security management system at least once every three years.",
          "High-risk areas and areas with prior significant findings shall be audited at least annually.",
          "Each audit shall have a documented scope, objectives, criteria and schedule communicated to the auditee in advance.",
        ],
      },
      {
        heading: "Auditor independence and conduct",
        requirements: [
          "Internal auditors shall not audit their own work or areas for which they have operational responsibility.",
          "Internal auditors shall have relevant competence in information security auditing, demonstrated through training, certification or experience.",
          "The organization may engage qualified external auditors to supplement internal capability.",
          "Auditors shall be granted read-only access to systems and records necessary to perform the audit.",
          "Audit evidence and working papers shall be retained for at least three years.",
        ],
      },
      {
        heading: "Findings and remediation",
        requirements: [
          "Audit findings shall be rated by severity and reported to the auditee and the CISO within 15 business days of audit completion.",
          "Control owners shall submit a corrective action plan within 30 days of receiving a finding.",
          "High-severity findings shall be remediated within 90 days unless a risk acceptance is approved.",
          "The Internal Audit Function shall verify the effectiveness of corrective actions before closing a finding.",
          "Overdue findings shall be reported to executive leadership at least quarterly.",
        ],
      },
      {
        heading: "Ongoing compliance monitoring",
        requirements: [
          "Managers shall review compliance with security policies within their areas at least annually.",
          "The Security Team shall use automated monitoring to assess technical control compliance where practical.",
          "The organization shall prepare for scheduled external audits and certifications by performing a readiness review at least 60 days in advance.",
          "Results of external audits and assessments shall be tracked in the same findings register as internal audit results.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Clause 9.2; Annex A 5.31, 5.32, 5.33, 5.35, 5.36",
      "NIST CSF 2.0 — GV.OC-03, GV.OV",
      "NIST SP 800-53 Rev. 5 — CA family",
    ],
  },
  {
    docId: "SH-POL-008",
    title: "Policy Governance and Exception Management Policy",
    summary: "Governs how security policies are written, approved, reviewed and communicated, and how exceptions to them are requested and controlled.",
    purpose:
      "This policy defines the lifecycle for the organization's security policies, standards and procedures, and the process for handling exceptions when a requirement cannot be met. It keeps the policy framework current and authoritative while ensuring that deviations are visible, risk-assessed and time-limited.",
    aims: [
      "Maintain a consistent format, ownership and approval path for all governing documents.",
      "Keep policies current through scheduled and event-driven reviews.",
      "Ensure that every exception is justified, risk-assessed, approved and time-limited.",
      "Provide leadership with visibility of all outstanding exceptions.",
    ],
    scope:
      "This policy applies to all information security policies, standards, procedures and guidelines issued by the organization, and to every request to deviate from them. It applies to document owners, approvers and all personnel who request or are affected by exceptions.",
    covers: [
      "Document hierarchy and format.",
      "Policy authoring, approval and publication.",
      "Periodic review and version control.",
      "Exception requests, approval and expiry.",
      "Exception tracking and reporting.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer (CISO)",
        responsibilities: [
          "Own the policy framework and approve security standards and procedures.",
          "Approve exceptions within delegated authority and maintain the exception register.",
        ],
      },
      {
        role: "Executive Leadership",
        responsibilities: [
          "Approve security policies and exceptions that carry high or critical residual risk.",
        ],
      },
      {
        role: "Document Owners",
        responsibilities: [
          "Draft, maintain and review assigned policy documents on schedule.",
          "Assess the impact of proposed changes on related documents.",
        ],
      },
      {
        role: "Exception Requesters",
        responsibilities: [
          "Submit complete exception requests with business justification and proposed compensating controls.",
          "Implement compensating controls and remediate before the exception expires.",
        ],
      },
      {
        role: "Security Team",
        responsibilities: [
          "Assess the risk of each exception request.",
          "Track exception expiry dates and notify owners of upcoming expirations.",
        ],
      },
    ],
    sections: [
      {
        heading: "Document hierarchy and format",
        intro: "Governing documents follow a defined hierarchy so that authority and precedence are clear.",
        requirements: [
          "The organization shall organize governing documents as policies, standards, procedures and guidelines, in descending order of authority.",
          "Policies and standards shall state mandatory requirements; guidelines shall be advisory only.",
          "Each governing document shall include a title, document identifier, owner, approver, version number, effective date and next review date.",
          "Each governing document shall have a single named owner.",
        ],
      },
      {
        heading: "Approval and publication",
        requirements: [
          "Security policies shall be approved by executive leadership before publication.",
          "Security standards and procedures shall be approved by the CISO or a delegate named in writing.",
          "Proposed changes to policies shall be reviewed by affected business, legal and technology stakeholders before approval.",
          "Approved documents shall be published in a central repository accessible to all personnel to whom they apply.",
          "The organization shall notify affected personnel of new or materially changed policies within 30 days of approval.",
        ],
      },
      {
        heading: "Review and version control",
        requirements: [
          "Document owners shall review each policy and standard at least annually.",
          "Document owners shall review affected documents following significant incidents, audit findings, regulatory changes or organizational changes.",
          "Each review shall be recorded, even when no changes are made.",
          "The organization shall retain superseded versions of governing documents for at least three years.",
          "Documents that are more than 90 days past their review date shall be reported to the Security Steering Committee.",
        ],
      },
      {
        heading: "Exception requests",
        intro: "An exception is a documented, approved, temporary deviation from a mandatory requirement.",
        requirements: [
          "Any deviation from a mandatory security requirement shall be covered by an approved exception before the deviation occurs, except in an emergency.",
          "Emergency deviations shall be reported to the Security Team within 2 business days and submitted as an exception request.",
          "Each exception request shall state the requirement affected, the business justification, the systems or data involved, the proposed compensating controls and the requested duration.",
          "The Security Team shall complete a risk assessment of each exception request within 10 business days of receipt.",
          "Exceptions with low or medium residual risk shall be approved by the CISO; exceptions with high or critical residual risk shall be approved by executive leadership.",
        ],
      },
      {
        heading: "Exception management",
        requirements: [
          "Exceptions shall be granted for a maximum of 12 months.",
          "Renewal of an exception shall require a new request and a fresh risk assessment.",
          "The Security Team shall maintain an exception register recording each exception, its approver, risk rating, compensating controls and expiry date.",
          "The Security Team shall notify exception owners at least 30 days before an exception expires.",
          "Expired exceptions that have not been renewed shall be treated as policy violations.",
          "The CISO shall report open exceptions, high-risk exceptions and expired exceptions to the Security Steering Committee at least quarterly.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Clause 7.5; Annex A 5.1",
      "NIST CSF 2.0 — GV.PO",
      "NIST SP 800-53 Rev. 5 — PL-1, PM-1",
    ],
  },
];
