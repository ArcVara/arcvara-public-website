import { useScrollReveal } from '../hooks/useScrollReveal'

const integrationCategories = [
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud (OCI)', 'Red Hat OpenShift'],
  },
  {
    category: 'On-Premises & Network',
    items: ['Physical DC Discovery', 'SNMP Polling', 'VLANs', 'LAN/WAN/MAN', 'Network Scanners'],
  },
  {
    category: 'IAM & Directory',
    items: ['Microsoft Active Directory', 'LDAP', 'Okta', 'Azure Entra ID'],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD'],
  },
  {
    category: 'API & Middleware',
    items: ['Kong', 'Apigee', 'AWS API Gateway', 'MuleSoft', 'WSO2', 'IBM MQ'],
  },
  {
    category: 'Security & Network',
    items: ['Palo Alto', 'Fortinet FortiGate', 'F5 BIG-IP', 'WAF Platforms'],
  },
  {
    category: 'SIEM & Monitoring',
    items: ['IBM QRadar', 'Splunk', 'Datadog', 'Grafana', 'ELK Stack'],
  },
  {
    category: 'R&D Pipeline',
    items: ['SAP S/4HANA', 'ServiceNow', 'draw.io Import', 'Visio Import', 'Oracle ERP'],
  },
]

export default function IntegrationsSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="integrations" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 animate-on-scroll ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label">Integration Ecosystem</div>
          <h2 className="section-title mb-4">
            40+ Integration Categories.{' '}
            <span className="text-gradient">Zero Rip-and-Replace.</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Arcvara reads from your existing tools via published APIs and read-only discovery agents.
            No disruption to existing workflows. No data ever leaves your boundary.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrationCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="card-dark"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="text-vara-teal text-xs font-semibold uppercase tracking-wider mb-3">{cat.category}</div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                    <span className="w-1 h-1 rounded-full bg-arc-blue/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm">
            Integration-first approach means Arcvara enhances what you already have.
            Core integrations in Phases 1–2. R&D pipeline extends coverage through Phases 3–5.
          </p>
        </div>
      </div>
    </section>
  )
}
