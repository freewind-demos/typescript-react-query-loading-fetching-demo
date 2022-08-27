async function wait(seconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    });
}

export default async function fetchRemoteMessage(from: string, success: boolean): Promise<string> {
    await wait(3);
    if (success) {
        return `hello-from-remote(${from}, timestamp: ${Date.now()})`;
    } else {
        throw new Error(`error-from-remote(${from}, timestamp: ${Date.now()})`)
    }
};
