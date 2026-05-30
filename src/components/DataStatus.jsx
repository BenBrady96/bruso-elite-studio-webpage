import { RotateCw } from 'lucide-react'

export default function DataStatus({
  loading,
  retrying,
  attempt,
  maxAttempts,
  error,
  onRetry,
  emptyMessage = 'No content is available at the moment.',
}) {
  const isWorking = loading || retrying

  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-gray-800 px-6 py-16 text-center">
      {isWorking ? (
        <>
          <div className="spinner" aria-hidden="true" />
          <p className="animate-pulseText text-sm uppercase tracking-[0.25em] text-white/80">
            {retrying && attempt > 1
              ? `Retrying, attempt ${attempt} of ${maxAttempts}`
              : 'Loading'}
          </p>
        </>
      ) : error ? (
        <>
          <p className="max-w-md text-sm text-white/70">{error}</p>
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-2 border border-white px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            <RotateCw size={16} />
            Try again
          </button>
        </>
      ) : (
        <p className="text-sm text-white/60">{emptyMessage}</p>
      )}
    </div>
  )
}
