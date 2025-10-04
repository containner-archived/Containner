// ================================
// GLOBAL TYPES
// ================================

/**
 * Idiomas suportados pela aplicação
 */
export type Language = 'pt' | 'en'

// ================================
// INTERFACES
// ================================

/**
 * Interface para conteúdo de páginas específicas
 */
export interface PageContent {
  /** Título da página */
  title: string
}

/**
 * Interface para itens de navegação
 */
export interface NavigationItem {
  /** Título do item */
  title: string
  /** Subtítulo descritivo */
  subtitle: string
}

/**
 * Interface para créditos de projetos
 */
export interface ProjectCredits {
  /** Título da seção de créditos */
  title: string
  /** Crédito de estratégia */
  strategy: string
}

/**
 * Interface para detalhes de projetos
 */
export interface ProjectDetails {
  /** Título da seção de detalhes */
  title: string
  /** Data de publicação */
  published: string
  /** Localização do projeto */
  location: string
  /** Segmento do projeto */
  segment: string
}

/**
 * Interface para créditos específicos do Vextro
 */
export interface VextroCredits extends ProjectCredits {
  /** Crédito de tipografia */
  typography: string
  /** Fonte Avantique */
  avantique: string
  /** Fonte Jakarta */
  jakarta: string
}

/**
 * Interface para detalhes específicos do Vextro
 */
export interface VextroDetails extends ProjectDetails {
  /** Responsável pelo projeto */
  responsible: string
}

/**
 * Interface para créditos específicos do Korri
 */
export interface KorriCredits extends ProjectCredits {
  /** Crédito de naming */
  naming: string
}

/**
 * Interface principal de tradução
 * Define toda a estrutura de conteúdo multilíngue da aplicação
 */
export interface Translation {
  /** Títulos das páginas */
  pages: {
    Home: PageContent
    Vextro: PageContent
    Korri: PageContent
    Containner: PageContent
    C0ffe: PageContent
    Trac: PageContent
  }

  /** Itens de navegação */
  nav: {
    overview: NavigationItem
    vextro: NavigationItem
    korri: NavigationItem
    team: NavigationItem
    settings: NavigationItem
  }

  /** Conteúdo da barra lateral */
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

  /** Conteúdo específico do Vextro */
  vextro: {
    content: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
      paragraph4: string
      paragraph5: string
      paragraph6: string
    }
    credits: VextroCredits
    details: VextroDetails
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

  /** Conteúdo específico do Korri */
  korri: {
    content: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    credits: KorriCredits
    details: ProjectDetails
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

  /** Conteúdo do rodapé */
  footer: {
    language: string
  }
}
