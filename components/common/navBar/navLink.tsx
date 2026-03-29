"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
    href: string
    label: string
}

const NavLink = ({href, label}: Props) => {
  const path = usePathname();
  const query = useSearchParams();

  const fullPath = query ? `${path}?${query.toString()}` : path

  const activePath = fullPath === href;

  return (
    <Link
      className={`${activePath ? 'text-primary border-b-2 border-primary': 'text-tertiary'} font-bold tracking-tight hover:border-b-2 border-primary hover:pb-1 transition-all`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavLink;
