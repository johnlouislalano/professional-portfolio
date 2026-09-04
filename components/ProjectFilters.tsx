"use client";

import { motion } from "framer-motion";
import { Category, CATEGORY_LABEL } from "@/lib/types";

export type FilterValue = Category | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "prototype-vehicle", label: CATEGORY_LABEL["prototype-vehicle"] },
  { value: "products", label: CATEGORY_LABEL.products },
  { value: "simulation-analysis", label: CATEGORY_LABEL["simulation-analysis"] },
  { value: "fabrication", label: CATEGORY_LABEL.fabrication },
];

export default function ProjectFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (v: FilterValue) => void;
}) {
  return (
    <div className="thin-scroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              isActive ? "text-ink" : "text-mist hover:text-ivory"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-full bg-ivory"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative">{f.label}</span>
          </button>
        );
      })}
    </div>
  );
}
