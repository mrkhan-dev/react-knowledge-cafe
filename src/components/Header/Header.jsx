import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex md:w-[1280px] mx-auto md:justify-between mt-6 border-b-2 pb-6">
      <h1 className="text-4xl font-semibold">Knowledge Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
