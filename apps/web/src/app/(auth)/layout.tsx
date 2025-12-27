import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f8f8] px-4 py-8 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#fdc8b4]/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#bad2ff]/35 blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-sm">{children}</div>
    </div>
  );
}
