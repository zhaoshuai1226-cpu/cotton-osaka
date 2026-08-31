import type { Category, Maker, ProductWithRelations } from '@/types/catalog';

export const categories: Category[] = [
  { id: 'cat-fabric', name: '生地', name_en: 'Fabric', sort_order: 1 },
  { id: 'cat-yarn', name: '糸', name_en: 'Yarn', sort_order: 2 },
  { id: 'cat-apparel', name: 'アパレル', name_en: 'Apparel', sort_order: 3 },
];

export const makers: Maker[] = [
  {
    id: 'maker-01',
    name: '工房 一',
    name_en: 'Atelier I',
    region: 'Osaka',
    description: '製造者情報は準備中です。',
    established: null,
    specialty: null,
  },
  {
    id: 'maker-02',
    name: '工房 二',
    name_en: 'Atelier II',
    region: 'Osaka',
    description: '製造者情報は準備中です。',
    established: null,
    specialty: null,
  },
  {
    id: 'maker-03',
    name: '工房 三',
    name_en: 'Atelier III',
    region: 'Osaka',
    description: '製造者情報は準備中です。',
    established: null,
    specialty: null,
  },
];

const categoryMap: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.id, c])
);
const makerMap: Record<string, Maker> = Object.fromEntries(
  makers.map((m) => [m.id, m])
);

type RawProduct = Omit<ProductWithRelations, 'category' | 'maker'>;

