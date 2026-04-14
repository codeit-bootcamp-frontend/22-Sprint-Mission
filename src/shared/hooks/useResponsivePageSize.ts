import { RESPONSIVE_PAGE_SIZE } from '@/shared/constants/responsiveSize';
import { useEffect, useState } from 'react';

export function useResponsivePageSize(
  desktopSize: number,
  tabletSize: number,
  mobileSize: number
) {
  const [pageSize, setPageSize] = useState(desktopSize);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= RESPONSIVE_PAGE_SIZE.DESKTOP) {
        setPageSize(desktopSize);
      } else if (width >= RESPONSIVE_PAGE_SIZE.TABLET) {
        setPageSize(tabletSize);
      } else {
        setPageSize(mobileSize);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopSize, tabletSize, mobileSize]);

  return pageSize;
}
