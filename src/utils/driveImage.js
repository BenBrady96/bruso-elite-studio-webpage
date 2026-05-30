// Google Drive "uc?export=view" links are frequently blocked from rendering in
// <img> tags. These helpers build the more reliable rendering URLs from a file
// id, and provide an ordered list of candidates to fall back through.

export function getDriveFileId(image) {
  if (!image) return null
  if (image.id) return image.id

  const url = image.url || ''
  const match =
    url.match(/[?&]id=([^&]+)/) || url.match(/\/d\/([^/]+)/) || url.match(/\/file\/d\/([^/]+)/)
  return match ? match[1] : null
}

export function getDriveImageCandidates(image, width = 1200) {
  const id = getDriveFileId(image)
  const candidates = []

  if (id) {
    candidates.push(`https://lh3.googleusercontent.com/d/${id}=w${width}`)
    candidates.push(`https://drive.google.com/thumbnail?id=${id}&sz=w${width}`)
  }

  if (image && image.url) {
    candidates.push(image.url)
  }

  return candidates
}
