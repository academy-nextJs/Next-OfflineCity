import Category from "@/components/HomeContainer/Category";
import Discount from "@/components/HomeContainer/Discount";
import Header from "@/components/HomeContainer/Header";
import Rent from "@/components/HomeContainer/Rent";

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <div className="pr-[56px] pl-[52px]">
        <Discount /> 
        <Rent />
      </div>
    </>
  );
}
