import React from 'react';

type ImageProps = {
  tabletWebp?: string;
  mobileWebp: string;
  imageClasses?: string;
  desktopWebp: string;
  tabletWidth?: string;
  alt: string;
};

const Image = ({
  tabletWebp,
  mobileWebp,
  imageClasses,
  desktopWebp,
  tabletWidth,
  alt
}: ImageProps) => {
  return (
    <picture>
      <source media='559' srcSet={`${mobileWebp}`} type='image/webp' />
      {tabletWebp && (
        <source
          media={`(max-width: ${tabletWidth ? tabletWidth : '768px'})`}
          srcSet={`${tabletWebp}`}
          type='image/webp'
        />
      )}
      <img
        className={imageClasses}
        src={desktopWebp}
        alt={alt}
        loading='lazy'
      />
    </picture>
  );
};

export default Image;
