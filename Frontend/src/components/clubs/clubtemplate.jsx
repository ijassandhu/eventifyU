import { useParams } from "react-router-dom";
import { CLUB_COLLECTION } from "./club_collection";
import Navbar from "../navbar";
import NotFound from "../NotFound";

export default function ClubTemplate() {
  const { club_tag } = useParams();
  const clubDetail = CLUB_COLLECTION[club_tag];

  if (clubDetail === undefined) {
    return (
      <>
        <NotFound></NotFound>
      </>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-20 md:mt-24 flex">
        Name: {clubDetail.name}
        <br />
        Description: {clubDetail.short_desc}
      </div>
    </>
  );
}
