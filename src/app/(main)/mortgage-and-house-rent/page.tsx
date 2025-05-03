import Inputs from "@/components/MortgageAndHouseRent/Inputs";
import MortgageAndHouseRentList from "@/components/MortgageAndHouseRent/List";

const MortgageAndHouseRent = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-10 my-10 px-14">
        <Inputs />
      </div>
      <MortgageAndHouseRentList />
    </>
  );
};

export default MortgageAndHouseRent;
