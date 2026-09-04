import { ReactNode } from "react";

export default function DetailBlock({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="panel p-6 sm:p-7">
      <h3 className="font-mono text-xs uppercase tracking-wide text-accent-bright">{heading}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
