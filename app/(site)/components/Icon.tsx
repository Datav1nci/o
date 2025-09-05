import { type LucideIcon } from 'lucide-react';


export function Icon({ as: As, className }: { as: LucideIcon; className?: string }) {
return <As className={className} aria-hidden="true" />;
}