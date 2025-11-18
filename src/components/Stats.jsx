const stats = [
  { label: 'Active Projects', value: '6+' },
  { label: 'Discord Communities', value: '3' },
  { label: 'Open Source', value: '100%' },
]

export default function Stats() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-slate-800/40 p-6 text-center">
              <div className="text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-blue-200/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
