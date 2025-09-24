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
  vextro: {
    content: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
      paragraph4: string
      paragraph5: string
      paragraph6: string
    }
    credits: {
      title: string
      strategy: string
      typography: string
      avantique: string
      jakarta: string
    }
    details: {
      title: string
      published: string
      responsible: string
      location: string
      segment: string
    }
    images: {
      img1: string
      before: string
      after: string
      img3: string
      gif4: string
      img5: string
      img6: string
      img7: string
      img8: string
      img9: string
      img10: string
      img11: string
      img12: string
      gif13: string
    }
  }
  korri: {
    content: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    credits: {
      title: string
      strategy: string
      naming: string
    }
    details: {
      title: string
      published: string
      location: string
      segment: string
    }
    images: {
      gif1: string
      gif2: string
      img3: string
      gif4: string
      img5: string
      img6: string
      gif7: string
      img8: string
      img9: string
      img10: string
      gif11: string
      img12: string
      img13: string
      img14: string
      img15: string
      img16: string
    }
  }
  footer: {
    language: string
  }
}
