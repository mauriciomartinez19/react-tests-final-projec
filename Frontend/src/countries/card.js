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
    width: 250px;
    background-color: ${props => props.showFlag ? 'white' : 'rgb(209, 228, 245)'};
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