import { VFC, memo } from 'react'

const Page404: VFC = memo(() => {
  return (
    <div>
      <p>お探しのページは見つかりませんでした。</p>
      <a href="/">Homeへ戻る</a>
    </div>
  )
})

export default Page404
