import { useState } from "react";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";
import { updateProfile } from "../api/auth";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "../zustand/userStore";

/**
 * 프로필 페이지
 *  - 닉네임을 수정하는 기능
 *
 * @returns {JSX.Element}
 */

const Profile = () => {
  const [changedProfile, setChangedProfile] = useState("");
  const changeNickname = useUserStore((state) => state.changeNickname);

  const { mutateAsync } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("닉네임이 수정되었습니다!");
    },
  });

  // 닉네임 수정 버튼 클릭 시 입력한 닉네임 저장
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({
        nickname: changedProfile,
      });

      changeNickname(changedProfile);
    } catch (error) {
      console.error(error.message);
    }

    setChangedProfile("");
  };

  return (
    <InputForm type="프로필 업데이트" onSubmit={handleSubmit}>
      <label htmlFor="nickname">닉네임</label>
      <UserInput
        value={changedProfile}
        onChange={setChangedProfile}
        placeholder="닉네임"
        id="nickname"
      />
    </InputForm>
  );
};

export default Profile;
