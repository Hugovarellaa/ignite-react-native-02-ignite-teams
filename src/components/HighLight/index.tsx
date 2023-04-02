import { HighLightContainer, SubTitle, Title } from "./styles";

interface Props {
  title: string;
  subTitle: string;
}

export function HighLight({ title, subTitle }: Props) {
  return (
    <HighLightContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </HighLightContainer>
  );
}
