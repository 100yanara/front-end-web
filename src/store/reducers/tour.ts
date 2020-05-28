import { createReducer } from 'typesafe-actions';

const offlineTour = [
  {
    city: '상트페테르부르크',
    country: '러시아',
    kind: '데이투어',
    name: '황제의 마을(성수기)',
    minPerson: 2,
    duration: 1.5,
    isGroup: true,
    transportation: '도보',
    price: {
      adult: 58500,
      student: 48000,
      child: 0,
    },
    course: ['예카테리나 궁전'],
    tags: ['투어', '역사'],
    images: [],
    guide: {
      name: '백야나라팀',
      description:
        '백야나라 팀은 늘 공부하고, 많은 것을 보고, 치열하게 토의하며 러시아를 알아가고 있습니다. 백야나라 팀이 제공하는 투어를 통해 러시아가 어떤 나라인가 이해하는데 도움을 드릴 수 있다면 더 바랄 것이 없겠습니다.',
    },
    star: 4.98,
    review: [
      {
        id: 1234,
        userId: 13,
        userName: '신우식',
        userImage: '',
        dateStamp: '2019-09',
        review:
          '4시간 이상 오전에 대기하는 것은 힘든 일이긴 했으나, 알차게 준비해 주신 도시락도 먹고, 주변 산책도 하고, 기다리는 동안 지루하지 않도록 다양한 설명 해 주셔서 좋았습니다. 다시 만난 금 가이드님의 해박하고 물 흐르는 듯한 설명 덕에 알찬 투어가 되었습니다. 다음엔 겨울시즌에 한 번 다녀가야겠어요.',
        star: 5,
      },
      {
        id: 1234,
        userId: 13,
        userName: '신우식',
        userImage: '',
        dateStamp: '2019-09',
        review:
          '4시간 이상 오전에 대기하는 것은 힘든 일이긴 했으나, 알차게 준비해 주신 도시락도 먹고, 주변 산책도 하고, 기다리는 동안 지루하지 않도록 다양한 설명 해 주셔서 좋았습니다. 다시 만난 금 가이드님의 해박하고 물 흐르는 듯한 설명 덕에 알찬 투어가 되었습니다. 다음엔 겨울시즌에 한 번 다녀가야겠어요.',
        star: 5,
      },
      {
        id: 1234,
        userId: 13,
        userName: '신우식',
        userImage: '',
        dateStamp: '2019-09',
        review:
          '4시간 이상 오전에 대기하는 것은 힘든 일이긴 했으나, 알차게 준비해 주신 도시락도 먹고, 주변 산책도 하고, 기다리는 동안 지루하지 않도록 다양한 설명 해 주셔서 좋았습니다. 다시 만난 금 가이드님의 해박하고 물 흐르는 듯한 설명 덕에 알찬 투어가 되었습니다. 다음엔 겨울시즌에 한 번 다녀가야겠어요.',
        star: 5,
      },
    ],
    program: '',
    includes: [
      { name: '반일차량', description: '11' },
      {
        name: '간식',
        description: '빵, 음료수, 과일, 샌드위치, 초코파이가 포함되어 있습니다',
      },
      { name: '수신기', description: '10명 이상일 경우 제공됩니다' },
    ],
    placeOfVisit: ['예카테리나 궁전', '예카테리나 공원'],
    meeting: {
      lat: 59.92026,
      lng: 30.328752,
      description: '비텝스키 기차역 입구 앞',
      time: '09:30',
    },
    Notice: {
      refund:
        '모든 여행은 예약 후 24시간 이내 또는 여행 시작 7일 전까지 취소 및 전액 환불이 가능합니다.',
      ex: '',
    },
  },
];

type TourState = {
  loading: boolean | null;
  dayTour: string | null;
  onlineTour: string | null;
};

const initialState: TourState = {
  loading: false,
  dayTour: '',
  onlineTour: '',
};

const TourReducer = createReducer<TourState>(initialState);

export default TourReducer;
