import { useScrollReveal } from '../hooks/useScrollReveal'

const frameworks = [
  {
    code: 'SAMA CSF',
    full: 'Saudi Arabian Monetary Authority Cyber Security Framework',
    region: 'GCC Financial Services',
    color: '#00C2CB',
  },
  {
    code: 'NCA ECC-2:2024',
    full: "Saudi Arabia's Essential Cybersecurity Controls (2024)",
    region: 'GCC Government & Critical Infrastructure',
    color: '#00C2CB',
  },
  {
    code: 'ISO/IEC 27001',
    full: 'International Information Security Management',
    region: 'Global',
    color: '#1A7FAD',
  },
  {
    code: 'NIST CSF',
    full: 'NIST Cybersecurity Framework',
    region: 'Global',
    color: '#1A7FAD',
  },
  {
    code: 'GDPR',
    full: 'EU General Data Protection Regulation',
    region: 'Europe & International',
    color: '#1A7FAD',
  },
]

const automations = [
  {
    framework: 'NCA ECC-2:2024 — 2-3-1',
    control: 'Network Security Management',
    manual: 'Compliance officers manually review network configuration files to verify environment segmentation.',
    automated: 'Arcvara auto-discovers VPC configurations, subnets, and security groups — flagging any live routing bridges that bypass defined segmentation boundaries.',
  },
  {
    framework: 'NCA ECC-2:2024 — 2-3-2',
    control: 'Cloud Security',
    manual: 'Teams struggle to track assets across hybrid and multi-cloud deployments spanning AWS, Azure, GCP, and OCI.',
    automated: 'Arcvara reads cloud metadata continuously, flagging non-compliant or unregistered assets and ensuring live infrastructure mirrors approved architecture designs.',
  },
  {
    framework: 'SAMA CSF — 3.2.3',
    control: 'Asset Management',
    manual: 'Maintaining an accurate, updated CMDB across physical and virtual infrastructure layers is a persistent, manual effort.',
    automated: 'Arcvara\'s auto-discovery engine continuously tracks software versions, OS, open ports, and hardware inventory — maintaining a live CMDB automatically.',
  },
  {
    framework: 'NCA ECC-2:2024 — 2-5-1',
    control: 'Third-Party & Supply Chain Risk',
    manual: 'No automated visibility into which external systems your organisation depends on or what access those systems hold.',
    automated: 'Arcvara maps all external API dependencies and S2S integrations, surfaces third-party access paths, and flags connections outside approved architecture boundaries.',
  },
]

export default function ComplianceSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="compliance" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute top-0 right-1/3 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,203,0.04) 0%, transparent 70%)' }}
      />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">Regulatory Intelligence</div>
          <h2 className="section-title mb-4">
            Built for GCC{' '}
            <span className="text-gradient">Regulatory Reality.</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Arcvara natively maps live infrastructure findings to specific sub-domains of Saudi Arabia's regulatory frameworks.
            The manual compliance assessment cycle that currently consumes weeks per audit is eliminated.
          </p>
        </div>

        {/* Framework badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {frameworks.map((fw) => (
            <div
              key={fw.code}
              className="flex flex-col items-center text-center px-5 py-4 rounded-xl border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: `${fw.color}30`,
                background: `${fw.color}08`,
              }}
            >
              <div className="font-bold text-sm mb-1" style={{ color: fw.color }}>{fw.code}</div>
              <div className="text-white/50 text-xs max-w-[160px] leading-tight">{fw.region}</div>
            </div>
          ))}
        </div>

        {/* Automation comparison table */}
        <div className="space-y-4">
          {automations.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-arc-blue/15 bg-navy-card/60 overflow-hidden"
            >
              <div className="px-6 py-3 border-b border-arc-blue/10 flex flex-wrap gap-3 items-center">
                <span className="text-vara-teal text-xs font-semibold font-mono">{item.framework}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/60 text-xs">{item.control}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-arc-blue/10">
                <div className="px-6 py-4">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    Manual Today
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{item.manual}</p>
                </div>
                <div className="px-6 py-4">
                  <div className="text-xs text-vara-teal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-vara-teal inline-block" />
                    Arcvara Automates
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.automated}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
