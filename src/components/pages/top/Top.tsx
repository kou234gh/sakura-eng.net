import { Main as HomePage } from "./homePage/Main"
import { Main as ItDevice } from "./itDevice/Main"
// import { useState } from "react";
import { motion } from "framer-motion"

export const Top = (props: any) => {

  // const [, setService] = useState("");

  const pageSelect = () => {

    if (props.page === "homePage") {
      return (<HomePage />);
    } else if (props.page === "itDevice") {
      return <ItDevice />;
    }

  }


  return (
    <div className="w-full">
      <h1>私たちについて</h1>
      <p>
        <span>私たちは千葉県柏市にて、</span>
        <span>お店やご家庭がデジタルの恩恵を</span>
        <span>受けることができるよう、</span>
        <br />
        <span>それぞれの目的に合ったサービスを</span><span>提供します。</span>
        <br />
        <span>ご家庭にあるインターネット環境や</span>
        <span>デジタル端末の整備、</span>
        <span>お店のHP制作を行います。</span>
        <span><br /></span>
      </p>
      {/* <h2>特徴</h2>
      <h3>価格</h3>
      <h3>速さ・柔軟性</h3> */}

      <motion.div
        // initial="hidden"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {pageSelect()}
      </motion.div>

      <h2>サービス内容</h2>
      <p>PC使用環境・内部設定代行</p>
      <p>ホームページ作成</p>

    </div>
  )
} 