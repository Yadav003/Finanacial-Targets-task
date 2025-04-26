"use client";

export default function ProspectLeads() {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry" },
    { name: "Aura Wright", stage: "Initial Inquiry" },
    { name: "Cody Fisher", stage: "Initial Inquiry" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Prospect Leads</h2>
      <ul className="space-y-4">
        {leads.map((lead, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium text-sm md:text-base">{lead.name}</span>
            <span className="text-gray-500 text-xs md:text-sm">
              Stage: {lead.stage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
