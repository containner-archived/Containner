// ================================
// INTERFACES
// ================================

/**
 * Configuração de validação das variáveis de ambiente
 */
export interface EnvConfig {
  /** Lista de variáveis de ambiente obrigatórias */
  required: string[]
  /** Lista de variáveis de ambiente opcionais */
  optional: string[]
}

/**
 * Estrutura do resultado de validação
 */
export interface ValidationResult {
  /** Lista de erros de validação */
  errors: string[]
  /** Lista de avisos de validação */
  warnings: string[]
}
