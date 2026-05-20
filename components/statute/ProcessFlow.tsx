"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProcessFlowVisual } from "@/lib/statutes/_types";

/**
 * Linear process visual: each node is a step, each edge is a transition.
 * Renders horizontally on desktop, vertically on mobile, with stagger.
 */
export default function ProcessFlow({ visual }: { visual: ProcessFlowVisual }) {
  // Resolve node-by-id and walk edges to build display order.
  // Falls back to nodes order if edges form a clean line.
  const order = topoOrder(visual.nodes, visual.edges);

  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-ink-100 bg-paper-50 p-6 sm:p-8">
      <figcaption>
        <p className="eyebrow">Process</p>
        <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
          {visual.title}
        </h4>
        {visual.caption && (
          <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-500">
            {visual.caption}
          </p>
        )}
      </figcaption>

      <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
        {order.map((node, i) => (
          <div key={node.id} className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-1 items-start gap-3 rounded-2xl border border-saffron-200 bg-saffron-50 p-4"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saffron-500 font-mono text-[12px] font-semibold text-white tabular">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-[15px] font-medium leading-tight text-ink-900">
                  {node.label}
                </p>
                {node.sub && (
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                    {node.sub}
                  </p>
                )}
                {node.ref && (
                  <p className="mt-2 inline-flex rounded-md bg-saffron-100 px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-saffron-700">
                    {node.ref}
                  </p>
                )}
              </div>
            </motion.div>
            {i < order.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 + 0.15 }}
                className="flex shrink-0 items-center justify-center text-saffron-500"
                aria-hidden
              >
                <ArrowRight className="h-4 w-4 rotate-90 lg:rotate-0" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}

function topoOrder(
  nodes: ProcessFlowVisual["nodes"],
  edges: ProcessFlowVisual["edges"]
): ProcessFlowVisual["nodes"] {
  if (!edges.length) return nodes;
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  // simple linear walk: find a node with no incoming edge, walk forward
  const incoming = new Map<string, number>();
  nodes.forEach((n) => incoming.set(n.id, 0));
  edges.forEach((e) => incoming.set(e.to, (incoming.get(e.to) ?? 0) + 1));
  const start = nodes.find((n) => incoming.get(n.id) === 0);
  if (!start) return nodes;
  const order: ProcessFlowVisual["nodes"] = [];
  const seen = new Set<string>();
  let cur: string | undefined = start.id;
  while (cur && !seen.has(cur)) {
    const node = nodeMap.get(cur);
    if (!node) break;
    order.push(node);
    seen.add(cur);
    const nextEdge = edges.find((e) => e.from === cur);
    cur = nextEdge?.to;
  }
  // append unseen (branches) at the end
  nodes.forEach((n) => {
    if (!seen.has(n.id)) order.push(n);
  });
  return order;
}
