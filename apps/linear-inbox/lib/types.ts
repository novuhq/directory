export interface Issue {
  id: string
  title: string
  description?: string
  status: string
  priority: string
  assignee: string
  team: string
  type: string
  time: string
  avatarUrl: string
  mentionText?: string
  assignText?: string
  addText?: string
  cycle: string
  dueDate: string
  sections: {
    title: string
    content: string
  }[]
  activity: {
    type: string
    user: string
    action: string
    comment?: string
    time: string
  }[]
}
