import dynamic from 'next/dynamic'
import { NextPage } from 'next/types'

const SpendPage = dynamic(
  () =>
    import('site/pages/service-page')
) as NextPage

export default SpendPage