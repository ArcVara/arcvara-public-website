import { Link } from 'react-router-dom'

export default function DataRights() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="border-b border-arc-blue/15 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-9" />
          </Link>
          <Link
            to="/"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to site
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="section-label mb-4">Legal</div>
        <h1 className="text-4xl font-bold text-white mb-2">Data Rights</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>

        <div className="prose-legal">

          <Section title="1. Your Rights Over Your Data">
            <p>
              Arcvara respects your right to control your personal information. Depending on the laws applicable in your
              jurisdiction — including the Kingdom of Saudi Arabia's Personal Data Protection Law (PDPL), the EU General
              Data Protection Regulation (GDPR), and other applicable regulations — you may have the following rights:
            </p>
          </Section>

          <Section title="2. Right of Access">
            <p>
              You have the right to request a copy of the personal information Arcvara holds about you, along with
              information about how it is used, where it came from, and with whom it has been shared.
            </p>
            <p>
              We will respond to access requests within 30 days of receipt. In complex or high-volume cases, we may
              extend this period by a further 30 days and will notify you accordingly.
            </p>
          </Section>

          <Section title="3. Right to Correction">
            <p>
              If the personal information we hold about you is inaccurate or incomplete, you have the right to request
              that we correct or complete it. We will act on verified correction requests promptly.
            </p>
          </Section>

          <Section title="4. Right to Deletion ('Right to Be Forgotten')">
            <p>
              You may request that we delete your personal information. We will honour this request where:
            </p>
            <SubList items={[
              'The information is no longer necessary for the purpose for which it was collected.',
              'You withdraw consent on which processing is based (where applicable).',
              'You object to processing and there are no overriding legitimate grounds to continue.',
              'The information has been unlawfully processed.',
            ]} />
            <p>
              We may retain certain information where required by law or for the establishment, exercise, or defence
              of legal claims.
            </p>
          </Section>

          <Section title="5. Right to Restriction of Processing">
            <p>
              You have the right to request that we restrict how we process your personal information in certain
              circumstances — for example, while we verify the accuracy of data you have contested, or while we
              assess an objection you have raised.
            </p>
          </Section>

          <Section title="6. Right to Data Portability">
            <p>
              Where we process your personal information by automated means on the basis of consent or a contract,
              you have the right to receive that information in a structured, commonly used, and machine-readable format,
              and to request that we transmit it to another organisation where technically feasible.
            </p>
          </Section>

          <Section title="7. Right to Object">
            <p>
              You have the right to object to the processing of your personal information where we rely on legitimate
              interests as the legal basis for processing. We will cease processing unless we can demonstrate compelling
              legitimate grounds that override your interests, or where processing is necessary for legal claims.
            </p>
            <p>
              You may also object to processing for direct marketing purposes at any time — we will stop immediately
              on receipt of such a request.
            </p>
          </Section>

          <Section title="8. Rights Relating to the Arcvara Platform">
            <p>
              If you are an individual whose data is processed within the Arcvara enterprise platform (as an employee
              or user of an Arcvara customer organisation), your data rights requests should be directed to the
              organisation that deployed the platform — they are the data controller for that processing.
            </p>
            <p>
              Arcvara acts as a data processor in these contexts and will assist the relevant customer organisation
              in honouring your rights upon their instruction.
            </p>
          </Section>

          <Section title="9. How to Exercise Your Rights">
            <p>
              To exercise any of the rights described above, please submit your request in writing to:
            </p>
            <div className="bg-navy-card border border-arc-blue/15 rounded-xl p-5 my-4">
              <p className="text-white/80 font-medium mb-1">Data Rights Requests</p>
              <a href="mailto:jawad.a.almarhoon@gmail.com" className="text-vara-teal hover:underline text-sm">
                jawad.a.almarhoon@gmail.com
              </a>
              <p className="text-white/40 text-xs mt-2">Please include "Data Rights Request" in the subject line, your full name, and a description of the right you wish to exercise.</p>
            </div>
            <p>
              We may need to verify your identity before processing your request. We will not charge a fee for
              reasonable requests, though we reserve the right to charge for manifestly unfounded or excessive requests.
            </p>
          </Section>

          <Section title="10. Complaints">
            <p>
              If you are not satisfied with how we have handled your personal data or responded to a rights request,
              you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
            </p>
            <p>
              For individuals in Saudi Arabia: the Saudi Data and AI Authority (SDAIA) is the supervisory authority
              for the Personal Data Protection Law. For individuals in the EU/EEA: your national data protection
              authority (DPA) has supervisory jurisdiction.
            </p>
            <p>
              We would encourage you to contact us first so we have the opportunity to address your concern directly.
            </p>
          </Section>

        </div>

        <LegalFooter />
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-arc-blue/15">{title}</h2>
      <div className="space-y-3 text-white/65 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function SubList({ items }) {
  return (
    <ul className="space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vara-teal flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LegalFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-arc-blue/10 flex flex-wrap gap-6 text-xs text-white/30">
      <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
      <Link to="/terms" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
      <Link to="/data-rights" className="hover:text-white/60 transition-colors">Data Rights</Link>
      <span className="ml-auto">© {new Date().getFullYear()} Arcvara</span>
    </div>
  )
}
