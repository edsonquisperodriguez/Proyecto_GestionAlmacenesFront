import { Link } from "react-router-dom";

export const Menu = () => {
  const links = [
    { name: "Home", href: "/", icon: "/" },
    {
      name: "Productos",
      href: "/productos",
      icon: "/",
    },
    { name: "Clientes", href: "/clientes", icon: "/" },
  ];
  return (
    <div className="flex flex-col absolute top-0 left-0">
      {links.map((link) => {
        return (
          <>
            <Link
              key={link.name}
              to={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            
          `}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </>
        );
      })}
    </div>
  );
};
