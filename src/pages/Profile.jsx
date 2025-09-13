import React, { useState } from 'react';
import { 
    User, 
    Settings, 
    Droplets, 
    AlertTriangle, 
    Phone, 
    Shield, 
    FileText, 
    BriefcaseMedical, 
    Home, 
    GraduationCap, 
    Bell, 
    UserCircle,
    ChevronRight,
    Edit2
} from 'lucide-react';

// Color theme for easy customization
const theme = {
  colors: {
    primary: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    primaryLightBg: 'bg-blue-50',
    secondary: 'text-slate-600',
    secondaryBg: 'bg-slate-600',
    lightText: 'text-slate-500',
    darkText: 'text-slate-800',
    accent: 'text-yellow-500',
    danger: 'text-red-500',
    success: 'text-green-500',
    background: 'bg-slate-50',
    card: 'bg-white',
  },
};

// Reusable component for informational rows
const InfoCard = ({ icon, label, value }) => (
  <div className={`${theme.colors.card} rounded-xl shadow-sm p-4 flex items-center space-x-4 transition-all hover:shadow-md hover:scale-[1.02]`}>
    <div className={`${theme.colors.primaryLightBg} p-3 rounded-full`}>
      {React.cloneElement(icon, { size: 22, className: theme.colors.primary })}
    </div>
    <div>
      <p className={`text-sm ${theme.colors.lightText}`}>{label}</p>
      <p className={`font-semibold ${theme.colors.darkText}`}>{value}</p>
    </div>
    <ChevronRight size={20} className={`ml-auto ${theme.colors.lightText}`} />
  </div>
);

// Reusable component for action buttons
const ActionCard = ({ icon, title }) => (
  <button className={`${theme.colors.card} rounded-xl shadow-sm p-4 flex flex-col items-center justify-center text-center space-y-2 transition-all hover:shadow-lg hover:-translate-y-1`}>
    <div className={`${theme.colors.primaryLightBg} p-4 rounded-full`}>
      {React.cloneElement(icon, { size: 28, className: theme.colors.primary })}
    </div>
    <p className={`font-semibold text-sm ${theme.colors.darkText}`}>{title}</p>
  </button>
);

// Navigation item component for the bottom bar
const NavItem = ({ icon, label, activeTab, setActiveTab }) => {
  const isActive = activeTab === label;
  return (
    <button 
      onClick={() => setActiveTab(label)} 
      className={`flex flex-col items-center justify-center text-center w-full transition-colors duration-300 ${isActive ? theme.colors.primary : `${theme.colors.lightText} hover:text-blue-500`}`}
    >
      {React.cloneElement(icon, { size: 24, strokeWidth: isActive ? 2.5 : 2 })}
      <span className={`text-xs mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </button>
  );
};

// Bottom Navigation Bar Component
const BottomNav = ({ activeTab, setActiveTab }) => (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 shadow-t-lg">
        <nav className="flex justify-around items-center h-20 max-w-lg mx-auto px-4">
            <NavItem icon={<Home />} label="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FileText />} label="Records" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<Bell />} label="Updates" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<UserCircle />} label="Profile" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>
    </footer>
);

// Main App Component
const App = () => {
  const [userProfile] = useState({
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    avatar: `https://api.dicebear.com/8.x/lorelei/svg?seed=Alex`,
    bloodType: 'O+',
    allergies: 'Peanuts, Penicillin',
    emergencyContact: {
      name: 'Jane Doe',
      phone: '+1 (555) 123-4567',
    },
  });

  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className={`min-h-screen ${theme.colors.background} font-sans`}>
      {/* Decorative Header */}
      <header className={`${theme.colors.primaryBg} h-40 rounded-b-3xl`}></header>
      
      <main className="container mx-auto px-4 -mt-32 pb-28">
        {/* Profile Header Card */}
        <div className={`${theme.colors.card} rounded-2xl shadow-lg p-6 mb-8`}>
            <div className="flex flex-col items-center text-center">
                 <div className="relative">
                    <img 
                        src={userProfile.avatar} 
                        alt="User Avatar" 
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors">
                        <Edit2 size={18} className={theme.colors.primary} />
                    </button>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mt-4">{userProfile.name}</h1>
                <p className={theme.colors.lightText}>{userProfile.email}</p>
            </div>
        </div>

        {/* Medical Information Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-700 mb-4 px-2">Essential Information</h2>
          <div className="space-y-3">
            <InfoCard 
              icon={<Droplets />} 
              label="Blood Type" 
              value={userProfile.bloodType} 
            />
            <InfoCard 
              icon={<AlertTriangle className={theme.colors.accent} />} 
              label="Allergies" 
              value={userProfile.allergies} 
            />
            <InfoCard 
              icon={<Phone className={theme.colors.success} />} 
              label="Emergency Contact" 
              value={`${userProfile.emergencyContact.name}`} 
            />
          </div>
        </section>

        {/* Quick Actions Section */}
        <section>
          <h2 className="text-lg font-bold text-slate-700 mb-4 px-2">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ActionCard 
              icon={<Shield />}
              title="Medical ID"
            />
            <ActionCard 
              icon={<FileText />}
              title="Procedures"
            />
            <ActionCard 
              icon={<BriefcaseMedical />}
              title="First Aid"
            />
            <ActionCard 
              icon={<GraduationCap />}
              title="Learn"
            />
          </div>
        </section>

         {/* Settings Section */}
         <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-700 mb-4 px-2">Account</h2>
          <div className="space-y-3">
            <InfoCard 
              icon={<Settings />} 
              label="Settings" 
              value="Privacy, Notifications" 
            />
            <InfoCard 
              icon={<Shield />} 
              label="Help & Support" 
              value="Contact us, FAQ" 
            />
          </div>
        </section>

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
