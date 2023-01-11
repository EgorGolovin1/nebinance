import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokens } from "../../redux/selectors";

export const useTokens = () => {
  const [searchParams] = useSearchParams();
  const coinQuery = searchParams.get("search");

  const tokens = useSelector(getTokens(coinQuery));

  return { tokens: tokens, coinQuery: coinQuery };
};
