import { ReactNode, useEffect, useState } from "react";
import Context from "./Context";
import { WishList } from "./ContextTypes";

interface iProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: iProps) => {
  const savedWishList = localStorage.getItem("meuArray");
  const wishListLength = savedWishList ? JSON.parse(savedWishList) : [];
  const [wishList, setWishList] = useState<WishList[]>(wishListLength);

  const addItemWishList = (newWishList: WishList) => {
    const exists = wishList.some((p) => p.produto === newWishList.produto);
    if (!exists) {
      setWishList([...wishList, newWishList]);
    }
  };

  useEffect(() => {
    localStorage.setItem("meuArray", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <Context.Provider
      value={{
        wishList,
        addItemWishList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
