declare module 'prompt-sync' {
    function promptSync(config?: { sigint?: boolean }): (question: string) => string;
    export = promptSync;
}
