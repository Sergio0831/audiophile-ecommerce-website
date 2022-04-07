import React from 'react';

type ImageProps = {
  tabletWebp?: string;
  mobileWebp: string;
  imageClasses?: string;
  desktopWebp: string;
  alt: string;
};

const Image = ({
  tabletWebp,
  mobileWebp,
  imageClasses,
  desktopWebp,
  alt
}: ImageProps) => {
  return (
    <picture>
      <source
        media='(max-width: 559px)'
        srcSet={`${mobileWebp}`}
        type='image/webp'
      />
      {tabletWebp && (
        <source
          media='(max-width: 768px)'
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
