export type Brand = {
  id: "tential" | "venex" | "red";
  brand: string;
  product: string;
  price: string;
  priceNote: string;
  catchphrase: string;
  position: string;
  positionDetail: string;
  compareFocus: string;
  question: string;
  technology: string;
  technologyDetail: string;
  bestFor: string;
  productUrl: string;
  storeUrl: string;
  aboutUrl: string;
};

export const brands: Brand[] = [
  {
    id: "tential",
    brand: "TENTIAL",
    product: "BAKUNE Dry",
    price: "24,860円",
    priceNote: "長袖Tシャツ・ロングパンツ上下",
    catchphrase: "睡眠時の動きまで考えた、バランス型",
    position: "総合バランス型",
    positionDetail:
      "睡眠用ウェアとしての設計、サイズ展開、シリーズの多さを軸に見たいブランドです。",
    compareFocus: "サイズ展開・寝返りを支える設計・代表セット価格",
    question: "睡眠用ウェアとしての快適さを、価格差より優先するか。",
    technology: "SELFLAME",
    technologyDetail:
      "8種のセラミック鉱石を配合した特殊繊維が、身体から発せられる遠赤外線を輻射します。",
    bestFor: "寝返りのしやすさや、パジャマとしての選択肢を重視したい人",
    productUrl:
      "https://tential.jp/products/bakune-dry-mens-25ss-long-t-shirt-set",
    storeUrl: "https://tential.jp/shop/",
    aboutUrl: "https://tential.jp/features/selflame",
  },
  {
    id: "venex",
    brand: "VENEX",
    product: "STANDARD DRY+",
    price: "36,300円",
    priceNote: "長袖クルーネック・ジョガーパンツ上下",
    catchphrase: "日本製とアフターケアを重視するなら",
    position: "品質・継続利用型",
    positionDetail:
      "価格の安さよりも、日本製モデルや購入後のサポートまで含めて評価したいブランドです。",
    compareFocus: "価格差・日本製・修理サービスの条件・サイズ展開",
    question: "日本製や購入後のサポートを、価格差として許容できるか。",
    technology: "PHT",
    technologyDetail:
      "ナノプラチナなどの鉱物を練り込んだ独自のポリエステル繊維を採用しています。",
    bestFor: "国内縫製や、購入後も長く使えるサポートを重視したい人",
    productUrl: "https://store.venex-j.co.jp/product/detail/65706571",
    storeUrl: "https://store.venex-j.co.jp/page/store",
    aboutUrl: "https://store.venex-j.co.jp/howtoselect/",
  },
  {
    id: "red",
    brand: "ReD",
    product: "ぐっすりパジャマ",
    price: "15,400円",
    priceNote: "長袖プルオーバー・ジョガーパンツ上下",
    catchphrase: "価格を抑えて、日常から始めやすい",
    position: "導入しやすさ型",
    positionDetail:
      "初期費用やカラー展開を重視して、まず日常に取り入れてみたい人が検討しやすいブランドです。",
    compareFocus: "代表セット価格・色展開・薄手生地の特徴",
    question: "まず試しやすさを優先し、薄手の生地感が合うか。",
    technology: "VITALTECH",
    technologyDetail:
      "8つの天然鉱石を練り込んだ約1mmの薄い生地が、遠赤外線を肌へ放出します。",
    bestFor: "初期費用を抑えつつ、上下セットやインナーから試したい人",
    productUrl: "https://www.mtgec.jp/red/shop/g/g1718530102/",
    storeUrl: "https://www.mtgec.jp/red/shop/pages/store.aspx",
    aboutUrl: "https://www.mtgec.jp/red/shop/pages/about.aspx",
  },
];
