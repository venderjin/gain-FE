export type RecommandMentorType = (typeof recommandMentor)[number]

export const recommandMentor = [
  {
    id: '1',
    name: '정민주',
    title: 'Google UX/UI 디자이너',
    hashTags: ['UX/UI', '미국', '취업'],
    profileImage: '/mentor1.png',
    starRate: 4.9,
    reviewCount: 773,
    reviewContent: '현직자가 직접 첨삭해줘서 큰 도움됐어요',
  },
  {
    id: '2',
    name: '이영희',
    title: 'Google UX/UI 디자이너',
    hashTags: ['UX/UI', '미국', '취업'],
    profileImage: '/mentor2.png',
    starRate: 4.9,
    reviewCount: 900,
    reviewContent: '실제로 면접 준비에 큰 도움이 됐어요',
  },
  {
    id: '3',
    name: '박철수',
    title: 'Google UX/UI 디자이너',
    hashTags: ['UX/UI', '미국', '취업'],
    profileImage: '/mentor3.png',
    starRate: 4.7,
    reviewCount: 530,
    reviewContent: '실제 구직자 입장에서 피드백을 해주셔서 좋았어요.',
  },
] as const

export type MentorProfileType = typeof mentorProfile

export const mentorProfile = {
  id: 1,
  name: '정민주',
  title: 'Google UX/UI 디자이너',
  hashTags: ['UX/UI', '미국', '취업'],
  profileImage: '/mentor1.png',
  cumulativeMenteeCount: 34,
  responseTime: '월–금 19:00~22:00 (KST 기준)',
  review: [
    {
      id: 1,
      mentorId: 1,
      menteeName: '김철수',
      menteeProfileImage: null,
      starRate: 5,
      content:
        '그동안 감으로만 만들던 포트폴리오를 멘토님과 함께 논리적으로 재구성할 수 있었어요. 실제 Google 인터뷰에서 어떻게 설명했는지도 알려주셔서 큰 도움이 됐습니다. 이전과는 완전히 다른, 스토리가 살아있는 포폴로 탈바꿈했어요.',
      createdAt: '2023-10-01',
    },
    {
      id: 2,
      mentorId: 1,
      menteeName: '이영희',
      menteeProfileImage: null,
      starRate: 4,
      content: '멘토님 덕분에 많은 것을 배웠습니다. 감사합니다!',
      createdAt: '2023-10-02',
    },
    {
      id: 3,
      mentorId: 1,
      menteeName: '박지민',
      menteeProfileImage: null,
      starRate: 5,
      content:
        '유학 후 커리어가 막막했는데, 멘토님과 대화할 수 있었어요. 실제 실리콘밸리에서 어떤 사람이 뽑히는지에 대한 정보도 얻을 수 있었습니다.',
      createdAt: '2023-10-03',
    },
    {
      id: 4,
      mentorId: 1,
      menteeName: '최수영',
      menteeProfileImage: null,
      starRate: 5,
      content: '멘토님과의 대화는 정말 유익했습니다. 실리콘밸리에서의 경험을 공유해 주셔서 많은 도움이 되었습니다.',
      createdAt: '2023-10-04',
    },
  ],
  introduction: `UX 디자인 실무에서 10년 넘게 일하며 스타트업부터 글로벌 빅테크까지 다양한 조직을 경험했습니다. 미국 취업과 UX 포트폴리오 설계에 대한 인사이트를 나누고 싶어 GAIN 멘토링을 시작하게 되었고, 단순한 코멘트가 아닌 ‘어떻게 전달해야 설득력 있는 포폴이 될 수 있을지’를 함께 고민합니다.

    멘토링은 다음과 같은 방식으로 진행됩니다.
    • 사전 제출된 포트폴리오(또는 이력서)를 바탕으로 먼저 전체 구조를 함께 검토합니다.
    • 문제점과 개선 포인트를 중심으로 구체적인 수정 방향을 드리며, 포인트별 우선순위를 잡아드립니다.
    • 멘토링 종료 후에는 간단한 요약 정리(피드백 요약 / 메모)도 함께 전달드립니다.
    • 추가적으로 궁금하신 부분은 채팅을 통해 짧게 질의응답 가능합니다.

    UX 전략 관점에서 ‘디자인을 설명하는 법’, ‘문제를 해결하는 접근’을 함께 다루는 멘토링을 원하신다면 도움이 되어드릴 수 있을 거라 생각합니다.`,
  career: [
    {
      id: 1,
      mentorId: 1,
      title: 'Google | UX/UI 디자이너',
      period: '2018.01 - 현재',
      description: `- Google Drive 모바일 UX 리디자인 주도
        - 사용자 온보딩 전환율 35% 향상
        - 실리콘밸리 UX팀 내 리서치 기반 설계 경험`,
    },
    {
      id: 2,
      mentorId: 1,
      title: '스타트업 ‘Designly’ | UX 디자이너',
      period: '2015.06 - 2017.12',
      description: `- MVP 앱 사용자 플로우 설계 및 와이어프레임 제작
        - 첫 사용자 확보를 위한 핵심 기능 UI 개선`,
    },
  ],
  education: [
    {
      id: 1,
      mentorId: 1,
      title: 'UC Berkeley Extension | UX Certificate',
      period: '(2019.03 – 2019.12)',
      description: `- 디자인씽킹, 인터랙션 설계, 포트폴리오 심화 과정 수료`,
    },
    {
      id: 2,
      mentorId: 1,
      title: 'Rhode Island School of Design (RISD)',
      period: '(2017.09 – 2019.06)',
      description: `- MFA in Interaction Design`,
    },
  ],
  portpolio: [
    {
      id: 1,
      mentorId: 1,
      title: '포트폴리오1',
      className: 'bg-blue-50',
    },
    {
      id: 2,
      mentorId: 1,
      title: '포트폴리오2',
      className: 'bg-blue-100',
    },
    {
      id: 3,
      mentorId: 1,
      title: '포트폴리오3',
      className: 'bg-blue-200',
    },
    {
      id: 4,
      mentorId: 1,
      title: '포트폴리오4',
      className: 'bg-blue-300',
    },
  ],
} as const
