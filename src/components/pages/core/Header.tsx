import { useState } from "react";
import { sakuraEng, sakuraEngTitle } from "../../../assets/img"

export default function Header(props: any) {

  const [pageText, setPageText] = useState("");
  props.setPage(pageText);

  return (
    <>
      <div className="flex flex-col top-0 px-[4vw] py-[2vw] z-40 w-[100vw] backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 bg-transparent">

        <div className="w-1/2 flex flex-row justify-start items-center md:items-baseline">
          <a className="m-0 flex-none rounded-full w-16" href="/">
            <img alt="sakura engineering logo" width={"100%"} height={"100%"} src={sakuraEng}
              className="rounded-full"
            />
          </a>
          <a className="w-40 md:w-52 m-0 ml-4 md:pb-1 flex-none" href="/">
            <img alt="sakura engineering title" width={"100%"} height={"100%"}
              src={sakuraEngTitle} />
          </a>
        </div>
      </div>

      <div className="top-0 p-3 sticky border-solid border-y-[1px] border-black z-40 w-[100vw] backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 bg-transparent">
        <ul className="grid grid-flow-col">

          <li>
            <button onClick={() => { setPageText("itDevice") }}
              className="p-2 px-4 rounded-full border-[1px] border-gray-400"
            >
              IT整備
            </button>
          </li>
          <li>
            <button onClick={() => { setPageText("homePage") }}
              className="p-2 px-4 rounded-full border-[1px] border-gray-400"
            >
              HP作成
            </button>
          </li>
          <li>
            {/* <button onClick={() => { setPageText("連絡")}} */}
            <button onClick={()=>{document.location.href="#contact"}}
              className="p-2 px-4 rounded-full border-[1px] border-gray-400"
            >
              ご連絡
            </button>
            
          </li>
        </ul>

      </div>
    </>
  )
}
