import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import {
  LayoutDashboard,
  ListCollapseIcon,
  ListIcon,
  SquarePlus,
} from 'lucide-react';

const AdminSidebar = () => {
  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  };

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Add Shows', path: '/admin/add-shows', icon: SquarePlus },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    {
      name: 'List Bookings',
      path: '/admin/list-bookings',
      icon: ListCollapseIcon,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      {/* Profile Section */}
      <img
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        src={user.imageUrl}
        alt="Profile"
      />
      <p className="mt-2 text-base max-md:hidden">
        {user.firstName} {user.lastName}
      </p>

      {/* Navigation Links */}
      <div className="w-full">
        {adminNavlinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 transition-colors duration-200 ${
                  isActive ? 'bg-primary/15 text-primary' : 'text-gray-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="w-5 h-5" aria-label={link.name} />
                  <p className="max-md:hidden">{link.name}</p>
                  {isActive && (
                    <span className="w-1.5 inset-y-0 right-0 absolute bg-primary rounded-l"></span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
