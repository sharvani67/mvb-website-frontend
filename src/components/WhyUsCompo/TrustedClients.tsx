import React from "react";
import SectionWrapper from "@/components/SectionWrapper";

const clientLogos = [
  {
    name: "Tech Corp",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    name: "Global Bank",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
  },
  {
    name: "Health Plus",
    logo: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },
  {
    name: "EduWorld",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
  {
    name: "ManufacturePro",
    logo: "https://cdn-icons-png.flaticon.com/512/3076/3076404.png",
  },
  {
    name: "Retail Giant",
    logo: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
  },
];

export default function TrustedClients() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <SectionWrapper>
          <div className="text-center mb-14">
           <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Trusted Partners
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
  
        <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
   bg-clip-text text-transparent">
      Companies That Trust Us
      </span>
          </h2>
          </div>
        </SectionWrapper>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">

          {clientLogos.map((client, i) => (
            <SectionWrapper key={client.name} delay={i * 100}>
              <div className="flex flex-col items-center justify-center">

                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-14 w-auto object-contain"
                />

                <span className="text-xs text-muted-foreground mt-2 text-center">
                  {client.name}
                </span>

              </div>
            </SectionWrapper>
          ))}

        </div>
      </div>
    </section>
  );
}