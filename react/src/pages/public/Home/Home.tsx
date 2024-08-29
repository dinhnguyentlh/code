import * as React from "react";
import { Header, ImageSlider } from "../../../components";
import {
  Breadcrumbs,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <div className="p-12" style={{ padding: "12px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Trang chủ
          </Link>

          <Typography color="text.primary">Sản phẩm</Typography>
        </Breadcrumbs>
        <h1 className="text-primary fs-3">
          TRẢI NGHIỆM MÔI TRƯỜNG LÀM VIỆC ĐÁM MÂY TRÊN 3DEXPERIENCE
        </h1>
        <p>
          Khi nhu cầu phát triển các trải nhiệm dành cho người dùng tăng lên và
          các sản phẩm cũng trở nên phức tạp và kết nối hơn thì khả năng truy
          cập dữ liệu phát triển sản phẩm và công tác hiệu quả với các bên liên
          quan trên các địa điểm khác nhau một cách dễ dàng - thuận tiện trở nên
          quan trọng hơn bao giờ hết . Bây giờ, bất kỳ một doanh nghiệp nào cũng
          có thể tận dụng các nguồn lức mới để đáp ứng các xu hướng này.
        </p>
        <p>
          Nhập 3dexperience works, 3dexperience sẽ cung cấp quyền truy cập vào
          danh mục đang phát triển bằng các ứng dụng thiết kế của solidworks -
          nơi tất cả các thành viên của một tổ chức, đội nhóm có thể đóng góp
          cho quá trình thiết kế để:{" "}
        </p>
      </div>
    </>
  );
}
