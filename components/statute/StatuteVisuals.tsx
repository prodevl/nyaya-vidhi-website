import type { Visual } from "@/lib/statutes/_types";
import ProcessFlow from "./ProcessFlow";
import ComparisonTable from "./ComparisonTable";
import PenaltyMatrix from "./PenaltyMatrix";
import Timeline from "./Timeline";
import Callout from "./Callout";

/**
 * Renders any Visual via the right concrete component.
 * Single switch keeps page code tidy.
 */
export default function StatuteVisuals({ visuals }: { visuals?: Visual[] }) {
  if (!visuals || visuals.length === 0) return null;
  return (
    <div className="space-y-2">
      {visuals.map((v, i) => {
        switch (v.kind) {
          case "process-flow":
            return <ProcessFlow key={i} visual={v} />;
          case "comparison-table":
            return <ComparisonTable key={i} visual={v} />;
          case "penalty-matrix":
            return <PenaltyMatrix key={i} visual={v} />;
          case "timeline":
            return <Timeline key={i} visual={v} />;
          case "callout":
            return <Callout key={i} visual={v} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