const rawProducts: RawProduct[] = [
  {
    id: 'prod-01',
    name: '起毛水玉柄ジャガード',
    name_en: 'Brushed Polka-Dot Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '起毛加工を施した水玉柄のジャガード生地。上品な風合いと立体的な表情が特徴。',
    description_en:
      'A brushed polka-dot jacquard fabric with an elegant hand and three-dimensional texture.',
    image_url:
      'https://images.pexels.com/photos/11255285/pexels-photo-11255285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / リネン',
    material_en: 'Wool / Linen',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['グレー', 'ネイビー', 'ベージュ'],
    min_order: '1反 (約25m)',
    featured: true,
    sort_order: 1,
  },
  {
    id: 'prod-02',
    name: 'リネンジャガード生地',
    name_en: 'Linen Jacquard Fabric',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '涼やかなリネン素材のジャガード生地。夏向けの清涼感ある表情が魅力。',
    description_en:
      'A crisp linen jacquard fabric with a cool, refreshing expression ideal for summer.',
    image_url:
      'https://images.pexels.com/photos/11255290/pexels-photo-11255290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'リネン100%',
    material_en: '100% Linen',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['グレー', 'アイボリー'],
    min_order: '1反 (約25m)',
    featured: true,
    sort_order: 2,
  },
  {
    id: 'prod-03',
    name: 'シルク混カラーネップヤーン',
    name_en: 'Silk-Blend Color Nep Yarn',
    category_id: 'cat-yarn',
    maker_id: 'maker-piacele',
    description: 'シルク混の色ネップヤーン。織り・編みにアクセントを与えるファンシー糸。',
    description_en:
      'A silk-blend color nep yarn that adds accent and character to woven and knitted fabrics.',
    image_url:
      'https://images.pexels.com/photos/16514723/pexels-photo-16514723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'シルク / ウール',
    material_en: 'Silk / Wool',
    technique: '撚糸',
    technique_en: 'Yarn twisting',
    colors: ['マルチカラー'],
    min_order: '1kg',
    featured: true,
    sort_order: 3,
  },
  {
    id: 'prod-04',
    name: 'エコシルク100% 冷え対策 五本指インナーソックス',
    name_en: 'Eco-Silk 100% Five-Toe Inner Socks',
    category_id: 'cat-socks',
    maker_id: 'maker-ozaki',
    description: 'エコシルク100%の五本指インナーソックス。冷え対策に最適な一足です。',
    description_en:
      'Eco-silk 100% five-toe inner socks, ideal for keeping warm in cold weather.',
    image_url:
      'https://images.pexels.com/photos/10557895/pexels-photo-10557895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'エコシルク100%',
    material_en: '100% Eco-silk',
    technique: 'ホールガーメント編立',
    technique_en: 'Whole-garment knitting',
    colors: ['ナチュラル', 'ブラック'],
    min_order: '1足',
    featured: true,
    sort_order: 4,
  },
  {
    id: 'prod-05',
    name: 'シルバーリボン入りファンシー',
    name_en: 'Silver Ribbon Fancy Yarn',
    category_id: 'cat-yarn',
    maker_id: 'maker-piacele',
    description: 'シルバーリボンを混ぜ込んだファンシーヤーン。華やかな表情の生地を演出します。',
    description_en:
      'A fancy yarn blended with silver ribbon, creating a gorgeous fabric expression.',
    image_url:
      'https://images.pexels.com/photos/7448413/pexels-photo-7448413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / シルバーリボン',
    material_en: 'Wool / Silver ribbon',
    technique: '撚糸',
    technique_en: 'Yarn twisting',
    colors: ['シルバー', 'グレー'],
    min_order: '1kg',
    featured: false,
    sort_order: 5,
  },
  {
    id: 'prod-06',
    name: '白黒のリボンモール',
    name_en: 'Black & White Ribbon Mole Yarn',
    category_id: 'cat-yarn',
    maker_id: 'maker-piacele',
    description: '白と黒のコントラストが美しいリボンモールヤーン。モダンな表情の生地に。',
    description_en:
      'A ribbon mole yarn with beautiful black-and-white contrast for a modern fabric look.',
    image_url:
      'https://images.pexels.com/photos/11255288/pexels-photo-11255288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / リボン',
    material_en: 'Wool / Ribbon',
    technique: '撚糸',
    technique_en: 'Yarn twisting',
    colors: ['白黒'],
    min_order: '1kg',
    featured: false,
    sort_order: 6,
  },
  {
    id: 'prod-07',
    name: '清涼素材の幾何学柄ジャガード',
    name_en: 'Cool-Material Geometric Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '清涼素材を使用した幾何学柄のジャガード。夏のアパレルに最適です。',
    description_en:
      'A geometric-pattern jacquard made with cool-touch materials, perfect for summer apparel.',
    image_url:
      'https://images.pexels.com/photos/31854096/pexels-photo-31854096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / ラミー',
    material_en: 'Wool / Ramie',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['ブラウン', 'グレー'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 7,
  },
  {
    id: 'prod-08',
    name: '清涼素材の変わり柄ジャガード',
    name_en: 'Cool-Material Novelty Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '清涼素材の変わり柄ジャガード。個性的な表情で差別化を図れます。',
    description_en:
      'A novelty-pattern jacquard with cool-touch materials for a distinctive look.',
    image_url:
      'https://images.pexels.com/photos/11255272/pexels-photo-11255272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / 綿',
    material_en: 'Wool / Cotton',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['ブルー', 'グレー'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 8,
  },
  {
    id: 'prod-09',
    name: 'オーガニックコットン靴下｜ホールガーメント',
    name_en: 'Organic Cotton Socks | Whole-Garment',
    category_id: 'cat-socks',
    maker_id: 'maker-ozaki',
    description: 'オーガニックコットンを使用したホールガーメント靴下。縫い目がなく快適な履き心地。',
    description_en:
      'Whole-garment organic cotton socks with no seams for a comfortable fit.',
    image_url:
      'https://images.pexels.com/photos/6462892/pexels-photo-6462892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'オーガニックコットン100%',
    material_en: '100% Organic Cotton',
    technique: 'ホールガーメント編立',
    technique_en: 'Whole-garment knitting',
    colors: ['ナチュラル', 'グレー', 'ブラック'],
    min_order: '1足',
    featured: true,
    sort_order: 9,
  },
  {
    id: 'prod-10',
    name: '和紙ストール',
    name_en: 'Washi Paper Stole',
    category_id: 'cat-stole',
    maker_id: 'maker-ozaki',
    description: '和紙糸を織り込んだ軽やかなストール。通気性に優れ、四季を通して楽しめます。',
    description_en:
      'A lightweight stole woven with washi paper yarn, breathable and enjoyable across all seasons.',
    image_url:
      'https://images.pexels.com/photos/35150386/pexels-photo-35150386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: '和紙 / リネン',
    material_en: 'Washi paper / Linen',
    technique: '織物',
    technique_en: 'Weaving',
    colors: ['ナチュラル', 'ブラウン'],
    min_order: '1枚',
    featured: true,
    sort_order: 10,
  },
  {
    id: 'prod-11',
    name: '清涼素材の亀甲柄ジャガード',
    name_en: 'Cool-Material Hexagonal Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '清涼素材の亀甲柄ジャガード。伝統文様を現代的にアレンジした一押し生地。',
    description_en:
      'A cool-touch hexagonal-pattern jacquard, a traditional motif given a modern twist.',
    image_url:
      'https://images.pexels.com/photos/34131689/pexels-photo-34131689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / 麻',
    material_en: 'Wool / Hemp',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['マルチ', 'グレー'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 11,
  },
  {
    id: 'prod-12',
    name: '清涼素材の丸玉変わりジャガード',
    name_en: 'Cool-Material Circle Novelty Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '清涼素材の丸玉柄ジャガード。遊び心のある表情が特徴の生地です。',
    description_en:
      'A cool-touch circle-pattern jacquard with a playful, distinctive expression.',
    image_url:
      'https://images.pexels.com/photos/38317548/pexels-photo-38317548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / 綿',
    material_en: 'Wool / Cotton',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['レッド', 'ブラウン'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 12,
  },
  {
    id: 'prod-13',
    name: 'プレミアムウールメリノヤーン',
    name_en: 'Premium Wool Merino Yarn',
    category_id: 'cat-yarn',
    maker_id: 'maker-okajima',
    description: 'SUPER120sメリノウールを使用した高級紡績糸。ハイブランドにも採用される品質。',
    description_en:
      'A premium worsted yarn using SUPER120s merino wool, adopted by high-end brands worldwide.',
    image_url:
      'https://images.pexels.com/photos/7156841/pexels-photo-7156841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'メリノウール100%',
    material_en: '100% Merino Wool',
    technique: '紡績',
    technique_en: 'Worsted spinning',
    colors: ['ナチュラル', 'グレー', 'ブラック', 'ネイビー'],
    min_order: '1kg',
    featured: true,
    sort_order: 13,
  },
  {
    id: 'prod-14',
    name: 'ナチュラルウールソックス',
    name_en: 'Natural Wool Socks',
    category_id: 'cat-socks',
    maker_id: 'maker-nishiguchi',
    description:
      '自然素材の豊かな風合いと洗練されたデザイン。NISHIGUCHI KUTSUSHITAの定番ソックス。',
    description_en:
      'Rich natural material texture and sophisticated design — a NISHIGUCHI KUTSUSHITA staple.',
    image_url:
      'https://images.pexels.com/photos/2228577/pexels-photo-2228577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / ナイロン',
    material_en: 'Wool / Nylon',
    technique: 'リブ編立',
    technique_en: 'Rib knitting',
    colors: ['パープル', 'グレー', 'ブラウン'],
    min_order: '1足',
    featured: true,
    sort_order: 14,
  },
  {
    id: 'prod-15',
    name: 'カラークロッシェソックス',
    name_en: 'Color Crochet Socks',
    category_id: 'cat-socks',
    maker_id: 'maker-nishiguchi',
    description: '色彩豊かなクロッシェ柄のソックス。手編みの温もりを足元に。',
    description_en:
      'Colorful crochet-pattern socks that bring the warmth of handcraft to your feet.',
    image_url:
      'https://images.pexels.com/photos/17542996/pexels-photo-17542996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'コットン / ウール',
    material_en: 'Cotton / Wool',
    technique: 'クロッシェ編立',
    technique_en: 'Crochet knitting',
    colors: ['ピンク', 'マルチ'],
    min_order: '1足',
    featured: false,
    sort_order: 15,
  },
  {
    id: 'prod-16',
    name: 'ウールタータンストール',
    name_en: 'Wool Tartan Stole',
    category_id: 'cat-stole',
    maker_id: 'maker-okajima',
    description: 'ウールを使用したタータンチェックのストール。クラシックな装いに。',
    description_en:
      'A tartan-check stole using wool for a classic, timeless look.',
    image_url:
      'https://images.pexels.com/photos/11255289/pexels-photo-11255289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール100%',
    material_en: '100% Wool',
    technique: '織物',
    technique_en: 'Weaving',
    colors: ['レッド×ブルー', 'グレー×ブラック'],
    min_order: '1枚',
    featured: true,
    sort_order: 16,
  },
  {
    id: 'prod-17',
    name: 'ソフトブランケットストール',
    name_en: 'Soft Blanket Stole',
    category_id: 'cat-stole',
    maker_id: 'maker-tanimoto',
    description: '起毛加工のソフトなストール。贈り物にも喜ばれる上質な仕上がり。',
    description_en: 'A brushed soft-finish stole, a refined gift that delights.',
    image_url:
      'https://images.pexels.com/photos/31034508/pexels-photo-31034508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / カシミヤ',
    material_en: 'Wool / Cashmere',
    technique: '起毛加工',
    technique_en: 'Brushed finish',
    colors: ['ブラウン', 'ベージュ', 'グレー'],
    min_order: '1枚',
    featured: false,
    sort_order: 17,
  },
  {
    id: 'prod-18',
    name: 'エコフィニッシュジャガード',
    name_en: 'Eco-Finish Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-tanimoto',
    description: '環境に配慮したエコフィニッシュ加工を施したジャガード生地。',
    description_en:
      'A jacquard fabric finished with an eco-conscious finishing process.',
    image_url:
      'https://images.pexels.com/photos/14535314/pexels-photo-14535314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / リサイクル素材',
    material_en: 'Wool / Recycled fiber',
    technique: 'ジャガード織 + エコフィニッシュ',
    technique_en: 'Jacquard weave + eco finish',
    colors: ['グレー', 'チャコール'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 18,
  },
  {
    id: 'prod-19',
    name: 'ナチュラルフェルト生地',
    name_en: 'Natural Felt Fabric',
    category_id: 'cat-fabric',
    maker_id: 'maker-okajima',
    description: '羊毛を縮絨したナチュラルフェルト。アパレル・クラフトに幅広く活用。',
    description_en:
      'A natural felt fabric made by fulling wool, versatile for apparel and craft.',
    image_url:
      'https://images.pexels.com/photos/14535315/pexels-photo-14535315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール100%',
    material_en: '100% Wool',
    technique: '縮絨加工',
    technique_en: 'Felting',
    colors: ['グレー', 'ナチュラル'],
    min_order: '1反 (約20m)',
    featured: false,
    sort_order: 19,
  },
  {
    id: 'prod-20',
    name: 'アブストラクトジャガード生地',
    name_en: 'Abstract Jacquard Fabric',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '波打つ幾何学模様のアブストラクトジャガード。個性的なアパレルに。',
    description_en:
      'An abstract jacquard with undulating geometric patterns for striking apparel.',
    image_url:
      'https://images.pexels.com/photos/8168562/pexels-photo-8168562.png?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / ポリエステル',
    material_en: 'Wool / Polyester',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['ブラック×ゴールド'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 20,
  },
  {
    id: 'prod-21',
    name: 'グリーンウェーブジャガード',
    name_en: 'Green Wave Jacquard',
    category_id: 'cat-fabric',
    maker_id: 'maker-piacele',
    description: '緑の波紋が美しいジャガード生地。自然を感じる豊かな表情。',
    description_en:
      'A jacquard with beautiful green wave patterns, evoking nature’s richness.',
    image_url:
      'https://images.pexels.com/photos/8168569/pexels-photo-8168569.png?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'ウール / シルク',
    material_en: 'Wool / Silk',
    technique: 'ジャガード織',
    technique_en: 'Jacquard weave',
    colors: ['グリーン'],
    min_order: '1反 (約25m)',
    featured: false,
    sort_order: 21,
  },
];

const hiddenCategories = new Set(['cat-socks', 'cat-stole']);
const tbaMakers = ['maker-01', 'maker-02', 'maker-03'] as const;

export const products: ProductWithRelations[] = rawProducts
  .filter((p) => !p.category_id || !hiddenCategories.has(p.category_id))
  .slice()
  .sort((a, b) => a.sort_order - b.sort_order)
  .map((p, i) => {
    const maker_id = tbaMakers[i % tbaMakers.length];
    return {
      ...p,
      maker_id,
      category: p.category_id ? (categoryMap[p.category_id] ?? null) : null,
      maker: makerMap[maker_id] ?? null,
    };
  });
