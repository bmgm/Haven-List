"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkData } from "@/data/data"; // Import NavLinkData type

interface NavLinkProps {
  link: NavLinkData;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      className={pathName === link.url ? "text-orange-500" : ""}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
