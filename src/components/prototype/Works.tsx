import { github } from "../../assets/icons"
// import * as mocks from "../../assets/img/index"

interface Props {
  hrefProp: string;
  githubProp? : string;
  srcProp? :string;
  toolProp :string;
  titleProp :string;
};

export const WorksPrototype = ({
  hrefProp,
  githubProp,
  toolProp,
  titleProp,
  srcProp,

}: Props) => {

  return (
    <>
      <h3><a href={`https://${hrefProp}`}>{titleProp}</a></h3>
      <a href={`https://github.com/kou234gh/${githubProp}`}
         className="flex flex-row"
      >
        {toolProp}
        <img 
          width={"25px"} 
          src={github}
          className="ml-[10px]"
          alt="github"  
        />
      </a>
      <img
        // loading='lazy'
        className='w-[70vw]'
        src={srcProp}
        alt={githubProp}
      />
    </>
  )
}