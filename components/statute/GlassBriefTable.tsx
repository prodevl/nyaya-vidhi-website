import React from "react";

type BriefPunishment = {
  offence: string;
  punishment: string;
  section?: string;
};

type Parsed = {
  imprisonment: string;
  fine: string;
  clubbing: "both" | "or" | "none";
};

function parsePunishment(text: string): Parsed {
  const lower = text.toLowerCase();
  let imprisonment = "";
  let fine = "";
  let clubbing: "both" | "or" | "none" = "none";

  const life = /life/.test(lower);
  const death = /death/.test(lower);
  const yearsRange = text.match(/\b(\d+\s*(?:months?|years?))(?:\s*[–-]\s*(\d+\s*(?:months?|years?)))?/i);
  if (death) imprisonment = imprisonment ? imprisonment + ", death" : "death";
  if (life) imprisonment = imprisonment ? imprisonment + ", life" : "life";
  if (yearsRange) {
    const a = yearsRange[1];
    const b = yearsRange[2];
    imprisonment = b ? `${a} – ${b}` : a;
  }
  if (!imprisonment && /imprison/.test(lower)) imprisonment = "up to specified term";

  const fineAmt = text.match(/₹[\d,]+\s*(?:lakh|crore)?|fine\s+up\s+to\s+[\w₹.,]+|\btwice the cheque amount\b/i);
  if (fineAmt) fine = fineAmt[0];
  else if (/\bfine\b/.test(lower)) fine = "fine";

  if (/\band\/or\b|\bor\/and\b/i.test(text)) clubbing = "or";
  else if (/\+|\band\b|\bwith\b/i.test(text) && /fine/i.test(text) && /imprison/i.test(text)) clubbing = "both";
  else if (/\bor\b/i.test(text)) clubbing = "or";
  else clubbing = fine && imprisonment ? "both" : fine || imprisonment ? "none" : "none";

  return { imprisonment, fine, clubbing };
}

function receiverFromOffence(offence: string): string {
  const map: [RegExp, string][] = [
    [/registrar/i, "Marriage Registrar"],
    [/minister|clerg(y|yman)/i, "Minister/Clergy"],
    [/promoter/i, "Promoter"],
    [/agent/i, "Agent"],
    [/employer/i, "Employer"],
    [/worker|employee/i, "Worker/Employee"],
    [/manufacturer|endorser/i, "Manufacturer/Endorser"],
    [/company/i, "Company"],
    [/unauthori[sz]ed|unlicensed/i, "Unauthorised/Unlicensed person"],
    [/whoever|person/i, "Person concerned"],
  ];
  for (const [re, label] of map) if (re.test(offence)) return label;
  return "—";
}

type Props = {
  rows: BriefPunishment[];
};

export default function GlassBriefTable({ rows }: Props) {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: 16, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>Important sections and punishments</h3>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              <th style={th}>Section</th>
              <th style={th}>Sub‑section</th>
              <th style={th}>Offence (simple)</th>
              <th style={th}>Punishment receiver</th>
              <th style={th}>Imprisonment</th>
              <th style={th}>Fine / penalty</th>
              <th style={th}>Clubbing</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const parsed = parsePunishment(r.punishment);
              const sub = r.section?.match(/\(([^)]+)\)/)?.[1] ?? "—";
              return (
                <tr key={i} style={{ background: i % 2 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                  <td style={td}>{r.section ?? "—"}</td>
                  <td style={td}>{sub}</td>
                  <td style={{ ...td, minWidth: 260 }}>{r.offence}</td>
                  <td style={td}>{receiverFromOffence(r.offence)}</td>
                  <td style={td}>{parsed.imprisonment || "—"}</td>
                  <td style={td}>{parsed.fine || "—"}</td>
                  <td style={td}>{parsed.clubbing}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 14px",
  fontWeight: 600,
  fontSize: 13,
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "12px 14px",
  fontSize: 13,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  verticalAlign: "top",
};
