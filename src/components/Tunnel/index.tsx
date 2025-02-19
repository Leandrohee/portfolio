import styled from "styled-components";
import { lightTheme } from "../../style/theme";

const TunnelSc = styled.div<TunnelScProps>`
  width: ${({$width})=>($width ? $width : "80px")};
  height: ${({$height})=>($height ? $height : "80px")};
  border-radius: 50px;
  background-color: ${({theme})=> theme.colors.tunnel};
  color: ${({theme})=> theme.colors.primary};
  margin-left: ${({$marginLeft})=>($marginLeft ? $marginLeft : "0px")};
  display: flex;

  .divEsq{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2vw;
    gap: 2vh;
    width: 70%;

    span{
        color: ${({theme}) =>  theme ==  lightTheme ? "white" : "black"};
        font-size: 20px;
    }

    span:last-child{
       font-size: calc(100% - 2px);
    }

  }

  .divDir{
    display: flex;
    justify-content: end;
    padding-right: 2vw;
    align-items: center;
    width: 30%;

    span{
        color: ${({theme}) =>  theme ==  lightTheme ? "white" : "black"};
        font-size: 20px;
    }

  }
`

interface TunnelScProps{
  $width?: string;
  $height?: string;
  $marginLeft?: string;
}

interface TunnelProps{
    width?: string;
    height?: string;
    marginLeft?: string;
    titulo: string;
    funcao: string;
    tempo: string;
}

export default function Tunnel({width,height,marginLeft, titulo, funcao, tempo}: TunnelProps) {
  return (
    <TunnelSc
        $width={width}
        $height={height}
        $marginLeft={marginLeft}
    >
        <div className="divEsq">
            <span >{titulo}</span>
            <span >{funcao}</span>
        </div>
        <div className="divDir">
            <span>{tempo}</span>
        </div>
    </TunnelSc>
  )
}
