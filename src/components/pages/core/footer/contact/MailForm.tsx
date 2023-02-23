// cf)https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m

import { useState } from "react";

export const MailForm = () => {
  const [mailerState, setMailerState] = useState({
    type: "",
    service: "",
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  function handleStateChange(e: any) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log("inputed")
  }

  const submitEmail = async (e: any) => {
    e.preventDefault();
    console.log({ mailerState });
    console.log("submited Email");

    // const response = await fetch("https://api.sakura-eng.net", {
    // ↑2023/02/21削除代入いらない（？）
    await fetch("https://api.sakura-eng.net", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((response: any) => {

        if (!response.ok) {
          // console.error("41行めのエラー")
          console.error('response.ok:', response.ok);
          console.error('esponse.status:', response.status);
          console.error('esponse.statusText:', response.statusText);
          alert("送信に失敗しました。")
          throw new Error(response.statusText);
        }

        alert("メッセージの送信に成功しました")

        response.json();
      })
//        resDate.status が未定義だというエラーをcatchで指摘される。
//       .then(async (response: any) => {
//         let resData: any = await response;
//         console.log("resData.status:", resData)
// 
//         if (resData.status === "success") {
//           alert("メッセージが送信が成功しました。");
// 
//         } else if (resData.status === "fail") {
//           alert("メッセージの送信に失敗しました。");
//         }
//       })
      .then(() => {
        setMailerState({
          type: "",
          service: "",
          name: "",
          email: "",
          tel: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("現在通信エラーが発生しております。");
        console.error("通信に失敗しました。これはcatch内のエラー文です。", error);
      });
  };

  return (
    <div id="contact" className="w-full p-10 border border-black rounded-md">
      <h2>ご連絡</h2>
      <form onSubmit={submitEmail}>
        {/* <form action="fhuehfuehhu" method="POST"> */}
        <fieldset className="grid grid-cols-1 gap-6">

          <label className="flex flex-col items-start">
            <span className="text-base p-2 font-normal">お問い合わせの種類<i className="text-[#c1121f]">（必須）</i></span>
            <select
              className="text-sm h-auto w-full max-w-xs p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md"
              // placeholder=""
              onChange={handleStateChange}
              name="type"
              value={mailerState.type}
              required={true}
            >
              <option value="---こちらから選択してください---">---こちらから選択してください---</option>
              <option value="まずは相談したい">まずは相談したい</option>
              <option value="申し込みをしたい">申し込みをしたい</option>
              <option value="その他のお問い合わせ">その他のお問い合わせ</option>
            </select>
          </label>

          <label className="flex flex-col items-start">
            <span className="text-base p-2 font-normal">ご希望のサービス<i className="text-[#c1121f]">（必須）</i></span>
            <select
              className="text-sm h-auto w-full max-w-xs p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md"
              // placeholder=""
              onChange={handleStateChange}
              name="service"
              value={mailerState.service}
              required={true}
            >
              <option value="---こちらから選択してください---">---こちらから選択してください。---</option>
              <option value="PCやIT周りについて相談したい or 整備を依頼したい">PCやIT周りについて相談したい or 整備を依頼したい</option>
              <option value="お店のホームページについて相談したい or 依頼したい">お店のホームページについて相談したい or 依頼したい</option>
              <option value="迷っている・よくわからない">迷っている・よくわからない</option>
              <option value="その他">その他</option>
            </select>
          </label>


          <label className="flex flex-col items-start ">
            <span className="text-base p-2 font-normal">お名前 or 会社名<i className="text-[#c1121f]">（必須）</i></span>
            <input
              className="w-full max-w-xs text-sm p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md"
              placeholder="例）山田 花子, 株式会社〇〇 山田太郎 "
              onChange={handleStateChange}
              name="name"
              value={mailerState.name}
              required={true}
            />
          </label>

          <label className="flex flex-col items-start">
            <span className="text-base p-2 font-normal">お電話番号<i className="text-[#c1121f]">（必須）</i></span>
            <input
              className="text-sm h-auto  md:w-min p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md"
              placeholder="例）00-0000-0000"
              onChange={handleStateChange}
              name="tel"
              value={mailerState.tel}
            />
          </label>

          <label className="flex flex-col items-start">
            {/* <span className="text-base p-2 font-normal">メールアドレス<i className="text-[#c1121f]">（任意）</i></span> */}
            <span className="text-base p-2 font-normal">メールアドレス</span>
            <input
              className="text-sm h-auto  md:w-min p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md"
              placeholder="example@gmail.com"
              onChange={handleStateChange}
              name="email"
              value={mailerState.email}
              required={true}
            />
          </label>



          <label className="flex flex-col items-start">
            <span className="text-base p-2 font-normal">ご相談内容・ご質問・その他</span>
            <textarea
              className="w-full text-sm h-80 p-3 border-[1px] border-[#999999] rounded-md font-light"
              placeholder="こちらに入力してください。"
              onChange={handleStateChange}
              name="message"
              value={mailerState.message}
            />
          </label>

          {/* <button className="relative max-w-max inline-flex items-center justify-center p-0.5 mt-0 mb-8 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sb-200 to-sb-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200" type="submit">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#ffffff] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">上記の内容で送信する</span>
          </button> */}
          <button type="submit" className="w-[200px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">上記の内容で送信する</button>
        </fieldset>
      </form>
    </div>
  );
}

