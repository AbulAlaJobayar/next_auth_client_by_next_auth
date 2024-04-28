import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const HomePage = async() => {
  const session=await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1>
    </div>
  );
};

export default HomePage;
