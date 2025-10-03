import { EnvConfig, ValidationResult } from '@types'

// ================================
// CONSTANTS
// ================================

/**
 * Configuração completa das variáveis de ambiente do projeto
 * Centraliza todos os requisitos de variáveis de ambiente
 */
const ENV_CONFIG: EnvConfig = {
  required: [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ],
  optional: ['VITE_GA_MEASUREMENT_ID']
}

const GA_PREFIX = 'G-' as const
const GA_PLACEHOLDER = 'G-XXXXXXXXXX' as const

// ================================
// HELPER FUNCTIONS
// ================================

/**
 * Valida se uma variável de ambiente está definida e não está vazia
 */
const isValidEnvVar = (value: string | undefined): boolean => {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Valida o formato do ID do Google Analytics
 */
const isValidGAFormat = (measurementId: string): boolean => {
  if (!measurementId.startsWith(GA_PREFIX)) {
    console.error(
      `Analytics: VITE_GA_MEASUREMENT_ID deve começar com "${GA_PREFIX}"`
    )
    return false
  }

  if (measurementId === GA_PLACEHOLDER) {
    console.warn('Analytics: Usando ID de placeholder - substitua pelo ID real')
    return false
  }

  return true
}

/**
 * Valida variáveis de ambiente e coleta erros/avisos
 */
const validateVariables = (
  variables: string[],
  isRequired: boolean
): string[] => {
  const messages: string[] = []
  const icon = isRequired ? '❌' : '⚠️'
  const suffix = isRequired
    ? 'é obrigatório mas não foi encontrado'
    : 'não foi encontrado (opcional)'

  variables.forEach((envVar) => {
    if (!isValidEnvVar(import.meta.env[envVar])) {
      messages.push(`${icon} ${envVar} ${suffix}`)
    }
  })

  return messages
}

/**
 * Registra os resultados de validação no console
 */
const logValidationResults = ({ errors, warnings }: ValidationResult): void => {
  if (errors.length > 0) {
    console.error('🚨 Variáveis de ambiente obrigatórias ausentes:')
    errors.forEach((error) => console.error(error))
  }

  if (warnings.length > 0) {
    console.warn('⚠️  Variáveis de ambiente opcionais ausentes:')
    warnings.forEach((warning) => console.warn(warning))
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.info('✅ Todas as variáveis de ambiente estão configuradas')
  }
}

// ================================
// MAIN FUNCTIONS
// ================================

/**
 * Valida todas as variáveis de ambiente necessárias
 * Mostra avisos para variáveis ausentes mas não quebra a aplicação
 */
export const validateEnvironment = (): void => {
  const errors = validateVariables(ENV_CONFIG.required, true)
  const warnings = validateVariables(ENV_CONFIG.optional, false)

  logValidationResults({ errors, warnings })
}

/**
 * Função específica para validar configuração do Analytics
 *
 * @returns True se o ambiente do analytics está configurado corretamente
 */
export const validateAnalyticsEnv = (): boolean => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!isValidEnvVar(measurementId)) {
    console.info(
      'Analytics: VITE_GA_MEASUREMENT_ID não configurado - Analytics desabilitado'
    )
    return false
  }

  return isValidGAFormat(measurementId)
}
