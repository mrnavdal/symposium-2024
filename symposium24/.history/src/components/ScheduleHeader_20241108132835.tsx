import { CalendarDays, Users, Laptop } from 'lucide-react'

const stats = [
  {
    icon: CalendarDays,
    label: 'Days',
    value: '3'
  },
  {
    icon: Users,
    label: 'Speakers',
    value: '12'
  },
  {
    icon: Laptop,
    label: 'Sessions',
    value: '24'
  }
]

export function ScheduleHeader() {
  return (
    <div className="mb-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Conference Schedule</h1>
        <p className="text-muted-foreground">
          Explore our three-day program of talks, workshops, and networking events
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <div 
            key={label}
            className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 