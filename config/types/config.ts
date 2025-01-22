export type Mode = 'development' | 'production'

export type Paths = {
    html: string
    entry: string
    build: string
    src: string

}
export interface BuildOptions {
    mode: Mode
    paths: Paths
    port: number
    isDev: boolean
}
export interface BuildEnv {
    mode: Mode
    port: number
}
