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
    border: solid black 2px;
    border-radius:10px;
    width: 250px;
    background-color: ${props => props.showFlag ? 'rgb(255,255,255,0.30)' : 'rgb(209, 228, 245,0.30)'};
    height: 400px;
    transition: 1s;
    transform-style: preserve-3d;
    ${props => !props.showFlag && 'transform: rotateY(180deg);'}
`;

const Flip = styled.div`
    backface-visibility: hidden;
    ${props => !props.showFlag && 'transform: rotateY(180deg);'}
`

export default Card;