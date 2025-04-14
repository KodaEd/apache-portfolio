import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-blue-600 transition-colors"
    aria-label={label}
  >
    <Icon size={20} />
  </Link>
);

export default SocialIcon;
