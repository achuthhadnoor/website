export default function StructuredData({
  name = "Your Name",
  jobTitle = "Your Job Title",
  image = "https://yourdomain.com/your-photo.jpg",
  sameAs = [], // social media links
}: any) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image,
    sameAs,
    url: "https://yourdomain.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
