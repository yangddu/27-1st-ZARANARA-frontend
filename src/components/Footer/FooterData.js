import {
  RiKakaoTalkFill,
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
  RiTwitterFill,
  RiSpotifyFill,
} from 'react-icons/ri';

export const ASIDE_DATA = [
  { id: 1, title: '공지사항' },
  { id: 2, title: 'Developers', content: [{ role: 'Team ZARANARA' }] },
  {
    id: 3,
    title: 'Contact',
    content: [
      {
        id: 1,
        role: '백엔드',
        href: 'https://github.com/wecode-bootcamp-korea/27-1st-ZARANARA-backend',
      },
      {
        id: 2,
        role: '프론트',
        href: 'https://github.com/wecode-bootcamp-korea/27-1st-ZARANARA-frontend',
      },
    ],
  },
];

export const FOOTER_IMG = [
  { id: 1, icon: <RiKakaoTalkFill className="snsIcon" /> },
  { id: 2, icon: <RiFacebookFill className="snsIcon" /> },
  { id: 3, icon: <RiInstagramLine className="snsIcon" /> },
  { id: 4, icon: <RiPinterestLine className="snsIcon" /> },
  { id: 5, icon: <RiYoutubeLine className="snsIcon" /> },
  { id: 6, icon: <RiTwitterFill className="snsIcon" /> },
  { id: 7, icon: <RiSpotifyFill className="snsIcon" /> },
];
