import LeftCol from "@/components/SingleHouseContainer/LeftCol";
import RightCol from "@/components/SingleHouseContainer/RightCol";
import ImageSlider from "@/components/SingleHouseContainer/Slider";
import Title from "@/components/SingleHouseContainer/Title";

const SingleHousePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.BASE_URL}/houses/${id}`);
  const house = await res.json();
  console.log(house);

  return (
    <div className="mx-4 sm:mx-7 mt-12 lg:mx-14">
      <ImageSlider photos={house.photos} />
      <Title title={house.title} address={house.address} />
      <div className="flex flex-col lg:flex-row gap-28 py-8">
        <RightCol {...house} />
        <LeftCol {...house} />
      </div>
    </div>
  );
};

export default SingleHousePage;
