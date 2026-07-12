import profile from "@/data/profile";

export default function Contact() {
  const { email, phone, linkedin, github } = profile.contact;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl border border-slate-700">

      <h2 className="text-4xl font-bold text-center text-white">
  Let us Connect & Collaborate
</h2>

       <p className="mx-auto mt-4 mb-10 max-w-3xl text-center text-gray-400 leading-7">
       I am passionate about Software Development, Cloud Computing,
IoT, and AI-driven solutions. Whether you are a recruiter,
mentor, or fellow developer, I would love to connect,
collaborate, and explore exciting opportunities together.
       </p>

        <div className="grid gap-6 md:grid-cols-2">

          <a
            href={`mailto:${email}`}
            className="rounded-xl bg-slate-800 p-5 hover:bg-blue-600 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">📧 Email</h3>
            <p className="text-gray-300 mt-2 break-all">{email}</p>
          </a>

          <a
            href={`tel:${phone}`}
            className="rounded-xl bg-slate-800 p-5 hover:bg-green-600 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">📱 Phone</h3>
            <p className="text-gray-300 mt-2">{phone}</p>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-800 p-5 hover:bg-sky-600 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">💼 LinkedIn</h3>
            <p className="text-gray-300 mt-2">Visit my LinkedIn Profile</p>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-800 p-5 hover:bg-purple-600 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">💻 GitHub</h3>
            <p className="text-gray-300 mt-2">Explore my GitHub Projects</p>
          </a>

        </div>
      </div>
    </section>
  );
}
