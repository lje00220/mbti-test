import { useEffect } from "react";

/**
 * 카카오톡 공유하기 버튼 컴포넌트
 *
 * @returns {JSX.Element}
 */

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
          link: {
            mobileWebUrl: "https://mbti-test-ten-flax.vercel.app/result",
            webUrl: "https://mbti-test-ten-flax.vercel.app/result",
          },
        },
        itemContent: {
          profileText: "MBTI 테스트",
        },
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: "https://mbti-test-ten-flax.vercel.app/result",
              webUrl: "https://mbti-test-ten-flax.vercel.app/result",
            },
          },
        ],
      });
    }
  };

  return (
    <button
      id="kakaotalk-sharing-btn"
      className="my-3 w-full transform rounded-xl bg-yellow px-5 py-2 text-white transition duration-200 hover:scale-105 hover:bg-white hover:text-yellow"
    >
      카카오톡 공유하기
    </button>
  );
}
