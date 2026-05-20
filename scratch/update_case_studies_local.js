const fs = require('fs');

const file = fs.readFileSync('app/case-studies/data.ts', 'utf-8');

const links = {
  'online-defamation': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'cyber-stalking': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'wrongful-termination': '/pdfs/Labour and Employment Laws/Industrial Relations Code, 2020.pdf',
  'sexual-harassment': '/pdfs/Labour and Employment Laws/Sexual Harassment at Workplace (POSH) Act, 2013.pdf',
  'maternity-denial': '/pdfs/Labour and Employment Laws/Social Security Code, 2020.pdf',
  'ecommerce-fraud': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'defective-vehicle': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'airline-baggage': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'food-poisoning': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'domestic-violence': '/pdfs/Family & Personal Laws/Protection of Women from DV Act, 2005.pdf',
  'surgical-error': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'counterfeit-medicine': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'builder-delay': '/pdfs/Real Estate/RERA Act, 2016 (Real Estate Regulation).pdf',
  'unlawful-eviction': '/pdfs/Contracts & Commercial Law/Specific Relief Act, 1963.pdf',
  'property-encroachment': '/pdfs/Contracts & Commercial Law/Specific Relief Act, 1963.pdf',
  'fake-challan': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'illegal-towing': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'unauthorized-transaction': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'health-insurance-rejection': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'recovery-agent-harassment': '/pdfs/Financial Markets & Banking/RBI Act, 1934.pdf',
  'refusal-to-fir': '/pdfs/Criminal Laws pdf/Bharatiya_Nagarik_Suraksha_Sanhita,_2023.pdf',
  'noise-pollution': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'school-withholding-certs': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'copyright-infringement': '/pdfs/Intellectual Property/Copyright Act, 1957.pdf',
  'trademark-squatting': '/pdfs/Intellectual Property/Trade Marks Act, 1999.pdf',
  'ai-deepfake-heist': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'autonomous-car-crash': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'smart-home-ransom': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'genetic-data-insurance': '/pdfs/Information Technology & Digital Laws/DPDP Act, 2023.pdf',
  'metaverse-property-theft': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'robotic-surgery-glitch': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  'bci-mind-reading': '/pdfs/Information Technology & Digital Laws/DPDP Act, 2023.pdf',
  'drone-delivery-crash': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'ai-hiring-bias': '/pdfs/the_constitution_of_india.pdf',
  'cryonics-inheritance': '/pdfs/Property Laws/Transfer of Property Act 1882.pdf',
  'deepfake-divorce-evidence': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'space-tourism-injury': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf',
  '3d-printed-gun': '/pdfs/Criminal Laws pdf/Bharatiya Nyaya Sanhita (BNS) 2023.pdf',
  'smart-contract-drain': '/pdfs/Information Technology & Digital Laws/IT Act, 2000 amended 2008.pdf',
  'biohacking-implant-injury': '/pdfs/Consumer Rights/Consumer Protection Act 2019.pdf'
};

let newFile = file;

for (const [id, url] of Object.entries(links)) {
  const encodedUrl = url.split('/').map(part => encodeURIComponent(part)).join('/').replace(/%2F/g, '/');
  
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?sourceLink:\\s*")[^"]*(")`, 'g');
  newFile = newFile.replace(regex, `$1${encodedUrl}$2`);
}

fs.writeFileSync('app/case-studies/data.ts', newFile);
