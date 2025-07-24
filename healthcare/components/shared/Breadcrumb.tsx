// components/breadcrumb.jsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({
  items,
}: {
  items: { href: string; label: string; active: boolean }[];
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {item.active ? (
            <span className="text-foreground">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
