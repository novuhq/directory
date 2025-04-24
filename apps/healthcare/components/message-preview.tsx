import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MessagePreviewProps {
  sender: string
  avatar: string
  preview: string
  time: string
  unread?: boolean
}

export function MessagePreview({ sender, avatar, preview, time, unread = false }: MessagePreviewProps) {
  return (
    <div className={`flex gap-4 p-3 rounded-lg ${unread ? "bg-sky-50" : ""}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar || "/placeholder.svg"} alt={sender} />
        <AvatarFallback>{sender.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className={`font-medium ${unread ? "text-sky-700" : ""}`}>{sender}</h4>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className={`text-sm line-clamp-2 ${unread ? "font-medium" : "text-muted-foreground"}`}>{preview}</p>
      </div>
      {unread && <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>}
    </div>
  )
}
