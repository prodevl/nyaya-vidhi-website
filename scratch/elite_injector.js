const fs = require('fs');

function injectData(file, sectionPattern, data) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the row with the specific section pattern
  // Pattern example: section: "13" or section: "13B" or section: "IBC 7"
  const regex = new RegExp(`(\\{[^\\}]*section:\\s*["']${sectionPattern}["'][^\\}]*)\\s*\\}`, 'g');
  
  content = content.replace(regex, (match, p1) => {
    let injections = [];
    if (data.actionRequired) injections.push(`actionRequired: ${JSON.stringify(data.actionRequired)}`);
    if (data.timeLimit) injections.push(`timeLimit: ${JSON.stringify(data.timeLimit)}`);
    if (data.authority) injections.push(`authority: ${JSON.stringify(data.authority)}`);
    if (data.defences) injections.push(`defences: ${JSON.stringify(data.defences)}`);
    if (data.bailStatus) injections.push(`bailStatus: ${JSON.stringify(data.bailStatus)}`);
    
    // Check if it already has the injection
    if (match.includes('actionRequired') || match.includes('timeLimit')) return match;
    
    return p1 + ', ' + injections.join(', ') + ' }';
  });
  
  fs.writeFileSync(file, content);
}

const briefsPath = 'lib/statutes/_briefs.ts';

// IBC
injectData(briefsPath, 'IBC 7', {
  actionRequired: "File an application to NCLT with record of default.",
  timeLimit: "Default must be at least ₹1 Crore. NCLT has 14 days to admit/reject.",
  authority: "NCLT (National Company Law Tribunal)"
});
injectData(briefsPath, 'IBC 12', {
  timeLimit: "CIRP must be completed within 330 days, including litigation time."
});

// PMLA
injectData(briefsPath, 'PMLA 3', {
  actionRequired: "Enforced directly by ED. Property can be attached during investigation.",
  authority: "Enforcement Directorate (ED) / Adjudicating Authority",
  bailStatus: "Non-Bailable (Twin conditions apply - extremely strict)"
});

// RTI
injectData(briefsPath, 'RTI 6', {
  actionRequired: "File RTI application online or offline with ₹10 fee.",
  timeLimit: "Information must be provided within 30 days (48 hours for life/liberty issues).",
  authority: "Public Information Officer (PIO)"
});
injectData(briefsPath, 'RTI 20', {
  actionRequired: "Appeal to Information Commission if PIO delays/denies info.",
  authority: "Central/State Information Commission (CIC/SIC)"
});

// RERA
injectData(briefsPath, 'RERA 59', {
  actionRequired: "Buyers can complain to RERA if builder hasn't registered the project.",
  authority: "State RERA Authority"
});
injectData(briefsPath, 'RERA 18', {
  actionRequired: "If builder delays possession, buyer can demand refund with interest.",
  authority: "RERA Authority / Adjudicating Officer"
});

// Consumer Protection
injectData(briefsPath, 'CPA 89', {
  actionRequired: "Report false or misleading ads to CCPA.",
  authority: "Central Consumer Protection Authority (CCPA)"
});

// Now for authored acts:
const hmaPath = 'lib/statutes/family-and-personal-laws/hindu-marriage-act-1955.ts';
injectData(hmaPath, '13', {
  actionRequired: "File for contested divorce on grounds of cruelty, adultery, desertion, etc.",
  authority: "Family Court",
  defences: "Condonation (if you forgave the act and resumed living together, you can't use it as a ground later)."
});
injectData(hmaPath, '13B', {
  timeLimit: "Must have lived separately for 1 year. Court mandates a 6-month cooling-off period.",
  actionRequired: "Both parties file a joint petition for mutual consent divorce.",
  authority: "Family Court"
});
injectData(hmaPath, '9', {
  actionRequired: "File petition if your spouse has withdrawn from your society without reasonable excuse.",
  defences: "Reasonable excuse (e.g., domestic violence, cruelty) is a valid defense.",
  authority: "Family Court"
});

const dpaPath = 'lib/statutes/family-and-personal-laws/dowry-prohibition-act-1961.ts';
injectData(dpaPath, '3', {
  actionRequired: "File FIR at Women's Police Station.",
  defences: "Traditional presents given without demand are not considered dowry."
});
injectData(dpaPath, '4', {
  actionRequired: "Demand itself is a crime, even if dowry is not given.",
  authority: "Police / Magistrate"
});

const poshPath = 'lib/statutes/labour-and-employment-laws/posh-act-2013.ts';
injectData(poshPath, '9', {
  actionRequired: "Aggrieved woman must file a written complaint to the Internal Committee (IC).",
  timeLimit: "Within 3 months from the date of the incident (can be extended by 3 months).",
  authority: "Internal Committee (IC) / Local Committee (LC)"
});
injectData(poshPath, '26', {
  actionRequired: "Company must include POSH compliance details in Annual Report.",
  authority: "District Officer"
});

console.log('Elite data injected successfully.');
