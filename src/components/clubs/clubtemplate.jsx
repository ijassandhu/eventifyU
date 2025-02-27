import { useParams } from "react-router-dom";
import { club_collection } from "./club_collection";
import Navbar from "../navbar";
import NotFound from "../Notfound";
import Footericons from "../footericons";

export default function ClubTemplate() {
  const { club_tag } = useParams();
  const clubDetail = club_collection[club_tag];

  if (clubDetail === undefined) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="bg-[#2b2b2b] h-[100vh] pt-20">
        <div className="flex text-white">
          Name: {clubDetail.name}
          <br />
          Description: {clubDetail.short_desc}
        </div>
      </div>
      <Footericons />
    </>
  );
}
