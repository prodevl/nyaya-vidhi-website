import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer for Nyaya Vidhi — an educational platform on Indian law. Content is informational only, not legal advice, and not a solicitation of work in compliance with the Bar Council of India Rules.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "no-advocate-client-relationship",
    number: "1",
    title: "No Advocate–Client Relationship",
    body: (
      <>
        <p>
          Nyaya Vidhi (the <strong>“Platform”</strong>, <strong>“we”</strong>,{" "}
          <strong>“us”</strong>, or <strong>“our”</strong>) is an{" "}
          <strong>educational and informational</strong> publication on the
          laws of the Republic of India. Nothing on this Platform constitutes
          legal advice, legal opinion, or professional consultation. Access to,
          use of, or reliance upon any content on this Platform does{" "}
          <strong>not</strong> create an advocate–client, attorney–client,
          fiduciary, or any other professional relationship between the User
          and the Platform, its founders, contributors, employees, or
          affiliates.
        </p>
        <p>
          For advice on any specific matter, you must consult a duly enrolled
          advocate under the <em>Advocates Act, 1961</em> who is competent in
          the relevant area of practice. Reliance on any information provided
          on this Platform is strictly at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "bar-council-compliance",
    number: "2",
    title: "Compliance with the Bar Council of India Rules",
    body: (
      <>
        <p>
          By accessing this Platform, the User acknowledges that there has been
          no advertisement, personal communication, solicitation, invitation,
          or inducement of any sort whatsoever from the Platform or any of its
          members to solicit any work or advertise through this Platform.
        </p>
        <p>
          The contents of this Platform are intended solely for the User’s{" "}
          <strong>information and educational understanding</strong> of Indian
          law and should not be interpreted as soliciting or advertising. The
          Platform is not intended to be a substitute for legal counsel.
        </p>
        <p>
          This notice is published in conformity with{" "}
          <strong>
            Rule 36 of Section IV, Chapter II, Part VI of the Bar Council of
            India Rules
          </strong>{" "}
          and the principles affirmed by the Hon’ble Supreme Court of India in{" "}
          <em>V.B. Joshi v. Union of India</em>. The Platform shall not be
          liable for any consequence of any action taken by the User relying on
          material or information provided herein.
        </p>
      </>
    ),
  },
  {
    id: "educational-purpose",
    number: "3",
    title: "Educational Purpose & Scope of Content",
    body: (
      <>
        <p>
          All material on the Platform — including statutes, case summaries,
          explainers, learning paths, “Know Your Rights” cards, daily briefs,
          and commentary — is prepared for general educational purposes to
          improve public understanding of Indian law. It is{" "}
          <strong>not exhaustive, not jurisdiction-specific to your facts</strong>
          , and may not reflect the most current legal developments,
          notifications, or judicial pronouncements.
        </p>
        <ul>
          <li>
            Indian law is dynamic. Legislation, rules, circulars, and case law
            change frequently; some content may become outdated between
            updates.
          </li>
          <li>
            Application of any provision depends on facts, evidence, limitation
            periods, and procedural posture, which require qualified review.
          </li>
          <li>
            Translations from Hindi, Sanskrit, or regional languages are
            provided for accessibility; the bare Acts and authoritative texts
            (as published in the Gazette of India) prevail in case of any
            conflict.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "accuracy",
    number: "4",
    title: "Accuracy, Completeness & Currency",
    body: (
      <>
        <p>
          While we make reasonable efforts to ensure that information published
          on the Platform is accurate, complete, and current as of the date of
          publication, we make no representations or warranties of any kind,
          express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information.
        </p>
        <p>
          Any reliance you place on such information is strictly at your own
          risk. Authoritative sources include — without limitation — the bare
          text of the Act published by the Legislative Department, Ministry of
          Law and Justice; the Gazette of India; reportable judgments of the
          Supreme Court of India and various High Courts; and notifications
          issued by competent statutory authorities. Where there is any
          conflict between the Platform’s content and the official text, the
          official text shall prevail.
        </p>
      </>
    ),
  },
  {
    id: "no-legal-advice",
    number: "5",
    title: "Not Legal, Tax, or Financial Advice",
    body: (
      <>
        <p>
          Content on this Platform — including but not limited to articles on
          income tax, GST, corporate compliance, real estate (RERA), consumer
          rights, criminal procedure (BNSS), evidence (BSA), property,
          succession, family law, intellectual property, labour law, and
          digital regulation (DPDP Act, IT Act) — is general in nature and{" "}
          <strong>does not constitute</strong>:
        </p>
        <ol>
          <li>legal advice within the meaning of the Advocates Act, 1961;</li>
          <li>
            tax advice within the meaning of the Income-tax Act, 1961 or the
            Central Goods and Services Tax Act, 2017;
          </li>
          <li>
            investment, financial, or chartered accountancy advice within the
            meaning of any law in force; or
          </li>
          <li>
            an offer or solicitation to buy or sell any security, financial
            product, or service.
          </li>
        </ol>
        <p>
          You must obtain independent professional advice tailored to your
          facts before acting on any information found on the Platform.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "6",
    title: "Third-Party Content & External Links",
    body: (
      <>
        <p>
          The Platform may contain hyperlinks, citations, and references to
          third-party websites, statutes hosted on Government portals,
          databases such as <em>indiacode.nic.in</em>, judgments hosted by the
          Supreme Court, High Courts, and the National Judicial Data Grid, and
          other external resources. Such links are provided solely for the
          convenience of Users.
        </p>
        <p>
          The Platform does not endorse, control, monitor, or assume
          responsibility for the content, privacy practices, or availability of
          any third-party website. Access to and use of any third-party
          resource is at the User’s sole risk and subject to the terms of that
          third party.
        </p>
      </>
    ),
  },
  {
    id: "ai-content",
    number: "7",
    title: "Use of AI-Assisted Drafting",
    body: (
      <>
        <p>
          Portions of the Platform’s content may be prepared with the
          assistance of artificial intelligence tools and subsequently reviewed
          by human editors. AI-assisted drafting may, despite review, contain
          inaccuracies, omissions, or hallucinations. Users are advised to{" "}
          <strong>independently verify every citation, section number,
          quantum of penalty, limitation period, and procedural step</strong>{" "}
          against the bare Act or an authoritative reporter before relying on
          it.
        </p>
      </>
    ),
  },
  {
    id: "limitation",
    number: "8",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable law, the Platform, its
          founders, employees, contributors, partners, and affiliates shall{" "}
          <strong>not be liable</strong> for any direct, indirect, incidental,
          consequential, special, exemplary, or punitive damages arising out of
          or in connection with:
        </p>
        <ul>
          <li>your access to, use of, or inability to use the Platform;</li>
          <li>
            any error, inaccuracy, omission, delay, or interruption in the
            content;
          </li>
          <li>
            any action taken or not taken by you in reliance on information
            obtained from the Platform; or
          </li>
          <li>
            any unauthorised access to or alteration of your transmissions or
            data.
          </li>
        </ul>
        <p>
          Some jurisdictions do not permit the exclusion of certain warranties
          or limitation of liability; in such jurisdictions, our liability
          shall be limited to the greatest extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    number: "9",
    title: "Indemnity",
    body: (
      <p>
        You agree to indemnify, defend, and hold harmless the Platform and its
        founders, contributors, employees, agents, and affiliates from and
        against any and all claims, demands, liabilities, damages, losses,
        costs, and expenses (including reasonable advocates’ fees) arising out
        of or in connection with your misuse of the Platform, your breach of
        these terms, your violation of any applicable law, or your reliance on
        the content of the Platform without obtaining independent professional
        advice.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    number: "10",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All original commentary, design, code, illustrations, learning paths,
          and curated content on the Platform are the intellectual property of
          Nyaya Vidhi and are protected under the{" "}
          <strong>Copyright Act, 1957</strong>, the{" "}
          <strong>Trade Marks Act, 1999</strong>, and applicable international
          conventions including the Berne Convention and the TRIPS Agreement.
        </p>
        <p>
          The text of statutes, rules, regulations, and judgments of Indian
          courts is in the public domain by virtue of Section 52(1)(q) of the
          Copyright Act, 1957. Our editorial selection, arrangement,
          commentary, and explainers built around such public-domain text are,
          however, original works and are protected accordingly.
        </p>
        <p>
          Fair-dealing use for private study, research, criticism, review, and
          news reporting under Section 52 of the Copyright Act, 1957 is
          permitted. Any other reproduction, redistribution, scraping, or
          republication — in whole or in part — requires our prior written
          permission.
        </p>
      </>
    ),
  },
  {
    id: "jurisdiction",
    number: "11",
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        This Disclaimer shall be governed by and construed in accordance with
        the laws of the Republic of India. Any dispute, controversy, or claim
        arising out of or relating to this Disclaimer, or the breach,
        termination, or invalidity thereof, shall be subject to the{" "}
        <strong>exclusive jurisdiction</strong> of the competent courts at{" "}
        <strong>Kolkata, West Bengal</strong>, and Users irrevocably submit to
        such jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    number: "12",
    title: "Contact & Grievance",
    body: (
      <>
        <p>
          If you believe any content on the Platform is inaccurate, infringes
          your rights, or requires correction, please write to us at{" "}
          <a href="mailto:legal@nyayavidhi.in">legal@nyayavidhi.in</a>. We
          endeavour to respond within a reasonable time and to act in
          accordance with the{" "}
          <em>
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021
          </em>
          .
        </p>
        <p>
          For details of our Grievance Officer and the formal grievance-redress
          mechanism, please refer to our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/terms">Terms of Use</a>.
        </p>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      sanskrit="सत्यमेव जयते · Truth alone triumphs"
      title="Disclaimer."
      description="An educational publication on Indian law — not legal advice, not solicitation, not a substitute for a qualified advocate. Please read this notice carefully before using the Platform."
      effectiveDate="01 January 2026"
      lastUpdated="01 January 2026"
      version="1.0"
      preamble={
        <p>
          By proceeding to access or use Nyaya Vidhi, you acknowledge that you
          have read, understood, and voluntarily accepted this Disclaimer in
          its entirety, in compliance with{" "}
          <strong>
            Rule 36 of Section IV, Chapter II, Part VI of the Bar Council of
            India Rules
          </strong>
          . There has been no advertisement, personal communication,
          solicitation, invitation, or inducement of any sort whatsoever from
          us or any of our members to solicit any work through this Platform.
          The Platform is intended solely to provide{" "}
          <strong>information and educational understanding</strong> of Indian
          law.
        </p>
      }
      sections={sections}
    />
  );
}
