export interface Issue {
  id: string;
  title: string;
  description: string;
  status: "Done" | "In Progress" | "Blocked" | string;
  priority: "High" | "Medium" | "Low";
  type: string;
  assignee: string;
  avatarUrl?: string;
  team: string;
  time: string;
  dueDate: string;
  cycle: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  activity: Array<{
    user: string;
    action: string;
    comment?: string;
    time: string;
  }>;
}
