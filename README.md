# MBTI 테스트


https://github.com/user-attachments/assets/d5156371-627a-475c-af84-d32c3c9ea8e1


간단한 테스트를 통해 자신의 MBTI를 확인하고, 다른 사람들의 결과도 함께 볼 수 있는 웹사이트입니다.

[📌사이트 바로가기](https://mbti-test-ten-flax.vercel.app/)

## 🚀 기술 스택

Frontend: React, JavaScript

Backend: json-server

State Management: Zustand

Build Tool: Vite

Styling: Tailwind CSS


## 주요 기능

- MBTI 테스트를 통해 성격 유형 분석

- 각 유형에 대한 결과 페이지 제공

- 다른 사용자의 테스트 결과도 확인 가능

- 카카오톡 공유 기능을 통해 누구나 테스트 결과 페이지에 접근 가능

- 닉네임 변경 기능 제공

- Tailwind CSS를 활용한 반응형 UI 제공

## 페이지별 기능 설명

- 홈
  - `내 성격 알아보러 가기` 버튼 클릭 시 테스트 페이지로 이동
  - 로그인되지 않은 경우, 로그인 페이지로 이동

- 로그인
  - 로그인 기능 제공
  - 로그인 성공 시 홈으로 이동
  - 회원이 아닐 경우, 회원가입 페이지로 이동할 수 있는 링크 제공

- 회원가입
  - 회원가입 기능 제공
  - 간단한 유효성 검사 적용
  - 회원가입 성공 시 자동으로 로그인 페이지로 이동

- 프로필
  - 닉네임 변경 기능 제공

- 테스트
  - MBTI 테스트 폼 제공
  - 테스트 완료 후 결과 확인 가능
  - 카카오톡 공유하기 기능 제공
 
- 테스트 결과
  - 다른 사용자의 테스트 결과 확인 가능
  - 결과 공개 여부 변경 및 삭제 기능 제공

## 폴더 구조

```
mbti-test/
├── public/       
├── src/                
│   ├── api/               
│   │   ├── auth.js         # 인증과 관련 API
│   │   ├── testResults.js  # 테스트 결과와 관련된 API
│   ├── components/        
│   │   ├── Header.jsx      # 헤더 컴포넌트
│   │   ├── InputForm.jsx   # 사용자 입력 form 컴포넌트
│   │   ├── InstructionBox.jsx  # 설명 박스 컴포넌트
│   │   ├── KakaoShare.jsx  # 카카오톡 공유 버튼 컴포넌트
│   │   ├── NavBar.jsx      # 내비게이션 바
│   │   ├── TestForm.jsx    # 테스트 입력 폼
│   │   ├── TestResultItem.jsx  # 테스트 결과 항목
│   │   ├── UserInput.jsx   # 사용자 입력 input 컴포넌트
│   ├── data/            
│   │   ├── instruction.js  # MBTI 검사 관련 설명 데이터
│   │   ├── question.js     # 테스트 질문 데이터
│   ├── pages/            
│   │   ├── Home.jsx        # 홈 페이지
│   │   ├── Login.jsx       # 로그인 페이지
│   │   ├── Profile.jsx     # 사용자 프로필 변경 페이지
│   │   ├── ResultPage.jsx  # 테스트 결과 페이지
│   │   ├── SignUp.jsx      # 회원가입 페이지
│   │   ├── TestPage.jsx    # 테스트 진행 페이지
│   ├── shared/         
│   │   ├── Router.jsx      # 라우터 설정 파일
│   ├── utils/             
│   │   ├── mbtiCalculator.js  # MBTI 결과 계산 함수
│   ├── zustand/            
│   │   ├── userStore.js    # Zustand 상태 관리 파일 (사용자 관련)
│   ├── App.jsx             # 메인 App 컴포넌트
│   ├── main.jsx           
```

## 트러블 슈팅

1️⃣ [await 없이 API 호출하면 생기는 문제](https://velog.io/@bungbuung/await-없이-API-호출하면-생기는-문제)

2️⃣ [mutate에 인자를 넘겼는데 axios에서 안 보인다면?](https://velog.io/@bungbuung/mutate에-인자를-넘겼는데-axios에서-안-보인다면)
