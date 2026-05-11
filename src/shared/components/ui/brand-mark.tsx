import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  return (
    <Link
      href={href}
      aria-label="aany home"
      className="inline-flex items-center gap-0"
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-visible">
        <Image
  src="/images/aany_logo.svg"
  alt=""
  width={32}
  height={32}
  priority
  className="h-8 w-8 object-contain"
/>
      </span>

      <span className="-translate-x-[3px] translate-y-[1px] text-2xl font-black tracking-[-0.03em] text-black">
  any
</span>
    </Link>
  );
}