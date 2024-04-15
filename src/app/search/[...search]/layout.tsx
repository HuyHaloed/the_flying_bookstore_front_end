import { SITE_NAME } from "@/utils/env";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài đăng | " + SITE_NAME,
};

const layout = ({children}:{children: React.ReactNode}) => children

export default layout