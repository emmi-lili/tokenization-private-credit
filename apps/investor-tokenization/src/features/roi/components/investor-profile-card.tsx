import { Avatar, AvatarFallback, AvatarImage } from "@tokenization/ui/avatar";
import { cn } from "@/lib/utils";

type InvestorProfileCardProps = {
  name?: string;
  avatarUrl?: string | null;
  label?: string;
  className?: string;
};

const defaultName = "Investor";
const defaultLabel = "Investor";

export function InvestorProfileCard({
  name = defaultName,
  avatarUrl,
  label = defaultLabel,
  className,
}: InvestorProfileCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3",
        className
      )}
    >
      <Avatar className="size-10 rounded-full shrink-0">
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} alt={name} />
        ) : null}
        <AvatarFallback className="bg-gray-200 text-gray-600 text-sm font-medium">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-xs text-gray-500 truncate">{label}</p>
      </div>
    </div>
  );
}
