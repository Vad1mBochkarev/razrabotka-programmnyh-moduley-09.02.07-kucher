import Counter from "./Counter";

async function getInfo() {
    return {
        title: 'About project',
        description: "It's my first page in Next.js",
    }
}

export default async function AboutPage() {
    const info = await getInfo()
  return (
    <main>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <Counter />
    </main>
  );
}