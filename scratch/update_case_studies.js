const fs = require('fs');

const file = fs.readFileSync('app/case-studies/data.ts', 'utf-8');
const links = {
  'cyber-stalking': 'https://www.mha.gov.in/sites/default/files/2023-12/The_Bharatiya_Nyaya_Sanhita_2023_0.pdf',
  'wrongful-termination': 'https://www.indiacode.nic.in/handle/123456789/1519',
  'sexual-harassment': 'https://wcd.nic.in/act/sexual-harassment-women-workplace-prevention-prohibition-and-redressal-act-2013',
  'maternity-denial': 'https://labour.gov.in/sites/default/files/maternitybenefitact.pdf',
  'ecommerce-fraud': 'https://consumeraffairs.nic.in/acts-and-rules/consumer-protection',
  'defective-vehicle': 'https://consumeraffairs.nic.in/acts-and-rules/consumer-protection',
  'airline-baggage': 'https://www.indiacode.nic.in/handle/123456789/1572',
  'food-poisoning': 'https://www.fssai.gov.in/cms/food-safety-and-standards-act-2006.php',
  'domestic-violence': 'https://wcd.nic.in/act/protection-women-domestic-violence-act-2005',
  'surgical-error': 'https://consumeraffairs.nic.in/acts-and-rules/consumer-protection',
  'counterfeit-medicine': 'https://cdsco.gov.in/opencms/export/sites/CDSCO_WEB/Pdf-documents/acts_rules/2016DrugsandCosmeticsAct1940Rules1945.pdf',
  'builder-delay': 'https://mohua.gov.in/upload/uploadfiles/files/Real_Estate_Act_2016(1).pdf',
  'unlawful-eviction': 'https://www.indiacode.nic.in/handle/123456789/1557',
  'property-encroachment': 'https://www.indiacode.nic.in/handle/123456789/1557',
  'fake-challan': 'https://morth.nic.in/motor-vehicles-act-1988',
  'illegal-towing': 'https://morth.nic.in/motor-vehicles-act-1988',
  'unauthorized-transaction': 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040',
  'health-insurance-rejection': 'https://irdai.gov.in/',
  'recovery-agent-harassment': 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=1393',
  'refusal-to-fir': 'https://www.mha.gov.in/sites/default/files/2023-12/The_Bharatiya_Nagarik_Suraksha_Sanhita_2023.pdf',
  'noise-pollution': 'https://cpcb.nic.in/displaypdf.php?id=Tm9pc2UtU3RhbmRhcmRzL25vaXNlX3J1bGVzXzIwMDAucGRm',
  'school-withholding-certs': 'https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/rte.pdf',
  'copyright-infringement': 'https://copyright.gov.in/documents/copyrightrules1957.pdf',
  'trademark-squatting': 'https://ipindia.gov.in/acts-rules-tm.htm',
  'ai-deepfake-heist': 'https://www.meity.gov.in/content/information-technology-act-2000',
  'autonomous-car-crash': 'https://morth.nic.in/motor-vehicles-act-1988',
  'smart-home-ransom': 'https://www.meity.gov.in/content/information-technology-act-2000',
  'genetic-data-insurance': 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023',
  'metaverse-property-theft': 'https://www.meity.gov.in/content/information-technology-act-2000',
  'robotic-surgery-glitch': 'https://consumeraffairs.nic.in/acts-and-rules/consumer-protection',
  'bci-mind-reading': 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023',
  'drone-delivery-crash': 'https://egazette.nic.in/WriteReadData/2021/229221.pdf',
  'ai-hiring-bias': 'https://labour.gov.in/sites/default/files/TheEqualRemunerationAct1976.pdf',
  'cryonics-inheritance': 'https://www.indiacode.nic.in/handle/123456789/2396',
  'deepfake-divorce-evidence': 'https://www.mha.gov.in/sites/default/files/2023-12/The_Bharatiya_Nyaya_Sanhita_2023_0.pdf',
  'space-tourism-injury': 'https://www.indiacode.nic.in/handle/123456789/1572',
  '3d-printed-gun': 'https://www.mha.gov.in/sites/default/files/2022-08/ArmsAct1959_1.pdf',
  'smart-contract-drain': 'https://www.indiacode.nic.in/handle/123456789/2187',
  'biohacking-implant-injury': 'https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Medical-Devices-Rules/'
};

let newFile = file;

for (const [id, url] of Object.entries(links)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?actionSteps:\\s*\\[[\\s\\S]*?\\])`, 'g');
  newFile = newFile.replace(regex, `$1,\n    sourceLink: "${url}"`);
}

fs.writeFileSync('app/case-studies/data.ts', newFile);
