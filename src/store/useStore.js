import { create } from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  chatList: [
    {
      title: '채팅방1',
      con: [
        {
          message:
            '사용하는 유스케이스에 따라서 표현할 경우 앞에 달러표시를 붙이는 걸까요??',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '이재영',
        },
        {
          message: '어제는',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '이지환',
        },
        {
          message: '혹시 그 이유를 아시는 분이 계실까요??',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '이재영',
        },
        {
          message: '???',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '이재영',
        },
      ],
    },
    {
      title: '채팅방2',
      con: [
        {
          message:
            '삭제하려는 대상자의 예약건이 있는 경우 해지가 안되어서 빨간색 토스트 메세지가 뜰거에요',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '배상도',
        },
        {
          message: '개발계로 테스트 하고 있습니다',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '배상도',
        },
        {
          message:
            '선임님~ 방금 수정된 내용이 있어서 이미 받으셨다면 새로 받아서 확인해주시면 감사하겠습니다~해당 건 해지완료되면 페이지 자동으로 이동되도록 수정한 건입니다',
          direction: 'outgoing',
          position: 'single',
          sender: '하진희',
        },
        {
          message: '아  ㅎㅎ 넵넵 확인해보겠습니다 감사합니다~',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '하진희',
        },
      ],
    },
    {
      title: '채팅방3',
      con: [
        {
          message: '네 알겠습니다.',
          direction: 'outgoing',
          position: 'single',
          sender: '하진희',
        },
        {
          message:
            '이게 기존에 사용하는 시스템인데 동일하게 용어를 사용했습니다',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '하진희',
        },
        {
          message: '서비스 대분류랑 똑같다고 보시면됩니다!',
          direction: 'incoming',
          position: 'single',
          sender: '배상도',
        },
        {
          message: '넵넵 감사합니다~',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '배상도',
        },
      ],
    },
    {
      title: '채팅방4',
      con: [
        {
          message: '감사합니다',
          direction: 'outgoing',
          position: 'single',
          sender: '윤화현',
        },
        {
          message:
            '이게 기존에 사용하는 시스템인데 동일하게 용어를 사용했습니다',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '이지환',
        },
        {
          message: '서비스 대분류랑 똑같다고 보시면됩니다!',
          direction: 'outgoing',
          position: 'single',
          sender: '윤화현',
        },
        {
          message: '넵넵 감사합니다~',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '윤화현',
        },
      ],
    },
    {
      title: '채팅방5',
      con: [
        {
          message:
            '앱 현황에 대한 파일작성 요청이 있어, 현황 파일을 작성했습니다. 테스트 시나리오 기준으로 작성했으며, 해당 내용에서 잘못된 내용이 있는 경우 알려주시면 반영하여 수정하겠습니다. *오류가 발생하더라도, 개발 자체가 완료인 경우 O',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '공지연',
        },
        {
          message:
            'https://ssl.pstatic.net/melona/libs/1476/1476963/7c6a3035093fedd80020_20240105154417884.jpg',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '공지연',
        },
        {
          message: '확인부탁드립니다.',
          sentTime: '15 mins ago',
          direction: 'outgoing',
          position: 'single',
          sender: '윤화현',
        },
        {
          message:
            '* 개발하시는 소스 commit 등은 상관 없으며, 개발서버상에 배포를 일시 중지 바랍니다.',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '윤화현',
        },
        {
          message:
            '공지] 개발 서버 오전 시연외 배포 중지 일시: 2024.01.11 AM 09:00 ~ PM 13:00',
          sentTime: '15 mins ago',
          direction: 'incoming',
          position: 'single',
          sender: '윤화현',
        },
      ],
    },
  ],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
