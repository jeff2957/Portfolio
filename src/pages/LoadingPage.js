import React from 'react'
import { Html, useProgress } from 'drei'
import style from './LoadingPage.scss'

export default function LoadingPage() {
  const { progress, loaded } = useProgress();
  return (
    <Html center className={style}>
        <h1 className='loadingText'>{ progress.toFixed(1) }% loaded</h1>
    </Html>
  )
}
