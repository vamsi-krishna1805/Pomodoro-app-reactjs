import styled ,{css} from "styled-components"
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const Tags = () => {

    const {activeTag,setActiveTag} = useContext(StateContext);
    const handleTagClick =(index)=>{
        setActiveTag(index)
    }

  return (
    <TagsContainer>
        {
            ["work","Short Break","Long Break"].map((tag,i)=>
            <Tag onClick={()=>handleTagClick(i)} activeTag={activeTag===i} key={i}>{tag}</Tag>
            )
        }
    </TagsContainer>
  )
}

export default Tags

const TagsContainer = styled.div`
background: ${props=>props.theme.colors.secondary};
height: 5rem;
width: 40rem;
margin:0 auto ;
border-radius: 5rem;
display: flex;
gap: 1rem;
align-items: center;
`;

const Tag =styled.button`
all: unset;
height: 4rem;

flex: 1;
border-radius:5rem ;
text-align: center;
font-size: 1.8rem;
${({activeTag})=>activeTag && css`
background: ${props=>props.theme.colors.primary};
`}

`;

