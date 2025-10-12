
// Next.js API route - /api/accounts
// Demo data only. No real user data.

const ACCOUNTS = [
  {
    "uid": "4205159811",
    "password": "31895616B873AD9846006BF07EE903271FB52D8948AA1A9A56C381C13CB4D267",
    "account_id": 13487903991,
    "name": "GHOST_X⁴⁵⁶⁹",
    "region": "BD"
  },
  {
    "uid": "4205160259",
    "password": "F35E8E77209ABF91FD9C2696D860D30FC3DAA87E7600CDE194F3D08861D03EF1",
    "account_id": 13487905823,
    "name": "GHOST_X¹⁶⁸¹",
    "region": "BD"
  },
  {
    "uid": "4205160608",
    "password": "4BB8612411261036D10FDE95BBB09DED75B9406E392E4950D0CCC8292B3190A8",
    "account_id": 13487907523,
    "name": "GHOST_X¹²⁸⁷",
    "region": "BD"
  },
  {
    "uid": "4205160984",
    "password": "05CAAE24489683E217300E3000B95165A07F4B896DFACA0E772EF3178026509F",
    "account_id": 13487909710,
    "name": "GHOST_X⁹³⁷⁵",
    "region": "BD"
  },
  {
    "uid": "4205161585",
    "password": "4D60123B17906497276611454B18EF6D02AB06A1DAE625DBFECDA0A5ACDA41AE",
    "account_id": 13487913229,
    "name": "GHOST_X³⁹⁷¹",
    "region": "BD"
  },
  {
    "uid": "4205161994",
    "password": "33074A3755BDF3AE81E41CFF809312B803BFBFDE08B3B1591830A81571938D5F",
    "account_id": 13487914760,
    "name": "GHOST_X³⁵⁷⁵",
    "region": "BD"
  },
  {
    "uid": "4205162157",
    "password": "A220F689A40796E71ED84D3E4412D72DF21DD220D384F1A1006C17FDE4083510",
    "account_id": 13487916285,
    "name": "GHOST_X³⁰⁹³",
    "region": "BD"
  },
  {
    "uid": "4205162535",
    "password": "C17896430EF283275B4668733BCBA45D69A1BBA20F3B73FAD660C6A117CCB049",
    "account_id": 13487917132,
    "name": "GHOST_X²⁶⁰¹",
    "region": "BD"
  },
  {
    "uid": "4205162683",
    "password": "C8E313B0D86462587D92C3BA251B7EA833FD4BC218BA96DB1AE7E75B9BAB3BF5",
    "account_id": 13487917886,
    "name": "GHOST_X⁵⁷³⁹",
    "region": "BD"
  },
  {
    "uid": "4205162855",
    "password": "A8C88A42FAB5602EEDA110662A59F56B82FC03B090115DD689C3E74A3550F033",
    "account_id": 13487918808,
    "name": "GHOST_X⁸²³⁵",
    "region": "BD"
  },
  {
    "uid": "4205165764",
    "password": "E077108C3C382662BB3ED736D1A8268F45B4720BFA2FC1D56873660FC3CB38B8",
    "account_id": 13487934046,
    "name": "GHOST_X⁵⁸⁷¹",
    "region": "BD"
  },
  {
    "uid": "4205166672",
    "password": "F7E62350CB24D6DFA19664316C0BFBBA9D5EEFD01FA7BFE05C9F9E086C2ED744",
    "account_id": 13487938419,
    "name": "GHOST_X³⁴⁶⁵",
    "region": "BD"
  },
  {
    "uid": "4205168943",
    "password": "9C72DC2A50E4AF0A301835A312A0D8F59E81BFCCBE82175778863B2580065AAA",
    "account_id": 13487951301,
    "name": "GHOST_X³³⁹¹",
    "region": "BD"
  },
  {
    "uid": "4205171012",
    "password": "60F5710F35A2BEE89CC151A5062EE9B57C30BFCCD16731F7C895DC393A9E4A14",
    "account_id": 13487961225,
    "name": "GHOST_X⁴⁰³⁴",
    "region": "BD"
  },
  {
    "uid": "4205172640",
    "password": "FF7747D4C4E475F74ADFA0B30204A48EB0F2E8A5CDC30DEE64A1CBF35ADDAFF9",
    "account_id": 13487971461,
    "name": "GHOST_X⁷⁷⁸²",
    "region": "BD"
  },
  {
    "uid": "4205173811",
    "password": "1598B19E9F4B6B84C067990343B94940C839F0FE0255C752B0F0F42D285C4447",
    "account_id": 13487976459,
    "name": "GHOST_X¹⁸⁹⁶",
    "region": "BD"
  },
  {
    "uid": "4205174521",
    "password": "1689F4E9E031BAD211EAD89469EDB218D05B964EF13949FB84D658C9CD7D986D",
    "account_id": 13487982701,
    "name": "GHOST_X¹⁹⁰",
    "region": "BD"
  },
  {
    "uid": "4205177157",
    "password": "20D3629ACD54A376241D814C8C263B9A1D6BCD19562D37BE013FF91DE8630C23",
    "account_id": 13487994340,
    "name": "GHOST_X⁴¹⁶⁶",
    "region": "BD"
  },
  {
    "uid": "4205179110",
    "password": "5ABB6350ACFC241EDDFA32A80DEA847731FA398D65022F3F790A49122C73139C",
    "account_id": 13488003272,
    "name": "GHOST_X³⁶⁴²",
    "region": "BD"
  },
  {
    "uid": "4205179717",
    "password": "ECECF3B755E53261F6209E0A77FCB420828BB785FB3F5D97892D8FEE87559E67",
    "account_id": 13488005454,
    "name": "GHOST_X⁷⁹²¹",
    "region": "BD"
  },
  {
    "uid": "4205180970",
    "password": "C9FAFE2DD9A6F33192246D9BC0242EA25E0EB1565EFF57C16D84E270B57E86A1",
    "account_id": 13488011913,
    "name": "GHOST_X⁸⁸⁸⁹",
    "region": "BD"
  },
  {
    "uid": "4205183483",
    "password": "29C83C233367C96D9D0B3177CA1B37450E4BA8421472D361C882516C01644176",
    "account_id": 13488023909,
    "name": "GHOST_X⁹⁹⁹¹",
    "region": "BD"
  },
  {
    "uid": "4205185463",
    "password": "84877D0D4C440F7859658EB8A3D59B64003E56533D17FE6E4A648F21495CD44B",
    "account_id": 13488036021,
    "name": "GHOST_X⁶⁰³",
    "region": "BD"
  },
  {
    "uid": "4205186511",
    "password": "232C34EA7293F61E8821DDDA2F93AE06419A6BEE212D05DDC122C919E699C2EA",
    "account_id": 13488040263,
    "name": "GHOST_X⁸²⁵⁹",
    "region": "BD"
  },
  {
    "uid": "4205187243",
    "password": "4E99F8087F5D04E746899C6367BF52D47F46B18714E42BD75883BDAB6DD20402",
    "account_id": 13488042938,
    "name": "GHOST_X⁸³⁸⁵",
    "region": "BD"
  },
  {
    "uid": "4205189134",
    "password": "1288E29650152B5475DE189730DA4AD79A74DBC67A1B8DEFE79C77EA8C84311B",
    "account_id": 13488054016,
    "name": "GHOST_X⁶⁸⁴⁸",
    "region": "BD"
  },
  {
    "uid": "4205190302",
    "password": "5375A01E76E5A940135AD408A716D211D04E043E5050B366C51E3147E8D1E657",
    "account_id": 13488058911,
    "name": "GHOST_X⁴⁶⁵⁶",
    "region": "BD"
  },
  {
    "uid": "4205191774",
    "password": "D79F545E57243F96CDF38BE3F3D4BEDF10963C222BF8E7176CF32C06EC00690E",
    "account_id": 13488066285,
    "name": "GHOST_X²⁸⁴⁶",
    "region": "BD"
  },
  {
    "uid": "4205192482",
    "password": "099FE610A502A268052BB4A504D5CDC2B6588D49964754CDDCDC6FACC4655EE0",
    "account_id": 13488071101,
    "name": "GHOST_X⁴⁴⁰",
    "region": "BD"
  },
  {
    "uid": "4205193507",
    "password": "CB388C55BFFFF10B4BE529B8F18670E4D2B10216176F4C082353432837F4891B",
    "account_id": 13488076235,
    "name": "GHOST_X⁷³⁹⁵",
    "region": "BD"
  },
  {
    "uid": "4205195413",
    "password": "D088D876C21E8AEB1FEA80917A818A99B5BEF74DC24CA7A9BD468E4EB98A9BD3",
    "account_id": 13488086094,
    "name": "GHOST_X³⁴⁵¹",
    "region": "BD"
  },
  {
    "uid": "4205196484",
    "password": "208A2C0E7627849CFB05E6C3CEBF1AB8D47B0B907A5A36B9B1460CD57BDB07EF",
    "account_id": 13488092244,
    "name": "GHOST_X⁹²²⁴",
    "region": "BD"
  },
  {
    "uid": "4205197270",
    "password": "BDD89A038482913C7A6ACD8C78A908545DEE8CA8CDBAA59C652CAA588E584BB5",
    "account_id": 13488095110,
    "name": "GHOST_X⁷⁵¹¹",
    "region": "BD"
  },
  {
    "uid": "4205199368",
    "password": "6A5E48410E6D5679EBF2CB7FB0E57AE40D837C5AE26AEDA3E7CA5640E29C5859",
    "account_id": 13488105302,
    "name": "GHOST_X⁷⁹³⁴",
    "region": "BD"
  },
  {
    "uid": "4205199597",
    "password": "FBB4E96BF93B2DAA589A24376607ED75083F29AF270656CC1E8228D9F47CD7A2",
    "account_id": 13488106402,
    "name": "GHOST_X⁴⁷⁰²",
    "region": "BD"
  },
  {
    "uid": "4205200074",
    "password": "E600B7336FB74D306C96AB1ABACD62050A56E328EB46D1F62D9C06EF19F6E687",
    "account_id": 13488109880,
    "name": "GHOST_X⁸⁷⁰⁸",
    "region": "BD"
  },
  {
    "uid": "4205201066",
    "password": "AEE7297680959E2A4D819C28EE76042CCD609EC790A6E1C6BE1C2DE0F053BAFF",
    "account_id": 13488113768,
    "name": "GHOST_X⁸⁸⁰¹",
    "region": "BD"
  },
  {
    "uid": "4205202275",
    "password": "AFA972381CC1DCF76B981975C343CF01F5FC064F846C4A6B1A0698E54BFE4046",
    "account_id": 13488120597,
    "name": "GHOST_X⁷⁶⁹⁵",
    "region": "BD"
  },
  {
    "uid": "4205203653",
    "password": "87192C2E20166DC4D54906066487B122A72E28322272ACA194F8CC7C594DEFA0",
    "account_id": 13488127876,
    "name": "GHOST_X⁵⁰⁰⁸",
    "region": "BD"
  },
  {
    "uid": "4205206397",
    "password": "986B1DD2300FBE23DE2710CC03FE2243BC53155B2A90AFFA84D11C726D2947B5",
    "account_id": 13488141382,
    "name": "GHOST_X²³⁹",
    "region": "BD"
  },
  {
    "uid": "4205207820",
    "password": "D7EA668E7B3CCB3C87506B29058390E95029DCC7EA41CB2A4F90AF829874DBDB",
    "account_id": 13488148630,
    "name": "GHOST_X²⁹⁹",
    "region": "BD"
  },
  {
    "uid": "4205208487",
    "password": "FAF88B81ECBD805A47073BEF396239EEFDF6D7D4E1D9DF13F11F1EC963485123",
    "account_id": 13488152183,
    "name": "GHOST_X⁴⁷⁰⁰",
    "region": "BD"
  },
  {
    "uid": "4205210016",
    "password": "E1641009A5BAC608B8070749D3432E43E2824731676E74E8B35FDFEC8FFEF57A",
    "account_id": 13488160471,
    "name": "GHOST_X¹³¹⁷",
    "region": "BD"
  },
  {
    "uid": "4205210218",
    "password": "496D6ABC461FFF316C8AF7983920AB8B49E8C810416C84348192C252E2546B07",
    "account_id": 13488161688,
    "name": "GHOST_X⁷³⁵⁴",
    "region": "BD"
  },
  {
    "uid": "4205212745",
    "password": "D60E09ACF860A439BA51D3E21D883D9A747E1E16FDCF8558AB83F34E621FCB16",
    "account_id": 13488175522,
    "name": "GHOST_X⁴⁶৩৩",
    "region": "BD"
  },
  {
    "uid": "4205214766",
    "password": "EA43096DA0D36AEBB0215887C036C630A1CEDE2E5D27B94D5C54304D9AB1DDE7",
    "account_id": 13488186956,
    "name": "GHOST_X¹⁴⁰১",
    "region": "BD"
  },
  {
    "uid": "4205215484",
    "password": "900E203A809910518D4C737FC3A5B1C14C45CA502396751277EAD1D2E9A9AAB0",
    "account_id": 13488190201,
    "name": "GHOST_X¹৭৮০",
    "region": "BD"
  },
  {
    "uid": "4205218080",
    "password": "CEB79C9A7E1422B16EEA1EC7BD543F48463E395254A0BDE75892EA2ADC3E2E1C",
    "account_id": 13488203275,
    "name": "GHOST_X৭৭০",
    "region": "BD"
  },
  {
    "uid": "4205240222",
    "password": "7031C3151CCA8CF27B4CF999EDB9B34CDB2A8460DE9E2788F4AAC7D0CB86A3A9",
    "account_id": 13488317644,
    "name": "GHOST_X১৭৭১",
    "region": "BD"
  },
  {
    "uid": "4205241155",
    "password": "FC45F5257D4230A23F52507485EFE818C7BCA93A306EA714E023061AAB32556F",
    "account_id": 13488322221,
    "name": "GHOST_X৮৯০৫",
    "region": "BD"
  },
  {
    "uid": "4205242769",
    "password": "833EE808813CC5A9E0CCCC0DE4A83AA47FA991ED8271AB5D5118AC511E88A83E",
    "account_id": 13488330904,
    "name": "GHOST_X৭৩৮৯",
    "region": "BD"
  },
  {
    "uid": "4205243385",
    "password": "40193096A8A978A3C27DD69B9933FAE420682D0A0097EC804FE8CDBEC096836D",
    "account_id": 13488332708,
    "name": "GHOST_X৪৯৭৮",
    "region": "BD"
  },
  {
    "uid": "4205244758",
    "password": "010492B2DE5A178BB93DDF27B68EDB3E45492354940216868A22AB690D76F2C4",
    "account_id": 13488339885,
    "name": "GHOST_X৪০৫১",
    "region": "BD"
  },
  {
    "uid": "4205245723",
    "password": "C405E037E22F058D2F98F98E91167C4CA412D66D85728C6AC3BF3898D7B75308",
    "account_id": 13488345025,
    "name": "GHOST_X৭০১১",
    "region": "BD"
  },
  {
    "uid": "4205246470",
    "password": "2A1E6D415F55C2AB69FC27AA9CB0EB264656F9ED80DC4BF9BDE55A88F894B74F",
    "account_id": 13488348809,
    "name": "GHOST_X৫৪৭৮",
    "region": "BD"
  },
  {
    "uid": "4205247324",
    "password": "B05A69FCEB00159DF848A09B9B14FC3293A31D0D1939FF6485EAB275632DEE5B",
    "account_id": 13488352696,
    "name": "GHOST_X৮০৩",
    "region": "BD"
  },
  {
    "uid": "4205249431",
    "password": "63EAB8E8D72A872860FD6D9BD536F7D78B8FCD0EDA8D39E09DCF258E19D05781",
    "account_id": 13488362970,
    "name": "GHOST_X৩০৬২",
    "region": "BD"
  },
  {
    "uid": "4205249982",
    "password": "2434C0F041D86056E6E598FBFF124B701A6A953202AC9201F7511E53960D2DC2",
    "account_id": 13488365686,
    "name": "GHOST_X২১৭৭",
    "region": "BD"
  },
  {
    "uid": "4205250400",
    "password": "1908E10C8464BD5F6701616FE763D35E8E1E54AC41A7D3481D7D9D88C71E30DE",
    "account_id": 13488368184,
    "name": "GHOST_X৩০০১",
    "region": "BD"
  },
  {
    "uid": "4205252802",
    "password": "B4E3E7840A06A1E856F6A9456AC47253CC032C2F81B737C8FEBA3F29C40576DF",
    "account_id": 13488380976,
    "name": "GHOST_X৮০৮",
    "region": "BD"
  },
  {
    "uid": "4205253059",
    "password": "CBBD5F672742EF993B1C12C2F5CF7BC3EAC54D44AFECFDFF364D1703C4FB9EBF",
    "account_id": 13488384546,
    "name": "GHOST_X৮৮০৫",
    "region": "BD"
  },
  {
    "uid": "4205254121",
    "password": "BAEFD9CB35CCA8C695180F0DC0D7A57200D16EA65CFB7FAA88E36D9E92776520",
    "account_id": 13488387944,
    "name": "GHOST_X৫০০৫",
    "region": "BD"
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  const { uid, limit } = req.query;

  if (uid) {
    const found = ACCOUNTS.find(a => String(a.uid) === String(uid));
    if (!found) return res.status(404).json({ error: 'not found' });
    return res.status(200).json(found);
  }

  const l = limit ? Math.max(1, Math.min(100, Number(limit))) : ACCOUNTS.length;
  return res.status(200).json(ACCOUNTS.slice(0, l));
}
