import { Link, useParams } from 'react-router-dom'
import { PageTop, useSeo } from '../components/page.jsx'
import { PostCard } from '../components/cards.jsx'
import { ArrowLong } from '../components/icons.jsx'
import { Reveal, SectionHead, Tag } from '../components/ui.jsx'
import { getPost, posts, relatedPosts } from '../data/posts.js'
import NotFound from './NotFound.jsx'

function PostNav({ to, dir }) {
  return (
    <Link to={`/blog/${to.slug}`} className="group flex items-center gap-2.5 text-[15px] leading-6">
      {dir === 'prev' && <ArrowLong size={12} className="-rotate-135 transition-transform group-hover:-translate-x-1" />}
      <span className="hover-line">{dir === 'prev' ? 'Article précédent' : 'Article suivant'}</span>
      {dir === 'next' && <ArrowLong size={12} className="rotate-45 transition-transform group-hover:translate-x-1" />}
    </Link>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const p = getPost(slug)
  useSeo(p ? p.seoTitle : 'Page introuvable | BM Automobile', p?.seoDescription)
  if (!p) return <NotFound />
  const i = posts.indexOf(p)
  const prev = posts[i - 1]
  const next = posts[i + 1]
  const related = relatedPosts(p)

  return (
    <>
      <PageTop />
      <article className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-[15px] text-center">
            <Tag tone="ice">{p.category}</Tag>
            <h1 className="text-[28px] leading-[1.3] font-bold text-navy md:text-[40px]">{p.title}</h1>
            <p className="flex items-center gap-2.5 text-sm leading-5">
              {p.author}
              <span className="size-[3px] rounded-full bg-navy" />
              {p.date}
            </p>
          </Reveal>
          <Reveal y={24} delay={0.1} className="h-[260px] overflow-hidden rounded-3xl md:h-[600px]">
            <img src={p.image} alt={p.title} className="size-full object-cover" />
          </Reveal>
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-10">
            <Reveal><p className="text-[15px] leading-6">{p.excerpt}</p></Reveal>
            <Reveal className="article" dangerouslySetInnerHTML={{ __html: p.body }} />
            <div className="flex items-center justify-between px-2.5">
              {prev ? <PostNav to={prev} dir="prev" /> : <span />}
              {next && <PostNav to={next} dir="next" />}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white pb-5">
          <div className="container-x flex flex-col gap-[30px] md:gap-10">
            <SectionHead badge="À lire aussi" title="Ces articles pourraient vous intéresser" />
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r, k) => (
                <Reveal key={r.slug} delay={k * 0.08}><PostCard p={r} /></Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
