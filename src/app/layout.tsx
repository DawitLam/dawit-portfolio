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
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
