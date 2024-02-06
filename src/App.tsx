import logo from '@/assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'
import { NewNoteCard } from './components/new-note-card'

export function App() {
  return (
    <main className="mx-auto container my-12 space-y-6">
      <img src={logo} alt="<nlw/> expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent font-semi text-3xl tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </main>
  )
}
