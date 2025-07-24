import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { BellOff, Clock, Trash2, Paperclip, ArrowUp, Info, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

interface ActivityItem {
  user: string;
  action: string;
  time: string;
  avatarUrl: string;
}

export function IssueDetail() {
  // DEMO DATA: This would normally be fetched from the database
  const activity: ActivityItem[] = [
    {
      user: "Radoslaw",
      action: "commented",
      time: "2 hours ago",
      avatarUrl:
        "https://public.linear.app/f13f1996-c9b0-4fea-8ee7-2c3faf6a832d/af212def-41f3-474c-bb08-a7d36e06922b/87d2e8d4-9ff7-4566-9d6a-3240ad17f546",
    },
    {
      user: "Paweł",
      action: "updated the status to In Progress",
      time: "1 day ago",
      avatarUrl:
        "https://public.linear.app/f13f1996-c9b0-4fea-8ee7-2c3faf6a832d/b10238ef-973b-4a47-a143-df08594c502f/d5e789f7-4470-4a1f-83d1-f0cfa9153d50",
    },
    {
      user: "Team",
      action: "created this issue",
      time: "2 days ago",
      avatarUrl: "",
    },
  ];



  return (
    <div className={cn("h-full flex flex-col bg-background")}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-1">
          <span className="text-md font-medium text-muted-foreground">
            Issue Item
          </span>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-muted-foreground"
              >
                <path
                  d="M6.5 3.5L10.5 7.5L6.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="text-md font-medium text-muted-foreground">
                Issue Item
              </span>
            </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            <BellOff className="h-4 w-4 mr-1" />
            Unsubscribe
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            <Clock className="h-4 w-4 mr-1" />
            Snooze
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete notification
          </button>
        </div>
      </div>

      {/* Main content area with side panel */}
      <div className="flex-1 flex min-h-0 flex-col lg:flex-row">
        {/* Main content */}
        <div className="flex-1 overflow-auto p-4 lg:pl-8 space-y-6 min-w-0">
          {/* Description Block */}
          <div className="space-y-4 bg-background rounded-lg">

            {/* Demo Information */}
            <div className="space-y-4">
              <div className="bg-muted/50 border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="space-y-3 min-w-0 flex-1">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Demo Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        All notifications displayed in this demo are hard-coded static content. To see real notifications with actual properties that the inbox can render, you need to trigger a notification using the workflow trigger code below.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Workflow Trigger Code Sample</h4>
                      <div className="bg-background border rounded-lg overflow-hidden">
                        <div className="bg-muted px-3 py-2 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-muted-foreground text-xs ml-2 font-medium">Terminal</span>
                            </div>
                            <button
                              className="h-6 w-6 p-0 hover:bg-muted-foreground/10 rounded flex items-center justify-center transition-colors"
                              title="Copy code to clipboard (Demo: Would copy to clipboard)"
                            >
                              <Copy className="h-3 w-3 text-muted-foreground" />
                            </button>
                          </div>
                        </div>
                        <div className="p-3">
                          <div className="overflow-x-auto max-h-96">
                            <pre className="text-xs font-mono text-foreground leading-relaxed whitespace-pre-wrap break-all">
                              <code>{`curl -X POST https://api.novu.co/v1/events/trigger \\
  -H "Authorization: ApiKey YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
  "name": "issue-{event}",
  "to": [
    {
      "type": "Topic",
      "topicKey": "issue-ENG-158"
    }
  ],
  "payload": {
    "id": "ef42a753-366e-4352-a852-7fbc0225777c",
    "identifier": "ENG-158",
    "title": "Data inconsistency in invoice generation",
    "description": "Some users are reporting discrepancies in the invoice data exported from the dashboard.",
    "action": "assigned",
    "eventTime": "2025-02-14T06:25:02.806Z",
    "path": "/demo/issue/ENG-158/data-inconsistency",
    "cta": {
      "label": "View issue",
      "url": "/demo/issue/ENG-158/data-inconsistency"
    },
    "performedBy": {
      "id": "09fff126-dc34-425d-b5f9-72e5378a24f4",
      "name": "Jane Developer",
      "avatar": "https://cdn.novu.dev/avatars/jane.jpg",
      "email": "jane@example.com"
    },
    "stateId": "efd22ae7-093c-41bd-b32f-2d870a3de03f",
    "stateLabel": "In Progress",
    "priority": 3,
    "labelIds": [
      "8f0b3326-91da-4c9a-ba3b-160467a0141f",
      "ab3b779e-d8e1-4f4c-96a0-b180fc627815"
    ],
    "team": {
      "id": "af7d4b2c-c579-4d92-a414-de29913ec2a3",
      "key": "ENG",
      "name": "Engineering",
      "icon": "Gears",
      "color": "#5e6ad2"
    },
    "group": {
      "key": "issue-ENG-158",
      "digest": "2h"
    }
  }
}'`}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Replace YOUR_API_KEY with your actual Novu API key. This will create a real notification that shows all the properties the inbox component can render.
                      </p>
                      <div className="bg-muted/30 border rounded p-2 mt-2">
                        <p className="text-xs text-muted-foreground">
                          <strong>Note:</strong> To test real notifications, you need to clone this repository and run it locally with your own Novu instance. The demo environment only shows static content.
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-blue-900 mb-1 text-sm">Important: Payload Optimization</h5>
                            <p className="text-xs text-blue-800 mb-1">
                              Not all issue data shown in this demo needs to be passed in the notification payload. Only include the necessary properties for your use case.
                            </p>
                            <p className="text-xs text-blue-700">
                              <strong>Learn more:</strong> Visit the inbox directory item page to explore the workflow schema and data models for optimal payload structure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Requirements</h3>
                <div className="text-xs text-gray-500 mb-2">(Static demo content - would be fetched from database)</div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>OAuth integration with Google and GitHub</li>
                  <li>JWT token generation and validation</li>
                  <li>User session management</li>
                  <li>Password reset functionality</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Technical Design</h3>
                <div className="text-xs text-gray-500 mb-2">(Static demo content - would be fetched from database)</div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use NextAuth.js for OAuth providers</li>
                  <li>Implement JWT with refresh tokens</li>
                  <li>Store sessions in Redis</li>
                  <li>Set up email service for password reset</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Activity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Activity</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Unsubscribe
                </button>
                <div className="flex items-center -space-x-4">
                  <Avatar className="h-[28px] w-[28px] border-2 border-background">
                    <AvatarImage
                      src="https://public.linear.app/f13f1996-c9b0-4fea-8ee7-2c3faf6a832d/af212def-41f3-474c-bb08-a7d36e06922b/87d2e8d4-9ff7-4566-9d6a-3240ad17f546"
                      alt="Avatar of Paweł Tymczuk"
                    />
                    <AvatarFallback>PT</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-[28px] w-[28px] border-2 border-background">
                    <AvatarImage
                      src="https://public.linear.app/f13f1996-c9b0-4fea-8ee7-2c3faf6a832d/af212def-41f3-474c-bb08-a7d36e06922b/87d2e8d4-9ff7-4566-9d6a-3240ad17f546"
                      alt="Avatar of Radoslaw Gozdzialski"
                    />
                    <AvatarFallback>RG</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-[28px] w-[28px] border-2 border-background">
                    <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            <div className="space-y-4 pl-2">
              {activity.map((item: ActivityItem, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={item.avatarUrl}
                      alt={`Avatar of ${item.user}`}
                    />
                    <AvatarFallback>{item.user.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <button className="hover:text-foreground transition-colors">
                        {item.user}
                      </button>
                      <span>{item.action}</span>
                      <span>•</span>
                      <button className="hover:text-foreground transition-colors">
                        {item.time}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Box */}
          <div className="relative mt-6">
            <div className="text-xs text-gray-500 mb-2">(Comment functionality would sync with database)</div>
            <Textarea
              placeholder="Leave a comment... (Demo: Would sync with database)"
              className="min-h-[100px] resize-none pb-12"
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-8 w-8 rounded-full">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-full lg:w-64 lg:border-l p-4 space-y-3 flex-shrink-0 border-t lg:border-t-0">
          {/* Properties Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Properties
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <button
                  aria-label="Copy issue URL"
                  className="p-1 rounded hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-muted-foreground"
                  >
                    <path d="M9.30558 10.206C9.57224 10.4726 9.59447 10.8912 9.37225 11.1831L9.30558 11.2594L6.84751 13.7175C5.58692 14.9781 3.54311 14.9781 2.28252 13.7175C1.0654 12.5004 1.02344 10.5531 2.15661 9.28564L2.28252 9.15251L4.74059 6.69443C5.0315 6.40353 5.50315 6.40353 5.79405 6.69443C6.06071 6.9611 6.08294 7.37963 5.86072 7.67161L5.79405 7.74789L3.33598 10.206C2.6572 10.8847 2.6572 11.9853 3.33598 12.664C3.98082 13.3089 5.00628 13.3411 5.68918 12.7608L5.79405 12.664L8.25212 10.206C8.54303 9.91506 9.01468 9.91506 9.30558 10.206ZM9.82982 6.17019C10.1207 6.46109 10.1207 6.93274 9.82982 7.22365L7.34921 9.70427C7.0583 9.99518 6.58665 9.99518 6.29575 9.70427C6.00484 9.41337 6.00484 8.94172 6.29575 8.65081L8.77637 6.17019C9.06727 5.87928 9.53892 5.87928 9.82982 6.17019ZM13.7175 2.2825C14.9346 3.49962 14.9766 5.44688 13.8434 6.71436L13.7175 6.84749L11.2594 9.30557C10.9685 9.59647 10.4969 9.59647 10.206 9.30557C9.93931 9.03891 9.91709 8.62037 10.1393 8.32839L10.206 8.25211L12.664 5.79403C13.3428 5.11525 13.3428 4.01474 12.664 3.33596C12.0192 2.69112 10.9938 2.65888 10.3109 3.23923L10.206 3.33596L7.74791 5.79403C7.457 6.08494 6.98535 6.08494 6.69445 5.79403C6.42779 5.52737 6.40556 5.10883 6.62778 4.81686L6.69445 4.74057L9.15252 2.2825C10.4131 1.02191 12.4569 1.02191 13.7175 2.2825Z"></path>
                  </svg>
                </button>
                <button
                  aria-label="Copy issue ID"
                  className="p-1 rounded hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-muted-foreground"
                  >
                    <path d="M10.957 1.8643C11.4444 2.31542 11.0188 3 10.3547 3c-.2436 0-.47136-.10549-.67781-.23466C9.40812 2.59719 9.09041 2.5 8.75 2.5h-4.5c-.47683 0-.90911.1907-1.22475.5H3v.02525c-.3093.31564-.5.74792-.5 1.22475v4.5c0 .34041.09719.65812.26534.92689C2.8945 9.88334 3 10.1111 3 10.3547c0 .6641-.68458 1.0897-1.1357.6023C1.32786 10.3775 1 9.60202 1 8.75v-4.5C1 2.45507 2.45507 1 4.25 1h4.5c.85202 0 1.6275.32786 2.207.8643ZM11.8284 8.34533c.3757.7514.406 1.62906.0829 2.40447l-.0815.1957c-.2018.4842-.6749.7996-1.1994.7996h-.1255V7.75506h.3685c.4044 0 .7742.22851.955.59027Z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7499 14.9999c1.795 0 3.25-1.455 3.25-3.25V7.24994c0-1.79492-1.455-3.25-3.25-3.25H7.24994c-1.79492 0-3.25 1.45508-3.25 3.25v4.49996c0 1.795 1.45508 3.25 3.25 3.25h4.49996ZM7.24995 6.24506c.41697 0 .755.33802.755.755v5.50004c0 .4169-.33803.755-.755.755-.41698 0-.755-.3381-.755-.755V7.00006c0-.41698.33802-.755.755-.755Zm6.05515 5.08554c.4919-1.1805.4459-2.51666-.1261-3.66056-.4366-.87332-1.3292-1.42498-2.3056-1.42498H9.74992c-.41697 0-.755.33802-.755.755v5.50004c0 .4169.33803.755.755.755h.88048c1.1341 0 2.157-.682 2.5932-1.7289l.0815-.1956Z"
                    ></path>
                  </svg>
                </button>
                <button
                  aria-label="Copy branch name"
                  className="p-1 rounded hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-muted-foreground"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 0 1 4.315-.894c.164.378.22.795.164 1.203A2.25 2.25 0 0 1 12.5 5.371V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 1 1 1.5 0v1.836a2.492 2.492 0 0 1 1-.208h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Zm-7.5 9.499a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 space-y-2">
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
                <span className="text-sm">Backlog</span>
              </button>
            </div>
          </div>

          {/* Priority */}
          <div className="flex items-center gap-2 space-y-2">
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  aria-label="No Priority"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <rect
                    x="1.5"
                    y="7.25"
                    width="3"
                    height="1.5"
                    rx="0.5"
                    opacity="0.9"
                  ></rect>
                  <rect
                    x="6.5"
                    y="7.25"
                    width="3"
                    height="1.5"
                    rx="0.5"
                    opacity="0.9"
                  ></rect>
                  <rect
                    x="11.5"
                    y="7.25"
                    width="3"
                    height="1.5"
                    rx="0.5"
                    opacity="0.9"
                  ></rect>
                </svg>
                <span className="text-sm">Set priority</span>
              </button>
            </div>
          </div>

          {/* Assignee */}
          <div className="flex items-center gap-2 space-y-2">
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <path d="M14.988 8.647a.473.473 0 0 1-.543.433l-.496-.065a.537.537 0 0 1-.453-.563 5.646 5.646 0 0 0 0-.444.537.537 0 0 1 .453-.563l.496-.065a.473.473 0 0 1 .543.433 7.1 7.1 0 0 1 0 .834Zm-.727-3.551a.473.473 0 0 1-.254.646l-.462.192a.538.538 0 0 1-.674-.261 5.5 5.5 0 0 0-.22-.38.538.538 0 0 1 .11-.715l.396-.305a.473.473 0 0 1 .687.102c.153.231.292.472.417.72Zm-2.406-2.71c.23.152.27.468.102.687l-.305.396a.538.538 0 0 1-.714.11 5.49 5.49 0 0 0-.38-.22.538.538 0 0 1-.261-.674l.191-.462a.473.473 0 0 1 .646-.254c.25.125.49.264.72.417ZM8.416 1.242a.473.473 0 0 1 .433.543l-.065.496a.537.537 0 0 1-.563.453 5.627 5.627 0 0 0-.444 0 .537.537 0 0 1-.563-.453l-.065-.496a.473.473 0 0 1 .433-.543 7.109 7.109 0 0 1 .834 0Zm-3.551.727a.473.473 0 0 1 .646.254l.192.462a.538.538 0 0 1-.261.674c-.13.069-.257.142-.38.22a.537.537 0 0 1-.715-.11l-.305-.396a.473.473 0 0 1 .102-.687c.231-.153.472-.292.72-.417Zm-2.71 2.406a.473.473 0 0 1 .687-.102l.396.305a.537.537 0 0 1 .11.714c-.078.124-.151.25-.22.38a.538.538 0 0 1-.674.262l-.462-.192a.473.473 0 0 1-.254-.646c.125-.25.264-.49.417-.72ZM1.555 7.38a.473.473 0 0 0-.543.433 7.109 7.109 0 0 0 0 .834.473.473 0 0 0 .543.433l.496-.065a.537.537 0 0 0 .453-.563 5.627 5.627 0 0 1 0-.444.537.537 0 0 0-.453-.563l-.496-.065Zm.184 3.984a.473.473 0 0 1 .254-.646l.462-.192a.538.538 0 0 1 .674.261c.069.13.142.257.22.38a.537.537 0 0 1-.11.715l-.396.305a.473.473 0 0 1-.687-.102 6.989 6.989 0 0 1-.417-.72Zm11.418.823a.473.473 0 0 0 .687-.102c.153-.231.292-.472.417-.72a.473.473 0 0 0-.254-.647l-.462-.192a.538.538 0 0 0-.674.261c-.069.13-.142.257-.22.38a.537.537 0 0 0 .11.715l.396.305ZM8 4.23a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0v-.5a2 2 0 0 0-2-2ZM5.121 11.109a3 3 0 0 1 2.122-.879h1.514a3 3 0 0 1 2.122.879l1.01 1.01c.586.586.592 1.552-.104 2A6.967 6.967 0 0 1 8 15.23a6.967 6.967 0 0 1-3.784-1.11c-.697-.449-.69-1.415-.105-2l1.01-1.011Z"></path>
                </svg>
                <span className="text-sm">Assign</span>
              </button>
            </div>
          </div>

          {/* Estimate */}
          <div className="flex items-center gap-2 space-y-2">
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.741 14.5h8.521c1.691 0 2.778-1.795 1.993-3.293l-4.26-8.134c-.842-1.608-3.144-1.608-3.986 0l-4.26 8.134C.962 12.705 2.05 14.5 3.74 14.5ZM8 3.368a.742.742 0 0 0-.663.402l-4.26 8.134A.75.75 0 0 0 3.741 13H8V3.367Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm">Set estimate</span>
              </button>
            </div>
          </div>

          {/* Labels Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Labels
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2105 4C10.6337 4 11.0126 4.18857 11.24 4.48L14 8L11.24 11.52C11.0126 11.8114 10.6337 12 10.2105 12L3.26316 11.9943C2.56842 11.9943 2 11.4857 2 10.8571V5.14286C2 4.51429 2.56842 4.00571 3.26316 4.00571L10.2105 4ZM11.125 9C11.6773 9 12.125 8.55228 12.125 8C12.125 7.44772 11.6773 7 11.125 7C10.5727 7 10.125 7.44772 10.125 8C10.125 8.55228 10.5727 9 11.125 9Z"
                  ></path>
                </svg>
                <span className="text-sm">Add label</span>
              </button>
            </div>
          </div>

          {/* Cycle Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Cycle
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <path d="M7.125 2.01655C7.125 1.4768 6.64899 1.05501 6.12893 1.19947C3.17141 2.02102 1 4.74235 1 7.97282C1 11.8538 4.13401 15 8 15C11.866 15 15 11.8538 15 7.97282C15 4.74235 12.8286 2.02102 9.87107 1.19947C9.35101 1.05501 8.875 1.4768 8.875 2.01655V2.01655C8.875 2.45457 9.19479 2.82058 9.61155 2.95538C11.7226 3.63819 13.25 5.62644 13.25 7.97282C13.25 10.8836 10.8995 13.2432 8 13.2432C5.10051 13.2432 2.75 10.8836 2.75 7.97282C2.75 5.62644 4.27737 3.63819 6.38845 2.95538C6.80521 2.82058 7.125 2.45457 7.125 2.01655V2.01655Z"></path>
                  <path d="M6.95588 5.28329L10.6901 7.43926C11.0235 7.63171 11.0235 8.11283 10.6901 8.30528L6.95588 10.4612C6.62255 10.6537 6.20588 10.4131 6.20588 10.0282L6.20588 5.71631C6.20588 5.33141 6.62255 5.09084 6.95588 5.28329Z"></path>
                </svg>
                <span className="text-sm">Add to cycle</span>
              </button>
            </div>
          </div>

          {/* Project Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Project
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  aria-hidden="true"
                  aria-label="Project"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-muted-foreground"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.927 13.232-1.354.78c-.937.54-1.406.811-1.904.917a3.22 3.22 0 0 1-1.338 0c-.498-.106-.967-.376-1.904-.917l-1.354-.78c-.937-.541-1.406-.811-1.747-1.19a3.212 3.212 0 0 1-.669-1.157C1.5 10.401 1.5 9.861 1.5 8.78V7.22c0-1.082 0-1.622.157-2.106.14-.429.368-.823.67-1.157.34-.379.809-.649 1.746-1.19l1.354-.78c.937-.54 1.406-.811 1.904-.917a3.22 3.22 0 0 1 1.338 0c.498.106.967.376 1.904.917l1.354.78c.937.541 1.406.811 1.747 1.19.301.334.53.728.669 1.157.157.484.157 1.024.157 2.106v1.56c0 1.082 0 1.622-.157 2.106-.14.429-.368.823-.67 1.157-.34.379-.809.649-1.746 1.19Zm-5.751-.52-1.353-.78c-1.025-.591-1.239-.734-1.383-.894a1.712 1.712 0 0 1-.356-.617C3.017 10.217 3 9.962 3 8.78V7.22c0-.378.002-.661.006-.878l3.021 1.51a2.25 2.25 0 0 1 1.224 2.002v3.457a23.16 23.16 0 0 1-1.075-.597Zm2.575.597c.212-.105.532-.284 1.073-.596l1.353-.78c1.026-.592 1.239-.735 1.383-.895.16-.178.282-.389.356-.617.066-.204.084-.459.084-1.642V7.22c0-.378-.002-.661-.006-.878l-3 1.5-.007.003a2.25 2.25 0 0 0-1.236 2.009v3.456Zm3.757-8.402L9.324 6.499l-.01.004-.307.154a2.25 2.25 0 0 1-2.013 0l-.29-.145-.026-.013-3.186-1.593c.15-.143.42-.315 1.33-.84l1.354-.78c1.025-.592 1.256-.705 1.467-.75.235-.05.479-.05.714 0 .211.045.442.158 1.467.75l1.353.78c.912.525 1.181.697 1.331.84Z"
                  ></path>
                </svg>
                <span className="text-sm">Add to project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
