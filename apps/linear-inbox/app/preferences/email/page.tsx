"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function EmailNotificationsPage() {
  // State for each checkbox
  const [documentChanges, setDocumentChanges] = useState(true)
  const [projectUpdates, setProjectUpdates] = useState(true)
  const [teamMemberChanges, setTeamMemberChanges] = useState(true)
  const [weeklySummary, setWeeklySummary] = useState(true)

  // Handler functions for each checkbox
  const handleDocumentChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentChanges(e.target.checked)
    console.log("Document changes notification:", e.target.checked)
  }

  const handleProjectUpdates = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectUpdates(e.target.checked)
    console.log("Project updates notification:", e.target.checked)
  }

  const handleTeamMemberChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamMemberChanges(e.target.checked)
    console.log("Team member changes notification:", e.target.checked)
  }

  const handleWeeklySummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklySummary(e.target.checked)
    console.log("Weekly summary notification:", e.target.checked)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center overflow-auto">
        <div className="w-full max-w-4xl px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/preferences" className="text-zinc-500 hover:text-zinc-900">
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <h1 className="text-2xl font-bold">Email Notifications</h1>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email notification settings</CardTitle>
                <CardDescription>Choose which notifications you receive via email</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Document changes</h3>
                      <p className="text-sm text-zinc-500">When documents are created or updated</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="email-documents" 
                        className="h-4 w-4" 
                        checked={documentChanges}
                        onChange={handleDocumentChanges}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project updates</h3>
                      <p className="text-sm text-zinc-500">When project details or settings change</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="email-projects" 
                        className="h-4 w-4" 
                        checked={projectUpdates}
                        onChange={handleProjectUpdates}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Team member changes</h3>
                      <p className="text-sm text-zinc-500">When team members are added or removed</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="email-team" 
                        className="h-4 w-4" 
                        checked={teamMemberChanges}
                        onChange={handleTeamMemberChanges}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Weekly summary</h3>
                      <p className="text-sm text-zinc-500">Weekly digest of workspace activity</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="email-summary" 
                        className="h-4 w-4" 
                        checked={weeklySummary}
                        onChange={handleWeeklySummary}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email preferences</CardTitle>
                <CardDescription>Configure how you receive email notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notification frequency</h3>
                      <p className="text-sm text-zinc-500">How often you receive notification emails</p>
                    </div>
                    <select className="h-9 rounded-md border border-zinc-200 px-3">
                      <option>Immediately</option>
                      <option>Daily digest</option>
                      <option>Weekly digest</option>
                    </select>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email format</h3>
                      <p className="text-sm text-zinc-500">Choose your preferred email format</p>
                    </div>
                    <select className="h-9 rounded-md border border-zinc-200 px-3">
                      <option>HTML</option>
                      <option>Plain text</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 