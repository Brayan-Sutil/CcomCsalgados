import css from "./IconsMenuMobile.module.css"
import {
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";

const IconsMenuMobile = () => {
  return (
    <div
        className={css.containerIconsMenu}
    >
      <Facebook
        fontSize="large"
        sx={{
          color: "#ffffff",
        }}
      />
      <Instagram
        fontSize="large"
        sx={{
          color: "#ffffff",
          margin: "0px 30px"
        }}
      />
      <WhatsApp
        fontSize="large"
        sx={{
          color: "#ffffff",
        }}
      />
    </div>
  );
};

export default IconsMenuMobile;
