import { Strategy } from "./StrategyCard";
import { NovelDebtLoopholeAnimation, TrustShieldAnimation, AgriWashingAnimation } from "./elite_animations";
import { GlobalRoutingAnimation } from "./animations"; // Reused

export const eliteStrategies: Strategy[] = [
  {
    title: "The Infinite Perpetual Synthetic Debt Loophole (IPSDL)",
    difficulty: "Expert",
    risk: "Medium",
    impact: "Extremely High",
    description: "A theoretical but legally plausible arbitrage utilizing offshore asset tokenization, perpetual bonds, and back-to-back synthetic debt.",
    practicalApplication: "1. Create an offshore trust in the Bahamas holding AI/Tech IP. <br/>2. The Indian operating company issues a 'Perpetual Zero-Coupon Bond' to the offshore trust, paying royalties for IP usage. Royalties are 100% deductible business expenses in India, wiping out corporate tax. <br/>3. The Indian promoter pledges the bond/royalties as collateral to an Indian bank via an SBLC (Standby Letter of Credit) to take a massive personal loan. <br/><strong>Result:</strong> Loan money is tax-free. Operational profits are neutralized by royalty expenses. Since the bond is 'perpetual' and 'zero-coupon', no maturity date triggers a capital gain. You effectively extract 100% of your corporate treasury as tax-free personal debt while shielding the principal offshore.",
    AnimationComponent: NovelDebtLoopholeAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/laws/business-and-corporate/income-tax-act-1961#section-37" }
    ]
  },
  {
    title: "Private Discretionary Blind Trusts",
    difficulty: "Advanced",
    risk: "None",
    impact: "High",
    description: "The ultimate weapon for ultra-HNIs to bypass both clubbing provisions and shield assets from litigation, divorces, or bankruptcy.",
    deepLoophole: "Unlike a determinate trust, a Discretionary Trust does not specify the exact share of the beneficiaries. Because the beneficiaries' shares are 'unknown', the assets cannot be attached by creditors of any specific beneficiary. Furthermore, income accumulated inside the trust is taxed at the maximum marginal rate (MMR), but once taxed, it can be distributed absolutely tax-free. The promoter loses 'legal ownership' but retains absolute 'control' as the Managing Trustee.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 164", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Agricultural Exemption via Proxy Holding (Bureaucrat Route)",
    difficulty: "Expert",
    risk: "High",
    impact: "Extremely High",
    description: "Section 10(1) makes agricultural income 100% tax-free. This has historically been weaponized by politicians and bureaucrats to convert massive cash stockpiles into legitimate white money.",
    practicalApplication: "Purchase barren rural land. Claim to grow 'high-yield exotic crops' like specialized mushrooms, saffron, or aloe vera which are entirely cash-traded. Sell the 'crop' to a shell wholesale aggregator (using your un-taxed cash). The cash is deposited into your bank account as 'Agricultural Proceeds'. It bypasses the 30% tax slab completely and legitimizes millions of rupees legally.",
    AnimationComponent: AgriWashingAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 10(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "The UAE IP Royalty Strip (Base Erosion)",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "Extremely High",
    description: "The classic Double-Dutch Irish sandwich modernized for the India-UAE corridor.",
    practicalApplication: "A UAE Freezone entity registers the global trademark, software, or brand IP. The Indian operational company 'licenses' this brand. The Indian company pays 20% of its gross revenue as 'Royalty' to the UAE entity. This strips the taxable profit out of India (where corporate tax is 25%) and parks it in the UAE (where corporate tax is 0-9%).",
    AnimationComponent: GlobalRoutingAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 90 (DTAA)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Electoral Trust Routing (Section 80GGB/80GGC)",
    difficulty: "Advanced",
    risk: "Low",
    impact: "High",
    description: "Using political donations not just for leverage, but for absolute tax efficiency.",
    deepLoophole: "Corporations can donate unlimited funds to an 'Electoral Trust'. This donation is 100% tax-deductible under Section 80GGB, wiping out corporate profits. The trust then acts as a buffer to anonymously distribute funds to political parties. It essentially allows conglomerates to trade their corporate tax liability for immense political capital and policy leverage.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80GGB", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Reverse Mergers for Accumulated Losses (Section 72A)",
    difficulty: "Expert",
    risk: "Low",
    impact: "Extremely High",
    description: "A highly profitable company merges into a sick, loss-making entity instead of the other way around.",
    practicalApplication: "If your company is making ₹50 Cr profit, you buy a defunct manufacturing company that has ₹100 Cr of accumulated business losses. You 'reverse merge' your profitable company into the defunct one. Section 72A allows the amalgamated company to set off the ₹100 Cr losses against your ₹50 Cr profit. You pay zero tax for the next 2 years.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 72A", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 80M Inter-Corporate Dividend Chaining",
    difficulty: "Medium",
    risk: "None",
    impact: "High",
    description: "Preventing double taxation of dividends for complex Holding-Subsidiary structures.",
    practicalApplication: "OpCo makes profit -> declares dividend to HoldCo. Under normal rules, HoldCo pays tax. But under Section 80M, if HoldCo declares the same dividend to the ultimate promoters before the due date, HoldCo's dividend income is 100% tax-exempt. The tax only hits the final individual, preventing compounding tax leakage at every corporate layer.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80M", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Cayman/BVI Blocker Entities for VC Funding",
    difficulty: "Expert",
    risk: "Low",
    impact: "Extremely High",
    description: "Indian founders building global startups flip their entity structure to shield early investors from Angel Tax and future capital gains.",
    deepLoophole: "Establish a Delaware C-Corp or Cayman Blocker. Indian OpCo becomes a wholly-owned subsidiary. When the company is acquired, the shares of the Cayman entity are sold, not the Indian entity. The transaction happens entirely offshore, triggering zero capital gains tax in India under specific DTAA provisions.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 9", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Slump Exchange Arbitrage (Asset vs Shares)",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "Medium",
    description: "Upgrading the Slump Sale. Instead of selling a business division for cash (which triggers LTCG), you exchange the business division for equity shares in the purchasing company.",
    deepLoophole: "Historically, courts ruled that an 'exchange' of assets for shares without monetary consideration did not have a determinable capital value, thus making the capital gains tax computation mechanism fail. While newer amendments attempt to tax this, strategic 'Tax-Neutral Demergers' under Section 2(19AA) completely bypass this.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 2(19AA)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Aircraft & Yacht Leasing via GIFT City",
    difficulty: "Advanced",
    risk: "Low",
    impact: "High",
    description: "Elite businessmen no longer buy private jets directly in India due to massive import duties and luxury taxes.",
    practicalApplication: "Set up an aircraft leasing entity in Gujarat's GIFT City (IFSC). Buy the private jet there. Lease the jet to your own Indian operational company. The GIFT City entity enjoys a 10-year 100% tax holiday. The Indian OpCo claims the lease as a business expense. You get the jet, eliminate import duties, and wipe out corporate tax simultaneously.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80LA", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "The Art & Antiquities Valuation Loophole",
    difficulty: "Expert",
    risk: "High",
    impact: "High",
    description: "Art valuation is highly subjective and unregulated.",
    deepLoophole: "Purchase contemporary art for ₹10 Lakhs. Have an 'independent appraiser' value it at ₹2 Crores after 5 years. Donate the art to a registered charitable museum or your own Section 8 Foundation. Claim a massive charitable deduction against your income based on the appraised value, not the purchase price.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80G", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Offshore Private Placement Life Insurance (PPLI)",
    difficulty: "Expert",
    risk: "Low",
    impact: "Extremely High",
    description: "The ultimate offshore bank account wrapper.",
    practicalApplication: "Set up a life insurance policy in Bermuda or Singapore. Fund it with ₹50 Crores. The 'policy' is essentially a private investment portfolio managed by your wealth manager. The investments grow tax-free because they are inside a life insurance wrapper. Upon death, the payout to heirs is completely tax-free. During life, you can take tax-free 'policy loans' against the cash value.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 10(10D)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Back-to-Back Loan Syndication",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "High",
    description: "Repatriating offshore funds into India without paying tax on them.",
    deepLoophole: "You have ₹20 Cr parked in an offshore entity. If you bring it as dividend, you pay heavy tax. Instead, deposit the ₹20 Cr in an offshore branch of an international bank (e.g., Citi Bahamas). The Indian branch of Citi Bank then issues a ₹19 Cr loan to your Indian company, backed by the offshore deposit. You brought the money into India as 'Debt' (tax-free) while the principal earns interest offshore.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "The Thin Capitalization Edge (Section 94B)",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "Medium",
    description: "Using debt instead of equity to fund subsidiaries to extract tax-free profits.",
    practicalApplication: "Foreign parent company funds the Indian subsidiary not with equity, but with heavy debt. The Indian subsidiary pays massive interest back to the parent. Interest is a deductible expense, wiping out Indian tax. Section 94B caps this deduction at 30% of EBITDA, so the elite perfectly model the debt to exactly hit the 29.9% EBITDA mark, maximizing extraction.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 94B", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Sovereign Wealth Fund Co-Investments (Section 10(23FE))",
    difficulty: "Medium",
    risk: "None",
    impact: "High",
    description: "Bypassing taxes by riding the coattails of foreign sovereign wealth funds.",
    deepLoophole: "Income (dividend, interest, or capital gains) earned by a specified Sovereign Wealth Fund or Foreign Pension Fund from investments in Indian infrastructure is 100% tax-exempt. Elite infrastructure developers structure SPVs specifically to co-invest alongside these funds, structuring the waterfall returns to heavily benefit from the blended tax-exempt nature of the SPV's distributions.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 10(23FE)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 8 NGO Corporate Treasury",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "Establishing a Section 8 (Not for Profit) Company effectively allows elite families to build a completely tax-exempt treasury.",
    practicalApplication: "The family's profitable companies donate to the Section 8 company (claiming CSR/80G deductions). The Section 8 company buys massive real estate, luxury guest houses, and vehicles for 'charitable operations'. The family retains absolute operational control over these assets.",
    legalRefs: [
      { act: "Companies Act, 2013", section: "Section 8" },
      { act: "Income Tax Act, 1961", section: "Section 11/12", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "InvIT / REIT Sponsor Capital Extraction",
    difficulty: "Expert",
    risk: "Low",
    impact: "Extremely High",
    description: "Real estate magnates avoid capital gains on massive commercial parks by rolling them into REITs.",
    deepLoophole: "Instead of selling a ₹1000 Cr IT Park and paying ₹200 Cr in taxes, the sponsor transfers the IT Park into a REIT in exchange for REIT units. This specific swap is heavily tax-exempt. The sponsor then gradually sells the REIT units on the stock market over time, paying just 12.5% LTCG, or holds them for tax-efficient dividend distributions.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 47(xvii)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Tax-Neutral Demergers (Section 2(19AA))",
    difficulty: "Advanced",
    risk: "Low",
    impact: "High",
    description: "Splitting businesses without triggering a single rupee of tax.",
    practicalApplication: "A conglomerate has a highly valued tech division and a low-value manufacturing division. They demerge the tech division into a separate company. Shareholders get shares in the new tech company proportionately. As long as it meets Section 2(19AA) conditions, the massive capital unlocking is entirely tax-neutral.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 2(19AA)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Synthetic Forex Hedging Losses",
    difficulty: "Expert",
    risk: "High",
    impact: "Medium",
    description: "Creating artificial paper losses to offset genuine operational profit.",
    deepLoophole: "A corporate entity enters into complex derivative forex hedging contracts with offshore subsidiaries. The contracts are structured mathematically so the Indian entity always takes the 'losing' side of the trade slightly, transferring profit to the offshore subsidiary while booking the MTM (Mark-to-Market) loss as a deductible business expense in India.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 43(5)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "The Non-Compete Fee Offshore Structuring",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "High",
    description: "During M&A, founders extract cash tax-free by separating the share sale from their personal non-compete.",
    practicalApplication: "Instead of selling shares for ₹100 Cr (taxable), they sell shares for ₹70 Cr and charge a ₹30 Cr 'Non-Compete Fee'. If structured offshore via a foreign residency flip right before the sale, the non-compete fee can be claimed as a non-taxable capital receipt in certain jurisdictions depending on the DTAA interpretation.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 28(va)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "LLP Step-Up Basis Conversion",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "High",
    description: "Converting a Private Limited company with heavily appreciated real estate into an LLP.",
    practicalApplication: "If you sell the real estate in the Pvt Ltd, you pay 20% capital gains + MAT. By converting the Pvt Ltd to an LLP (subject to specific turnover conditions), the assets are transferred. The LLP can later revalue these assets or distribute them to partners upon dissolution completely tax-free under historical tribunal interpretations.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 47(xiiib)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Charitable Foundation Operational Tunnelling",
    difficulty: "Expert",
    risk: "High",
    impact: "Medium",
    description: "Using educational trusts for inter-generational wealth transfer.",
    deepLoophole: "The promoter donates land to establish a medical college (Trust). The Trust is tax-exempt. The Trust then 'contracts' the hospital management, catering, and infrastructure maintenance back to private for-profit companies owned by the promoter's children. The tax-exempt trust safely tunnels the operating cash flow back to the family.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 13(1)(c)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Escrow-backed ESOP Arbitrage",
    difficulty: "Advanced",
    risk: "Low",
    impact: "Medium",
    description: "Founders bypass high dividend/salary taxes using synthetic ESOPs via an Employee Welfare Trust.",
    practicalApplication: "The company funds an Employee Welfare Trust. The trust buys shares of the company. The founders (who step down as promoters and become 'employees') are granted ESOPs by the trust. They exercise them and immediately sell them back to the trust, booking 12.5% LTCG instead of a 39% salary slab.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 17(2)(vi)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Captive Insurance Companies in Bermuda",
    difficulty: "Expert",
    risk: "Medium",
    impact: "Extremely High",
    description: "Major corporations self-insure their own risks to move profits offshore.",
    deepLoophole: "A conglomerate creates a 'Captive Insurance Company' in Bermuda. The Indian conglomerate pays massive insurance premiums to this Bermuda entity to insure against 'supply chain failure' or 'weather events'. The premiums are 100% deductible in India. The Bermuda entity rarely pays out claims, essentially acting as an offshore tax-free piggy bank.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Brand Valuation & Amortization Replacement",
    difficulty: "Medium",
    risk: "Medium",
    impact: "High",
    description: "Creating intangible assets to generate depreciation.",
    practicalApplication: "Since goodwill depreciation was disallowed, companies now acquire specific distinct intangibles: 'Customer Lists', 'Trademarks', or 'Patents'. These are valued aggressively by merchant bankers and purchased via inter-company transfers, allowing the acquiring company to claim 25% depreciation on these artificial intangibles.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 32(1)(ii)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "High-Frequency Trading FPI Routing",
    difficulty: "Expert",
    risk: "Low",
    impact: "High",
    description: "Elite traders bypass domestic STCG by routing capital through Mauritius/Singapore FPIs.",
    deepLoophole: "Instead of trading as an Indian resident (paying 20% STCG and 30% business income), the trader sets up a Category II Foreign Portfolio Investor (FPI) in Mauritius. They trade the Indian markets algorithmically. Capital gains for FPIs are subject to favorable treaty rates, and complex total-return swaps ensure the profits are retained offshore.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 115AD", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Capital Reduction & Share Buyback Shield",
    difficulty: "Advanced",
    risk: "Low",
    impact: "Medium",
    description: "Distributing cash to shareholders without triggering dividend tax.",
    practicalApplication: "Instead of declaring a dividend, a company executes a 'Selective Share Buyback' or 'Capital Reduction'. Under the new regime, the tax incidence has shifted, but by utilizing accumulated capital losses, the shareholders can surrender their shares and absorb the payout highly tax-efficiently compared to straight dividends.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 115QA", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "The 'Key Management Personnel' Golden Parachute",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "Bypassing the 39% tax slab for CEO exit bonuses.",
    practicalApplication: "Instead of paying a massive severance bonus (taxed as salary), the CEO resigns. Six months later, the company signs a 'Consultancy & Non-Compete Agreement' with the CEO's newly formed LLP. The payout is treated as business receipts for the LLP, allowing massive business expense deductions to neutralize the tax.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 17(3)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Agricultural Equipment Accelerated Depreciation",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "For HNIs who also own large-scale mechanized farms.",
    deepLoophole: "Tractors and heavy agricultural machinery often qualify for accelerated depreciation. A corporate entity can lease this equipment to their own agricultural subsidiary. The corporate entity claims heavy depreciation against its taxable industrial profits, while the agricultural entity earns tax-free Section 10(1) income.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 32", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Family Office LLP Structuring",
    difficulty: "Advanced",
    risk: "None",
    impact: "High",
    description: "Consolidating fragmented multi-generational wealth into a Master LLP.",
    practicalApplication: "All family members become partners in a Master LLP. The LLP acts as an overarching holding company for all startup investments, real estate, and fixed-income assets. This entirely bypasses the Dividend Distribution cascading effect, simplifies succession planning without triggering stamp duty on asset transfer, and allows interest on capital to be paid to partners at 12% as a deductible expense.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 10(2A)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  }
];
