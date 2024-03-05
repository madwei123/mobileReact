import React, { memo, useEffect } from 'react'
import { useAppSelector, shallowAppEqual, useAppDispatch } from '@/store'
import type { ReactNode, FC } from 'react'
import { Button } from 'antd-mobile'
import { changeMsg } from '@/store/home'
const mammoth = require('mammoth')
type IProps = {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  useEffect(() => {
    mammoth.extractRawText({ path: '../../libs/topic1.docx' }).then((result) => {
      console.log(result.value)
    })
  }, [])
  const { msg } = useAppSelector((state) => {
    return {
      msg: state.homeReducer.msg
    }
  }, shallowAppEqual)

  const dispatch = useAppDispatch()
  function changeMsg1() {
    dispatch(changeMsg('hello ander'))
  }

  return (
    <div>
      <div>home页面</div>
      <div>{msg}</div>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          changeMsg1()
        }}
      >
        点击切换
      </Button>
    </div>
  )
}

export default memo(Home)
