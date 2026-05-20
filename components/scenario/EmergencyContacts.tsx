import { LifeBuoy, Phone } from "lucide-react";

type Helpline = {
  label: string;
  number: string;
  desc?: string;
};

const TAG_HELPLINES: Record<string, Helpline[]> = {
  Criminal: [
    { label: "Pan-India Emergency", number: "112", desc: "Police, ambulance, fire" },
    { label: "Women in distress", number: "1091" },
    { label: "Cyber crime", number: "1930" },
  ],
  POSH: [
    { label: "Women's helpline", number: "1091" },
    { label: "Pan-India Emergency", number: "112" },
    { label: "Free legal aid (NALSA)", number: "15100" },
  ],
  Family: [
    { label: "Women's helpline", number: "1091" },
    { label: "Child helpline", number: "1098" },
    { label: "Free legal aid (NALSA)", number: "15100" },
  ],
  Consumer: [
    { label: "National Consumer Helpline", number: "1915", desc: "Pre-litigation support" },
    { label: "Cyber crime (financial)", number: "1930" },
  ],
  Banking: [
    { label: "Cyber crime", number: "1930", desc: "Report fraud within 24 hrs" },
    { label: "RBI banking ombudsman info", number: "14448" },
  ],
  Digital: [
    { label: "Cyber crime", number: "1930" },
    { label: "Pan-India Emergency", number: "112" },
  ],
  Labour: [
    { label: "EPFO helpdesk", number: "14470" },
    { label: "Free legal aid (NALSA)", number: "15100" },
  ],
};

const DEFAULT_HELPLINES: Helpline[] = [
  { label: "Pan-India Emergency", number: "112" },
  { label: "Free legal aid (NALSA)", number: "15100", desc: "Toll-free, 24x7" },
];

export default function EmergencyContacts({ tag }: { tag: string }) {
  const list = TAG_HELPLINES[tag] || DEFAULT_HELPLINES;

  return (
    <div className="card-heritage overflow-hidden">
      <div className="flex items-center gap-3 border-b border-ink-100 bg-india-50/40 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-india-500/10 text-india-600">
          <LifeBuoy className="h-4 w-4" />
        </span>
        <div>
          <h2 className="font-serif text-[17px] font-medium text-ink-900">
            Need help right now?
          </h2>
          <p className="text-[12px] text-ink-500">
            Toll-free numbers — tap to call.
          </p>
        </div>
      </div>

      <ul className="divide-y divide-ink-100">
        {list.map((h) => (
          <li key={h.number}>
            <a
              href={`tel:${h.number}`}
              className="group flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-paper-100/70"
            >
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-ink-900">{h.label}</p>
                {h.desc && (
                  <p className="mt-0.5 text-[12px] text-ink-500">{h.desc}</p>
                )}
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-india-50 px-3 py-1.5 text-[13px] font-semibold tabular text-india-700 transition-colors group-hover:bg-india-500 group-hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                {h.number}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
