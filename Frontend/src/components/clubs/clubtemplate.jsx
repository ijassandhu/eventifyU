import { useParams } from "react-router-dom";
import { club_collection } from "./club_collection";
import Navbar from "../navbar";
import NotFound from "../notfound";

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
      <Navbar></Navbar>
      <div className="mt-20 md:mt-24 flex">
        Name: {clubDetail.name}
        <br />
        Description: {clubDetail.short_desc}
      </div>
    </>
  );
}
// import { useParams } from react-router-dom;
// import NotFound from "../notfound";
// import { club_collection } from "./club_collection";

// export default function ClubTemplate(){
//   const { club_tag } = useParams();
//   const clubDetail = club_collection[club_tag];

//   if(clubDetail === undefined) {
//     return (
//       <>
//       <NotFound />
//       </>
//     );
//   }
//   return (
//     <>
//     <Navbar/>
//     <div className="mt-20 md:mt-24 flex">
//          Name: {clubDetail.name}
//          <br />
//          Description: {clubDetail.short_desc}
//        </div>
//     </>
//   )
// }
