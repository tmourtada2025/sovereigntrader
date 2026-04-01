import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0D10] text-[#EAE7DF] p-4">
          <Card className="w-full max-w-md bg-[#161A20] border border-[#5A1F1F]/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <AlertCircle className="h-8 w-8 text-[#5A1F1F]" />
                <h1 className="text-2xl font-serif text-[#EAE7DF]">System Malfunction</h1>
              </div>

              <p className="mt-4 text-sm text-[#EAE7DF]/60 font-light">
                A critical error has occurred in the interface protocol.
              </p>
              
              <div className="mt-4 p-4 bg-[#0B0D10] border border-[#8B6B3E]/10 text-xs font-mono text-[#8B6B3E] overflow-auto max-h-32">
                {this.state.error?.message}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => window.location.reload()}
                  className="text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                >
                  Reinitialize System
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
