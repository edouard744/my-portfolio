import Link from "next/link";

export default function ContactSection({ t }: { t: any }) {
  return (
    <section className="bg-gray-50 py-32 fade-in">
      <div className="px-4 md:mx-auto flex flex-col items-center md:max-w-7xl">
        <h2 className="mb-6 text-center text-3xl font-medium text-gray-900 lg:text-5xl">
          Discutons ensemble de nouvelles opportunités
          <span className="wave block ml-2">👋</span>
        </h2>
        <p className="mb-8 text-center text-2xl  text-blue-900 font-semibold max-w-3xl">
        Je suis toujours ouvert à discuter de nouvelles idées, de projets ou d’opportunités de job, alors n’hésitez pas à me contacter !
        </p>

        <div className="text-center">
          <Link
            href="mailto:contact@willems-edouard.be"
            className="mx-auto block w-max rounded-full bg-blue-800 px-10 py-4 text-white"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
