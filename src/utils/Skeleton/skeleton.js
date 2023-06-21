import ContentLoader from 'react-content-loader';

export const GlobalLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 350 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <circle cx="10" cy="20" r="8" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
      <rect x="24" y="15" rx="5" ry="5" width="220" height="10" />
      <rect x="268" y="16" rx="0" ry="0" width="14" height="9" />
      <rect x="295" y="75" rx="0" ry="0" width="14" height="9" />
      <rect x="269" y="75" rx="0" ry="0" width="14" height="9" />
      <rect x="296" y="105" rx="0" ry="0" width="14" height="9" />
      <rect x="269" y="105" rx="0" ry="0" width="14" height="9" />
      <rect x="292" y="16" rx="0" ry="0" width="14" height="9" />
      <rect x="293" y="46" rx="0" ry="0" width="14" height="9" />
      <rect x="268" y="46" rx="0" ry="0" width="14" height="9" />
    </ContentLoader>
  );
};
