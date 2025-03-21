// src/components/ui/TemporaryPage.tsx
import React from "react";

interface TemporaryPageProps {
  title: string;
}

const TemporaryPage: React.FC<TemporaryPageProps> = ({ title }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">Esta página está en construcción</p>
    </div>
  </div>
);

export default TemporaryPage;
