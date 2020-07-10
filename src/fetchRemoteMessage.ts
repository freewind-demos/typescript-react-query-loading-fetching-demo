async function wait(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  });
}

export default async function fetchRemoteMessage(from: string): Promise<string> {
  await wait(1);
  const random = Math.floor(Math.random() * 10);
  console.log("### random", random);
  if (random % 2 === 0) {
    return `hello-from-remote(${from}, random: ${random})`;
  } else {
    throw new Error(`error-from-remote(${from}, random: ${random})`)
  }
};
