import { toast } from 'react-hot-toast'

export const copyToClipboard = async (text?: string | null, message?: string) => {
  try {
    await navigator.clipboard.writeText(text || '')
    toast.success(message || 'Copied to clipboard')
  } catch {
    toast.error('Failed to copy to clipboard')
  }
}
