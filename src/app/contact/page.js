import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <p className="text-lg mb-4">
        I’m always open to opportunities in{" "}
        <span className="font-semibold">Software Development</span>,{" "}
        <span className="font-semibold">Data Science</span>, and{" "}
        <span className="font-semibold">Transportation</span>. I also welcome
        other opportunities where I can apply my skills in meaningful ways.
      </p>

      <p className="text-lg mb-10">
        Feel free to get in touch! I’d love to connect and chat more!
      </p>

      <div className="space-y-8 text-left w-full max-w-md">
        <div>
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Mail size={18} />
            <h2 className="text-base font-semibold uppercase">Email</h2>
          </div>
          <a
            href="mailto:danielwong2026@u.northwestern.edu"
            className="text-lg text-blue-600 underline"
          >
            danielwong2026@u.northwestern.edu
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Linkedin size={18} />
            <h2 className="text-base font-semibold uppercase">LinkedIn</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/dl-wong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-600 underline"
          >
            linkedin.com/in/dl-wong
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Github size={18} />
            <h2 className="text-base font-semibold uppercase">GitHub</h2>
          </div>
          <a
            href="https://github.com/danielwong0115"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-600 underline"
          >
            github.com/danielwong0115
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Phone size={18} />
            <h2 className="text-base font-semibold uppercase">Phone</h2>
          </div>
          <p className="text-lg">(503) 724-3028</p>
        </div>
      </div>
    </div>
  );
}
