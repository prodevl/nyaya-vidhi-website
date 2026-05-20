"use client";

import { useMemo, useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
   Toolkit container — renders every tool stacked, each
   anchored with its own id so the hub page can deep-link to it.
   ============================================================ */

export default function ToolkitClient() {
  return (
    <div className="mt-20 space-y-20">
      <ToolFrame id="tax-regime" title="Old vs New Tax Regime" subtitle="Which one saves you more?">
        <TaxRegime />
      </ToolFrame>
      <ToolFrame id="hra" title="HRA Exemption" subtitle="How much of your HRA is tax-free?">
        <HRACalc />
      </ToolFrame>
      <ToolFrame id="stamp-duty" title="Stamp Duty Estimator" subtitle="Approximate stamp duty + registration on property purchase">
        <StampDuty />
      </ToolFrame>
      <ToolFrame id="gratuity" title="Gratuity Calculator" subtitle="Payable to private-sector employees with 5+ years of service">
        <GratuityCalc />
      </ToolFrame>
      <ToolFrame id="notice-period" title="Notice Period Calculator" subtitle="Whether you owe — or are owed — money in lieu of notice">
        <NoticeCalc />
      </ToolFrame>
      <ToolFrame id="cheque-bounce" title="Cheque Bounce — Section 138 Notice" subtitle="Generates a 15-day demand notice in standard form">
        <ChequeBounceGen />
      </ToolFrame>
      <ToolFrame id="rti" title="RTI Application — Generator" subtitle="A clean RTI you can print and send today">
        <RTIGen />
      </ToolFrame>
      <ToolFrame id="rent" title="Rent Agreement (Quick)" subtitle="11-month residential rent agreement draft">
        <RentGen />
      </ToolFrame>
      <ToolFrame id="fir-draft" title="FIR Complaint — Quick Draft" subtitle="A simple written complaint you can hand over at the station">
        <FIRGen />
      </ToolFrame>
    </div>
  );
}

function ToolFrame({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mb-6 border-l-2 border-saffron-400 pl-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-saffron-600">Tool</p>
        <h2 className="mt-1 font-serif text-2xl font-medium text-ink-900">{title}</h2>
        <p className="mt-1 text-[14.5px] text-ink-500">{subtitle}</p>
      </div>
      <div className="rounded-3xl border border-ink-100 bg-paper-50 p-6 shadow-soft sm:p-8">
        {children}
      </div>
    </section>
  );
}

/* ---------- Shared bits ---------- */
function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-500">
        {label}
      </span>
      {hint && <span className="ml-1 text-[11px] text-ink-400">· {hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink-100 bg-paper-50 px-3.5 py-2.5 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-500/20";

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink-100 bg-paper-100/40 p-4",
        accent && "border-saffron-300 bg-saffron-50/60"
      )}
    >
      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">{label}</p>
      <p
        className={cn(
          "mt-1 font-serif text-2xl tabular text-ink-900",
          accent && "text-saffron-700"
        )}
      >
        {value}
      </p>
    </div>
  );
}

