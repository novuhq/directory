"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Code, Settings, Users } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [hasSeenModal, setHasSeenModal] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const seen = localStorage.getItem("preferences-demo-modal-seen");
    if (seen === "true") {
      setHasSeenModal(true);
    }
  }, []);

  const handleClose = () => {
    // Mark as seen in localStorage
    localStorage.setItem("preferences-demo-modal-seen", "true");
    setHasSeenModal(true);
    onClose();
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("preferences-demo-modal-seen", "true");
    setHasSeenModal(true);
    onClose();
  };

  return (
    <Dialog open={isOpen && !hasSeenModal} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold">Demo Interface</DialogTitle>
              <Badge variant="secondary" className="mt-1">UI Component Only</Badge>
            </div>
          </div>
          
          <div className="text-left space-y-4 text-base text-muted-foreground">
            <div className="text-zinc-700">
              This is a demonstration of the notification preferences UI component. The interface shows 
              how to structure notification settings, but the workflows and preferences are placeholder examples.
            </div>
            
            <div className="grid gap-3">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Current State</h4>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Placeholder workflows (linear-updates, invite-notifications, etc.)</li>
                  <li>• Mock preference updates with simulated delays</li>
                  <li>• UI demonstrates the component structure and interactions</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-green-900">For Production</h4>
                </div>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Replace placeholder workflows with your actual Novu workflows</li>
                  <li>• Connect to real Novu API endpoints for preference management</li>
                  <li>• Implement proper user authentication and authorization</li>
                  <li>• Customize the UI to match your application's design system</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-900">Note</span>
              </div>
              <div className="text-sm text-amber-800">
                The toggles below are interactive but only simulate preference updates. 
                They demonstrate the UI behavior without connecting to actual Novu workflows.
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between pt-4">
          <Button
            variant="outline"
            onClick={handleDontShowAgain}
            className="text-sm border-zinc-300 hover:bg-zinc-50"
          >
            Don't show again
          </Button>
          <Button 
            onClick={handleClose} 
            className="text-sm bg-blue-600 hover:bg-blue-700"
          >
            Explore Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 