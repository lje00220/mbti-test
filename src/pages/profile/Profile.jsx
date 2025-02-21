import { useState } from "react";

const Profile = () => {
  const [changedProfile, setChangedProfile] = useState("");

  return (
    <div className="p-5mt-1 mt-1 flex h-screen flex-col items-center justify-start bg-[#f3f4f6] p-5">
      <div className="flex h-2/5 w-1/3 flex-col items-center rounded-md bg-white shadow-lg">
        <h1 className="mb-10 mt-5 text-3xl">프로필 수정</h1>
        <form className="flex flex-col gap-5">
          <label>
            <p>닉네임</p>
            <input
              type="text"
              className="w-4/5 border-zinc-500"
              value={changedProfile}
              onChange={(e) => setChangedProfile(e.target.value)}
            />
          </label>
          <button className="mt-8 rounded-2xl bg-[#ff5a5f] px-5 py-2 text-white">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
