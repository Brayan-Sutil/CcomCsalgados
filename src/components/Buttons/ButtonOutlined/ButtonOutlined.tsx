import css from "./ButtonOutlined.module.css"
import { MenuOutlined } from '@mui/icons-material';
import { ButtonOutlinedParamList } from "./ButtonOutlinedParamList";

const ButtonOutlined = ({ onClick }: ButtonOutlinedParamList) => {
  return (
    <div className={css.container}>
      <MenuOutlined
        onClick={onClick}
        fontSize="large"
        sx={{ color: "#000000" }}
      />
    </div>
  );
};
export default ButtonOutlined