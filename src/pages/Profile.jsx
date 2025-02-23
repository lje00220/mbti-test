import { useState } from "react";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";
import { updateProfile } from "../api/auth";
import useBearsStore from "../zustand/bearsStore";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const Profile = () => {
  const [changedProfile, setChangedProfile] = useState("");
  const { accessToken } = useBearsStore((state) => state);

  const { mutateAsync } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("닉네임이 수정되었습니다!");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = [
        {
          nickname: changedProfile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ];
      await mutateAsync(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <InputForm type="프로필 업데이트" onSubmit={handleSubmit}>
      <label htmlFor="nickname">닉네임</label>
      <UserInput
        value={changedProfile}
        setValue={setChangedProfile}
        placeholder="닉네임"
        id="nickname"
      />
    </InputForm>
  );
};

export default Profile;
