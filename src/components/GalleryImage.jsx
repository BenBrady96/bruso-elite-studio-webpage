import { useState } from 'react'
import { getDriveImageCandidates } from '../utils/driveImage'

export default function GalleryImage({ image, index }) {
  const candidates = getDriveImageCandidates(image)
  const [candidateIndex, setCandidateIndex] = useState(0)

  const src = candidates[candidateIndex]
  const alt = `Studio artwork ${index + 1}`

  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black text-xs uppercase tracking-widest text-white/40">
        Image unavailable
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setCandidateIndex((current) => current + 1)}
      className="h-full w-full object-cover"
    />
  )
}
