import Category from "@/components/HomeContainer/Category";
import Comments from "@/components/HomeContainer/Comments";
import Discount from "@/components/HomeContainer/Discount";
import Education from "@/components/HomeContainer/Education";
import Header from "@/components/HomeContainer/Header";
import Rent from "@/components/HomeContainer/Rent";
import TopHome from "@/components/HomeContainer/TopHome";

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <div className="pr-[56px] pl-[52px]">
        <Discount /> 
        <Rent />
        <Education />
        <TopHome />
        <Comments />
      </div>
    </>
  );
}
