import { Clock, Calendar, Users } from 'lucide-react'

const panelDetails = {
  title: "Co může soustředění na udržitelnost přinést pondnikatelům?",
  date: "22. listopadu 2024",
  time: "18:50 - 19:45",
  moderator: "Martin Matuška",
  panelists: [
    {
      name: "Lukáš Rolf",
      role: "Ecosystem director at Změna k lepšímu",
      bio: "Lukáš jako ecosystem director působí v platformě „Změna k lepšímu“. Věnuje se budování udržitelných strategií a partnerství. Své zkušenosti z prostředí korporátu a ekologického aktivismu promítá do projektů propojující byznys a neziskový sektor."
    },
    {
      name: "Kateřina Leiutner Genttnerová",
      role: "Sustainability Strategist at Flagship Impact",
      bio: "Kateřina zavádí principy udržitelnosti do firem a pomáhá s tvorbou strategií pro jejich implementaci. Ráda se zabývá odvážnými otázkami a zamýšlí se nad situacemi z různých úhlů pohledu."
    },
    {
      name: "Václav Vidlička",
      role: "Partnership and event manager at Fingood",
      bio: "Václav zastává pozici Partnership & Event managera ve Fingood, kde buduje vztahy s investory a organizuje události. Své zkušenosti v oblasti financí a vášně pro inovace přenáší i do světa fintechu."
    },
    {
      name: "Tomáš Andrlík",
      role: "Spoluzakladatel společnosti Grig",
      bio: "Tomáš je spoluzakladatel Grig, nadšený inovátor, který spojuje udržitelnost a zdravý životní styl, aby přinesl revoluci v potravinářství díky unikátním proteinovým snackům."
    }
  ]
}

export function PanelInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-light">{panelDetails.title}</h2>
        <div className="flex flex-wrap gap-6 text-gray-light">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{panelDetails.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-light">
            <Clock className="h-4 w-4" />
            <span>{panelDetails.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-light">
            <Users className="h-4 w-4" />
            <span>Moderátor: {panelDetails.moderator}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-light">Panelisté</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {panelDetails.panelists.map((panelist) => (
            <div 
              key={panelist.name}
              className="p-4 rounded-lg border bg-white"
            >
              <h4 className="font-semibold text-background">{panelist.name}</h4>
              <p className="text-sm text-background mb-2">{panelist.role}</p>
              <p className="text-sm text-background">{panelist.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 