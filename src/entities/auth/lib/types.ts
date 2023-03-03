export interface AuthState {
    isAppAuthorised: boolean
    isUserAuthorised: boolean
    isLoadingAuthorising: boolean
    error:string
}

export type AuthRedirectResponse = {
    state: string
} & (
    | { code: string, error?: never }
    | { code?: never, error: Error }
    )

type Error = 'access_denied'|'invalid_request'|'invalid_scope'|'unsupported_response_type'

