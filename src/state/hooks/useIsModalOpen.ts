import { useRecoilValue } from "recoil"
import { isModalOpen } from "../atom"

export const useIsModalOpen = () => {
  return useRecoilValue(isModalOpen);
};
