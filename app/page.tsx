import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Jorge Padilla</h1>
          <p className="mb-2">Software Engineer</p>
        </div>

        <h2 className="text-xl font-bold">Latest blog post</h2>
        <ul>
          <li className="flex items-center gap-2">
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://medium.com/kubeshop-i/tracetest-monitors-synthetic-monitoring-with-opentelemetry-and-playwright-6dba002b8377"
              target="_blank"
              rel="noopener noreferrer"
            >
              Synthetic Monitoring with OpenTelemetry and Playwright
            </a>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:jorge.esteban.padilla@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jorgeepc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jorgeepc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
