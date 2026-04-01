import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0D10] text-[#EAE7DF]">
      <Card className="w-full max-w-md mx-4 bg-[#161A20] border border-[#8B6B3E]/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <AlertCircle className="h-8 w-8 text-[#5A1F1F]" />
            <h1 className="text-2xl font-serif text-[#EAE7DF]">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-[#EAE7DF]/60 font-light">
            The path you seek does not exist. Return to the doctrine.
          </p>

          <div className="mt-8">
            <Link href="/">
              <a className="text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                Return Home
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
