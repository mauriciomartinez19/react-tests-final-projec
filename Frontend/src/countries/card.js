import styled from "styled-components"

const Card = ({ showFlag, children }) => {
    return (
        <Country showFlag={showFlag} >
            <Flip showFlag={showFlag}>
                {children}
            </Flip>
        </Country>
    )
}

const Country = styled.section`
    width: 252px;
    background-color: ${props => props.showFlag ? 'rgb(255,255,255,0.30)' : 'rgb(209, 228, 245,0.30)'};
    height: 400px;
    position: relative;
    ${props => !props.showFlag && 'transform: rotateY(180deg);'}
`

const Flip = styled.div`
    border: solid black 2px;
    border-radius:10px;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: 1s;
    transform-style: preserve-3d;
    background: linear-gradient(to bottom, #96f790d9,hsl(222deg 91% 73% / 79%),#f9dede);;
    ${props => !props.showFlag && 'transform: rotateY(180deg);'}
`

export default Card;