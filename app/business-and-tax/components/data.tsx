import { Strategy, Category } from "./StrategyCard";
import { EntityArbitrageAnimation, TaxHarvestingAnimation, Section54FAnimation, Section44ADAAnimation, GlobalRoutingAnimation } from "./animations";
import { eliteStrategies } from "./elite_data";

export const businessStrategies: Strategy[] = [
  {
    title: "The Multi-Entity HUF Shield (Hindu Undivided Family)",
    difficulty: "Advanced",
    risk: "Low",
    impact: "Extremely High",
    description: "A Hindu Undivided Family (HUF) is treated as a completely separate tax entity by the Income Tax Act. Instead of earning all your business income individually and hitting the 30% slab instantly, you split the income.",
    practicalApplication: "Instead of your business buying property or heavy equipment, the HUF buys it (via gift capital from non-clubbed relatives) and <strong>leases it back to your private limited company</strong>. <br/><br/><strong>The Result:</strong> Your company gets a 100% tax deduction on the lease expense. Your HUF earns the lease income but utilizes a fresh ₹3 Lakh basic exemption limit and its own Section 80C/80D limits. You just moved money from a 25% corporate tax bracket to a 0% HUF bracket.",
    deepLoophole: "The law says if you gift money to your wife, income generated from it is clubbed back to you. However, courts have historically debated <em>Cross-Gifting</em>. You gift ₹10L to your brother's wife. Your brother gifts ₹10L to your wife. While the Supreme Court has cracked down on direct circular transactions, establishing genuine loans with market interest rates between trusted family entities completely bypasses clubbing provisions.",
    AnimationComponent: EntityArbitrageAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 64", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" },
      { act: "Income Tax Act, 1961", section: "Section 2(31)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Salary vs. Dividend vs. Section 40(b) Remuneration",
    difficulty: "Medium",
    risk: "None",
    impact: "High",
    description: "With dividends being fully taxable in the hands of the receiver, taking profits out of a Private Limited company has become highly inefficient (paying 25% Corporate Tax + 30% Individual Tax = ~47% effective tax).",
    deepLoophole: "<strong>The LLP Pivot:</strong> Structure as an LLP instead of a Pvt Ltd. Under Section 40(b), you can pay yourself a working partner remuneration (up to 60% of book profits). This reduces LLP profit to near zero. Furthermore, whatever profit remains in the LLP, when distributed, is <strong>100% tax-free</strong> in the hands of the partners under Section 10(2A).",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 40(b)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" },
      { act: "Income Tax Act, 1961", section: "Section 10(2A)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 80JJAA: The Phantom Employee Deduction",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "Most business owners are completely unaware of Section 80JJAA. If you hire a new employee (salary under ₹25,000/month), the government allows you to deduct <strong>130%</strong> of their salary as an expense.",
    practicalApplication: "If you hire 10 blue-collar workers or entry-level data operators at ₹20,000/month. Total yearly expense: ₹24 Lakhs. <br/>Under 80JJAA, you don't just deduct ₹24 Lakhs from your profit. You deduct ₹31.2 Lakhs (130%). You get a phantom deduction of ₹7.2 Lakhs for money you never actually spent, saving you over ₹2.1 Lakhs in direct taxes.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80JJAA", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 32: Aggressive Depreciation on Assets",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "Don't buy expensive personal assets (laptops, phones, cars) in your own name. Buy them in the company's name. You can claim aggressive depreciation (up to 40% on computers/tech) which instantly wipes out corporate taxable profits.",
    practicalApplication: "Buying a ₹2,00,000 MacBook in your name? Paid from post-tax income. Buying it in the company's name? It reduces your taxable profit by ₹80,000 in the first year alone (40% depreciation), saving you ₹20,000+ in corporate tax immediately.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 32", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Keyman Insurance Policy Premium Payouts",
    difficulty: "Medium",
    risk: "Low",
    impact: "High",
    description: "Instead of paying yourself a higher salary and getting taxed at 30%, the company can buy a 'Keyman Insurance Policy' on your life.",
    practicalApplication: "The entire premium paid by the company is allowed as a business expense under Section 37(1). When the policy matures, the payout goes to the company, and if structured correctly with assignments, it can be optimally routed back to the directors with significantly lowered tax incidence.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 10(10D)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" },
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Slump Sale Arbitrage vs Itemized Asset Sale",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "Extremely High",
    description: "When selling a business division, do not sell individual assets. If you sell an asset, you pay STCG. If you execute a 'Slump Sale' (selling the entire business undertaking as a going concern), it is treated as Long Term Capital Gains (LTCG) if held for over 36 months.",
    deepLoophole: "Under Section 50B, a slump sale attracts LTCG at 12.5% (or 20% historically). This completely bypasses the 30% individual slab or the 25% corporate tax rate that would normally apply to the itemized sale of highly appreciated inventory or short-term assets.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 50B", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Startup India Tax Exemption (Section 80-IAC)",
    difficulty: "Medium",
    risk: "Low",
    impact: "Extremely High",
    description: "If your company is recognized by DPIIT as a startup, you can apply for Section 80-IAC exemption.",
    practicalApplication: "This provides a <strong>100% tax holiday for 3 consecutive years</strong> out of your first 10 years of operation. You pay absolutely zero corporate tax. Even if you make ₹100 Crores in profit during those 3 years, the tax is zero.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80-IAC", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Family Salary Distribution Strategy",
    difficulty: "Easy",
    risk: "Low",
    impact: "Medium",
    description: "If you are in the 30% slab, and your parents or adult children are in the 0% or 5% slab, employ them in your business for administrative, advisory, or HR roles.",
    practicalApplication: "Paying a salary of ₹50,000/month to a parent and a spouse shifts ₹12 Lakhs of profit from your 30% slab (saving ₹3.6 Lakhs) to their 0% slab. Just ensure they actually hold a title and have an email ID in the company to justify the expense during scrutiny.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  }
];

export const traderStrategies: Strategy[] = [
  {
    title: "Section 54F: The Real Estate Capital Gains Wash",
    difficulty: "Advanced",
    risk: "None",
    impact: "Extremely High",
    description: "What do you do if you invested ₹50 Lakhs in a multi-bagger stock 5 years ago, and it's now worth ₹5 Crores? If you sell, you owe 12.5% LTCG tax on ₹4.5 Crores (approx ₹56 Lakhs in tax).",
    deepLoophole: "Under Section 54F, if you sell any long-term asset (like stocks) and use the <strong>net consideration</strong> (the full ₹5 Crores) to purchase a residential house property within 2 years, your <strong>entire capital gains tax is reduced to ZERO</strong>. You just avoided ₹56 Lakhs in tax.",
    AnimationComponent: Section54FAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 54F", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Tax Harvesting (Section 112A) - Annual Free Money",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "Up to ₹1.25 Lakhs of Long Term Capital Gains (LTCG) on stocks and equity mutual funds are tax-free every single financial year.",
    practicalApplication: "Every year in March, check your portfolio. If a stock is up by ₹1 Lakh and you've held it for 1 year, <strong>sell it and immediately buy it back</strong> the next minute. Your portfolio remains exactly the same. But you have 'booked' a ₹1 Lakh profit completely tax-free, raising your acquisition cost.",
    AnimationComponent: TaxHarvestingAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 112A", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "F&O Business Expense Offsetting",
    difficulty: "Medium",
    risk: "Low",
    impact: "High",
    description: "Futures & Options trading is strictly considered 'Non-Speculative Business Income'. This opens the floodgates to business deductions.",
    practicalApplication: "You can claim internet bills, phone bills, home office rent (a portion of your house), depreciation on laptops, iPads, monitors, office chairs, and broker advisory fees as business expenses, reducing your taxable F&O profit drastically.",
    deepLoophole: "Have a massive ₹10 Lakh F&O loss? You cannot offset it against Salary. <strong>BUT</strong>, you CAN offset it against Rental Income or Short Term Capital Gains. Made ₹5 Lakhs trading stocks short-term? Offset it against F&O losses and pay 0% STCG tax.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 43(5)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Corporate Trading Account Pivot",
    difficulty: "Advanced",
    risk: "Low",
    impact: "High",
    description: "If your trading capital is huge, trading as an individual will hit the 30% slab + heavy surcharge very quickly (up to 39% effective tax).",
    practicalApplication: "Open a Private Limited company solely for trading. The corporate tax rate is capped at 25% (or 15% for specific new setups). You instantly save 10-14% on pure tax arbitrage. You can also claim full director's salary, leasing, and office expenses.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 115BAA", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Bonus Stripping Arbitrage",
    difficulty: "Expert",
    risk: "High",
    impact: "Medium",
    description: "While the government has clamped down on dividend stripping, Bonus Stripping in certain securities can still yield short-term capital losses to offset your other massive STCG.",
    deepLoophole: "Buy units before the record date of a bonus issue. Once the bonus units are credited, the price of the original units drops proportionately. Sell the ORIGINAL units immediately to book a massive Short Term Capital Loss (STCL). Hold the bonus units for >1 year to eventually pay 12.5% LTCG. Use the STCL to offset 20% STCG elsewhere.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 94(8)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "HUFs for IPO and HNI Quotas",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "Your HUF can have its own Demat account.",
    practicalApplication: "Not only does it give you an entirely separate basic tax exemption limit for your trading profits, but it also allows you to apply for highly oversubscribed IPOs from a separate PAN, increasing your allotment probability while keeping the gains out of your primary 30% slab.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 2(31)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Intraday (Speculative) Loss Set-off Strategy",
    difficulty: "Medium",
    risk: "None",
    impact: "Medium",
    description: "Intraday equity trading is considered 'Speculative Business Income'. Speculative losses can ONLY be set off against speculative profits.",
    practicalApplication: "If you have ₹5 Lakhs of intraday losses this year, they are practically dead weight unless you carry them forward. Deliberately book intraday profits next year to absorb these losses entirely tax-free, rather than trading F&O or delivery which won't absorb them.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 73", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  }
];

export const realEstateStrategies: Strategy[] = [
  {
    title: "The Double Exemption (Joint Ownership)",
    difficulty: "Easy",
    risk: "None",
    impact: "High",
    description: "Never buy a home in a single name if both spouses are earning. By buying a property jointly, you mathematically double the tax deductions available under the law.",
    practicalApplication: "Section 24(b) (Home Loan Interest): A single owner claims max ₹2,00,000. Joint owners can claim ₹2,00,000 <strong>each</strong> (Total ₹4,00,000 deduction per year). Section 80C (Principal Repayment): Single claims ₹1,50,000. Joint claims ₹3,00,000.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 24(b)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" },
      { act: "Income Tax Act, 1961", section: "Section 80C", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Set-Off Loss from House Property (Section 71)",
    difficulty: "Medium",
    risk: "Low",
    impact: "High",
    description: "If you buy a second property and put it on rent, the rent usually doesn't cover the massive EMI interest. This creates a 'Loss from House Property'.",
    deepLoophole: "The law allows you to offset up to ₹2 Lakhs of Loss from House Property against your <strong>SALARY INCOME</strong>. This is one of the extremely rare ways a salaried employee can legally reduce their taxable salary. Carry forward the rest for 8 years.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 71", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 54EC: Capital Gains Bonds",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "Sold a property and made ₹50 Lakhs in Long Term Capital Gains, but don't want to buy another house (which Section 54 requires)?",
    practicalApplication: "Invest the gain amount in specified infrastructure bonds (NHAI, REC, PFC, IRFC) within 6 months of sale. You can invest up to ₹50 Lakhs per financial year. This completely exempts the capital gains tax, and you earn ~5% interest annually (lock-in 5 years).",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 54EC", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Reinvestment in Agricultural Land (Section 54B)",
    difficulty: "Advanced",
    risk: "Low",
    impact: "High",
    description: "If you sell urban agricultural land (which is a capital asset and taxable), you can wipe out the tax entirely.",
    deepLoophole: "Under Section 54B, if you purchase ANOTHER agricultural land (urban or rural) within 2 years, your capital gains are fully exempt. Rural agricultural land itself is NOT a capital asset, meaning when you eventually sell the new rural land, there is <strong>zero capital gains tax</strong> regardless of the profit amount.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 54B", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Commercial Property Depreciation",
    difficulty: "Medium",
    risk: "None",
    impact: "High",
    description: "Unlike residential property which you just hold, commercial property bought in a business entity's name allows you to claim depreciation.",
    practicalApplication: "You can claim 10% depreciation on the building building value (excluding land) every year. If you buy a ₹1 Crore office space, you reduce your business taxable income by ₹10 Lakhs in year 1, saving ₹3 Lakhs in pure tax.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 32", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Loan Against Property (LAP) Instead of Selling",
    difficulty: "Expert",
    risk: "Medium",
    impact: "Extremely High",
    description: "Need ₹2 Crores for a new business venture? If you sell your ₹3 Crore property, you will pay massive capital gains tax and lose the appreciating asset.",
    deepLoophole: "Do not sell. Take a Loan Against Property (LAP) for ₹2 Crores. <strong>Loan money is completely tax-free</strong>. You keep the property (which continues to appreciate). You pay zero tax. And if you inject the LAP funds into your business, the interest paid on the LAP becomes a fully deductible business expense!",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Inheritance via Gift Deed vs Will",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "India currently has no inheritance tax, but property transfers still attract heavy stamp duty.",
    practicalApplication: "Transferring property via a Gift Deed to blood relatives attracts a drastically reduced, capped stamp duty in many states (e.g., ₹200-₹1000 flat fee in Maharashtra) compared to 5-7% on standard sales. It immediately transfers ownership without waiting for probate of a Will.",
    legalRefs: [
      { act: "Transfer of Property Act, 1882", section: "Section 122", url: "/pdfs/Property%20Laws/Transfer%20of%20Property%20Act%201882.pdf" }
    ]
  }
];

export const freelancerStrategies: Strategy[] = [
  {
    title: "Section 44ADA: The 50% Profit Wipeout",
    difficulty: "Easy",
    risk: "None",
    impact: "Extremely High",
    description: "Under Section 44ADA, if your gross freelance receipts are under ₹75 Lakhs, you can simply declare that 50% of your income is 'expenses'. The government asks for NO PROOF, no receipts, no books of accounts.",
    practicalApplication: "Earn ₹14,00,000 a year? Under 44ADA, taxable income is ₹7,00,000. Invest ₹1.5L in 80C, ₹50k in NPS. Taxable income drops to ₹5,00,000. Section 87A rebate makes your <strong>Final Tax: ₹0.</strong>",
    AnimationComponent: Section44ADAAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 44ADA", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "GST LUT & Zero-Rated Exports Arbitrage",
    difficulty: "Medium",
    risk: "Low",
    impact: "High",
    description: "If you provide software or consulting services to clients outside India (USA, UK), this is considered an 'Export of Service'.",
    practicalApplication: "Instead of charging 18% GST, file a Letter of Undertaking (LUT). Invoice foreign clients with 0% GST. Because you are an exporter, you can claim a cash refund of the GST you paid on business expenses (like buying a MacBook).",
    legalRefs: [
      { act: "IGST Act, 2017", section: "Section 16", url: "/pdfs/Tax%20Laws/GST%20Acts%20CGSTSGSTIGST,%202017.pdf" }
    ]
  },
  {
    title: "The Dubai / US LLC Route (Global Arbitrage)",
    difficulty: "Expert",
    risk: "Medium",
    impact: "Extremely High",
    description: "If you are making over $200k/year exclusively from US/EU clients, operating as an Indian sole proprietor is deeply inefficient.",
    deepLoophole: "Incorporate an LLC in Wyoming/Delaware or a Freezone Company in Dubai. Route global client payments there. A Dubai Freezone company pays 0% corporate tax (up to AED 375k, and 9% thereafter, but manageable via director salaries). You only pay Indian tax when you repatriate the money to India as salary/dividend, allowing you to compound capital offshore tax-free.",
    AnimationComponent: GlobalRoutingAnimation,
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 6 (POEM)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Section 80QQB: The Royalty Exemption",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "If you are a freelance writer, author, or creator who earns royalty income.",
    practicalApplication: "Under Section 80QQB, up to ₹3,00,000 of royalty income received from books or artistic works is completely exempt from tax. This acts as a flat deduction from your gross total income.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 80QQB", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Claiming International Travel as Business Expense",
    difficulty: "Advanced",
    risk: "Medium",
    impact: "High",
    description: "Freelancers and consultants who travel often fail to realize that travel can be a 100% tax-deductible expense.",
    deepLoophole: "If you travel to Europe or the US, and you schedule meetings with potential clients, attend a tech conference, or buy a ticket to a trade show—the flight, hotel, and visa costs become legitimate 'Client Acquisition / Business Promotion' expenses. This dramatically reduces your taxable profit while subsidizing your international travel.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  },
  {
    title: "Co-working Space GST ITC",
    difficulty: "Easy",
    risk: "None",
    impact: "Medium",
    description: "Working from cafes is expensive and offers no tax benefits. Renting a commercial office is too rigid.",
    practicalApplication: "Get a dedicated desk at a co-working space like WeWork. They will invoice you with 18% GST. You can claim full Input Tax Credit (ITC) on this GST to offset your domestic GST liabilities, and the base rent is a 100% deductible business expense.",
    legalRefs: [
      { act: "CGST Act, 2017", section: "Section 16", url: "/pdfs/Tax%20Laws/GST%20Acts%20CGSTSGSTIGST,%202017.pdf" }
    ]
  },
  {
    title: "Spousal Sub-contracting",
    difficulty: "Medium",
    risk: "Low",
    impact: "Medium",
    description: "If you are a high-earning software dev (₹50 Lakhs+), your tax slab is peaking. If your spouse is non-working, subcontract non-core work to them.",
    practicalApplication: "Draft a formal contract for 'Data Entry, Social Media Management, or QA Testing'. Pay them ₹5-7 Lakhs a year. This is a deductible expense for you (saving 30% tax) and falls under the 0% tax slab for them. You keep the money in the house, legally tax-free.",
    legalRefs: [
      { act: "Income Tax Act, 1961", section: "Section 37(1)", url: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf" }
    ]
  }
];

export const allStrategiesMap: Record<Category, Strategy[]> = {
  business: businessStrategies,
  trader: traderStrategies,
  'real-estate': realEstateStrategies,
  freelancer: freelancerStrategies,
  elite: eliteStrategies
};
