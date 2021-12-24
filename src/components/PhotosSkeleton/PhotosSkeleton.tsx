import React, { FC } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { placeholderBackgroundColor, placeholderHighlightColor } from '_app/constants';
import { SCREEN_WIDTH } from '_app/utils';

export const SkeletonPhotos: FC = () => {
  const SIZE = SCREEN_WIDTH - 60;

  return (
    <SkeletonPlaceholder backgroundColor={placeholderBackgroundColor} highlightColor={placeholderHighlightColor}>
      <SkeletonPlaceholder.Item alignItems="center">
        <SkeletonPlaceholder.Item width={SIZE} height={SIZE} borderRadius={16} marginBottom={28} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item alignItems="center">
        <SkeletonPlaceholder.Item width={SIZE} height={SIZE} borderRadius={16} marginBottom={28} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item alignItems="center">
        <SkeletonPlaceholder.Item width={SIZE} height={SIZE} borderRadius={16} marginBottom={28} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
