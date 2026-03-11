"use client";

import { ReactNode } from "react";
import { RoiSidebar } from "./components/roi-sidebar";

type RoiDashboardShellProps = {
  children: ReactNode;
};

/**
 * Full-viewport ROI dashboard shell (sidebar + main).
 * Rendered as a fixed overlay so the /roi route has its own chrome without changing root layout.
 */
export function RoiDashboardShell({ children }: RoiDashboardShellProps) {
  return (
    <div className="fixed inset-0 z-[60] flex bg-gray-100">
      <RoiSidebar />
      <main className="flex-1 overflow-auto pl-[240px]">
        <div className="min-h-full bg-gray-100 p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
