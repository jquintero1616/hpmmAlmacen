import logo from "../../assets/hpmm.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black p-4 w-full">
      <div className="container mx-auto flex justify-start items-center">
        {/* Para esquina superior izquierda del footer */}
        <img src={logo} alt="HPMM Logo" className="h-6 w-auto" />
      </div>
    </footer>
  );
};
