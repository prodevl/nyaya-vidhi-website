const fs = require('fs');

function enrich(match, inner) {
  let obj = {};
  try {
    eval('obj = {' + inner + '}');
  } catch(e) { return match; }
  
  if (!obj.section) return match;
  if (obj.type) return match; // Already enriched
  
  let type = 'structural';
  let severity = undefined;
  let bailStatus = undefined;
  let applicableTo = undefined;

  const punLow = (obj.punishment || '').toLowerCase();
  const libLow = (obj.lawInBrief || '').toLowerCase();

  if (punLow === '-' || punLow === '') {
    if (libLow.includes('definition') || libLow.includes('meaning') || libLow.includes('defined')) type = 'definition';
    else if (libLow.includes('right')) type = 'right';
    else if (libLow.includes('procedure') || libLow.includes('application')) type = 'procedural';
    else type = 'structural';
  } else {
    if (punLow.includes('imprisonment') || punLow.includes('death')) {
      type = 'criminal';
      severity = 'high';
      if (punLow.includes('non-bailable')) bailStatus = 'Non-Bailable';
      if (punLow.includes('cognizable') && !punLow.includes('non-cognizable')) bailStatus = (bailStatus ? bailStatus + ', Cognizable' : 'Cognizable');
    } else if (punLow.includes('fine') || punLow.includes('penalty') || punLow.includes('confiscation') || punLow.includes('damages')) {
      type = 'civil';
      severity = 'medium';
      if (punLow.includes('rs 10,000') || punLow.includes('₹10,000')) severity = 'low';
    } else {
      type = 'compliance';
      severity = 'low';
    }
    
    if (libLow.includes('failure') || libLow.includes('default') || libLow.includes('non-compliance')) {
      type = 'compliance';
      severity = severity || 'medium';
    }
  }

  const escapeObj = (str) => typeof str === 'string' ? '\"' + str.replace(/\"/g, '\\\"') + '\"' : str;
  
  let newStr = '{ section: ' + escapeObj(obj.section);
  if (obj.subSection) newStr += ', subSection: ' + escapeObj(obj.subSection);
  newStr += ', lawInBrief: ' + escapeObj(obj.lawInBrief);
  newStr += ', punishment: ' + escapeObj(obj.punishment);
  
  newStr += ', type: \"' + type + '\"';
  if (severity) newStr += ', severity: \"' + severity + '\"';
  if (bailStatus) newStr += ', bailStatus: \"' + bailStatus + '\"';
  
  newStr += ' }';
  return newStr;
}

function processFile(path) {
  if (!fs.existsSync(path)) return;
  console.log('Processing', path);
  let content = fs.readFileSync(path, 'utf-8');
  
  const updated = content.replace(/\{\s*section:\s*\"[^\}]+\}/g, (match) => {
    return enrich(match, match.substring(1, match.length - 1));
  });
  
  fs.writeFileSync(path, updated);
}

processFile('lib/statutes/_briefs.ts');
processFile('lib/statutes/information-technology-and-digital-laws/it-act-2000.ts');
processFile('lib/statutes/information-technology-and-digital-laws/dpdp-act-2023.ts');
console.log('Done.');
