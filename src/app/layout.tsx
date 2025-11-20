import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawit Lambebo Gulta - Data Scientist & ML Engineer | Published Researcher",
  description: "Portfolio of Dawit Lambebo Gulta, Published Researcher and Data Scientist with 5+ years experience in ML & Data Science. Specializing in Medical Imaging, AI research, and Educational Technology. MA Graduate from York University, former Research Data Analyst at Sunnybrook Hospital.",
  keywords: ["Data Science", "Machine Learning", "Medical Imaging", "AI Research", "Published Researcher", "Python", "TensorFlow", "Statistical Analysis", "IEEE Publications", "BMJ"],
  authors: [{ name: "Dawit Lambebo Gulta" }],
  openGraph: {
    title: "Dawit Lambebo Gulta - Published Researcher & Data Scientist",
    description: "Portfolio showcasing 5+ years experience in ML, published research in medical AI, and educational technology leadership",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            .skip-to-content {
              position: absolute;
              left: -9999px;
              z-index: 999;
              padding: 1rem 1.5rem;
              background-color: #2563eb;
              color: white;
              text-decoration: none;
              border-radius: 0 0 0.5rem 0.5rem;
            }
            .skip-to-content:focus {
              left: 50%;
              transform: translateX(-50%);
              top: 0;
            }
          `
        }} />
      </head>
      <body
        className="font-sans antialiased"
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
