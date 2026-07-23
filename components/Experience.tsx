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
            <li>Developed practical knowledge of AWS and google cloud infrastructure.</li>
          </ul>
        </div>

        {/* TNS Training */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            TNS Training Program
          </h3>
          <p className="mt-2 text-lg font-semibold">
            TNS
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Trained in Soft Skills, focusing on communication, professionalism, and workplace readiness.</li>
            <li>Trained in AI/ML with Python, covering machine learning fundamentals and practical implementation.</li>
            <li>Strengthened foundational skills in artificial intelligence and Python-based problem-solving.</li>
          </ul>
        </div>

        {/* Hackathons */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700">
            Hackathon & Ideathon Participation
          </h3>
          <p className="mt-2 text-lg font-semibold">
            2023 – 2026
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Participated in 2 Ideathon at NCET.</li>
            <li>Participated in Hackathon at  NCET.</li>
            <li>Achived in 2nd prize in project exhibition at college level competation NCET.</li>
            <li>Participated in Scinova at  NCET and recevied consolidation prizemoney .</li>
            <li>Collaborated in multidisciplinary teams to develop innovative solutions.</li>
            <li>Strengthened problem-solving, teamwork, and rapid prototyping skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
