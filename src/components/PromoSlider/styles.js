import styled from 'styled-components/native';

export const PromoSliderList = styled.FlatList.attrs({
  // contentContainerStyle: {paddingLeft: 1, paddingRight: 1},
  showsHorizontalScrollIndicator: false,
  bounces: false,
  // horizontal: true,
})`
  background-color: #fff;
  margin-bottom: 10px;
`;

export const PromoSliderItem = styled.View`
  border: 1px solid #ddd;
  border-bottom-width: 3px;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 160px;
  overflow: hidden;
  background-color: #faf6f6;
  margin: 5px;
`;

export const PromoSliderImage = styled.Image`
  width: 100%;
  height: 190px;
`;

export const PromoSliderTitle = styled.View`
  padding: 12px;
`;

export const PromoSliderFooter = styled.View`
  padding: 8px 12px 12px;
  flex-direction: row;
  align-items: center;
`;

export const SeeMoreButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 180px;
`;
