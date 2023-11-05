export interface WishList {
  produto: string,
  valor: string,
  img?: string | null | undefined,
}

export interface WishListContextProps {
  wishList: WishList[];
  addItemWishList: (newWishList: WishList) => void;
}
