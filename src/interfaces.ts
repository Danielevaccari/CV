export interface IProject {
    readonly id: string;
    readonly description: string;
    readonly href: string;
    readonly image: string;
    readonly icons: ReadonlyArray<string>;
}
