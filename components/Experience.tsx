export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        💼 Experience
      </h2>

      <div className="space-y-8">

        {/* AWS Trainee */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            AWS Trainee
          </h3>

          <p className="mt-2 text-lg font-semibold">
            TORII MINDS
          </p>

          <p className="mt-2 text-gray-600">
            2025 – Present
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Worked with Amazon EC2 cloud services.</li>
            <li>Hosted static websites using AWS.</li>
            <li>Learned cloud computing fundamentals.</li>
            <li>Developed practical knowledge of AWS infrastructure.</li>
          </ul>
        </div>

        {/* Hackathons */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            Hackathon & Ideathon Participation
          </h3>

          <p className="mt-2 text-lg font-semibold">
            2025 – 2026
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Participated in 2 Ideathons at GCEM and Cambridge Institute of Technology.</li>
            <li>Participated in 3 Hackathons at GCEM, PES College, and NCET.</li>
            <li>Collaborated in multidisciplinary teams to develop innovative solutions.</li>
            <li>Strengthened problem-solving, teamwork, and rapid prototyping skills.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}