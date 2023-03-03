export interface AppAuthResponse {
    access_token:string
    expires_in:number
    scope:string
    token_type:string
}

export interface UserAuthResponse extends AppAuthResponse{
    refresh_token: string
}

export interface Credentials  {
    redirectUri: string
    clientId: string
    clientSecret: string
}

export interface AuthSessionParams extends Pick<Credentials, 'redirectUri'|'clientId'>{
    compact:boolean,
    duration: 'temporary' | 'permanent'
    scope: Scope
    state: string
}

const scopeValues = [
    'identity', 'edit', 'flair', 'history', 'modconfig',
    'modflair', 'modlog', 'modposts', 'modwiki',
    'mysubreddits', 'privatemessages', 'read',
    'report', 'save', 'submit', 'subscribe', 'vote',
    'wikiedit', 'wikiread'
] as const

export type Scope = Array<typeof scopeValues[number]> | 'all'
