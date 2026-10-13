// Access & data protection bundle (pk-pol-access): original SecureHub-authored policy content.

import type { LibraryPolicy } from "./types";

export const ACCESS_POLICIES: LibraryPolicy[] = [
  {
    docId: "SH-POL-101",
    bundle: "pk-pol-access",
    title: "Access Control Policy",
    summary: "Defines how access to information and systems is requested, approved, granted, reviewed and removed on a least-privilege basis.",
    purpose:
      "This policy establishes the rules the organization applies to control logical access to its information, applications and infrastructure, so that each person and system holds only the access needed to perform an approved business function.",
    aims: [
      "Ensure access is granted only on the basis of documented business need and appropriate approval.",
      "Apply the principles of least privilege and segregation of duties consistently across all systems.",
      "Remove or adjust access promptly when a person joins, moves within or leaves the organization.",
      "Provide assurance through periodic review that access rights remain appropriate.",
    ],
    scope:
      "This policy applies to all employees, contractors, temporary staff and third parties who access information systems owned, operated or managed by the organization, whether hosted on premises or by a cloud or service provider.",
    covers: [
      "Access control principles and role-based access design.",
      "The joiner, mover and leaver access lifecycle.",
      "Periodic user access reviews and recertification.",
      "Segregation of duties and conflicting access combinations.",
      "Access to shared, generic and third-party accounts.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and approves exceptions to it.",
          "Reports access review results and material access risks to senior management.",
        ],
      },
      {
        role: "System and Data Owners",
        responsibilities: [
          "Define the roles and access levels appropriate for each system they own.",
          "Approve access requests and complete periodic access reviews for their systems.",
        ],
      },
      {
        role: "Line Managers",
        responsibilities: [
          "Request access for their staff based on job responsibilities.",
          "Notify Human Resources and IT of role changes and departures without delay.",
        ],
      },
      {
        role: "IT Service and Identity Administration",
        responsibilities: [
          "Provision, modify and revoke access only on the basis of an approved request.",
          "Maintain an auditable record of all access changes.",
        ],
      },
      {
        role: "All Users",
        responsibilities: [
          "Use only the access granted to them and only for authorized purposes.",
          "Report any access they hold that is no longer needed.",
        ],
      },
    ],
    sections: [
      {
        heading: "Access control principles",
        intro: "These principles govern the design of access for every system in scope.",
        requirements: [
          "The organization shall grant access to information and systems on a least-privilege and need-to-know basis.",
          "The organization shall deny access by default unless it has been explicitly authorized.",
          "System owners shall define access through documented roles rather than through permissions assigned to individuals wherever the system supports it.",
          "Each user shall be assigned a unique identifier, and access shall be traceable to an individual person or approved service.",
          "The organization shall maintain a register of in-scope systems that identifies the owner and the access model of each.",
        ],
      },
      {
        heading: "Access requests and provisioning",
        requirements: [
          "All requests for new or changed access shall be submitted through the organization's approved request process and recorded.",
          "Access requests shall be approved by the user's line manager and by the owner of the system concerned before provisioning.",
          "IT shall not provision access before the user's employment or engagement has been confirmed by Human Resources or the contract owner.",
          "Access for contractors and third parties shall be configured with an expiry date no later than the end of the contract term.",
          "Access shall be provisioned within the scope approved, and any access beyond that scope shall require a separate request.",
        ],
      },
      {
        heading: "Role changes and removal of access",
        requirements: [
          "Line managers shall notify Human Resources and IT of any internal transfer or change in responsibilities within two business days.",
          "Access no longer required following a role change shall be removed within five business days of the change taking effect.",
          "Access for leavers shall be disabled no later than the end of their last working day.",
          "Access for individuals dismissed or leaving under adverse circumstances shall be disabled immediately upon notification.",
          "Accounts that have been inactive for 90 days shall be disabled, and accounts inactive for 180 days shall be removed unless an approved exception exists.",
        ],
      },
      {
        heading: "Access reviews",
        intro: "Regular reviews confirm that granted access still reflects business need.",
        requirements: [
          "System owners shall review user access rights for their systems at least every six months.",
          "Access to systems that store confidential or regulated data shall be reviewed at least quarterly.",
          "Inappropriate or unexplained access identified during a review shall be removed within five business days.",
          "Evidence of each review, including the reviewer, date and actions taken, shall be retained for at least two years.",
        ],
      },
      {
        heading: "Segregation of duties and shared accounts",
        requirements: [
          "System owners shall identify combinations of access that create a conflict of duties and shall prevent their assignment to a single user.",
          "Where segregation of duties cannot be enforced, the system owner shall implement and document compensating controls such as independent review of activity.",
          "Shared or generic user accounts shall not be used unless technically unavoidable and approved by the Chief Information Security Officer.",
          "Each approved shared account shall have a named owner and its credentials shall be stored in the organization's approved credential vault.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 5.15, 5.18",
      "NIST CSF 2.0 — PR.AA",
      "NIST SP 800-53 Rev. 5 — AC family",
      "CIS Controls v8 — Control 6",
    ],
  },
  {
    docId: "SH-POL-102",
    bundle: "pk-pol-access",
    title: "Identity and Authentication Policy",
    summary: "Sets requirements for user identities, passwords, multi-factor authentication, single sign-on and service accounts.",
    purpose:
      "This policy defines how the organization establishes, manages and verifies digital identities so that only authenticated and authorized people and services can access its information systems.",
    aims: [
      "Ensure every identity is unique, verified and attributable to an accountable person or owner.",
      "Apply strong, usable password practices aligned with current industry guidance.",
      "Require multi-factor authentication wherever the risk of compromise is significant.",
      "Centralize authentication through single sign-on to simplify control and monitoring.",
      "Govern non-human identities such as service accounts with the same rigor as user accounts.",
    ],
    scope:
      "This policy applies to all identities used to access systems owned or operated by the organization, including workforce accounts, contractor accounts, administrative accounts, service accounts, application credentials and API keys.",
    covers: [
      "Identity proofing and account creation.",
      "Password and passphrase requirements.",
      "Multi-factor authentication.",
      "Single sign-on and federated identity.",
      "Service accounts and machine credentials.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and sets authentication standards for the organization.",
          "Approves exceptions where a system cannot meet authentication requirements.",
        ],
      },
      {
        role: "Identity and Access Management Team",
        responsibilities: [
          "Operates the organization's identity provider and single sign-on platform.",
          "Configures password, lockout and multi-factor authentication settings in line with this policy.",
        ],
      },
      {
        role: "Application and Service Owners",
        responsibilities: [
          "Integrate their applications with the organization's single sign-on platform where supported.",
          "Register and maintain ownership of service accounts used by their applications.",
        ],
      },
      {
        role: "Service Desk",
        responsibilities: [
          "Verify the identity of users before resetting credentials or authentication factors.",
        ],
      },
      {
        role: "All Users",
        responsibilities: [
          "Keep passwords and authentication devices confidential and under their sole control.",
          "Report suspected credential compromise to the security team immediately.",
        ],
      },
    ],
    sections: [
      {
        heading: "Identity management",
        requirements: [
          "The organization shall verify the identity of each person before issuing them an account.",
          "Each account shall be uniquely associated with one individual, and accounts shall not be shared between individuals.",
          "The organization shall maintain a single authoritative identity source from which workforce accounts are created and disabled.",
          "Administrative activities shall be performed using accounts separate from those used for email and general web access.",
          "Usernames shall not reveal privilege level or role where this can be avoided.",
        ],
      },
      {
        heading: "Passwords",
        intro: "Password rules favour length and screening against known-compromised values over complexity and frequent rotation.",
        requirements: [
          "User passwords shall be at least 12 characters long, and passwords for privileged accounts shall be at least 15 characters long.",
          "Systems shall permit passwords of at least 64 characters and shall accept all printable characters including spaces.",
          "New and changed passwords shall be checked against a list of commonly used, expected and known-compromised passwords and rejected if found.",
          "The organization shall not require periodic password changes, but shall require a change whenever there is evidence or suspicion of compromise.",
          "Systems shall lock or throttle an account after no more than 10 consecutive failed authentication attempts.",
          "Passwords shall be stored only as salted hashes using an approved adaptive algorithm such as Argon2id, scrypt, bcrypt or PBKDF2.",
          "Users shall be provided with an approved password manager and shall not reuse organization passwords on any other service.",
        ],
      },
      {
        heading: "Multi-factor authentication",
        requirements: [
          "Multi-factor authentication shall be required for all remote access, all cloud and internet-facing applications, email and all privileged access.",
          "The organization shall prefer phishing-resistant authenticators, such as FIDO2 security keys or platform passkeys, and shall require them for privileged accounts.",
          "SMS and voice call one-time codes shall not be used as an authentication factor except under an approved, time-limited exception.",
          "Push-based authenticators shall use number matching or an equivalent mechanism to prevent approval of unsolicited requests.",
          "The service desk shall reset or re-enrol an authentication factor only after verifying the user's identity through an out-of-band method.",
        ],
      },
      {
        heading: "Single sign-on and federation",
        requirements: [
          "Applications that support SAML 2.0 or OpenID Connect shall be integrated with the organization's identity provider.",
          "Local application accounts shall be disabled for users authenticated through single sign-on, except for documented emergency access accounts.",
          "Interactive sessions shall require reauthentication after no more than 12 hours, and after 15 minutes of inactivity for privileged sessions.",
          "Federation trust with external identity providers shall be approved by the Chief Information Security Officer and reviewed annually.",
        ],
      },
      {
        heading: "Service accounts and machine credentials",
        intro: "Non-human identities are frequently targeted and must be owned, inventoried and constrained.",
        requirements: [
          "Every service account shall have a named owner and a documented purpose recorded in the service account inventory.",
          "Service accounts shall be granted only the permissions required for their function and shall be denied interactive logon where the platform supports it.",
          "Service account passwords shall be at least 32 randomly generated characters, or the account shall use certificate, workload identity or managed identity authentication instead.",
          "Secrets, API keys and tokens shall be stored in the organization's approved secrets management system and shall not be embedded in source code or configuration files.",
          "Service account credentials shall be rotated at least annually, and immediately when a person with knowledge of them leaves or compromise is suspected.",
          "Owners shall review their service accounts at least every six months and remove those no longer required.",
        ],
      },
    ],
    references: [
      "NIST SP 800-63B — Digital Identity Guidelines: Authentication",
      "ISO/IEC 27001:2022 — Annex A 5.16, 5.17, 8.5",
      "NIST CSF 2.0 — PR.AA",
      "NIST SP 800-53 Rev. 5 — IA family",
      "CIS Controls v8 — Controls 5 and 6",
    ],
  },
  {
    docId: "SH-POL-103",
    bundle: "pk-pol-access",
    title: "Privileged Access Management Policy",
    summary: "Controls the granting, use, monitoring and review of administrative and other privileged access to the organization's systems.",
    purpose:
      "This policy sets out how the organization restricts and oversees privileged access, which carries the greatest potential for damage if misused or compromised.",
    aims: [
      "Limit the number of privileged accounts and the scope of their permissions to the minimum necessary.",
      "Ensure privileged access is protected by strong authentication and controlled credential handling.",
      "Record and monitor privileged activity so that misuse can be detected and investigated.",
      "Provide controlled emergency access that is accountable and reviewed after use.",
    ],
    scope:
      "This policy applies to all privileged accounts and roles across the organization's environment, including domain and directory administrators, cloud tenant and subscription administrators, database administrators, network and security device administrators, root and local administrator accounts, and privileged application roles.",
    covers: [
      "Definition and inventory of privileged accounts.",
      "Granting and time-bound elevation of privilege.",
      "Credential vaulting and secure administrative workstations.",
      "Session monitoring and logging.",
      "Emergency (break-glass) access.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and approves standing privileged access to critical systems.",
          "Reviews privileged access metrics and exceptions at least quarterly.",
        ],
      },
      {
        role: "Privileged Access Management Administrators",
        responsibilities: [
          "Operate the privileged access management platform and credential vault.",
          "Maintain the inventory of privileged accounts.",
        ],
      },
      {
        role: "System Owners",
        responsibilities: [
          "Approve privileged access requests for their systems.",
          "Complete quarterly reviews of privileged access to their systems.",
        ],
      },
      {
        role: "Security Operations",
        responsibilities: [
          "Monitor privileged activity alerts and investigate anomalies.",
          "Review all uses of emergency access accounts.",
        ],
      },
      {
        role: "Privileged Users",
        responsibilities: [
          "Use privileged access only for approved administrative tasks.",
          "Perform day-to-day activities using their standard, non-privileged account.",
        ],
      },
    ],
    sections: [
      {
        heading: "Granting privileged access",
        requirements: [
          "Privileged access shall be granted only on the basis of a documented business need approved by the system owner and the Chief Information Security Officer or delegate.",
          "The organization shall maintain a complete inventory of privileged accounts, including their owners, systems and permission levels.",
          "Privileged access shall be issued through dedicated named accounts that are separate from the user's standard account.",
          "The organization shall use just-in-time elevation that expires automatically after no more than eight hours wherever the platform supports it.",
          "Standing global administrator or equivalent tenant-wide privileges shall be limited to no more than five named individuals unless an exception is approved.",
        ],
      },
      {
        heading: "Authentication and credential handling",
        requirements: [
          "All privileged access shall require phishing-resistant multi-factor authentication.",
          "Credentials for shared administrative, root and local administrator accounts shall be stored in the organization's privileged credential vault and checked out only for approved tasks.",
          "Vaulted shared credentials shall be rotated automatically after each use or at least every 30 days.",
          "Local administrator passwords on endpoints and servers shall be unique per device and managed by an approved automated solution.",
          "Default vendor administrative accounts shall be renamed or disabled, and their default passwords shall be changed before the system enters production.",
        ],
      },
      {
        heading: "Administrative environment",
        intro: "Administrative work must be performed from trusted, hardened devices.",
        requirements: [
          "Privileged access to critical systems shall be performed only from hardened, organization-managed administrative workstations or through an approved privileged access gateway.",
          "Administrative workstations shall not be used for email, general web browsing or other non-administrative activity.",
          "Management interfaces for infrastructure and security devices shall be reachable only from restricted administrative network segments.",
          "Privileged users shall not install unapproved software on systems they administer.",
        ],
      },
      {
        heading: "Monitoring and logging",
        requirements: [
          "All privileged authentication and elevation events shall be logged to the organization's central log platform.",
          "Interactive privileged sessions to critical systems shall be recorded through the privileged access management platform.",
          "Security Operations shall be alerted in near real time to the creation of privileged accounts and to changes in privileged group membership.",
          "Privileged access logs and session recordings shall be retained for at least 12 months and protected from modification by the users they record.",
          "Privileged users shall not have the ability to disable, alter or delete logs of their own activity.",
        ],
      },
      {
        heading: "Emergency access and review",
        requirements: [
          "The organization shall maintain at least two emergency access accounts for each critical identity platform, excluded from conditional access dependencies that could cause lockout.",
          "Emergency account credentials shall be split or sealed, stored securely, and accessible only under a documented emergency procedure.",
          "Any use of an emergency access account shall generate an immediate alert and shall be reviewed by Security Operations within one business day.",
          "Emergency account credentials shall be rotated after every use.",
          "System owners shall review privileged access to their systems at least quarterly and remove any access that is no longer justified within five business days.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 8.2",
      "NIST SP 800-53 Rev. 5 — AC-2, AC-6",
      "NIST CSF 2.0 — PR.AA",
      "CIS Controls v8 — Controls 5 and 6",
    ],
  },
  {
    docId: "SH-POL-104",
    bundle: "pk-pol-access",
    title: "Remote Access Policy",
    summary: "Specifies how staff and third parties may securely connect to the organization's systems and data from outside its premises.",
    purpose:
      "This policy defines the conditions under which remote access to the organization's networks, systems and data is permitted, and the controls required to protect that access.",
    aims: [
      "Ensure remote connections are authenticated, encrypted and restricted to approved methods.",
      "Ensure that only trusted and compliant devices connect to the organization's resources.",
      "Control and monitor remote access by third parties and vendors.",
      "Protect information handled while working outside organization premises.",
    ],
    scope:
      "This policy applies to all employees, contractors and third parties who access the organization's networks, applications or data from any location other than organization-controlled premises, using either organization-managed or personally owned devices.",
    covers: [
      "Approved remote access methods and technologies.",
      "Device requirements for remote connections.",
      "Third-party and vendor remote access.",
      "Secure remote working practices.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and approves remote access technologies.",
          "Approves exceptions for non-standard remote access.",
        ],
      },
      {
        role: "Network and Infrastructure Team",
        responsibilities: [
          "Operates and patches remote access gateways and zero trust access services.",
          "Enforces device posture and authentication checks on remote connections.",
        ],
      },
      {
        role: "Vendor Relationship Owners",
        responsibilities: [
          "Sponsor and justify third-party remote access requests.",
          "Ensure vendor access is removed when no longer required.",
        ],
      },
      {
        role: "Remote Users",
        responsibilities: [
          "Connect only through approved methods and from compliant devices.",
          "Protect organization information from being viewed or accessed by others while working remotely.",
        ],
      },
    ],
    sections: [
      {
        heading: "Approved remote access methods",
        requirements: [
          "Remote access to internal systems shall be provided only through remote access technologies approved by the Chief Information Security Officer, such as a managed VPN or zero trust network access service.",
          "Remote access sessions shall be encrypted using TLS 1.2 or higher or IPsec with approved cipher suites.",
          "Remote desktop, SSH and other administrative protocols shall not be exposed directly to the internet.",
          "Remote access gateways shall be patched for critical vulnerabilities within 72 hours of a vendor fix being released, or mitigated by an approved workaround.",
          "Users shall not install or use unapproved remote control or remote desktop tools to access organization systems.",
        ],
      },
      {
        heading: "Authentication and session controls",
        requirements: [
          "All remote access shall require multi-factor authentication.",
          "Remote access shall grant users access only to the applications and network segments they are authorized to use, rather than to the entire internal network.",
          "Remote sessions shall be disconnected after no more than 30 minutes of inactivity and shall require reauthentication after no more than 12 hours.",
          "Remote access connection logs, including user, device, source address and session times, shall be retained for at least 12 months.",
        ],
      },
      {
        heading: "Device requirements",
        intro: "The security of a remote connection depends on the security of the device making it.",
        requirements: [
          "Full remote network access shall be permitted only from devices managed by the organization.",
          "Devices used for remote access shall have full-disk encryption, a supported operating system, current security patches and active endpoint protection.",
          "The organization shall verify device compliance before permitting a remote connection and shall block non-compliant devices.",
          "Personally owned devices shall be limited to browser-based or containerized access to approved applications and shall not be permitted to store confidential data locally.",
          "Split tunnelling shall be configured so that traffic to organization resources always passes through the controlled connection.",
        ],
      },
      {
        heading: "Third-party remote access",
        requirements: [
          "Third-party remote access shall be approved by the system owner and the vendor relationship owner and recorded before it is enabled.",
          "Each third-party user shall have an individual account, and shared vendor accounts shall not be used.",
          "Third-party access to critical systems shall be enabled only for the duration of the approved activity and disabled when the activity ends.",
          "Third-party privileged sessions shall be brokered and recorded through the organization's privileged access management platform.",
          "Vendor relationship owners shall review active third-party remote access at least quarterly.",
        ],
      },
      {
        heading: "Secure remote working",
        requirements: [
          "Remote users shall lock their screens whenever their device is left unattended.",
          "Remote users shall not allow family members or other unauthorized persons to use organization devices.",
          "Remote users shall avoid working with confidential information where it can be overseen or overheard by unauthorized persons.",
          "Remote users shall report lost or stolen devices to the service desk within one hour of discovery.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 6.7, 8.1",
      "NIST SP 800-53 Rev. 5 — AC-17",
      "NIST SP 800-46 Rev. 2 — Guide to Enterprise Telework, Remote Access, and BYOD Security",
      "CIS Controls v8 — Safeguard 6.4",
      "NIST CSF 2.0 — PR.AA",
    ],
  },
  {
    docId: "SH-POL-105",
    bundle: "pk-pol-access",
    title: "Cryptography and Key Management Policy",
    summary: "Defines approved cryptographic algorithms, protocols and the lifecycle controls for encryption keys and certificates.",
    purpose:
      "This policy ensures the organization uses cryptography correctly and consistently to protect the confidentiality, integrity and authenticity of information, and that cryptographic keys are managed securely throughout their lifecycle.",
    aims: [
      "Ensure sensitive information is encrypted in transit and at rest using approved methods.",
      "Prevent the use of weak, deprecated or unapproved algorithms and protocols.",
      "Protect cryptographic keys from disclosure, loss and misuse throughout their lifecycle.",
      "Maintain the ability to replace algorithms and keys quickly when they become weak or compromised.",
    ],
    scope:
      "This policy applies to all systems, applications, devices and services that store, process or transmit information on behalf of the organization, and to all cryptographic keys, certificates and secrets generated or used by the organization or by service providers acting on its behalf.",
    covers: [
      "Approved algorithms, key lengths and protocols.",
      "Encryption of data in transit and at rest.",
      "Key generation, storage, distribution, rotation and destruction.",
      "Digital certificate management.",
      "Cryptographic agility and post-quantum readiness.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and maintains the approved cryptography standard.",
          "Approves exceptions for legacy systems unable to meet requirements.",
        ],
      },
      {
        role: "Key Custodians",
        responsibilities: [
          "Generate, protect, rotate and destroy keys under their custody in line with this policy.",
          "Maintain records of the keys they manage.",
        ],
      },
      {
        role: "Infrastructure and Platform Teams",
        responsibilities: [
          "Configure systems and services to enforce approved protocols and encryption.",
          "Operate the key management service and certificate lifecycle tooling.",
        ],
      },
      {
        role: "Software Developers",
        responsibilities: [
          "Use only approved, well-maintained cryptographic libraries and never implement custom cryptographic algorithms.",
          "Keep keys and secrets out of source code and build artifacts.",
        ],
      },
    ],
    sections: [
      {
        heading: "Approved algorithms and protocols",
        intro: "Only algorithms and protocols listed in this section, or in the organization's approved cryptography standard, may be used.",
        requirements: [
          "Symmetric encryption shall use AES with a key length of 256 bits, in an authenticated mode such as GCM where supported.",
          "Asymmetric cryptography shall use RSA keys of at least 3072 bits or elliptic curve keys of at least 256 bits, such as P-256 or Curve25519.",
          "Hashing for integrity and digital signatures shall use SHA-256 or stronger from the SHA-2 or SHA-3 families.",
          "The organization shall not use DES, 3DES, RC4, MD5, SHA-1 for signatures, or SSL and TLS versions earlier than 1.2.",
          "Random values used for keys, tokens and nonces shall be generated by a cryptographically secure random number generator.",
          "The organization shall maintain an inventory of cryptographic algorithms in use and shall prepare a migration plan to post-quantum algorithms standardized by NIST, such as ML-KEM and ML-DSA.",
        ],
      },
      {
        heading: "Encryption of data in transit and at rest",
        requirements: [
          "All data transmitted over public or untrusted networks shall be encrypted using TLS 1.2 or higher, with TLS 1.3 preferred.",
          "Confidential and restricted data transmitted within internal networks shall also be encrypted in transit.",
          "Confidential and restricted data stored in databases, file stores, backups and cloud storage shall be encrypted at rest using AES-256.",
          "All laptops, mobile devices and removable media that may hold organization data shall use full-disk or device encryption.",
          "Public-facing web services shall enable HTTP Strict Transport Security.",
        ],
      },
      {
        heading: "Key generation and storage",
        requirements: [
          "Keys shall be generated within a hardware security module, a cloud key management service or an approved cryptographic library on a trusted system.",
          "Keys protecting restricted data and root or issuing certificate authority keys shall be stored in a hardware security module validated to FIPS 140-2 or FIPS 140-3 Level 3 or equivalent.",
          "Keys shall never be stored in plaintext alongside the data they protect, and data encryption keys shall be protected by separate key encryption keys.",
          "Access to key management systems shall be restricted to authorized key custodians and require multi-factor authentication.",
          "Each key shall be used for a single defined purpose, and the same key shall not be used for both encryption and signing.",
        ],
      },
      {
        heading: "Key lifecycle",
        requirements: [
          "Each key shall have a defined owner, purpose and cryptoperiod recorded in the key inventory.",
          "Symmetric data encryption keys and key encryption keys shall be rotated at least annually, or sooner where the cryptoperiod in the approved standard is shorter.",
          "Keys shall be revoked and replaced immediately upon suspected compromise, and the incident shall be reported to the security team.",
          "Retired keys needed to decrypt archived data shall be retained securely for the life of that data and used only for decryption.",
          "Keys shall be destroyed using a method that prevents recovery once they are no longer required, and destruction shall be recorded.",
          "Activities involving master or root keys shall require dual control so that no single person can perform them alone.",
        ],
      },
      {
        heading: "Certificate management",
        requirements: [
          "The organization shall maintain an inventory of all TLS and code-signing certificates, including owner and expiry date.",
          "Public TLS certificates shall be obtained only from approved certificate authorities.",
          "Certificate renewal shall be automated where possible, and owners shall be alerted at least 30 days before any certificate expires.",
          "Self-signed certificates shall not be used on production systems that are accessible to users or external parties.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 8.24",
      "NIST SP 800-57 Part 1 Rev. 5 — Recommendation for Key Management",
      "NIST SP 800-53 Rev. 5 — SC-8, SC-12, SC-13, SC-28",
      "NIST CSF 2.0 — PR.DS",
      "CIS Controls v8 — Safeguards 3.10 and 3.11",
    ],
  },
  {
    docId: "SH-POL-106",
    bundle: "pk-pol-access",
    title: "Data Retention and Secure Disposal Policy",
    summary: "Sets how long the organization keeps information and how it securely deletes data and sanitizes media when retention ends.",
    purpose:
      "This policy ensures that the organization retains information for as long as it is needed for business, legal and regulatory purposes, and no longer, and that information and media are disposed of in a way that prevents unauthorized recovery.",
    aims: [
      "Meet legal, regulatory and contractual record-keeping obligations.",
      "Reduce risk and storage cost by not retaining information beyond its required period.",
      "Ensure data is irrecoverable once it is deleted or the media holding it is disposed of.",
      "Preserve information subject to legal hold for as long as the hold applies.",
    ],
    scope:
      "This policy applies to all information created, received or maintained by the organization in any format, including electronic records, backups, logs, email, paper documents, and all storage media and devices on which such information resides, whether managed internally or by a service provider.",
    covers: [
      "The retention schedule and its maintenance.",
      "Legal holds.",
      "Secure deletion of electronic data.",
      "Sanitization and destruction of storage media and devices.",
      "Disposal of paper records.",
    ],
    roles: [
      {
        role: "Data Protection and Records Lead",
        responsibilities: [
          "Owns this policy and maintains the organization's retention schedule.",
          "Coordinates annual retention compliance reviews.",
        ],
      },
      {
        role: "Legal Counsel",
        responsibilities: [
          "Advises on statutory retention requirements.",
          "Issues and releases legal holds.",
        ],
      },
      {
        role: "Data Owners",
        responsibilities: [
          "Apply the retention schedule to the information they own.",
          "Authorize deletion of information that has reached the end of its retention period.",
        ],
      },
      {
        role: "IT Operations",
        responsibilities: [
          "Implement automated retention and deletion rules in systems.",
          "Sanitize or arrange certified destruction of media and devices.",
        ],
      },
    ],
    sections: [
      {
        heading: "Retention schedule",
        requirements: [
          "The organization shall maintain a retention schedule that specifies the retention period, legal basis and owner for each category of information.",
          "The retention schedule shall be reviewed at least annually and whenever relevant legal or business requirements change.",
          "Information shall be retained for no longer than the period stated in the retention schedule unless subject to a legal hold or an approved exception.",
          "Where no retention period is specified, the data owner shall request a determination from the Data Protection and Records Lead before the information is kept for more than one year.",
          "Systems shall apply automated retention and deletion rules wherever the platform supports them.",
        ],
      },
      {
        heading: "Legal holds",
        intro: "A legal hold overrides normal retention and deletion for the information it covers.",
        requirements: [
          "Legal Counsel shall issue a written legal hold notice to custodians when litigation, investigation or audit is reasonably anticipated.",
          "Information subject to a legal hold shall not be altered, deleted or destroyed until Legal Counsel releases the hold in writing.",
          "IT Operations shall suspend automated deletion for information subject to a legal hold within two business days of notification.",
          "Legal Counsel shall review active legal holds at least every six months.",
        ],
      },
      {
        heading: "Secure deletion of electronic data",
        requirements: [
          "Data owners shall initiate deletion of information within 30 days of the end of its retention period.",
          "Deletion shall cover all copies of the information, including replicas, exports and test environments, within the organization's control.",
          "Data held in backups shall be deleted when the backup reaches the end of its own retention cycle and shall not be restored for business use after its retention period has ended.",
          "Where data is held by a service provider, the organization shall obtain contractual commitment and, on termination, written confirmation that the data has been deleted.",
          "Cryptographic erasure, by destroying the keys protecting encrypted data, may be used as a deletion method where all copies are encrypted under the destroyed keys.",
        ],
      },
      {
        heading: "Media sanitization and destruction",
        requirements: [
          "All storage media shall be sanitized before reuse, return to a lessor or vendor, or disposal, using methods consistent with NIST SP 800-88.",
          "Media that held confidential or restricted data and that will leave the organization's control shall be purged or physically destroyed, not merely cleared.",
          "Failed or end-of-life drives that cannot be reliably sanitized shall be physically destroyed by shredding, disintegration or degaussing as appropriate to the media type.",
          "Third-party disposal providers shall be approved by the organization and shall provide a certificate of destruction listing each asset by serial number.",
          "IT Operations shall record the sanitization or destruction of every asset in the asset register, including the method, date and person responsible.",
          "Mobile devices shall be cryptographically wiped and factory reset before reissue or disposal.",
        ],
      },
      {
        heading: "Paper records",
        requirements: [
          "Paper containing confidential or restricted information shall be placed in locked confidential waste containers and shall not be placed in general waste or recycling.",
          "Confidential paper waste shall be destroyed by cross-cut shredding or pulping, either on site or by an approved provider that issues a certificate of destruction.",
          "Confidential waste containers shall be emptied at least monthly, or more frequently when full.",
          "Paper records shall be destroyed at the end of their retention period in line with the retention schedule.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 5.33, 7.14, 8.10",
      "NIST SP 800-88 — Guidelines for Media Sanitization",
      "NIST SP 800-53 Rev. 5 — MP-6, SI-12",
      "CIS Controls v8 — Safeguards 3.4 and 3.5",
      "GDPR — Article 5(1)(e)",
    ],
  },
  {
    docId: "SH-POL-107",
    bundle: "pk-pol-access",
    title: "Privacy and Personal Data Protection Policy",
    summary: "Sets the principles and controls the organization applies to collect, use, share and protect personal data lawfully and transparently.",
    purpose:
      "This policy establishes how the organization processes personal data fairly, lawfully and transparently, respects the rights of individuals, and meets its obligations under applicable data protection and privacy laws.",
    aims: [
      "Process personal data only for specified, legitimate purposes and on a valid legal basis.",
      "Collect and keep only the personal data that is necessary and accurate.",
      "Enable individuals to exercise their privacy rights promptly and effectively.",
      "Embed privacy into the design of systems, processes and supplier relationships.",
      "Detect, contain and report personal data breaches within required timeframes.",
    ],
    scope:
      "This policy applies to all personal data processed by or on behalf of the organization, relating to customers, employees, job applicants, contractors, suppliers and any other individuals, in any format and in any location, and to all staff and third parties who process that data.",
    covers: [
      "Data protection principles and legal bases for processing.",
      "Transparency and the rights of individuals.",
      "Privacy by design and data protection impact assessments.",
      "Processors, data sharing and international transfers.",
      "Personal data breach management.",
    ],
    roles: [
      {
        role: "Data Protection Officer or Privacy Lead",
        responsibilities: [
          "Owns this policy and monitors the organization's compliance with privacy obligations.",
          "Advises on data protection impact assessments and acts as the contact point for individuals and supervisory authorities.",
        ],
      },
      {
        role: "Senior Management",
        responsibilities: [
          "Is accountable for the organization's compliance with data protection law.",
          "Provides resources for the privacy program.",
        ],
      },
      {
        role: "Data Owners and Process Owners",
        responsibilities: [
          "Maintain records of processing for their activities.",
          "Ensure processing in their area has a documented purpose and legal basis.",
        ],
      },
      {
        role: "Procurement and Vendor Management",
        responsibilities: [
          "Ensure suppliers processing personal data are assessed and bound by data processing terms.",
        ],
      },
      {
        role: "All Staff",
        responsibilities: [
          "Handle personal data only as needed for their role and in line with this policy.",
          "Forward requests from individuals and report suspected personal data breaches to the Privacy Lead immediately.",
        ],
      },
    ],
    sections: [
      {
        heading: "Principles and lawful processing",
        requirements: [
          "The organization shall process personal data only for specified, explicit and legitimate purposes and shall not further process it in a manner incompatible with those purposes.",
          "Each processing activity shall have a documented legal basis recorded before processing begins.",
          "The organization shall collect only the personal data that is adequate, relevant and limited to what is necessary for the stated purpose.",
          "Where consent is the legal basis, it shall be freely given, specific, informed and recorded, and individuals shall be able to withdraw it as easily as they gave it.",
          "Special categories of personal data and data relating to criminal convictions shall be processed only where a specific legal condition applies and with additional safeguards approved by the Privacy Lead.",
          "The organization shall maintain a record of processing activities and review it at least annually.",
        ],
      },
      {
        heading: "Transparency and individual rights",
        intro: "Individuals must understand how their data is used and be able to exercise their rights.",
        requirements: [
          "The organization shall provide clear privacy notices at the point personal data is collected, describing the purposes, legal basis, recipients, retention and individual rights.",
          "The organization shall maintain a documented procedure for handling requests to access, correct, delete, restrict, port or object to the processing of personal data.",
          "Requests from individuals shall be acknowledged within five business days and fulfilled within one month of receipt, or within any shorter period required by applicable law.",
          "The organization shall verify the identity of the requester before disclosing or altering personal data in response to a request.",
          "The organization shall not make decisions with legal or similarly significant effects on individuals based solely on automated processing without a lawful basis and a means for human review.",
        ],
      },
      {
        heading: "Privacy by design and impact assessments",
        requirements: [
          "Project and system owners shall consider privacy requirements from the earliest design stage of any new system, product or process that handles personal data.",
          "A data protection impact assessment shall be completed and reviewed by the Privacy Lead before starting processing likely to result in high risk to individuals.",
          "Systems shall be configured so that, by default, only the personal data necessary for each specific purpose is processed and made accessible.",
          "Personal data shall be pseudonymized or anonymized where the purpose can be achieved without identifying individuals.",
          "Production personal data shall not be used in development or test environments unless it has been masked or an approved exception exists.",
        ],
      },
      {
        heading: "Security of personal data",
        requirements: [
          "The organization shall protect personal data with technical and organizational measures appropriate to the risk, including access control, encryption and logging.",
          "Access to personal data shall be restricted to personnel who require it for their role.",
          "Personal data shall be retained only for the period defined in the organization's retention schedule.",
          "All staff with access to personal data shall complete privacy awareness training on joining and at least annually.",
        ],
      },
      {
        heading: "Processors, sharing and international transfers",
        requirements: [
          "The organization shall engage only processors that provide sufficient guarantees of data protection, assessed before contract signature.",
          "Every processor shall be bound by a written agreement that sets out the subject matter, duration, nature and purpose of processing and the processor's security and confidentiality obligations.",
          "Personal data shall be disclosed to third parties only where there is a legal basis and the disclosure is recorded.",
          "Personal data shall be transferred across national borders only where the destination provides adequate protection or an approved transfer mechanism and any required transfer risk assessment are in place.",
        ],
      },
      {
        heading: "Personal data breaches",
        requirements: [
          "Staff shall report any suspected personal data breach to the Privacy Lead and security team immediately upon becoming aware of it.",
          "The organization shall assess each personal data breach for risk to individuals and record it in a breach register, whether or not it is notifiable.",
          "Where required by applicable law, the organization shall notify the relevant supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of the breach.",
          "Where a breach is likely to result in a high risk to individuals, the organization shall inform the affected individuals without undue delay.",
        ],
      },
    ],
    references: [
      "GDPR — Articles 5, 25, 32 and 33",
      "ISO/IEC 27001:2022 — Annex A 5.34",
      "ISO/IEC 27701 — Privacy Information Management",
      "NIST Privacy Framework 1.0",
    ],
  },
  {
    docId: "SH-POL-108",
    bundle: "pk-pol-access",
    title: "Data Loss Prevention Policy",
    summary: "Defines controls to detect and prevent unauthorized disclosure or exfiltration of sensitive information across endpoints, network, email and cloud.",
    purpose:
      "This policy sets out how the organization identifies sensitive information and applies preventive and detective controls to stop it from leaving authorized locations, whether through error, misuse or malicious activity.",
    aims: [
      "Identify and label sensitive information so that protective controls can be applied.",
      "Prevent unauthorized transfer of sensitive information through common exfiltration channels.",
      "Detect and respond promptly to data loss events.",
      "Balance protection with legitimate business needs through a governed exception process.",
    ],
    scope:
      "This policy applies to all organization information classified as confidential or restricted, and to all channels through which it can leave the organization, including endpoints, removable media, email, web uploads, cloud storage and collaboration services, messaging platforms, printing and generative AI tools.",
    covers: [
      "Data discovery and classification labelling.",
      "DLP controls across endpoint, email, network and cloud channels.",
      "Removable media and external sharing.",
      "Alert handling and incident response.",
      "Policy exceptions and tuning.",
    ],
    roles: [
      {
        role: "Chief Information Security Officer",
        responsibilities: [
          "Owns this policy and approves DLP rule sets that block business activity.",
          "Reports significant data loss events to senior management.",
        ],
      },
      {
        role: "Data Owners",
        responsibilities: [
          "Classify information they own and define what constitutes unauthorized disclosure.",
          "Approve business exceptions to DLP controls for their data.",
        ],
      },
      {
        role: "Security Operations",
        responsibilities: [
          "Operate DLP tooling and triage alerts within defined timeframes.",
          "Escalate confirmed data loss events through the incident response process.",
        ],
      },
      {
        role: "Human Resources and Legal Counsel",
        responsibilities: [
          "Support investigations involving staff and ensure monitoring is conducted lawfully and proportionately.",
        ],
      },
      {
        role: "All Users",
        responsibilities: [
          "Apply the correct classification label to information they create.",
          "Share sensitive information only through approved channels.",
        ],
      },
    ],
    sections: [
      {
        heading: "Data discovery and classification",
        requirements: [
          "The organization shall maintain an inventory of locations where confidential and restricted data is stored.",
          "Automated discovery scans of file shares, cloud storage and collaboration platforms shall be performed at least quarterly to locate unprotected sensitive data.",
          "Information shall carry a classification label that DLP controls can read, applied automatically where possible and by the user otherwise.",
          "DLP detection rules shall cover at least payment card data, government identifiers, authentication secrets, health information and data the organization designates as restricted.",
        ],
      },
      {
        heading: "Endpoint and removable media controls",
        requirements: [
          "Endpoint DLP shall be deployed on all organization-managed laptops and desktops.",
          "Writing data to removable storage media shall be blocked by default and permitted only for approved users with encrypted, organization-issued devices.",
          "Copying restricted data to personal cloud storage, personal email or unmanaged applications shall be blocked.",
          "Printing of restricted information shall be logged and limited to authorized users.",
          "Screen capture and clipboard transfer of restricted data from managed applications to unmanaged applications shall be restricted on mobile and personally owned devices.",
        ],
      },
      {
        heading: "Email, web and cloud controls",
        requirements: [
          "Outbound email containing confidential or restricted data shall be inspected and, where sent to external recipients, encrypted or blocked according to the applicable DLP rule.",
          "Uploads of restricted data to unapproved websites and cloud services shall be blocked through web proxy or cloud access security controls.",
          "External sharing links on approved cloud platforms shall default to named recipients and shall expire after no more than 30 days.",
          "Restricted data shall not be entered into generative AI tools other than those approved by the organization for that classification.",
          "Sensitive data shall not be transmitted through unapproved messaging or file transfer services.",
        ],
      },
      {
        heading: "Monitoring, alerting and response",
        intro: "DLP alerts are a source of security events and must be triaged consistently.",
        requirements: [
          "High-severity DLP alerts shall be triaged by Security Operations within four business hours, and other alerts within two business days.",
          "Confirmed or suspected loss of restricted or personal data shall be escalated as a security incident in line with the organization's incident response process.",
          "Users shall receive an on-screen notification explaining why an action was blocked or flagged, unless this would compromise an active investigation.",
          "DLP event logs shall be retained for at least 12 months and access to their content shall be restricted to authorized investigators.",
          "Monitoring of user activity shall be proportionate, disclosed to staff in advance and conducted in accordance with applicable law.",
        ],
      },
      {
        heading: "Exceptions and tuning",
        requirements: [
          "Exceptions to DLP controls shall be requested in writing, justified by a business need, approved by the data owner and the Chief Information Security Officer, and limited to a maximum of 12 months.",
          "New DLP rules shall be run in monitoring mode before blocking is enabled, unless urgent risk requires immediate enforcement.",
          "Security Operations shall review DLP rule effectiveness and false positive rates at least quarterly and tune rules accordingly.",
          "The list of approved exceptions shall be reviewed at least every six months and expired exceptions removed.",
        ],
      },
    ],
    references: [
      "ISO/IEC 27001:2022 — Annex A 8.12",
      "NIST CSF 2.0 — PR.DS",
      "CIS Controls v8 — Control 3",
      "NIST SP 800-53 Rev. 5 — AC-4, SC-7",
    ],
  },
];
