const OWNER_EMAIL = 'yukyfkyfukfyk@gmail.com'
const FORMSPREE_FORM_ID = 'mnjkpqwz' //

function buildMailto(subject, fields) {
  const body = fields.map(([label, value]) => `${label}: ${value || '—'}`).join('\n')
  const params = new URLSearchParams({ subject, body })
  return `mailto:${OWNER_EMAIL}?${params.toString()}`
}


export async function submitLead(subject, fields) {
  const isConfigured = FORMSPREE_FORM_ID && FORMSPREE_FORM_ID !== 'YOUR_FORM_ID'

  if (isConfigured) {
    try {
      const payload = Object.fromEntries(fields)
      payload._subject = subject
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) return 'sent'
    } catch {
    }
  }

  window.location.href = buildMailto(subject, fields)
  return 'mailto'
}
