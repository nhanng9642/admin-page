import { useLocation } from "react-router-dom";
import {
  Navbar,
  Typography,
  Breadcrumbs,
  Avatar,
  Button,
} from "@material-tailwind/react";

export function Header() {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color="transparent"
      className="rounded-xl transition-all px-0 py-1"
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all`}
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-50 transition-all"
            >
              {layout}
            </Typography>

            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>

        <div className="flex items-center border p-4 rounded-xl bg-white ">
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal mx-4 font-bold"
            >
              Mark Hiddleston
            </Typography>

            <Button color="red">Log out</Button>
        </div>
      </div>
    </Navbar>
  );
}

export default Header