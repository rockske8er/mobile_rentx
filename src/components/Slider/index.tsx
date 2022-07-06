import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
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

type ChangeSlideProps = {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

const  Slider = ({ imagesUrl }: Props) => {
  const [indexImageSlide, setindexImageSlide] = useState(0)

  const slideIndexImage = useRef(( info: ChangeSlideProps) => {
    const index = info.viewableItems[0].index!;
    setindexImageSlide(index)
  });

  return (
    <Container>
      <SliderDotsBox>
        {imagesUrl.map((_, index) => (
          <SliderDot key={String(index)} active={index === indexImageSlide} />
        ))}
      </SliderDotsBox>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <SliderWrapper>
            <SliderImage resizeMode={"contain"} source={{ uri: item }} />
          </SliderWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={slideIndexImage.current}
      />
    </Container>
  );
}

export { Slider };
