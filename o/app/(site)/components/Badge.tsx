// app/(site)/components/Badge.tsx
import { PropsWithChildren } from 'react';

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
      {children}
    </span>
  );
}
