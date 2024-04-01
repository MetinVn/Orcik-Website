import { Helmet } from "react-helmet";
export const Helmetjs = ({ metaTitle }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
    </Helmet>
  );
};
export default Helmetjs;
