import { useState } from "react";
import InputForm from "../../components/InputForm";
import UserInput from "../../components/userInput";

const Profile = () => {
  const [changedProfile, setChangedProfile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
