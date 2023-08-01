import { useSetRecoilState } from "recoil"
import { isModalOpen } from "../atom";

export const useSetIsModalOpen = () => {
  const setIsModaOpen = useSetRecoilState<boolean>(isModalOpen);

  return (value: boolean) => setIsModaOpen(value);
};