function rupee(n: number) {
  if (!isFinite(n)) return "—";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

/* ============================================================
   1) Old vs New Tax Regime
   FY 2024-25 / AY 2025-26 reference rates.
   ============================================================ */

function calcOldRegime(gross: number, deductions: number) {
  const taxable = Math.max(0, gross - deductions - 50000); // Std deduction
  let tax = 0;
  if (taxable > 250000) tax += Math.min(taxable, 500000) - 250000;
  tax *= 0.05;
  if (taxable > 500000) tax += (Math.min(taxable, 1000000) - 500000) * 0.2;
  if (taxable > 1000000) tax += (taxable - 1000000) * 0.3;
  // 87A rebate
  if (taxable <= 500000) tax = 0;
  return { taxable, tax, cess: tax * 0.04 };
}

function calcNewRegime(gross: number) {
  const taxable = Math.max(0, gross - 75000); // FY24-25 std deduction
  const slabs = [
    [0, 300000, 0],
    [300000, 700000, 0.05],
    [700000, 1000000, 0.1],
    [1000000, 1200000, 0.15],
    [1200000, 1500000, 0.2],
    [1500000, Infinity, 0.3],
  ] as const;
  let tax = 0;
  for (const [from, to, rate] of slabs) {
    if (taxable > from) tax += (Math.min(taxable, to) - from) * rate;
  }
  if (taxable <= 700000) tax = 0; // 87A rebate
  return { taxable, tax, cess: tax * 0.04 };
}

function TaxRegime() {
  const [gross, setGross] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);

  const old = useMemo(() => calcOldRegime(gross, deductions), [gross, deductions]);
  const neu = useMemo(() => calcNewRegime(gross), [gross]);

  const oldTotal = old.tax + old.cess;
  const newTotal = neu.tax + neu.cess;
  const better = newTotal < oldTotal ? "New regime" : "Old regime";
  const savings = Math.abs(oldTotal - newTotal);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <Field label="Yearly gross salary (₹)">
          <input
            className={inputClass}
            type="number"
            value={gross}
            onChange={(e) => setGross(+e.target.value)}
            min={0}
          />
        </Field>
        <Field label="Total deductions (only for old regime)" hint="80C + 80D + home loan etc.">
          <input
            className={inputClass}
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(+e.target.value)}
            min={0}
          />
        </Field>
        <p className="text-[12px] leading-relaxed text-ink-400">
          New regime gives a ₹75,000 standard deduction (FY 24-25) and full rebate up to ₹7 lakh.
          Old regime allows your own deductions but still has a ₹2.5 lakh basic exempt limit.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:col-span-3">
        <Stat label="Old regime tax" value={rupee(oldTotal)} />
        <Stat label="New regime tax" value={rupee(newTotal)} />
        <div className="col-span-2 rounded-2xl border border-india-200 bg-india-50/60 p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-india-700">Verdict</p>
          <p className="mt-1 font-serif text-2xl text-ink-900">
            <span className="text-india-700">{better}</span> saves you <span className="text-saffron-700">{rupee(savings)}</span> a year
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   2) HRA Exemption
   ============================================================ */

function HRACalc() {
  const [basic, setBasic] = useState(40000);
  const [hra, setHra] = useState(20000);
  const [rent, setRent] = useState(25000);
  const [metro, setMetro] = useState(true);

  const monthlyExempt = useMemo(() => {
    const rentMinus10 = Math.max(0, rent - 0.1 * basic);
    const metroLimit = (metro ? 0.5 : 0.4) * basic;
    return Math.min(hra, rentMinus10, metroLimit);
  }, [basic, hra, rent, metro]);

  const yearlyExempt = monthlyExempt * 12;
  const yearlyTaxable = Math.max(0, hra * 12 - yearlyExempt);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <Field label="Monthly basic + DA (₹)">
          <input className={inputClass} type="number" value={basic} onChange={(e) => setBasic(+e.target.value)} />
        </Field>
        <Field label="Monthly HRA received (₹)">
          <input className={inputClass} type="number" value={hra} onChange={(e) => setHra(+e.target.value)} />
        </Field>
        <Field label="Monthly rent paid (₹)">
          <input className={inputClass} type="number" value={rent} onChange={(e) => setRent(+e.target.value)} />
        </Field>
        <label className="flex items-center gap-2 text-[14px] text-ink-700">
          <input type="checkbox" checked={metro} onChange={(e) => setMetro(e.target.checked)} className="rounded border-ink-200 text-saffron-600 focus:ring-saffron-500" />
          I live in a metro city (Delhi / Mumbai / Chennai / Kolkata)
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:col-span-3">
        <Stat label="Monthly exempt" value={rupee(monthlyExempt)} />
        <Stat label="Yearly exempt" value={rupee(yearlyExempt)} accent />
        <Stat label="Yearly taxable HRA" value={rupee(yearlyTaxable)} />
        <Stat label="Annual rent paid" value={rupee(rent * 12)} />
        <p className="col-span-2 text-[12px] leading-relaxed text-ink-400">
          HRA exemption (Section 10(13A)) is the <em>least</em> of three values — actual HRA, rent minus 10% of salary, and 50%/40% of salary. Available only under the old regime.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   3) Stamp Duty Estimator (illustrative state-wise)
   ============================================================ */

