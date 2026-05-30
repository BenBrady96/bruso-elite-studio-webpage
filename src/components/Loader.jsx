export default function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <div className="spinner" aria-hidden="true" />
      <p className="animate-pulseText text-sm uppercase tracking-[0.3em]">
        Loading the studio
      </p>
    </div>
  )
}
