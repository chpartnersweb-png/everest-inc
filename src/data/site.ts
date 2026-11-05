export const postalAddress = {
  addressRegion: '千葉県',
  addressLocality: '佐倉市',
  streetAddress: '臼井603',
  addressCountry: 'JP',
};

export const site = {
  name: 'エベレスト株式会社',
  englishName: 'EVEREST',
  phone: '070-2021-6621',
  phoneHref: 'tel:07020216621',
  address: `${postalAddress.addressRegion}${postalAddress.addressLocality}${postalAddress.streetAddress}`,
  businessHours: '不定期',
  closed: '不定休',
  area: '関東',
  parking: '4台',
  license: '441360002077',
  facebook: 'https://www.facebook.com/share/1H6nt2FMzx/?mibextid=wwXIfr',
  map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${postalAddress.addressRegion}${postalAddress.addressLocality}${postalAddress.streetAddress}`),
  setPrice: { min: '25,000', max: '50,000', note: '組み合わせにより価格が異なります。セット内容・在庫・配送費用はお問い合わせください。' },
  warranty: '3ヶ月〜商品により最長1年',
};

export const navigation = [
  { href: '#products', label: '商品について', en: 'PRODUCTS' },
  { href: '#support', label: '配送・設置', en: 'SUPPORT' },
  { href: '#purchase', label: '買取のご案内', en: 'BUY BACK' },
  { href: '#access', label: '店舗情報', en: 'ACCESS' },
];
