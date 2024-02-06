export function NoteCard() {
  return (
    <button
      type="button"
      className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left text-sm outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="font-medium text-slate-300">Há 2 dias</span>
      <p className="leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        perferendis expedita ullam a error. Voluptas, adipisci officia explicabo
        repellat velit laborum enim, quam earum iusto id exercitationem tempore,
        cum ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus recusandae placeat non velit in iste odit amet vitae nisi
        inventore. Error sequi mollitia esse voluptas asperiores temporibus quas
        repellendus blanditiis! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Accusamus totam esse, necessitatibus distinctio
        cupiditate numquam enim quidem sapiente blanditiis sit ex aperiam, sunt,
        id eius dicta ea laborum a est.
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </button>
  )
}
