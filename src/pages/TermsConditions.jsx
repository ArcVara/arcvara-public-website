import { Link } from 'react-router-dom'

export default function TermsConditions() {
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
        <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>

        <div className="prose-legal">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Arcvara website (arcvara.io), you agree to be bound by these Terms and Conditions.
              If you do not agree to these terms, please do not use the website.
            </p>
            <p>
              These terms apply to the public website only. Use of the Arcvara enterprise platform is governed by a
              separate Master Subscription Agreement entered into with Arcvara directly.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>
              You may use this website for lawful purposes only. You agree not to:
            </p>
            <SubList items={[
              'Use the website in any way that violates applicable local, national, or international laws or regulations.',
              'Attempt to gain unauthorised access to any part of the website or its underlying systems.',
              'Transmit any unsolicited commercial communications or malicious code.',
              'Scrape, copy, or reproduce content from this website without our prior written consent.',
              'Use the website to misrepresent your identity or affiliation.',
            ]} />
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, icons, and software — is the property of
              Arcvara or its licensors and is protected by applicable intellectual property laws.
            </p>
            <p>
              The Arcvara name, logo, and product names are trademarks of Arcvara. Nothing on this website grants
              any licence or right to use these marks without our prior written consent.
            </p>
          </Section>

          <Section title="4. Disclaimers">
            <p>
              This website and its content are provided "as is" without warranty of any kind, express or implied.
              Arcvara makes no representations or warranties regarding the accuracy, completeness, or suitability
              of any information on this website.
            </p>
            <p>
              Content on this website — including product descriptions, roadmaps, and financial information —
              is subject to change without notice and should not be relied upon as a substitute for professional advice.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Arcvara shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of, or inability to use,
              this website or any content or services obtained through it.
            </p>
            <p>
              Our total liability to you for any claims arising from your use of this website shall not exceed
              the amount you have paid to Arcvara in the twelve months preceding the claim (which, for website visitors
              who have not paid, is zero).
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              This website may contain links to third-party websites. These links are provided for your convenience only.
              Arcvara has no control over those sites and is not responsible for their content or privacy practices.
              Linking to a third-party site does not imply our endorsement.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Your use of this website is also subject to our{' '}
              <Link to="/privacy-policy" className="text-vara-teal hover:underline">Privacy Policy</Link>,
              which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section title="8. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an
              updated revision date. Your continued use of the website after any changes constitutes your acceptance
              of the revised Terms.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.
              Any disputes arising from these Terms or your use of this website shall be subject to the exclusive
              jurisdiction of the courts of the Kingdom of Saudi Arabia.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a href="mailto:jawad.a.almarhoon@gmail.com" className="text-vara-teal hover:underline">
                jawad.a.almarhoon@gmail.com
              </a>
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
