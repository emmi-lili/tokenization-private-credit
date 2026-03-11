"use client";

import Link from "next/link";
import Image from "next/image";
import { Megaphone, TrendingUp } from "lucide-react";
import { InvestorProfileCard } from "./investor-profile-card";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Manage Campaigns", icon: Megaphone },
  { href: "/roi", label: "ROI", icon: TrendingUp, active: true },
];

export function RoiSidebar() {
  return (
    <aside
      className={cn(
        "flex w-[240px] shrink-0 flex-col border-r border-gray-200 bg-white",
        "fixed left-0 top-0 bottom-0 z-50"
      )}
    >
      <div className="flex flex-1 flex-col pt-6 pb-4">
        <div className="px-4 mb-8">
          <Link href="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
            <Image
              src="/escrows/interactuar.jpg"
              alt="interactuar"
              width={260}
              height={68}
              className="h-16 w-auto max-w-full object-contain object-left"
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-col gap-0.5 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active ?? false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-cyan-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon
                  className={cn(
                    "size-4 shrink-0",
                    isActive ? "text-cyan-600" : "text-gray-500"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto px-3 pt-4">
          <InvestorProfileCard name="Alex Morgan" label="Investor" />
        </div>
      </div>
    </aside>
  );
}
