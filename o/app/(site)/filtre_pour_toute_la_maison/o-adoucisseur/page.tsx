"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Wrench, Home, ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page en construction | Ö HOME",
  description: "Cette section sera bientôt offerte. Revenez prochainement.",
};

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 rounded-full bg-blue-50 p-6 dark:bg-blue-950/40">
        <Wrench className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      </div>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        À venir bientôt
      </h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
        Cette page est en construction. Nous y travaillons activement.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "inline-flex items-center gap-2 rounded-full"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>

        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "inline-flex items-center gap-2 rounded-full"
          )}
        >
          <Home className="h-4 w-4" />
          Accueil
        </Link>
      </div>

      <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
        Merci de votre patience.
      </p>
    </main>
  );
}
