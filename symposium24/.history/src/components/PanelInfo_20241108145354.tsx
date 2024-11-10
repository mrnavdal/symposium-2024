import { Clock, Calendar, Users } from 'lucide-react'

const panelDetails = {
  title: "The Future of AI in Technology",
  date: "April 16, 2024",
  time: "14:00 - 15:30",
  moderator: "Dr. Sarah Johnson",
  panelists: [
    {
      name: "Alex Chen",
      role: "AI Research Director, TechCorp",
      topic: "AI Ethics and Governance"
    },
    {
      name: "Maria Rodriguez",
      role: "CTO, Innovation Labs",
      topic: "AI in Enterprise Solutions"
    },
    {
      name: "Dr. James Wilson",
      role: "Professor of Computer Science",
      topic: "Future of Machine Learning"
    }
  ]
}

export function PanelInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-background">{panelDetails.title}</h2>
        <div className="flex flex-wrap gap-6 text-background">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-background" />
            <span>{panelDetails.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-background" />
            <span>{panelDetails.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Moderator: {panelDetails.moderator}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-background">Panelists</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {panelDetails.panelists.map((panelist) => (
            <div 
              key={panelist.name}
              className="p-4 rounded-lg border bg-card/50"
            >
              <h4 className="font-semibold">{panelist.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{panelist.role}</p>
              <p className="text-sm">Topic: {panelist.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 