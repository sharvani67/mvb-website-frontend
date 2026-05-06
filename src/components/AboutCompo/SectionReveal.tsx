import React from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const SectionReveal: React.FC<Props> = ({ children }) => {
  return (
    <div className="opacity-100 translate-y-0 transition duration-700">
      {children}
    </div>
  );
};

export default SectionReveal;