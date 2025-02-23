import { useEffect } from "react";

export default function KakaoShare() {
  useEffect(() => {
    kakaoButton();
  }, []);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_API);
      }

      kakao.Share.createDefaultButton({
        container: "#kakaotalk-sharing-btn",
        objectType: "feed",
        content: {
          title: "MBTI 테스트",
          description: "당신의 MBTI를 확인해보세요!",
          // imageUrl: "",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        itemContent: {
          profileText: "MBTI 테스트",
        },
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
        ],
      });
    }
  };

  return (
    <button
      id="kakaotalk-sharing-btn"
      className="bg-yellow hover:text-yellow my-3 w-full transform rounded-xl px-5 py-2 text-white transition duration-200 hover:scale-105 hover:bg-white"
    >
      KakaoShare
    </button>
  );
}
