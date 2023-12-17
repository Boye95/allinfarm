
const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6 flex items-center">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <nav className="ml-auto space-x-4">
          <a href="/profile" className="px-3 py-2 rounded-md hover:bg-gray-700">
            Profile
          </a>
          <a href="/home" className="px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </a>
          <a href="/blog" className="px-3 py-2 rounded-md hover:bg-gray-700">
            Blog
          </a>
        </nav>
      </header>
      <main className="flex-grow p-6">
        {/* Your main content goes here */}
        <p>This is your main content area.</p>
      </main>
    </div>
  );
};

export default DashboardLayout;
