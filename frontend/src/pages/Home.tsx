import { useEffect } from "react";

const Home = () => {


    useEffect(() => {
        fetch("http://127.0.0.1:8000/index")
            .then(response => response.json())
            .catch(error => console.error(error));
    }, []);

    return (
        <main className="flex flex-1">
        {/* Left Section */}
        <div className="w-1/2 p-8 flex flex-col">
          {/* Features Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium text-orange-500">Collaborate</p>
                <div className="mt-4 bg-gray-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-handshake text-slate-700"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 8.19 0l3.5 3.5a1 1 0 1 0 3-3l-3.5-3.5a9.06 9.06 0 0 0-12.82 0L2.5 10.69a1 1 0 1 0 3 3l2.5-2.5" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 mx-2 flex items-center">
                <div className="h-1 bg-orange-500 w-full"></div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-medium text-orange-500">Plan</p>
                <div className="mt-4 bg-gray-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list text-slate-700"
                  >
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 mx-2 flex items-center">
                <div className="h-1 bg-orange-500 w-full"></div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-medium text-orange-500">Progress</p>
                <div className="mt-4 bg-gray-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-2 text-slate-700"
                  >
                    <line x1="18" x2="18" y1="20" y2="10" />
                    <line x1="12" x2="12" y1="20" y2="4" />
                    <line x1="6" x2="6" y1="20" y2="14" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-plus"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                REGISTRATION
              </button>
              <button className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                ABOUT PRAGATI
              </button>
            </div>
          </div>

          {/* Construction Illustration */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-cyan-50/50 rounded-3xl overflow-hidden">
              
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-orange-50 p-8 flex items-center justify-center">
          <div className="max-w-md">
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-white rounded-3xl shadow-xl p-4 pb-8 border-8 border-gray-200">
                {/* Phone status bar */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="text-xs">9:30</span>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-signal"
                    >
                      <path d="M2 20h.01" />
                      <path d="M7 20v-4" />
                      <path d="M12 20v-8" />
                      <path d="M17 20V8" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-battery-full"
                    >
                      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                      <line x1="22" x2="22" y1="11" y2="13" />
                    </svg>
                  </div>
                </div>

                {/* App content */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold text-slate-700 mb-8">Download the Pragati App</h2>

                  <div className="bg-cyan-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3 p-2 mb-3 bg-cyan-200/70 rounded-lg">
                      <div className="bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle text-cyan-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <span className="text-sm">Easy Registration</span>
                    </div>

                    <div className="flex items-center gap-3 p-2 mb-3">
                      <div className="bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-layout-dashboard"
                        >
                          <rect width="7" height="9" x="3" y="3" rx="1" />
                          <rect width="7" height="5" x="14" y="3" rx="1" />
                          <rect width="7" height="9" x="14" y="12" rx="1" />
                          <rect width="7" height="5" x="3" y="16" rx="1" />
                        </svg>
                      </div>
                      <span className="text-sm">Unified Dashboard</span>
                    </div>

                    <div className="flex items-center gap-3 p-2 mb-3">
                      <div className="bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clipboard-list"
                        >
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                          <path d="M12 11h4" />
                          <path d="M12 16h4" />
                          <path d="M8 11h.01" />
                          <path d="M8 16h.01" />
                        </svg>
                      </div>
                      <span className="text-sm">Project Planning</span>
                    </div>

                    <div className="flex items-center gap-3 p-2">
                      <div className="bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-settings"
                        >
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <span className="text-sm">Task Automation</span>
                    </div>
                  </div>

                  <button className="bg-orange-500 text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    DOWNLOAD
                  </button>

                  <div className="mt-6">
                    
                  </div>
                </div>
              </div>

              {/* Phone background */}
              <div className="absolute -bottom-4 -right-4 -left-4 h-20 bg-orange-200 -z-10 rounded-b-3xl"></div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Home;