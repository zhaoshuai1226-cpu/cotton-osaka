import { useReveal } from '@/hooks/useReveal';
import { asset } from '@/lib/asset';

interface AboutProps {
  onExplore: () => void;
}

export function About({ onExplore }: AboutProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="bg-bishu-900 text-bishu-100 pt-28 pb-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-light font-light mb-3">
            About Cotton Osaka
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bishu-50 font-light leading-tight">
            大阪から、上質なコットンを。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img
              src={asset("hero-cotton.jpg")}
              alt="Cotton Osaka"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="text-bishu-200 leading-loose font-light text-base">
              Cotton Osakaは、大阪府浪速区を拠点に、上質なコットン製品をお届けするブランドです。
            </p>
            <p className="text-bishu-300 leading-loose font-light text-sm mt-5">
              綿花そのものの風合いを大切に、紡績から仕上げまで、素材の持ち味がそのまま生きるテキスタイルをつくっています。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bishu-700 mb-16 reveal">
          {[
            { num: 'Osaka', label: '大阪府浪速区', en: 'Based in Naniwa' },
            { num: 'Cotton', label: 'プレミアムコットン', en: 'The material' },
            { num: 'Japan', label: '日本製', en: 'Made in Japan' },
            { num: 'Soon', label: '製造者情報は準備中', en: 'Makers coming soon' },
          ].map((stat) => (
            <div key={stat.en} className="bg-bishu-900 p-8 text-center">
              <p className="font-serif-display text-4xl text-accent-light font-light">{stat.num}</p>
              <p className="text-sm text-bishu-200 mt-2 font-light">{stat.label}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-bishu-500 mt-1">
                {stat.en}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mb-16">
          <h3 className="font-serif-display text-2xl text-bishu-50 font-light mb-8 text-center">
            素材から、製品まで
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { ja: '紡績', en: 'Spinning' },
              { ja: '撚糸', en: 'Twisting' },
              { ja: '染色', en: 'Dyeing' },
              { ja: '製織', en: 'Weaving' },
              { ja: '編立', en: 'Knitting' },
              { ja: '整理加工', en: 'Finishing' },
            ].map((proc, i) => (
              <div
                key={proc.en}
                className="border border-bishu-700 p-5 text-center hover:border-accent-light hover:bg-bishu-800 transition-all"
              >
                <span className="font-serif-display text-3xl text-bishu-500 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-bishu-100 mt-2 text-sm">{proc.ja}</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-bishu-500 mt-1">
                  {proc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center">
          <p className="font-serif-display text-2xl text-bishu-200 font-light italic max-w-2xl mx-auto leading-relaxed">
            その人の最高の素材でありたい
          </p>
          <button
            onClick={onExplore}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-accent-light text-bishu-100 hover:bg-accent-light hover:text-bishu-900 transition-all duration-400 text-sm tracking-[0.2em] uppercase font-light"
          >
            製品カタログを見る
          </button>
        </div>
      </div>
    </section>
  );
}
