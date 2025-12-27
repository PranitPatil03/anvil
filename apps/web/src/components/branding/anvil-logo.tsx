import { cn } from "@/lib/utils";
import Image from "next/image";

interface AnvilLogoProps {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
}

export function AnvilLogo({
  className,
  iconClassName,
  wordmarkClassName,
  showWordmark = true,
}: AnvilLogoProps) {
  if (showWordmark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          alt="anvil"
          className={cn("h-8 w-auto", iconClassName, wordmarkClassName)}
          height={42}
          priority
          src="/images/logo.svg"
          width={134}
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-start overflow-hidden rounded-lg border border-gray-200 bg-white",
          iconClassName,
        )}
      >
        <Image
          alt="anvil"
          className="h-full w-auto max-w-none object-left"
          height={42}
          src="/images/logo.svg"
          width={134}
        />
      </span>
    </span>
  );
}
