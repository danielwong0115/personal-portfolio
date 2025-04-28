import InterestSection from "@/components/InterestsSections";

export default function InterestsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 my-16">
      <h1 className="text-3xl font-bold mb-12 text-center">My Interests</h1>

      <InterestSection
        title="Software Development"
        text="I’m drawn to software development because I love solving complex problems and bringing ideas to life through code. Whether it’s web apps, backend services, or building interfaces, I enjoy every stage of the development cycle."
        imageSrc="./images/cloudComputing.jpg"
      />

      <InterestSection
        title="Data Science & Machine Learning"
        text="I enjoy uncovering insights from data and leveraging machine learning models to make impactful decisions. My curiosity in patterns and automation fuels my passion in this field."
        imageSrc="./images/clustering.jpg"
        reverse
      />

      <InterestSection
        title="Transportation Logistics"
        text="I’m passionate about solving real-world mobility problems. Through my research group at Northwestern, I use unsupervised learning and time-series clustering models like TimeSeriesDBScan to infer transportation modes and automate Transportation Security Index (TSI) calculations. This hands-on work has shown me the importance of data and tech in improving how we move and plan."
        imageSrc="./images/transportationLogistics.jpg"
      />
    </div>
  );
}
