import {
  Container,
  SliderDotsBox,
  SliderDot,
  SliderWrapper,
  SliderImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

function Slider({ imagesUrl }: Props) {
  return (
    <Container>
      <SliderDotsBox>
        <SliderDot active={true} />
        <SliderDot active={false} />
        <SliderDot active={false} />
        <SliderDot active={false} />
      </SliderDotsBox>

      <SliderWrapper>
        <SliderImage resizeMode={"contain"} source={{ uri: imagesUrl[0] }} />
      </SliderWrapper>
    </Container>
  );
}

export { Slider };
