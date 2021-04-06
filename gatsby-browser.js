export const shouldUpdateScroll = ({ routerProps }) => {
  return !(routerProps.location.state?.disableScrollUpdate ?? true);
};
