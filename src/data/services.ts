import type { ServiceItem } from '@/types'

export const services: ServiceItem[] = [
  {
    id: 'fasad',
    title: 'Fasadställningar',
    description: 'Professionella fasadställningar för alla typer av byggprojekt. Vi anpassar konstruktionen efter byggnadens form och projektets behov, med fokus på säkerhet och tillgänglighet.',
    icon: 'building',
  },
  {
    id: 'rull',
    title: 'Rullställningar',
    description: 'Mobila rullställningar för inomhus- och utomhusarbeten där flexibilitet krävs. Enkla att flytta och anpassa — perfekta för underhållsarbeten och mindre renoveringar.',
    icon: 'arrows',
  },
  {
    id: 'vaderskydd',
    title: 'Väderskydd',
    description: 'Heltäckande väderskydd som skyddar byggarbetsplatsen mot regn, vind och kyla. Möjliggör arbete året runt och skyddar material och konstruktion under byggtiden.',
    icon: 'cloud',
  },
  {
    id: 'takskydd',
    title: 'Takskydd / Skyddstak',
    description: 'Skyddstak och takskyddssystem som säkrar arbete på höjd och skyddar omgivningen. Uppfyller gällande säkerhetskrav och anpassas till projektets specifika förhållanden.',
    icon: 'shield',
  },
  {
    id: 'hyra',
    title: 'Hyra och montering',
    description: 'Vi erbjuder både uthyrning och professionell montering av ställningar. Vårt erfarna team monterar, justerar och demonterar — du fokuserar på ditt projekt.',
    icon: 'wrench',
  },
]
