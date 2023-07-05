import css from "./ScreenName.module.css"
import { ScreenNameParamList } from "./ScreenNameParamList";



const ScreenName = ({ screenName } : ScreenNameParamList) => {
  return (
    <div className={css.containerScreenName}>
      <h1 className={css.titleScreenName}>{screenName}</h1>
    </div>
  );
};

export default ScreenName