import { Link } from "react-router-dom";

export const Menu = () => {
  const links = [
    { name: "Home", href: "/", icon: "/" },
    {
      name: "Productos",
      href: "/",
      icon: "/",
    },
    { name: "Clientes", href: "/", icon: "/" },
  ];
  return (
    <div className="flex flex-col w-[200px] border border-gray-300 p-4">
      <div className="flex justify-center items-center">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src="https://i.pinimg.com/736x/4e/8c/cf/4e8ccf2c68c46b9cd292e0b751d0f38c.jpg"
          alt="img"
        />
      </div>
      <div>
        {links.map((link) => {
          return (
            <>
              <Link
                key={link.name}
                to={link.href}
                className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50  text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            
          `}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            </>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
