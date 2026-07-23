export default function Certifications() {
  const certificates = [
    {
      title: "Certified LLM Security Expert (CLLMSE)",
      issuer: "CLLMSE",
      year: "2026",
      description:
        "Certified in securing Large Language Model applications, covering prompt injection defense, model risk assessment, and best practices for building safe, robust AI-driven systems.",
    },
    {
      title: "AWS Certified Machine Learning Engineer - Associate (MLA-C01)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Validated expertise in building, training, tuning, and deploying machine learning models on AWS, including data engineering and ML pipeline automation.",
    },
    {
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Demonstrated ability to design distributed, resilient, and cost-optimized systems and architectures on the AWS cloud platform.",
    },
    {
      title: "AWS Certified Developer - Associate (DVA-C02)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Validated skills in developing, deploying, and debugging cloud-based applications using core AWS services and best practices.",
    },
    {
      title: "AWS Certified CloudOps Engineer - Associate (SOA-C03)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Certified in deploying, managing, and operating scalable systems on AWS, with a focus on monitoring, automation, and operational excellence.",
    },
    {
      title: "AWS Certified AI Practitioner (AIF-C01)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Validated foundational knowledge of AI, machine learning, and generative AI concepts along with their practical applications on AWS.",
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      year: "2025",
      description:
        "Demonstrated foundational understanding of AWS Cloud concepts, core services, security, architecture, pricing, and support models.",
    },
    {
      title: "Google Cloud Engineering Certificate",
      issuer: "Google Cloud",
      year: "2025",
      description:
        "Completed comprehensive training on Google Cloud Platform's core infrastructure, services, and cloud engineering best practices.",
    },
    {
      title: "Associate Cloud Engineer Pathway",
      issuer: "Google Cloud",
      year: "2025",
      description:
        "Built foundational skills in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.",
    },
    {
      title: "AI Essentials Qualification",
      issuer: "Google Cloud",
      year: "2025",
      description:
        "Gained essential knowledge of artificial intelligence concepts, use cases, and responsible AI practices.",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      year: "2025",
      description:
        "Completed a comprehensive 20-hour training curriculum covering core AWS Cloud concepts, services, security, and architecture fundamentals.",
    },
    {
      title: "AWS Hackathon Innovation Badge",
      issuer: "AWS Academy",
      year: "2025",
      description:
        "Earned for developing an innovative, cloud-based solution during an AWS-hosted hackathon, showcasing creativity and technical problem-solving.",
    },
    {
      title: "Cloud Cyber Security Foundations",
      issuer: "Infosys Springboard",
      year: "2025",
      description:
        "Completed foundational training in cybersecurity principles as applied to cloud infrastructure and enterprise systems.",
    },
    {
      title: "Getting Started with AWS Cloud",
      issuer: "Simplilearn",
      year: "2025",
      description:
        "Completed an introductory course covering AWS Cloud fundamentals, core services, and basic deployment concepts.",
    },
    {
      title: "Building Your Own GenAI Model",
      issuer: "NXT Wave",
      year: "2025",
      description:
        "Certified under the guidance of an IIT Delhi Alumnus, covering the design and development of custom Generative AI models.",
    },
    {
      title: "AI Mastermind Certification",
      issuer: "Outskill & Simplilearn",
      year: "2025",
      description:
        "Gained practical knowledge of applied AI concepts, tools, and workflows for real-world problem solving.",
    },
    {
      title: "Large Language Models (LLMs) Foundations",
      issuer: "Outskill & Simplilearn",
      year: "2025",
      description:
        "Covered core concepts of Large Language Models, including architecture, training, fine-tuning, and practical applications.",
    },
    {
      title: "Hedera Blockchain Technology Developer Certification",
      issuer: "Hedera",
      year: "2025",
      description:
        "Certified in developing applications on the Hedera blockchain network, covering distributed ledger concepts and smart contract development.",
    },
    {
      title: "Blockchain Architecture Foundations",
      issuer: "Great Learning",
      year: "2025",
      description:
        "Completed foundational training in blockchain architecture, consensus mechanisms, and distributed systems design.",
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      year: "2025",
      description:
        "Certified in IBM's Enterprise Design Thinking framework, focused on user-centered problem solving and collaborative innovation.",
    },
    {
      title: "Human-Computer Interaction - Elite Certification & Silver Medalist",
      issuer: "NPTEL",
      year: "2025",
      description:
        "Achieved Elite Certification with a Silver Medal in Human-Computer Interaction, reflecting strong academic performance and understanding of user-centered design.",
    },
    {
      title: "Welcome to ServiceNow Ecosystem",
      issuer: "ServiceNow",
      year: "2025",
      description:
        "Micro-certification covering the fundamentals of the ServiceNow platform and its role in enterprise workflow automation.",
    },
    {
      title: "Agile Foundations & Scrumban Framework",
      issuer: "Simplilearn",
      year: "2025",
      description:
        "Completed training in Agile methodologies and the Scrumban framework for efficient project and workflow management.",
    },
    {
      title: "Professional Specialization Core Course Series",
      issuer: "Udemy",
      year: "2025",
      description:
        "Completed an advanced track of professional specialization courses covering core technical and development skills.",
    },
    {
      title: "Academic E-Learning Program",
      issuer: "Nestlé",
      year: "2025",
      description:
        "Participated in a structured academic e-learning program focused on professional and industry-relevant skill development.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        📜 Certifications
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">🎓</div>
            <h3 className="mt-4 text-2xl font-bold text-blue-700">
              {certificate.title}
            </h3>
            <p className="mt-2 font-semibold text-gray-600">
              {certificate.issuer}
            </p>
            <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              {certificate.year}
            </span>
            <p className="mt-5 leading-7 text-gray-700">
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
