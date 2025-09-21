export type Language = 'pt' | 'en'

export interface Translation {
  pages: {
    home: {
      title: string
    }
  }
  linktree: {
    bio: string
    redbubble: string
    colab55: string
    inprnt: string
    displate: string
    behance: string
    portfolio: string
    donate: string
  }
  footer: {
    language: string
  }
}
