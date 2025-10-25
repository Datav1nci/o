import Link from "next/link";
import { Construction, Home, ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Page en construction | Ö HOME",
  description: "Cette section sera bientôt disponible — revenez plus tard.",
};

export default function Page() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {/* Icon */}
      <div className="mb-6 rounded-full bg-blue-50 p-6 dark:bg-blue-950/40">
        <Construction className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        À venir bientôt
      </h1>

      {/* Subtitle */}
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
        Cette page est actuellement en construction.  
        Nous travaillons activement pour vous offrir cette nouvelle section très bientôt.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
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

        <button
          onClick={() => window.history.back()}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "inline-flex items-center gap-2 rounded-full"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>
      </div>

      {/* Footer note */}
      <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
        Merci de votre patience et de votre intérêt pour Ö&nbsp;Home.
      </p>
    </main>
  );
}