const STAMP_STATES: { name: string; male: number; female: number; reg: number }[] = [
  { name: "Maharashtra (Mumbai)", male: 6, female: 5, reg: 1 },
  { name: "Delhi", male: 6, female: 4, reg: 1 },
  { name: "Karnataka (Bengaluru)", male: 5, female: 5, reg: 1 },
  { name: "Tamil Nadu (Chennai)", male: 7, female: 7, reg: 4 },
  { name: "Uttar Pradesh", male: 7, female: 6, reg: 1 },
  { name: "Haryana", male: 7, female: 5, reg: 1 },
  { name: "West Bengal", male: 6, female: 6, reg: 1 },
  { name: "Gujarat", male: 4.9, female: 4.9, reg: 1 },
  { name: "Rajasthan", male: 6, female: 5, reg: 1 },
  { name: "Telangana", male: 5, female: 5, reg: 0.5 },
];

function StampDuty() {
  const [value, setValue] = useState(5000000);
  const [stateIdx, setStateIdx] = useState(0);
  const [female, setFemale] = useState(false);

  const s = STAMP_STATES[stateIdx];
  const stampRate = female ? s.female : s.male;
  const stamp = (value * stampRate) / 100;
  const reg = (value * s.reg) / 100;
  const total = stamp + reg;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <Field label="Property value (₹)">
          <input className={inputClass} type="number" value={value} onChange={(e) => setValue(+e.target.value)} />
        </Field>
        <Field label="State">
          <select className={inputClass} value={stateIdx} onChange={(e) => setStateIdx(+e.target.value)}>
            {STAMP_STATES.map((st, i) => (
              <option key={st.name} value={i}>
                {st.name}
              </option>
            ))}
          </select>
        </Field>
        <label className="flex items-center gap-2 text-[14px] text-ink-700">
          <input type="checkbox" checked={female} onChange={(e) => setFemale(e.target.checked)} className="rounded border-ink-200 text-saffron-600 focus:ring-saffron-500" />
          Buyer is a woman (lower rate in many states)
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:col-span-3">
        <Stat label="Stamp duty" value={rupee(stamp)} />
        <Stat label="Registration" value={rupee(reg)} />
        <div className="col-span-2 rounded-2xl border border-saffron-200 bg-saffron-50/60 p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-saffron-700">Total payable</p>
          <p className="mt-1 font-serif text-3xl tabular text-ink-900">{rupee(total)}</p>
          <p className="mt-1 text-[12px] text-ink-500">
            On a property of {rupee(value)} in {s.name} — at {stampRate}% stamp + {s.reg}% registration.
          </p>
        </div>
        <p className="col-span-2 text-[12px] leading-relaxed text-ink-400">
          Approximate. Actual rates vary by area, age of property, and category. Confirm at your sub-registrar's office or state IGR portal before payment.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   4) Gratuity
   ============================================================ */

function GratuityCalc() {
  const [last, setLast] = useState(60000);
  const [years, setYears] = useState(7);
  const [months, setMonths] = useState(3);
  const [covered, setCovered] = useState(true);

  const effYears = years + (months >= 6 ? 1 : 0);
  const gratuity = covered
    ? (last * 15 * effYears) / 26
    : (last * 15 * effYears) / 30;

  const capped = Math.min(gratuity, 2000000);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <Field label="Last drawn monthly basic + DA (₹)">
          <input className={inputClass} type="number" value={last} onChange={(e) => setLast(+e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Years of service">
            <input className={inputClass} type="number" value={years} onChange={(e) => setYears(+e.target.value)} min={0} />
          </Field>
          <Field label="Extra months">
            <input className={inputClass} type="number" value={months} onChange={(e) => setMonths(+e.target.value)} min={0} max={11} />
          </Field>
        </div>
        <label className="flex items-start gap-2 text-[13.5px] text-ink-700">
          <input type="checkbox" checked={covered} onChange={(e) => setCovered(e.target.checked)} className="mt-0.5 rounded border-ink-200 text-saffron-600 focus:ring-saffron-500" />
          <span>My company is covered under Payment of Gratuity Act (typically 10+ employees)</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:col-span-3">
        <Stat label="Years counted" value={`${effYears}`} />
        <Stat label="Formula amount" value={rupee(gratuity)} />
        <div className="col-span-2 rounded-2xl border border-india-200 bg-india-50/60 p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-india-700">Gratuity payable</p>
          <p className="mt-1 font-serif text-3xl tabular text-ink-900">{rupee(capped)}</p>
          <p className="mt-1 text-[12px] text-ink-500">
            Capped at ₹20 lakh (tax-free) under Section 4(3) of the Payment of Gratuity Act, 1972.
          </p>
        </div>
        <p className="col-span-2 text-[12px] leading-relaxed text-ink-400">
          Requires <strong>5 years of continuous service</strong> (relaxed on death / disability). Paid within 30 days of leaving — else interest applies.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   5) Notice Period
   ============================================================ */

function NoticeCalc() {
  const [salary, setSalary] = useState(60000);
  const [contractDays, setContractDays] = useState(60);
  const [servedDays, setServedDays] = useState(20);

  const owed = Math.max(0, contractDays - servedDays);
  const amount = (salary / 30) * owed;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <Field label="Your monthly gross salary (₹)">
          <input className={inputClass} type="number" value={salary} onChange={(e) => setSalary(+e.target.value)} />
        </Field>
        <Field label="Notice period in your contract (days)">
          <input className={inputClass} type="number" value={contractDays} onChange={(e) => setContractDays(+e.target.value)} />
        </Field>
        <Field label="Notice days you will actually serve">
          <input className={inputClass} type="number" value={servedDays} onChange={(e) => setServedDays(+e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:col-span-3">
        <Stat label="Days short" value={`${owed} days`} />
        <Stat label="Amount in lieu" value={rupee(amount)} accent />
        <p className="col-span-2 text-[12px] leading-relaxed text-ink-400">
          If you serve fewer days, your employer can recover (or you can offer) salary in lieu — the per-day salary times the missing days. The same logic works in reverse if the employer cuts your notice short.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   6) Cheque Bounce — Section 138 Notice Generator
   ============================================================ */

function ChequeBounceGen() {
  const [yourName, setYourName] = useState("Anil Sharma");
  const [yourAddr, setYourAddr] = useState("12, Lajpat Nagar, New Delhi - 110024");
  const [drawerName, setDrawerName] = useState("Rajiv Khanna");
  const [drawerAddr, setDrawerAddr] = useState("Flat 4A, Hill View Apartments, Pune - 411001");
  const [chequeNo, setChequeNo] = useState("123456");
  const [chequeDate, setChequeDate] = useState("2025-02-15");
  const [bank, setBank] = useState("HDFC Bank, M.G. Road Branch");
  const [amount, setAmount] = useState(150000);
  const [reason, setReason] = useState("repayment of a hand-loan given by me on 1 December 2024");
  const [returnDate, setReturnDate] = useState("2025-02-20");
  const [returnReason, setReturnReason] = useState("Insufficient Funds");

  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const draft = `LEGAL NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881

Date: ${today}

To,
${drawerName}
${drawerAddr}

From,
${yourName}
${yourAddr}

Sir,

Under instructions from and on behalf of my client mentioned above, I hereby serve upon you the following legal notice:

1. That a sum of ₹${amount.toLocaleString("en-IN")} (Rupees ${amount.toLocaleString("en-IN")} only) was due and payable by you to my client towards ${reason}.

2. That towards discharge of the above legal liability, you issued Cheque No. ${chequeNo} dated ${chequeDate} drawn on ${bank}, in favour of my client.

3. That my client presented the said cheque for encashment within its validity period through his banker. The said cheque was, however, returned unpaid vide bank memo dated ${returnDate} with the remark "${returnReason}".

4. That the dishonour of the said cheque constitutes an offence under Section 138 of the Negotiable Instruments Act, 1881, punishable with imprisonment up to two years or with fine which may extend to twice the amount of the cheque, or with both.

5. You are hereby called upon to pay the said sum of ₹${amount.toLocaleString("en-IN")} (Rupees ${amount.toLocaleString("en-IN")} only) to my client within FIFTEEN (15) DAYS from the date of receipt of this notice, failing which my client shall be constrained to initiate appropriate criminal and civil proceedings against you, entirely at your cost and risk.

A copy of this notice is being retained in our office for records and necessary action.

Yours faithfully,

________________________
(Advocate for ${yourName})`;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Your full name">
            <input className={inputClass} value={yourName} onChange={(e) => setYourName(e.target.value)} />
          </Field>
          <Field label="Cheque amount (₹)">
            <input className={inputClass} type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />
          </Field>
        </div>
        <Field label="Your address">
          <input className={inputClass} value={yourAddr} onChange={(e) => setYourAddr(e.target.value)} />
        </Field>

        <Field label="Cheque issuer's name">
          <input className={inputClass} value={drawerName} onChange={(e) => setDrawerName(e.target.value)} />
        </Field>
        <Field label="Cheque issuer's address">
          <input className={inputClass} value={drawerAddr} onChange={(e) => setDrawerAddr(e.target.value)} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Cheque number">
            <input className={inputClass} value={chequeNo} onChange={(e) => setChequeNo(e.target.value)} />
          </Field>
          <Field label="Cheque date">
            <input className={inputClass} type="date" value={chequeDate} onChange={(e) => setChequeDate(e.target.value)} />
          </Field>
        </div>
        <Field label="Bank & branch (on which drawn)">
          <input className={inputClass} value={bank} onChange={(e) => setBank(e.target.value)} />
        </Field>
        <Field label="Why was the money owed?" hint="short phrase">
          <input className={inputClass} value={reason} onChange={(e) => setReason(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Bank return date">
            <input className={inputClass} type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </Field>
          <Field label="Bank's reason">
            <input className={inputClass} value={returnReason} onChange={(e) => setReturnReason(e.target.value)} />
          </Field>
        </div>
      </div>

      <DraftPanel draft={draft} filename={`cheque-bounce-notice-${chequeNo}.txt`} />
    </div>
  );
}

/* ============================================================
   7) RTI Application Generator
   ============================================================ */

function RTIGen() {
  const [applicant, setApplicant] = useState("Anita Verma");
  const [addr, setAddr] = useState("Flat 3, Krishna Niwas, Sector 11, Noida - 201301");
  const [phone, setPhone] = useState("9810000000");
  const [office, setOffice] = useState("Public Information Officer, Municipal Corporation of Delhi, Civic Centre, JLN Marg, New Delhi");
  const [subject, setSubject] = useState("Information regarding pothole repair work on Lajpat Nagar main road");
  const [info, setInfo] = useState(`1. Total amount sanctioned for road maintenance in Lajpat Nagar ward for FY 2024-25.
2. Date-wise log of repair work carried out on the main road of Lajpat Nagar between January 2025 and the date of this application.
3. Copy of the tender documents and the agency awarded the contract.
4. The name and designation of the officer responsible for inspection.`);

  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const draft = `To,
${office}

Subject: ${subject}

Date: ${today}

Sir / Madam,

I, ${applicant}, citizen of India, residing at ${addr}, am invoking my right under the Right to Information Act, 2005, and respectfully request the following information from your office:

${info}

I am ready to pay any further fees as may be prescribed under the RTI Rules. Enclosed herewith is the prescribed fee of ₹10 by way of Indian Postal Order / Demand Draft / cash.

If the information sought is not available with you, I request you to transfer this application to the appropriate public authority under Section 6(3) of the Act and inform me of the same.

Kindly send the information to my address mentioned below. You may also reach me at ${phone} for any clarifications.

Yours sincerely,

________________________
${applicant}
${addr}
Phone: ${phone}`;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-3">
        <Field label="Your name">
          <input className={inputClass} value={applicant} onChange={(e) => setApplicant(e.target.value)} />
        </Field>
        <Field label="Your address">
          <input className={inputClass} value={addr} onChange={(e) => setAddr(e.target.value)} />
        </Field>
        <Field label="Phone">
          <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field label="Office to send it to (full address)">
          <textarea className={inputClass} rows={3} value={office} onChange={(e) => setOffice(e.target.value)} />
        </Field>
        <Field label="Subject (one line)">
          <input className={inputClass} value={subject} onChange={(e) => setSubject(e.target.value)} />
        </Field>
        <Field label="Information you want — point-wise" hint="one item per line">
          <textarea className={inputClass} rows={6} value={info} onChange={(e) => setInfo(e.target.value)} />
        </Field>
      </div>

      <DraftPanel draft={draft} filename={`rti-application.txt`} />
    </div>
  );
}

/* ============================================================
   8) Rent Agreement (Quick draft)
   ============================================================ */

function RentGen() {
  const [landlord, setLandlord] = useState("Mr. Sunil Mehta");
  const [tenant, setTenant] = useState("Ms. Priya Iyer");
  const [propertyAddr, setPropertyAddr] = useState("Flat 502, Sky Heights, Sector 22, Gurgaon");
  const [rent, setRent] = useState(25000);
  const [deposit, setDeposit] = useState(50000);
  const [startDate, setStartDate] = useState("2025-04-01");
  const [city, setCity] = useState("Gurgaon");

  const draft = `RESIDENTIAL RENT AGREEMENT

This Rent Agreement is made on _____________ at ${city}, between:

${landlord}, hereinafter called the "LANDLORD" (which expression shall include heirs, executors, administrators and legal representatives) of the ONE PART;

AND

${tenant}, hereinafter called the "TENANT" (which expression shall include heirs, executors, administrators and legal representatives) of the OTHER PART.

WHEREAS the Landlord is the absolute owner of the residential premises situated at ${propertyAddr} (hereinafter referred to as the "said premises"), and has agreed to let out the same to the Tenant on the terms and conditions hereinafter recorded.

NOW THIS AGREEMENT WITNESSETH AS UNDER:

1. TERM. The tenancy shall be for a period of ELEVEN (11) MONTHS commencing from ${startDate}. The agreement may be renewed for a further period on mutual consent and on revised terms.

2. RENT. The Tenant shall pay a monthly rent of ₹${rent.toLocaleString("en-IN")} (Rupees ${rent.toLocaleString("en-IN")} only), payable in advance on or before the 7th day of every English calendar month, by bank transfer to the Landlord's account.

3. SECURITY DEPOSIT. The Tenant has paid an interest-free refundable security deposit of ₹${deposit.toLocaleString("en-IN")} (Rupees ${deposit.toLocaleString("en-IN")} only), which shall be refunded at the time of handing over peaceful possession of the said premises, after deducting any actual damages and arrears, if any.

4. USE. The said premises shall be used by the Tenant only for residential purposes and shall not be used for any unlawful, immoral or commercial activity.

5. UTILITIES. The Tenant shall pay all electricity, water, gas, internet and other utility charges as per actual consumption, directly to the respective authorities or as billed by the Society.

6. MAINTENANCE. Day-to-day maintenance shall be borne by the Tenant. Major structural repairs and society maintenance charges shall be borne by the Landlord.

7. SUBLETTING. The Tenant shall not sublet, assign or part with possession of the said premises, in whole or in part, without prior written consent of the Landlord.

8. ALTERATIONS. The Tenant shall not make any structural alterations or additions without prior written consent of the Landlord.

9. INSPECTION. The Landlord, or his authorised representative, shall have the right to inspect the said premises on reasonable notice.

10. NOTICE. Either party may terminate this agreement by giving ONE (1) MONTH'S notice in writing. The Tenant shall hand over peaceful and vacant possession of the said premises on expiry of the term or on termination as aforesaid.

11. JURISDICTION. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the competent courts at ${city}.

IN WITNESS WHEREOF the parties hereto have set their hands on the day, month and year first above written.

LANDLORD:                                    TENANT:
${landlord}                                   ${tenant}

WITNESS 1: ____________________               WITNESS 2: ____________________`;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-3">
        <Field label="Landlord's full name">
          <input className={inputClass} value={landlord} onChange={(e) => setLandlord(e.target.value)} />
        </Field>
        <Field label="Tenant's full name">
          <input className={inputClass} value={tenant} onChange={(e) => setTenant(e.target.value)} />
        </Field>
        <Field label="Property address">
          <textarea className={inputClass} rows={2} value={propertyAddr} onChange={(e) => setPropertyAddr(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Monthly rent (₹)">
            <input className={inputClass} type="number" value={rent} onChange={(e) => setRent(+e.target.value)} />
          </Field>
          <Field label="Security deposit (₹)">
            <input className={inputClass} type="number" value={deposit} onChange={(e) => setDeposit(+e.target.value)} />
          </Field>
          <Field label="Start date">
            <input className={inputClass} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Field>
          <Field label="City (jurisdiction)">
            <input className={inputClass} value={city} onChange={(e) => setCity(e.target.value)} />
          </Field>
        </div>
        <p className="text-[12px] text-ink-400">
          11-month agreements do not need mandatory registration in most states — but stamping (₹50–₹500) is still recommended. Print on stamp paper of your state's rate.
        </p>
      </div>

      <DraftPanel draft={draft} filename={`rent-agreement-${tenant.replace(/\s+/g, "-")}.txt`} />
    </div>
  );
}

/* ============================================================
   9) FIR / Complaint draft
   ============================================================ */

function FIRGen() {
  const [name, setName] = useState("Ramesh Kumar");
  const [addr, setAddr] = useState("H. No. 45, Vinayak Colony, Indore, MP - 452010");
  const [phone, setPhone] = useState("9820000000");
  const [station, setStation] = useState("SHO, Vijay Nagar Police Station, Indore");
  const [when, setWhen] = useState("2025-03-12");
  const [where, setWhere] = useState("Bhanwarkuan main road, near State Bank ATM");
  const [what, setWhat] = useState(`On the said date around 9:30 pm, while I was returning home on my two-wheeler (registration MP-09-XX-1234), two unknown men on a black bike came from behind, blocked my path, snatched my mobile phone (Samsung S24, IMEI ending 4452) and threatened me with a knife. They sped away towards the bypass. The entire incident lasted around two minutes. There were 2-3 passersby who witnessed it.`);
  const [request, setRequest] = useState(`I request you to kindly register an FIR under appropriate sections of the Bharatiya Nyaya Sanhita, 2023, take cognizance of the matter, investigate it expeditiously, trace the accused persons, and recover my belongings.`);

  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const draft = `To,
${station}

Subject: Written complaint for registration of FIR

Date: ${today}

Respected Sir / Madam,

I, ${name}, son / daughter / wife of ____________, aged ____ years, resident of ${addr}, contact number ${phone}, hereby submit the following written complaint for kind consideration and necessary action:

1. Date and approximate time of incident: ${when}
2. Place of incident: ${where}

3. Brief facts:
${what}

4. Prayer:
${request}

I am ready to give my statement under Section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 / Section 180 BNSS, and to co-operate in the investigation.

I request you to kindly issue a written acknowledgement of this complaint mentioning the FIR / DD number, date and the name of the officer receiving it.

Thanking you,

Yours sincerely,

________________________
${name}
${addr}
Phone: ${phone}`;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-3">
        <Field label="Your full name">
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Your address">
          <input className={inputClass} value={addr} onChange={(e) => setAddr(e.target.value)} />
        </Field>
        <Field label="Your phone">
          <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field label="Police station (with address)">
          <input className={inputClass} value={station} onChange={(e) => setStation(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Incident date">
            <input className={inputClass} type="date" value={when} onChange={(e) => setWhen(e.target.value)} />
          </Field>
          <Field label="Place of incident">
            <input className={inputClass} value={where} onChange={(e) => setWhere(e.target.value)} />
          </Field>
        </div>
        <Field label="What exactly happened?" hint="be specific — names, vehicles, weapons, witnesses">
          <textarea className={inputClass} rows={6} value={what} onChange={(e) => setWhat(e.target.value)} />
        </Field>
        <Field label="What do you want the police to do?">
          <textarea className={inputClass} rows={3} value={request} onChange={(e) => setRequest(e.target.value)} />
        </Field>
      </div>

      <DraftPanel draft={draft} filename={`written-complaint.txt`} />
    </div>
  );
}

/* ============================================================
   Draft panel — Copy / Download
   ============================================================ */
function DraftPanel({ draft, filename }: { draft: string; filename: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const download = () => {
    const blob = new Blob([draft], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-ink-100 bg-paper-100/40">
      <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
          Live preview
        </p>
        <div className="flex gap-2">
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 py-1 text-[11.5px] font-medium text-ink-700 transition hover:border-saffron-300 hover:text-saffron-700"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={download}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-[11.5px] font-medium text-paper-50 transition hover:bg-ink-700"
          >
            <Download className="h-3 w-3" />
            .txt
          </button>
        </div>
      </div>
      <pre className="max-h-[460px] overflow-auto whitespace-pre-wrap p-5 font-mono text-[12.5px] leading-relaxed text-ink-700">
        {draft}
      </pre>
    </div>
  );
}
