export default function Loader() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-black text-white">
      <div className="spinner" aria-hidden="true" />
      <p className="animate-pulseText text-sm uppercase tracking-[0.3em]">
        Loading the studio
      </p>
    </div>
  )
}
