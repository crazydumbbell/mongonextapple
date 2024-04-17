import { connectDB } from "@/util/database";

const handler = async (요청, 응답) => {

  return 응답.status(200).json();
};

export default handler;
