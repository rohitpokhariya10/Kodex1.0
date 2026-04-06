import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-around p-[10px]">
      <div className="logo flex gap-5 items-center">
        {/* LinkedIn Logo - 40px same rakha */}
        <svg
          className="h-[40px] w-[40px] text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>

        {/* Search Bar */}
        <div className="h-[35px] flex items-center gap-2 bg-white px-2 w-[250px] border border-gray-400 rounded-3xl">
          {/* Search Icon - 19px same rakha */}
          <svg
            className="h-[19px] w-[19px] text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      <div className="nav-icons flex items-center gap-[30px]">
        {/* Home */}
        <div className="home flex flex-col items-center  gap-0.5">
          <svg
            className="text-gray-800 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z" />
          </svg>
          <h1 className="text-[13px] text-gray-500">Home</h1>
        </div>

        {/* My Network */}
        <div className="network flex flex-col items-center">
          <svg
            className="text-gray-500 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z" />
          </svg>
          <h1 className="text-[13px] text-center text-gray-500">My Network</h1>
        </div>

        {/* Jobs */}
        <div className="jobs flex flex-col items-center">
          <svg
            className="text-gray-500 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" />
          </svg>
          <h1 className="text-[13px] text-gray-500">Jobs</h1>
        </div>

        {/* Messaging */}
        <div className="messaging flex flex-col items-center">
          <svg
            className="text-gray-500 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
          >
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z" />
          </svg>
          <h1 className="text-[13px] text-gray-500">Messaging</h1>
        </div>

        {/* Notifications */}
        <div className="notifications flex flex-col items-center">
          <svg
            className="text-gray-500 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
          >
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z" />
          </svg>
          <h1 className="text-[13px] text-gray-500">Notifications</h1>
        </div>

        {/* Me */}
        <div className="me flex flex-col items-center">
          <img
            className="h-[30px] w-[30px] rounded-2xl"
            src={profile}
            alt="test"
          />
          <div className="flex items-center">
            <h1 className="text-[13px] text-gray-600">Me</h1>
            {/* Dropdown Arrow - 20px same rakha */}
            <svg
              className="h-[20px] w-[20px] text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M4 6l4 4 4-4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;