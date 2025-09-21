export type Language = 'pt' | 'en'

export interface Translation {
  pages: {
    Home: {
      title: string
    }
    Vextro: {
      title: string
    }
    Korri: {
      title: string
    }
    Containner: {
      title: string
    }
    C0ffe: {
      title: string
    }
    Trac: {
      title: string
    }
  }
  nav: {
    overview: {
      title: string
      subtitle: string
    }
    vextro: {
      title: string
      subtitle: string
    }
    korri: {
      title: string
      subtitle: string
    }
    team: {
      title: string
      subtitle: string
    }
    settings: {
      title: string
      subtitle: string
    }
  }
  sidebar: {
    title: {
      line1: string
      line2: string
    }
    contact: {
      email: string
      phone: string
    }
  }
  footer: {
    language: string
  }
}
