import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Nyaya Vidhi's Privacy Policy — describing how we collect, process, store, transfer, and protect personal data in compliance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the SPDI Rules, 2011.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction & Scope",
    body: (
      <>
        <p>
          This Privacy Policy (the <strong>“Policy”</strong>) explains how
          Nyaya Vidhi (the <strong>“Platform”</strong>, <strong>“we”</strong>,{" "}
          <strong>“us”</strong>, or <strong>“our”</strong>) collects, uses,
          shares, retains, transfers, and protects information — including
          personal data — when you visit{" "}
          <a href="https://nyayavidhi.in">nyayavidhi.in</a>, subscribe to our
          newsletter, contact us, or otherwise interact with our services
          (collectively, the <strong>“Services”</strong>).
        </p>
        <p>
          This Policy is published in compliance with applicable Indian law,
          including:
        </p>
        <ul>
          <li>
            the <strong>Digital Personal Data Protection Act, 2023</strong>{" "}
            (the <strong>“DPDP Act”</strong>) and the rules framed thereunder
            once notified;
          </li>
          <li>
            Sections 43A and 72A of the{" "}
            <strong>Information Technology Act, 2000</strong> (the{" "}
            <strong>“IT Act”</strong>);
          </li>
          <li>
            the{" "}
            <strong>
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules,
              2011
            </strong>{" "}
            (the <strong>“SPDI Rules”</strong>);
          </li>
          <li>
            the{" "}
            <strong>
              Information Technology (Intermediary Guidelines and Digital Media
              Ethics Code) Rules, 2021
            </strong>{" "}
            (the <strong>“Intermediary Rules”</strong>);
          </li>
          <li>
            and any other rules, regulations, guidelines, or notifications
            issued by the Government of India from time to time.
          </li>
        </ul>
        <p>
          By accessing or using the Services, you acknowledge that you have
          read and understood this Policy and consent to the processing of your
          personal data in accordance with it.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    number: "2",
    title: "Definitions",
    body: (
      <ul>
        <li>
          <strong>“Data Principal”</strong> means the natural individual to
          whom the personal data relates (i.e., you, the User).
        </li>
        <li>
          <strong>“Data Fiduciary”</strong> means the person who, alone or in
          conjunction with others, determines the purpose and means of
          processing of personal data — in this Policy, that is Nyaya Vidhi.
        </li>
        <li>
          <strong>“Personal Data”</strong> means any data about an individual
          who is identifiable by or in relation to such data.
        </li>
        <li>
          <strong>
            “Sensitive Personal Data or Information” (“SPDI”)
          </strong>{" "}
          has the meaning ascribed to it in Rule 3 of the SPDI Rules and
          includes passwords; financial information such as bank account or
          card details; physical, physiological, and mental health condition;
          sexual orientation; medical records; and biometric information.
        </li>
        <li>
          <strong>“Processing”</strong> means a wholly or partly automated
          operation or set of operations performed on personal data, including
          collection, recording, organisation, structuring, storage, retrieval,
          use, disclosure, erasure, or destruction.
        </li>
        <li>
          <strong>“Cookies”</strong> means small text files placed on your
          device that store information for the purposes described in Section
          7.
        </li>
      </ul>
    ),
  },
  {
    id: "data-we-collect",
    number: "3",
    title: "Data We Collect",
    body: (
      <>
        <p>
          We adopt a <strong>data-minimisation</strong> approach and collect
          only what is necessary for the lawful purposes set out in this
          Policy.
        </p>
        <h4>3.1 Information you provide</h4>
        <ul>
          <li>
            <strong>Newsletter subscription:</strong> your email address and,
            optionally, your name.
          </li>
          <li>
            <strong>Correspondence:</strong> the contents of your emails or
            messages and any information you voluntarily share.
          </li>
          <li>
            <strong>Feedback &amp; corrections:</strong> any information you
            submit when reporting an inaccuracy or suggesting a topic.
          </li>
        </ul>
        <h4>3.2 Information collected automatically</h4>
        <ul>
          <li>
            <strong>Technical data:</strong> IP address, device identifiers,
            browser type and version, operating system, screen size, language,
            and time-zone setting.
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, referring URL, session
            duration, navigation paths, search terms used on the Platform, and
            interaction events with components such as the “Know Your Rights”
            cards or learning paths.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> as described in
            Section 7.
          </li>
        </ul>
        <h4>3.3 Information from third parties</h4>
        <p>
          Where we use analytics, hosting, or email-delivery providers, we may
          receive aggregated or pseudonymised information from them about how
          users interact with the Platform.
        </p>
        <h4>3.4 Sensitive Personal Data or Information</h4>
        <p>
          We <strong>do not</strong> intentionally collect SPDI such as
          financial information, passwords, biometric data, or health data. You
          are requested <strong>not</strong> to share such information with us
          through any channel.
        </p>
      </>
    ),
  },
  {
    id: "purposes-and-grounds",
    number: "4",
    title: "Purposes & Lawful Grounds of Processing",
    body: (
      <>
        <p>
          We process personal data only for specified, explicit, and lawful
          purposes, and on the grounds set out below.
        </p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Lawful ground (DPDP Act)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To deliver the newsletter you subscribe to.</td>
              <td>Consent (Section 6).</td>
            </tr>
            <tr>
              <td>
                To respond to your queries, feedback, or grievances.
              </td>
              <td>
                Legitimate use — for the specified purpose voluntarily
                provided (Section 7(a)).
              </td>
            </tr>
            <tr>
              <td>
                To operate, maintain, secure, and improve the Platform.
              </td>
              <td>
                Legitimate use — for purposes connected with services
                requested.
              </td>
            </tr>
            <tr>
              <td>
                To analyse aggregate usage and improve content quality.
              </td>
              <td>Consent and legitimate use.</td>
            </tr>
            <tr>
              <td>
                To comply with applicable law, court orders, or regulatory
                requests.
              </td>
              <td>Compliance with judgment, decree, or law (Section 7(c)).</td>
            </tr>
            <tr>
              <td>
                To detect, prevent, and respond to fraud, abuse, security
                incidents, or unlawful activity.
              </td>
              <td>Legitimate use — protection of rights and safety.</td>
            </tr>
          </tbody>
        </table>
        <p>
          We will <strong>not</strong> use your personal data for purposes
          materially different from those listed above without first obtaining
          your fresh consent, where required.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    number: "5",
    title: "Consent & Withdrawal",
    body: (
      <>
        <p>
          Wherever the lawful ground for processing is consent, such consent
          is sought in a manner that is <strong>free, specific, informed,
          unconditional, and unambiguous</strong>, with a clear affirmative
          action, and is limited to the personal data necessary for the
          specified purpose, in accordance with Section 6 of the DPDP Act.
        </p>
        <p>
          You may <strong>withdraw your consent</strong> at any time with
          equal ease, by:
        </p>
        <ul>
          <li>
            clicking the “unsubscribe” link present in every newsletter email;
            or
          </li>
          <li>
            writing to our Grievance Officer at the address provided in Section
            14.
          </li>
        </ul>
        <p>
          Withdrawal of consent shall not affect the lawfulness of processing
          based on consent before its withdrawal. Following withdrawal, we
          shall, within a reasonable period, cease and cause our data
          processors to cease processing the personal data unless retention is
          required for compliance with any law for the time being in force.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "6",
    title: "Children's Data",
    body: (
      <p>
        The Platform is not directed at children below the age of{" "}
        <strong>eighteen (18) years</strong>. We do not knowingly collect
        personal data of children or persons with disabilities who have lawful
        guardians without obtaining verifiable consent of the parent or lawful
        guardian, in line with Section 9 of the DPDP Act. If you believe we
        have inadvertently collected such data, please write to our Grievance
        Officer and we shall promptly delete it.
      </p>
    ),
  },
  {
    id: "cookies",
    number: "7",
    title: "Cookies & Similar Technologies",
    body: (
      <>
        <p>
          We use cookies and similar technologies (such as local storage and
          pixels) to operate the Platform, remember your preferences,
          understand how the Services are used, and improve them. We
          distinguish between the following categories:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary:</strong> required for core
            functionality such as page navigation and form submission. These
            cannot be switched off in our systems.
          </li>
          <li>
            <strong>Functional / preference:</strong> remember choices such as
            theme (light/dark) or recently viewed laws.
          </li>
          <li>
            <strong>Analytics:</strong> help us understand aggregate usage
            patterns. Wherever feasible, we configure analytics with IP
            anonymisation and respect the “Do Not Track” signal.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings and may
          configure your browser to refuse cookies or to alert you when cookies
          are being sent. Disabling certain cookies may affect functionality of
          the Platform.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "8",
    title: "Sharing & Disclosure",
    body: (
      <>
        <p>
          We do <strong>not sell, rent, or trade</strong> your personal data.
          We share personal data only in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers (data processors):</strong> with vetted
            third-party providers (such as hosting, content delivery,
            analytics, and email delivery) acting on our written instructions
            and bound by confidentiality and data-protection obligations
            consistent with this Policy.
          </li>
          <li>
            <strong>Legal compliance:</strong> with courts, statutory
            authorities, regulators, or law-enforcement agencies, when required
            by a duly issued summons, notice, order, or warrant under
            applicable law including the IT Act and the Bharatiya Nagarik
            Suraksha Sanhita, 2023.
          </li>
          <li>
            <strong>Protection of rights:</strong> to enforce our terms,
            protect the rights, property, or safety of Nyaya Vidhi, our Users,
            or others, or to investigate fraud or security incidents.
          </li>
          <li>
            <strong>Business transfer:</strong> in connection with a merger,
            acquisition, restructuring, or sale of assets, subject to the
            transferee assuming obligations no less protective than those in
            this Policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transfers",
    number: "9",
    title: "International Transfers",
    body: (
      <p>
        Our service providers may be located in jurisdictions outside India.
        Where personal data is transferred outside India, such transfer shall
        be made only to countries or territories not specifically restricted
        by the Central Government under Section 16 of the DPDP Act, and shall
        be subject to appropriate contractual safeguards consistent with the
        protections afforded under Indian law.
      </p>
    ),
  },
  {
    id: "retention",
    number: "10",
    title: "Retention & Erasure",
    body: (
      <>
        <p>
          We retain personal data only for as long as is necessary for the
          purposes for which it was collected or as required under applicable
          law, whichever is longer. Indicative retention periods:
        </p>
        <ul>
          <li>
            <strong>Newsletter subscribers:</strong> until you unsubscribe or
            withdraw consent, plus a reasonable period to action your request
            and maintain proof of consent.
          </li>
          <li>
            <strong>Correspondence:</strong> up to{" "}
            <strong>twenty-four (24) months</strong> from the last
            interaction.
          </li>
          <li>
            <strong>Server logs:</strong> up to{" "}
            <strong>one hundred eighty (180) days</strong> for security and
            diagnostic purposes, save where retention is mandated under Rule
            3(1)(g) of the Intermediary Rules or any other law.
          </li>
        </ul>
        <p>
          On expiry of the retention period, we shall erase personal data and
          cause our data processors to erase it, except where retention is
          required by law.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    number: "11",
    title: "Your Rights as a Data Principal",
    body: (
      <>
        <p>
          Subject to applicable law, you have the following rights in respect
          of your personal data:
        </p>
        <ol>
          <li>
            <strong>Right to information</strong> about personal data being
            processed and the activities undertaken (Section 11, DPDP Act).
          </li>
          <li>
            <strong>Right to correction and erasure</strong> of inaccurate,
            incomplete, or outdated personal data (Section 12, DPDP Act).
          </li>
          <li>
            <strong>Right to grievance redressal</strong> through a readily
            available means (Section 13, DPDP Act).
          </li>
          <li>
            <strong>Right to nominate</strong> any other individual to
            exercise your rights in the event of death or incapacity (Section
            14, DPDP Act).
          </li>
          <li>
            <strong>Right to withdraw consent</strong> at any time (Section
            6(4), DPDP Act).
          </li>
          <li>
            Where applicable under the SPDI Rules, the right to{" "}
            <strong>review the information</strong> you have provided and
            ensure that any inaccuracy is corrected.
          </li>
        </ol>
        <p>
          To exercise any of these rights, please contact our Grievance
          Officer (Section 14). We will verify your identity before processing
          your request and respond within a reasonable timeframe, generally
          not exceeding <strong>thirty (30) days</strong>.
        </p>
        <p>
          You also have the right to register a complaint with the{" "}
          <strong>Data Protection Board of India</strong> if you are not
          satisfied with our response.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "12",
    title: "Security Safeguards",
    body: (
      <>
        <p>
          We implement reasonable security practices and procedures
          commensurate with the nature of the personal data and the risk to
          which it is exposed, in accordance with Section 8(5) of the DPDP Act
          and Rule 8 of the SPDI Rules. These include:
        </p>
        <ul>
          <li>
            transport-layer encryption (HTTPS / TLS) for all communications
            with the Platform;
          </li>
          <li>
            access controls, role-based permissions, and the principle of
            least privilege;
          </li>
          <li>
            secure software-development practices, dependency monitoring, and
            timely patching;
          </li>
          <li>
            logical separation of production and non-production environments;
            and
          </li>
          <li>periodic review of our security posture.</li>
        </ul>
        <p>
          Notwithstanding such measures, no method of transmission over the
          internet or electronic storage is fully secure. In the event of a
          personal-data breach, we shall give intimation to the Data
          Protection Board of India and to each affected Data Principal in the
          manner and within the timelines prescribed under the DPDP Act and
          the rules made thereunder.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "13",
    title: "Third-Party Services",
    body: (
      <p>
        The Platform may contain links to or embedded content from third-party
        services. We are not responsible for the privacy practices of such
        third parties. You are encouraged to review their respective privacy
        policies before providing any personal data to them.
      </p>
    ),
  },
  {
    id: "grievance",
    number: "14",
    title: "Grievance Officer",
    body: (
      <>
        <p>
          In compliance with Section 10(2)(j) of the DPDP Act, Section 5(9) of
          the Intermediary Rules, 2021, and Rule 5(9) of the SPDI Rules, the
          name and contact details of our Grievance Officer are published
          below.
        </p>
        <div className="rounded-xl border border-ink-100 bg-paper-100/60 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
            Grievance Officer
          </p>
          <p className="mt-2 font-medium text-ink-900">Nyaya Vidhi</p>
          <p className="text-[14px] text-ink-500">
            Attn: Grievance Officer
            <br />
            Email:{" "}
            <a
              className="text-saffron-700 hover:underline"
              href="mailto:grievance@nyayavidhi.in"
            >
              grievance@nyayavidhi.in
            </a>
            <br />
            Address: Kolkata, West Bengal, India.
          </p>
          <p className="mt-3 text-[12.5px] text-ink-400">
            We acknowledge complaints within{" "}
            <strong>twenty-four (24) hours</strong> and endeavour to dispose of
            them within <strong>fifteen (15) days</strong> of receipt, in
            accordance with the Intermediary Rules.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "changes",
    number: "15",
    title: "Changes to this Policy",
    body: (
      <p>
        We may update this Policy from time to time to reflect changes in our
        practices, technology, legal requirements, or for other operational
        reasons. The latest version will always be available on this page,
        with the “Last updated” date refreshed accordingly. Where the change
        is material, we will provide a more prominent notice (such as an
        in-product notice or, where appropriate, an email notification).
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "16",
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        This Policy is governed by the laws of the Republic of India. Any
        dispute, controversy, or claim arising out of or in connection with
        this Policy shall be subject to the <strong>exclusive jurisdiction</strong>{" "}
        of the competent courts at <strong>Kolkata, West Bengal</strong>,
        without prejudice to your right to approach the Data Protection Board
        of India under the DPDP Act.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      sanskrit="गोपनीयता धर्मः · Privacy is duty"
      title="Privacy Policy."
      description="How we collect, use, share, and protect your personal data — written in compliance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the SPDI Rules, 2011."
      effectiveDate="01 January 2026"
      lastUpdated="01 January 2026"
      version="1.0"
      preamble={
        <p>
          We respect your privacy and are committed to processing personal data
          fairly, lawfully, and transparently. This Policy describes the
          personal data we collect about you, why we collect it, how we use
          and share it, how long we retain it, and the rights you have as a
          Data Principal under the DPDP Act, 2023. Please read it together
          with our <a href="/disclaimer">Disclaimer</a> and{" "}
          <a href="/terms">Terms of Use</a>.
        </p>
      }
      sections={sections}
    />
  );
}
