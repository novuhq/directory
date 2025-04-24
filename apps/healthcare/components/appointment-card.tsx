import { Video, MapPin, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AppointmentCardProps {
  type: "virtual" | "in-person"
  doctor: string
  specialty: string
  date: string
  duration: string
  location?: string
}

export function AppointmentCard({ type, doctor, specialty, date, duration, location }: AppointmentCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt={doctor} />
        <AvatarFallback>{doctor.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <h4 className="font-medium">{doctor}</h4>
          <Badge
            variant="outline"
            className={type === "virtual" ? "bg-sky-50 text-sky-700" : "bg-emerald-50 text-emerald-700"}
          >
            {type === "virtual" ? "Virtual" : "In-Person"}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{specialty}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
        </div>
        {location && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {type === "virtual" ? (
          <Button size="sm" className="whitespace-nowrap">
            <Video className="mr-2 h-4 w-4" />
            Join
          </Button>
        ) : (
          <Button size="sm" className="whitespace-nowrap">
            <MapPin className="mr-2 h-4 w-4" />
            Directions
          </Button>
        )}
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          Reschedule
        </Button>
      </div>
    </div>
  )
}
