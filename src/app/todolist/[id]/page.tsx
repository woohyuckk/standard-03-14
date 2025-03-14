import DetailContent from "@/components/DetailContents";

const DetailPage = ({ params }: { params: { id: string } }) => {
  return <DetailContent params={params} />;
};

export default DetailPage;
