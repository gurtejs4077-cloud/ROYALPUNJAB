import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import Script from "next/script";

export const metadata = {
  title: "Royal Punjab Ride – Premium Taxi & Cab Booking in Punjab",
  description: "Book premium taxis and cabs across Punjab instantly. Economy, Comfort, and Luxury rides available 24/7 in Amritsar, Ludhiana, Chandigarh, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Noto+Sans+Gurmukhi:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Royal Punjab Ride",
              "areaServed": [
                { "@type": "City", "name": "Amritsar" },
                { "@type": "City", "name": "Chandigarh" },
                { "@type": "State", "name": "Punjab" }
              ],
              "description": "Premium taxi and cab booking service in Punjab, offering city rides, airport transfers, and outstation cabs.",
              "url": "https://punjabride.com",
              "telephone": "+91-98153-16271",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="is-loading">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Script src="/firebase-db.js" strategy="beforeInteractive" type="module" />
        <Script src="/app.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
