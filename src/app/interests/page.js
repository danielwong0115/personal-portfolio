import InterestSection from "@/components/InterestsSections";

export default function InterestsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 my-16">
      <h1 className="text-3xl font-bold mb-12 text-center">My Interests</h1>

      <InterestSection
        title="Software Development"
        text="I enjoy the problem-solving that happens throughout the software engineering, from deciding how to architect something to debugging a bug that doesn’t make sense to finding a cleaner solution than my first attempt. Working across frontend interfaces, backend services, and cloud infrastructure has shown me how much of the craft is understanding how all the pieces fit together, and I like building things that help people's needs."
        imageSrc="./images/cloudComputing.jpg"
      />

      <InterestSection
        title="Data Science & Machine Learning"
        text="I’m interested in the practical side of data science and machine learning, where models have to work on messy data and hold up in real use. I’ve applied unsupervised clustering to over 4 million GPS points in my research, trained and evaluated models in Python, and built AI gateways on AWS Bedrock. I want to take that work further into production systems that teams and clients rely on every day."
        imageSrc="./images/clustering.jpg"
        reverse
      />

      <InterestSection
        title="Consulting"
        text="I’m especially interested in client-facing work, where I get to move across industries and domains and pick up new tools and ways of thinking along the way. I enjoy understanding what a client actually needs, translating it into something a team can build, and seeing it make a real difference for them. That mix of technical problem-solving and working closely with people is what draws me to consulting."
        imageSrc="./images/consultingInterests.jpg"
      />
    </div>
  );
}
