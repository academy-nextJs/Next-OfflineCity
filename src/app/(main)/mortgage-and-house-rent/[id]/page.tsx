import ImageSlider from "@/components/SingleHouseContainer/Slider";

const SingleHousePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.BASE_URL}/houses/${id}`);
  const house = await res.json();
  console.log(house.photos);

  return (
    <div className="mx-7 mt-12 lg:mx-14">
      <ImageSlider photos={house.photos} />
    </div>
  );
};

export default SingleHousePage;
