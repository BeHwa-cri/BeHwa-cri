/* ============================================================
   🐯 호랑이 길드 사이트 — 설정 수정 파일
   (GitHub에서 이 파일을 열고 연필 아이콘 → 수정 → Commit changes)
   ============================================================ */

window.SITE_CONFIG = {

  /* [1] Firebase 설정 — SETUP_GUIDE 2단계
     Firebase 콘솔에서 복사한 firebaseConfig 값을 아래 null 자리에 붙여넣으세요.
     아직 안 했으면 null 그대로 두세요 → 사이트가 '데모 모드'로 동작해요.

     붙여넣은 모습 예시:
     firebase: {
       apiKey: "AIzaSyB...",
       authDomain: "tiger-guild.firebaseapp.com",
       projectId: "tiger-guild",
       storageBucket: "tiger-guild.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcdef"
     },
  */
  firebase: null,

  /* [2] 카카오 JavaScript 키 — SETUP_GUIDE 3단계
     따옴표 안에 붙여넣으세요. 예: kakaoJsKey: "a1b2c3d4...", */
  kakaoJsKey: "",

  /* [3] 관리자 비밀번호 — 기여도 입력, 주차 만들기, 글 삭제에 필요해요.
     ⚠️ 꼭 다른 번호로 바꿔주세요! */
  adminCode: "0000",

  /* [4] 길드 카카오톡 오픈채팅방 링크 (있으면 붙여넣기, 없으면 "" 그대로) */
  openChatUrl: "",

  /* [5] 이름 */
  clanName: "호랑이",
  gameName: "협동타워디펜스"
};
