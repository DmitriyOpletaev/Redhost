
export function parseUrlSearchParam(url: string) {
    let regex = /[?&]([^=#]+)=([^&#]*)/g,
        params:Params = {},
        match;
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params
}

type Params = {
    [key:string]:string|undefined
}
