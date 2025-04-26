import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import FranchiseCard from "./components/FranchiseCard";
import FinancialWellbeingCard from "./components/FinancialWellbeingCard";
import SalesCard from "./components/SalesCard";
import PendingQuestions from "./components/PendingQuestions";
import ChatAssistant from "./components/ChatAssistant";
import ProspectLeads from "./components/ProspectLeads";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        <Header />

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Column 1 */}
          <ProgressCard />

          {/* Column 2 (Franchise + Financial Wellbeing stacked vertically) */}
          <div className="flex flex-col gap-6">
            <FranchiseCard />
            <FinancialWellbeingCard />
          </div>

          {/* Column 3 (Sales + Prospect Leads stacked vertically) */}
          <div className="flex flex-col gap-6">
            <SalesCard />
            <ProspectLeads />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PendingQuestions />
          <ChatAssistant />
        </div>
      </main>
    </div>
  );
}
