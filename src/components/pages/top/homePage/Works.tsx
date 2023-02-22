import { WorksPrototype } from '../../../prototype/Works';
import * as mocks from "../../../../assets/img/index"
import * as icons from "../../../../assets/icons/index"

export const Works = () => {
  return (
    <>
      <div className='mt-[8vw]'>
        <h2>My Works</h2>
        <div className='flex flex-col items-center'>

          <WorksPrototype
            titleProp='有限会社 佐久間工業所(開発中)'
            hrefProp={"sakuma-industry.com"}
            githubProp={"sakumaindustry"}
            srcProp={mocks.sakumaindustry}
            toolProp="React, TypeScript, nodeMailer, Tailwind css"
          />

          {/* <Works
              titleProp='Heyjude(開発中)'
              hrefProp='heyjude.wiki'
              srcProp=''
              githubProp={"heyjude"}
              toolProp='Next.js , TypeScript , nodejs , Prisma'
            /> */}

        </div>
      </div>
      <div className='grid grid-cols-1 mt-[1.5rem] mb-[1.5rem]'>
        <div className='flex flex-rows gap-10'>
          <a href="https://github.com/kou234gh"><img width={"40px"} height={"40px"} src={icons.github} alt="github" title="GitHub" /></a>
          <a href="https://twitter.com/kou234t"><img width={"40px"} height={"40px"} src={icons.twitter} alt="twitter" title="twitter" /></a>
        </div>
        <h3>フロントエンド</h3>
        <div className='flex flex-rows gap-5 flex-wrap justify-evenly'>
          <img width={"32px"} height={"32px"} src={icons.css3} alt="css3" title="css3" />
          <img width={"32px"} height={"32px"} src={icons.html5} alt="html5" title="html5" />
          <img width={"32px"} height={"32px"} src={icons.js} alt="js" title="javascript" />
          <img width={"32px"} height={"32px"} src={icons.ts} alt="typescript" title="TypeScript" />
          <img width={"32px"} height={"32px"} src={icons.react} alt="react" title="React" />
          <img width={"64px"} height={"32px"} src={icons.nextJs} alt="nextjs" title="Nextjs" />
          <img width={"32px"} height={"32px"} src={icons.tailwindCss} alt="tailwindCss" title="tailwind CSS" />
          <img width={"32px"} height={"32px"} src={icons.framerMotion} alt="framerMotion" title="framer motion" />



        </div>
      </div>
      <div className='grid grid-cols-1 mt-[1.5rem] mb-[1.5rem]'>
        <h3>バックエンド</h3>
        <div className='flex flex-rows gap-5 flex-wrap justify-evenly'>

          <img width={"32px"} height={"32px"} src={icons.node} alt="node" title="nodejs" />
          <img width={"32px"} height={"32px"} src={icons.java} alt="java" title="Java" />
          <img width={"32px"} height={"32px"} src={icons.python} alt="python" title="Python" />
        </div>
      </div>
      <div className='grid grid-cols-1 mt-[1.5rem] mb-[1.5rem]'>
        <h3>ツール</h3>
        <div className='flex flex-rows gap-5 flex-wrap justify-evenly'>
          <img width={"32px"} height={"32px"} src={icons.linux} alt="linux" title="Linux" />
          <img width={"32px"} height={"32px"} src={icons.windows} alt="windows" title="Windows" />
          <img width={"32px"} height={"32px"} src={icons.npm} alt="npm" title="npm" />
          <img width={"32px"} height={"32px"} src={icons.figma} alt="figma" title="Figma" />
          <img width={"32px"} height={"32px"} src={icons.fontAwesome} alt="fontAwesome" title="Font Awesome" />
          <img width={"32px"} height={"32px"} src={icons.stackOverflow} alt="stackOverflow" title="Stack Overflow" />
          <img width={"32px"} height={"32px"} src={icons.vscode} alt="vscode" title="Visual Studio Code" />
          <img width={"32px"} height={"32px"} src={icons.aws} alt="aws" title="Amazon Web Services" />
          <img width={"32px"} height={"32px"} src={icons.googleCloud} alt="googleCloud" title="Google Cloud" />
          <img width={"32px"} height={"32px"} src={icons.ga4} alt="ga4" title="Google Analytics 4" />
        </div>
      </div>
    </>
  )
}